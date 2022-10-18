const EXPRESS = require("express");
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
        
        res.render("lists", {
          // Eventually, would like to make the list clickable and show case the alternatives beside it
          ingredientsList,
        });
      } catch(error) {
        next(error)
      }
  }
)

app.post("/home", 
  async (req, res, next) => {
    try {
      let list = await res.locals.store.displayAll();
      let item = req.body.searchItem;
      console.log(`item is ${item}`)

      let result = await res.locals.store.findItemByName(item);
      // console.log(result)
      if (result) {

        res.render("lists", {
          ingredientsList: list,
          altCombo: result,
        })
      } else {
        req.flash("error", `${item} was not found.`)
        res.render("lists", {
          flash: req.flash(),
          ingredientsList: list,
        })
      }
    } catch(error) {
      next(error)
    }
})

//adding ingredient
app.get("/newMain", (req, res) => {
  res.render("newMain");
})

//completed
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

app.get("/newCombo", 
  async(req, res, next) => {
    try {
      let ingredientsList = await res.locals.store.displayAll();

      res.render("combo", {
        ingredientsList
      })
    } catch(error) {
      next(error)
    }
})

//incomplete, won't let me render page now.
app.post("/newCombo", 
  async(req, res, next) => {
    try {
      let primaryList = await res.locals.store.displayAll("main");
      let substitution = '';
      let firstAlt = req.body.firstAlt;
      let secondAlt = req.body.secondAlt;
      let altFor = req.body.altFor;
      let ratio = req.body.ratio;
      let note = req.body.note;
      //check if the numbers are avaliable
      //pass them into pgPersistence
      //log them into the database
      //flash success
      let verifyIds = await res.locals.store.doesIdExist(firstAlt, secondAlt, altFor);
      // console.log(verifyIds);
      // console.log(firstItem, secondItem, primaryItem, ratio, note);

      if(verifyIds === true) {
        let primaryItem = await res.locals.store.findItemById(altFor);

        await res.locals.store.addCombo(firstAlt, secondAlt, altFor, ratio, note);
        req.flash("success", `A new substitution was added to "${primaryItem}"`)
        res.render("combo", {
          flash: req.flash(),
          ingredientsList: primaryList,
        })
      } else {
        req.flash("error", `${verifyIds} is an invalid entry.`);
        res.render("combo", {
          flash: req.flash(),
          ingredientsList: primaryList,
          //leave the previous entry if incorrect in the text box
          // firstAlt,
          // secondAlt,
          // altFor,
          // ratio,
          // note,
        })
      }

    } catch(error) {
      next(error);
    }
})

app.listen(PORT, "localhost", () => {
  console.log(`Listening to port ${PORT}`);
});