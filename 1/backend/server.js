import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("server is ready")
})

app.get('/api/jokes',(req, res) => {
    const jokes = [
        {
            id:1,
            title: "1 joke",
            content: "this is out first joke"
        },
        {
            id:2,
            title: "2 joke",
            content: "this is out second joke"
        },
        {
            id:1,
            title: "3 joke",
            content: "this is out third joke"
        },
        {
            id:4,
            title: "4 joke",
            content: "this is out fourth joke"
        },
        {
            id:5,
            title: "5 joke",
            content: "this is out fifth joke"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`backend is ready  http://localhost:${port}`)
})