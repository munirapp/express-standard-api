import app from './app'

// Listen and running server
app.listen(process.env.SERVER_PORT, () => {
	console.log(`Running express on port ${process.env.SERVER_PORT}`)
})
