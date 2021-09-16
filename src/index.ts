import express, { request } from 'express'
import { helloWorld } from './routes'

const app= express()

app.get('/', helloWorld)

app.get('/', (request, response)=>{
    response.json({message: 'Hello World'})
})

app.listen(3333, () =>{
    console.log('Servidor Rodando!!')
})