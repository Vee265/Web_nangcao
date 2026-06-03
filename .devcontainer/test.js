<<<<<<< HEAD
const express = require('express');
const port = 9000;
const app = express();

// 1. Khởi động server
app.listen(port, () => {
    console.log("port is listening", port);
});

// 2. Định nghĩa API GET /api/test
app.get('/api/test', (req, res) => {
    res.json({
        message: 'Get API in server programming -Remote call procedure',
        date: new Date().toLocaleString('en-US')
    });
});

// 3. Định nghĩa API GET /myget1
app.get('/myget1', (req, res) => {
    res.json({
        thongdiep: 'XIN chao lop N01',
        daptu: 'tu Server'
    });
});

// 4. Định nghĩa API POST /api/post
app.post('/api/post', (req, res) => {
    res.json({
        message: 'This is a POST request!'
    });
});
=======
const express = require ('express')
const port = 9000
const app = express();
            (alisa)express() : express
            import express
app.listen(port , () =>{
    const test = port;
    console.log("port is listening", test);
    

}
>>>>>>> 8f29b3633a81fe663115437d38b88041640d0663
