import fastify from 'fastify'
import dotenv from 'dotenv'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import cookie from '@fastify/cookie'

dotenv.config()

const app = fastify()

app.register(cookie, {
    secret: "@Eej39ejwi9",
    hook: 'onRequest',
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

const port = process.env.PORT || 3333


app.listen({ port: +port }).then(() => {
    console.log(`HTTP server running | http://localhost:${port}`)
})