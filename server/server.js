const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'client/dist' directory (update if using a build process)
app.use(express.static(path.join(__dirname, "../client")));


// Middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing application/json
app.use(express.json());

// Setup API routes here if you have any
// app.use('/api', apiRoutes);

// Serve the index.html file for all other requests to support SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// Start the server on the defined PORT
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
