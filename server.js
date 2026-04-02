const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server
const server = http.createServer((req, res) => {

    // Logging with timestamp
    const time = new Date().toLocaleString();
    console.log(`[${time}] ${req.method} ${req.url}`);

    // Serve HTML file
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});