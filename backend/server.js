const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = require("./Router/router");

const app = express();
const port = 3000;

// Load environment variables from root-level .env file
dotenv.config({ path: path.join(__dirname, "../.env") });




// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(router);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
