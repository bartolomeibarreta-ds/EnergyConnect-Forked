import express from "express"
const app = express();
const port = 5500;

// Middleware to parse JSON requests
app.use(express.json());

// Define a GET route for the homepage
app.get('/', (req, res) => {
  res.send('Hello from Express.js Server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

// need GET request 