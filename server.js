const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(cors());

// Create a transporter object using Gmail service (you can use other email services too)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lowamusic1@gmail.com', // Replace with your email
        pass: 'gfsa xpha gazh rkum'    // Replace with your email password (or an App password if using Gmail)
    }
});

// POST route to handle form submission
app.post('/send-message', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Check if any field is missing
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Prepare the email options
    const mailOptions = {
        from: email,
        to: 'lowamusic1@gmail.com',  // Replace with your email address (or where you want to receive the messages)
        subject: `New message from ${name}: ${subject}`,
        text: `You have a new message from ${name} (${email}):
        
        Subject: ${subject}
        Message: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'There was an error sending the email.' });
        }
        // Success response
        res.json({ message: 'Your message has been sent successfully!' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
