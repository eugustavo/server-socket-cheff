import 'dotenv/config'

import express from 'express'
import http from 'node:http'
import { Server } from 'socket.io'
import cors from 'cors'

import { routes } from './routes'

const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(
  cors({
    origin: '*',
  })
)
routes(app)

const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  allowEIO3: true,
})

export { serverHttp, io }
