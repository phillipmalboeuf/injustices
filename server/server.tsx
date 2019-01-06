import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import { json as jsonparser } from 'body-parser'
import cookieparser from 'cookie-parser'

import { CONF } from '../config'

const server: Application = express()
server.enable('trust proxy')
server.use(cors({origin: CONF('ORIGIN').split(','), credentials: true}))
server.use(jsonparser())
server.use(cookieparser(CONF('SECRET')))
server.use(compression())
server.use(morgan('dev'))


const port = CONF('SERVER_PORT')
server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})