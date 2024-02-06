import fastify from 'fastify'
import dotenv from 'dotenv'
import { createPoll } from './routes/create-poll'

dotenv.config()

const app = fastify()
app.register(createPoll)

const port = process.env.PORT || 3333


app.listen({ port: +port }).then(() => {
    console.log(`HTTP server running | http://localhost:${port}`)
})