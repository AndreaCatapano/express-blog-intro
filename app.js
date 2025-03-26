const express = require("express");
const post = import(post);
const app = express();
const port = 3000; 


app.get('/', (req, res) => {
    res.send("Server del mio blog");
})

app.listen(port, () => console.log("Example app listening on port:" + port))