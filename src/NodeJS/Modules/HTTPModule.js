const http = require("http");
const fs = require("fs");

// PORT 80 is reserved for HTTP and port 443 is reserved for HTTPS
const PORT = process.env.PORT || 8200; // Define the port number for the server
const HOSTNAME = "localhost"; // Define the hostname for the server
const Home = fs.readFileSync("./index.html", "utf-8");

// Create a server that listens to HTTP requests on port 3000
// it is backend server that can handle HTTP requests and responses
// and it can be used to create web applications, APIs, etc.
// it is a simple server that responds with "Hello World" to any request
const server = http.createServer((req, res, next, error) => {
  // Log the request method and URL to the console
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);

  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body
  // Handle different routes based on the request URL
  if (req.url === "/") {
    return res.end(
      "Welcome to server \nThis is a simple Node.js HTTP server.\n "
    );
  } else if (req.url === "/home") {
    return res.end(Home); // in this we show html file
  } else {
    return res.end("404 Page Not Found"); // if no route is matched
  }

  // next(); // next middleware Callback function if any route or file
});

// Handle errors that may occur during the server operation
server.listen(PORT, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
});

// Start the server and listen on the specified port and hostname
// server.listen(PORT, HOSTNAME, () => {
//   console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
// });
