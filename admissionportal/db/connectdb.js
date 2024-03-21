const mongoose = require('mongoose')

const liveUrl = 'mongodb+srv://admin:dhruv0127@book-store-db.rwzfc6s.mongodb.net/?retryWrites=true&w=majority&appName=Book-Store-DB'
const connectdb = ()=>{
    return mongoose.connect(liveUrl)
    .then(()=>{
        console.log("Connected Succeessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectdb