const express = require('express');
const port = 9000;
const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log("port is listening", port);
});

app.get('/', (req, res) => {
    res.json({ message: 'Toi ' });
});

app.post('/api/post', (req, res) => { res.json({
message: 'Tôi ' });
});

