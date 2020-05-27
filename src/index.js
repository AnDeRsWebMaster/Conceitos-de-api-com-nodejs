const express = require('express')
const port = 3333

const app = express()

app.get('/',(req,res) =>{
return res.json({msg:'Anders agora vai com fé em Deus...'})
})

app.listen(port,() =>{
    console.log(`Backend Started - 👌`)
})