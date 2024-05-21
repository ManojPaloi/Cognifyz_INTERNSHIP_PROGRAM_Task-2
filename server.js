const express = require('express');
const app = express();
const PORT = 5100;

const formDataStore = [];

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;


    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    const formData = { name, email, message };
    formDataStore.push(formData);

    console.log('Form submitted:', formData);

    res.send(formDataStore);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
