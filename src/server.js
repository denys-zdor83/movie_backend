import express from "express";

// Import routes
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

// API Routes. Here we apply our routes. Do it for each individual route
app.use("/movies", movieRoutes);

const PORT = 5001;

// The callback function will run whenever this server successfully
// initiates on this port
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
})