const express = require('express');
const taskRoutes = require('./src/app/services/routes');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:4200'
    })
)

app.use(express.json())

// app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send("hello")
    // res.sendStatus(500)
    // res.status(404).send("Page not found")
    // res.status(404).json({ message: "Page not found"})
    // res.download("server.js") // will download server.js for the client
    // res.render("index")
    
})

app.use('/api/v1/tasks', taskRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))