const port = 3000,
  express = require("express"),
  app = express();
  chalkAnimation = require('chalk-Animation')

//function that to handle route-specifi request
exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
  console.log("vegis")
};

app.listen(port, () => {
  chalkAnimation.rainbow(`The Express.js server has started and is listening  on port number: ${port}`)
});
//+ middleware function
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  console.log(req.query);
  console.log("MIDDLEWARE");
  next();
});


app.use(
  express.urlencoded({
    extended: false
  })
);//tell express to parse URL encoded data
app.use(express.json());

app.post("/", (req, res) => {//create new post route for home page
  console.log(req.body);//log request body
  console.log(req.query);
  res.send("POST Successful!");
});
