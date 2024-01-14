const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'client' directory
app.use(express.static("client")); // Adjust the path if your 'client' directory is structured differently

// Middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing application/json
app.use(express.json());

// Require the routes in your application, make sure the path is correct
require("./routes/htmlRoutes")(app);

// Start the server on the defined PORT
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
