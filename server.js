//pulling in express to creat ehte api server

const express = require('express');
const app = express();

app.use(express.json()); //middleware that parese JSON in the request body\

app.post('/', (req, res)=>{
    const acceptHeader = req.get("Accept");
    console.log(acceptHeader);
    if (acceptHeader){
        res.setHeader("accept", acceptHeader);
    }
    
    const responseBody = {
        acceptHeader: acceptHeader,
        ...req.body
    }
    res.json(responseBody);
    
});
const port = process.env.PORT || 5000;

const server = app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});

module.exports = server; //exports the server for testing purposes
