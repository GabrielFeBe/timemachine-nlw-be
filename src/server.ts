import 'dotenv/config'
import fastfy from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'
import multipart from '@fastify/multipart'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'path'
const app = fastfy()
// HTTP Methos:GET, POST, PUT, PATCH, DELETE
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})
app.register(multipart)
app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'spacetime',
})
app.register(authRoutes)
app.register(memoriesRoutes)
app.register(uploadRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP server running on htttp://localhost.3333')
  })
