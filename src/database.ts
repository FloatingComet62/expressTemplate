import mongoose from 'mongoose'

mongoose.connect(process.env.URI || '', {
  keepAlive: true
})

const database = mongoose.connection

database.on('error', console.error.bind(console, 'connection error: \n'))
database.once('open', ()=> {
  console.log('open')
})

// const PostSchema = new mongoose.Schema({
//   title: String,
//   poster: String,
//   Pfp: Int,
//   createdAt: Date,
//   message: String[],
//   comments:
// })