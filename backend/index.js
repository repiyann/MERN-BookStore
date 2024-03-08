import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bookRoutes from './routes/bookRoutes.js'

env.config()
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
	console.log(request)
	return response.status(234).send('Welcome to MERN Stack Project')
})

app.use('/books', bookRoutes)
const PORT = 8000
const MongoURL = process.env.SECRET_KEY

mongoose
	.connect(MongoURL)
	.then(() => {
		console.log('Connected to Database!')
		app.listen(PORT, () => {
			console.log(`App is listening to ${PORT}`)
		})
	})
	.catch((error) => {
		console.log(error)
	})
