
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve HTML and other static files
app.use(express.static(__dirname));

// Health check endpoint
app.get('/health', (req, res) => {
    res.send('Application is running!');
});

// Start server when running this file directly
if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
