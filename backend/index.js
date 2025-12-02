import express from "express";
import mysql from "mysql2";
const app = express();
const port = 5500;

// Middleware to parse JSON requests
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: 'cscpeboy12',  
  database: 'energyfm_cms'   
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Define a GET route for the homepage
app.get('/', (req, res) => {
  res.send('Hello from Express.js Server!');
});

// Define a GET route to fetch data from MySQL
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM Day_Type'; // replace with your table name
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results); // send MySQL data as JSON
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});