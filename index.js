const express = require('express');
const app = express();
const port = 3000;

// Serve static files (such as HTML, CSS, and images) from a directory named "public"
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
