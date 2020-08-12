const port = 3000,
  express = require("express"),
  app = express();
  chalkAnimation = require('chalk-Animation')


app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
  chalkAnimation.radar(`The Express.js server has started and is listening  on port number: ${port}`)
});
//next is the middleware funciton
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});
