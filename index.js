const EXPRESS = require("express");
//allows for flash to happen on pug
const flash = require("express-flash");
const PG_PERSISTENCE = require("./lib/pg-persistence");
const ERROR_CATCHER = require("./lib/error-catcher");
//
const SESSION = require("express-session");
//Allows express to connect to database
const STORE = require("connect-loki");

const PORT = 3000;
const app = EXPRESS();
const LokiStore = STORE(SESSION);

//adding PUG support
app.set("views", "./views");
app.set("view engine", "pug");

//for express to find static images and css located in the directory "public"
app.use(EXPRESS.static("public"));
app.use(EXPRESS.urlencoded({extended: false}));

app.use(SESSION({
  // cookie: {
  //   httpOnly: true,
  //   maxAge: 31 * 24 * 60 * 60 * 1000, //31 days in millseconds
  //   path: "/",
  //   secure: false,
  // },
  name: "pantry-app",
  resave: false,
  saveUnintialized: true,
  secret: "potatos can make soba",
  store: new LokiStore({}),
}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.store = new PG_PERSISTENCE(req.SESSION);
  next();
});

app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
})

//home page
app.get("/", (req, res) => {
  res.redirect("/home");//insert pug template here
  //res.render instead of res.send. This method renders the view template file 
});

app.get("/home",
    async (req, res, next) => {
      try {
        let ingredientsList = await res.locals.store.displayAll();
        ingredientsList = await res.locals.store.valuesOf(ingredientsList);

        res.render("lists", {
          ingredientsList,
        });
      } catch(error) {
        next(error)
      }
  }
)

app.post("/home", 
  async (req, res, next) => {

})

app.get("/newMain", (req, res) => {
  // let tester = flash.
  res.render("newMain");
})

//page for entering information for a new ingredient
//will need to produce an error if the ingredient name is not unique
app.post("/newMain", 
  async(req, res, next) => {
    try {
      let name = req.body.nameMain.toLowerCase().trim();
      let verifyUnique = await res.locals.store.isUnique(name)

      if (!verifyUnique) {
        req.flash("error", `${name} already exists in the database.`)
        res.render("newMain", {
          flash: req.flash(),
        })
      } else {
        await res.locals.store.addItem(name);
        req.flash("success", `${name} has been succesfully added!`);
        res.redirect("/home");
      }
    } catch(error) {
      next(error)
    }
});

app.listen(PORT, "localhost", () => {
  console.log(`Listening to port ${PORT}`);
});