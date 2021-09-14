const express = require('express')
const app = express()
const fs = require('fs')
const PastebinAPI = require('pastebin-ts');

app.engine('html', require('ejs').renderFile);
app.set('views', 'pastebin' + '/views');
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/",(req,res,err) => {
    try{
        res.render("form")
    } catch(err){
        console.log(err);
    }
})

app.post("/createfile",(req,res,err) => {
    fs.writeFile('./bongo.txt', req.body.pastetext, err => {
        if (err) {
            console.error(err)
            return
        }
    res.redirect("/pasteit");
    })
});

//Pastebin section

app.get("/pasteit",(req,res,err) => {
    const pastebin = new PastebinAPI({
        'api_dev_key' : 'Your_Developer_Key_Goes_Here',
        'api_user_name' : 'Your_Username_Goes_Here',
        'api_user_password' : 'Your_Password_Goes_Here'
    });

    pastebin
        .createPasteFromFile({
            'file': './bongo.txt',
            'title': 'pastebin-js test'
        })
        .then((data) => {
            // we have succesfully pasted it. Data contains the id
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    })

app.listen(3005);
