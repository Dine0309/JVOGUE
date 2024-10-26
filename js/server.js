const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
        user: 'jvogue@gmail.com',
        pass: 'jvogue'
    }
});

app.post('/send-email', (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: 'jvogue@gmail.com',
        to: email,
        subject: 'Checkout Successful!',
        text: 'Thank you for your purchase! You will receive your order confirmation shortly.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent successfully');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
async function sendEmail() {
    const email = "dine9336@gmail.com"; // Replace with actual user email input

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        if (!response.ok) throw new Error('Failed to send email');
        alert("Email sent successfully!");
    } catch (error) {
        alert(error.message);
    }
}
