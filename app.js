const express = require('express');
const app = express();
var path = require('path');
app.listen(8088);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.use((req,res) => {
    res.sendFile(path.join(__dirname + '/404.html'));
})