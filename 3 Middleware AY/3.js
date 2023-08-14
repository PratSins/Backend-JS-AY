// custom middlewares
import express from "express";

const app = express();
const port = 3000;


/*
app.use((req, res, next)=>{
  console.log("Request method ="+ req.method);
  next();
});
 */
function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});