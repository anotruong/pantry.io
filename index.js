const EXPRESS = require("express");
//allows for flash to happen on pug
const FLASH = require("express-flash");
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

app.use(SESSION({
  cookie: {
    httpOnly: true,
    maxAge: 31 * 24 * 60 * 60 * 1000, //31 days in millseconds
    path: "/",
    secure: false,
  },
  name: "ingredient-alternatives-app",
  resave: false,
  saveUnintialized: true,
  secret: "potatos can make soba",
  store: new LokiStore({}),
}));

app.use((req, res, next) => {
  res.locals.store = new PG_PERSISTENCE(req.SESSION);
  next();
});

// Temporary test code
// app.use(async(req, res, next) => {
//   try {
//     await res.locals.store.displayAll();
//     res.send("quitting");
//   } catch(error) {
//     next(error);
//   }
// });

//home page
app.get("/", (req, res) => {
  res.redirect("/home");//insert pug template here
  //res.render instead of res.send. This method renders the view template file 
});

app.get("/home",
    async (req, res, next) => {
      try {
        let ingredients_lists = await res.locals.store.displayAll();
        // let ingre_name = ingredients_lists.map(obj => {
          
        // })
        res.render("lists", {
          ingredientsList: ingredients_lists,
        });
      } catch(error) {
        next(error)
      }
  }
)

app.post("/home", 
  async (req, res, next) => {
    try {
      let ingredient_list = res.locals.store.displayAll();

      res.render("list", {
        ingredientsList: ingredient_list
      });
    } catch (error) {
      next(error);
    }
})



app.listen(PORT, "localhost", () => {
  console.log(`Listening to port ${PORT}`);
});