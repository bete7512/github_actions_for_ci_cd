/* eslint-disable consistent-return */
// /* eslint-disable import/named */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-console */
// /* eslint-disable import/extensions */
import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json({ limit: '200mb' }))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send({hey:'folks'})
})
app.listen(3000, () => {
  console.log('on the moon')
})
