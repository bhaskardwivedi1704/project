
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
 app.use(express.static(path.join(__dirname, 'public/style1.css')));
const details=require('./schema');

mongoose.connect('mongodb+srv://Project:Bhaskar@cluster0.50avq.mongodb.net/tutorial?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.get('/login', function(req,res){
    res.sendFile(__dirname+'/login.html');
    
})


app.get('/book', function(req,res){
    res.sendFile(__dirname+'/Message.htm','/public/style1.css');
   })

app.post('/status', function(req,res){
    const data=new details({
        _id:new mongoose.Types.ObjectId(),
        name:'Bhaskar',
        email:'bhaskar@gmail.com',
        phone:'9102531319',
        password:'Bhaskar'
    });
    data.save().then((result)=>res.send(result))
    .catch(err=>res.send(err))
})
    

app.listen(9000);