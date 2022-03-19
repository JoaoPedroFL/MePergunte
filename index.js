const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// Estou dizendo para o express usar o EJS como view engine.
app.set('view engine', 'ejs')
// setando as sources
app.use(express.static('public'))
// Traduzindo para uma estrutura Javascript
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Rotas 
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

<<<<<<< HEAD
=======
app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send(`Formulário recebido! <br>Título: ${titulo} <br>Descrição: ${descricao}`)
})

>>>>>>> Front-end
app.listen(8080, ()=> {
    console.log('App rodando')
})
