const express = require('express')
const path = require('path')


const app = express();

app.use('/', express.static(path.join('client')))

app.get('*', (req, res)=>{
    res.sendFile(path.resolve('client','index.html'))
})

async function  start(){
    try{
        app.listen(3000, ()=> console.log(`App has been started on ${3000}`))
    }
    catch (e){
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start();