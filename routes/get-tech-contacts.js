const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/tech-contacts.json');

/* GET tech-contacts.json. */
router.get('/api/get-tech-contacts', (req, res) => {
  // Check if the file exists
  if (fs.existsSync(`${filePath}`)) {
    // Read and parse the file as JSON
    const fileContent = JSON.parse(fs.readFileSync(`${filePath}`, 'utf-8'));
    res.json(fileContent);
  } else {
    res.status(404).send('File not found'); // Added 'File not found' message
  }
});

module.exports = router;
