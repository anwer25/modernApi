import * as dotenv from 'dotenv'
import app from './server'

dotenv.config()

app.listen(3001, ()=> {console.info('server run on http://localhost:3001')})