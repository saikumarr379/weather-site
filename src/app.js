const request = require('request')
const weatherres = require('./utils/utils')
const path= require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicpath= path.join(__dirname,'../public')
const viewspath= path.join(__dirname,'../templetes/views')
const partialpath = path.join(__dirname,'../templetes/partials')

app.use(express.static(publicpath))
app.set('view engine', 'hbs')
app.set('views',viewspath)
hbs.registerPartials(partialpath)

//app.use(express.static(path.join(__dirname, '../public/help.html'))) 
app.get('', (qreq,res)=>{
    res.render('index',{
        abc:'Welcome to page',
        name: 'ABC'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"Provide the address."
        })
    }
    else{
        
            weatherres(req.query.address,(error,data) =>{
                res.send({
                    error: error,
                    data:data,
                    address: req.query.address
                })
                // console.log('Error',error)
                // console.log('Data',data)
        
            })



        // res.send({
        //     forecast: "It's hot out.",
        //     location:"ABC",
        //     address:req.query.address
        //})
    
 
}})


app.get('/about', (qreq,res)=>{
    res.render('about',{ 
        name: 'ABC',
        title: 'About me'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        gethelp: 'doing'
    })
})
app.get('/product',(req,res)=>{
    if(!req.query.search){
     return    res.send({
            error: "Provide the search content"
        })
    }else{
        console.log(req.query.search)
        res.send({
            product:[]
        })

    }

   
})
app.get('/*',(req,res)=>{
    res.send("404 Error page")
})

// app.get('/help',(req,res)=>{
//     // res.sendFile(path.join(__dirname,'../public/help.html'))
//     // res.sendFile(path.join(__dirname, '../public/help.html'))
// })




app.listen(3000,( )=>{
    console.log('server is up on port 3000')
})