const express = require('express');
const app = express();
const PORT = 3000;
const quotes = [
"The only way to do great work is to love what you do. - Steve Jobs",
"Innovation distinguishes between a leader and a follower. - Steve Jobs",
"Stay hungry, stay foolish. - Steve Jobs",
"Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"The way to get started is to quit talking and begin doing. - Walt Disney",
"Life is what happens to you while you're busy making other plans. - John Lennon",
"The purpose of our lives is to be happy. - Dalai Lama"
];

app.listen(PORT,() => {
        console.log(`Server is running on http://localhost:${PORT}`);
})

app.get('/',(req,res)=>{
    res.send('hello');
})
app.get('/about', (req, res) =>{
    res.send("About page");
    res.status(200);
})
app.get('/randomeqoute', (req,res) => {
    res.status(200).send(quotes[Math.floor(Math.random()*quotes.length)]);
})
