const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./utils/dbConnect.js");
const toolsRoutes = require("./routes/v1/tools.route.js");
const errorHandler = require("./middleware/errorHandler.js");
const port = process.env.PORT || 8000;

//Build in middleware
app.use(cors());
//third party middleware
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// Apply the rate limiting middleware to all requests
// app.use(limiter);

dbConnect();

// app.use(viewCount);

app.use("/api/v1/tools", toolsRoutes);

app.get("/", (req, res) => {
  // console.log("Database Connected");
  // res.send("Hello Database!");
  // res.sendFile(__dirname + "/public/test.html");
  res.render("index.ejs", { id: 1, user: { name: "Mohammad Awlad" } });
});

app.all("*", (req, res) => {
  res.send("No route found");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
