const express = require("express")
const app = express()

// Estou dizendo para o express usar o EJS como view engine.
app.set('view engine', 'ejs')

app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome
    let lang = req.params.lang
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Pedro LTDA",
        inscritos: 8000
    })
})

app.listen(8080, ()=> {
    console.log('App rodando')
})
