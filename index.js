const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', // Change if your MySQL server is hosted elsewhere
  user: 'root',
  password: 'test123456',
  database: 'exampledb'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// Query the database
connection.query('SELECT * FROM users', (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }

  console.log('Query results:', results);
  console.log('Fields:', fields);
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error ending the connection:', err.stack);
    return;
  }
  console.log('Connection closed.');
});
