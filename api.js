const express=require('express');
const app=express();

app.set('view engine','ejs');
app.use(express.static('./public'));
const url='https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Tbilisi';
const joke_url='https://official-joke-api.appspot.com/random_joke';

app.get('/',(req,res)=>{
    async function getdata(){
    const joke_response= await fetch(joke_url);
    const joke_data=await joke_response.json();
    console.log(joke_data);
     res.render(__dirname +'/api',{joke_request:JSON.stringify(joke_data.setup),joke_answer:JSON.stringify(joke_data.punchline)});

}

     getdata();

})
app.listen(5000);