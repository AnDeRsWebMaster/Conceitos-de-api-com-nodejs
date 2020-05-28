const express = require('express')
const { uuid } = require('uuidv4')
const port = 3333

const app = express()

const projects = []

app.use(express.json())
//listar projects
app.get('/projects', (req, res) => {
     const {title} =  req.query
    const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects
    return res.json(results)
})

//criar project
app.post('/project', (req, res) => {
    const { title, owner } = req.body
    const project = { id: uuid(), title, owner }
    projects.push(project)
    return res.json(project)
})

//atualizar project
app.put('/project/:id', (req, res) => {
    const { id } = req.params
    const { title, owner } = req.body

    const projecIndex = projects.findIndex(project => project.id === id)
    if (projecIndex < 0)
    return res.status(400).json({ msg: "project not found...."})
    
    const project = { id, title, owner }
    projects[projecIndex] = project
    return res.json(project)
})

//deleta project
app.delete('/project/:id', (req, res) => {
    const { id } = req.params
   
    const projecIndex = projects.findIndex(project => project.id === id)
    if (projecIndex < 0) {
       return res.status(400).json({ msg: "project not found...." }
        )
    }
    projects.splice(projecIndex,1)
    return res.status(204).send()
})



app.listen(port, () => {
    console.log(`Backend Started - 👌`)
})