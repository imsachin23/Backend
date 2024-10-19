import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send('<h1>Server is ready</h1>');

});
//get a list of jokes

app.get ('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'this is a joke'
        },
        
        {
            id:3,
            title:'A third joke',
            content:'this is a joke'
        },
        
        {
            id:4,
            title:'A forth joke',
            content:'this is a joke'
        },
        {
            id:5,
            title:'A  fifth joke',
            content:'this is a joke'
        },
        

    ];
    res.send(jokes);
});

const port=process.env.PORT ||4000;

app.listen(port,()=>{
    console.log(`serve at https://localhost:${port}`);
});