const express = require("express")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT

app.use(express.json())

app.get("/", (req, res) => {
    res.json({mensagem: 'Rota padrão da API'})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
