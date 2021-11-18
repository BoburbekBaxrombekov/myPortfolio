const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static("assets"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const HomeController = require("./controllers/HomeController")

app.get("/", HomeController.GET)

app.listen(3000, () => console.log("Server is running on port 3000"))