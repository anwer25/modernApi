import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'

const app = express()

/**
 * 
 * middleware
 * 
 */

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


/**
 * 
 * routes
 */
app.use('/api', protect,router)

export default app