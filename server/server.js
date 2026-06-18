const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

app.post('/send-sms', (req, res) => {
  // Mock endpoint to simulate successful registration without API keys
  res.json({ success: true, message: 'Registration successful' });
});

app.listen(port, () => {
  console.log(`🚀 Backend server running on http://localhost:${port}`);
});
