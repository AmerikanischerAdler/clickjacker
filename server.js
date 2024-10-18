const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Malicious Execution
app.get('/run-script', (req, res) => {
    exec(process.env.EXEC_CMD, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error}`);
            res.status(500).send('Error executing script');
            return;
        }

        console.log(`Script output: ${stdout}`);
        res.send(stdout);  
    });
});

app.get('/env', (req, res) => {
    const siteUrl = process.env.SITE_URL || 'Site';
    const siteTitle = process.env.SITE_TITLE || 'Title';
    res.json({ siteUrl, siteTitle });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

