import express from 'express';
import Apis from './api/index.js'
const app = express();
import mongodb from 'mongodb'
const connectUrl = "mongodb://localhost"
import bodyParser from 'body-parser'
import exStatic from 'express-static'
app.use(exStatic('./src/www'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
let server = app.listen(8081, function () {
    console.log(`Your App is runninsuperagentg`);
});
mongodb.MongoClient.connect(connectUrl,{useUnifiedTopology: true },function (err, db) {
    if (err) throw err;
    global.dbMyMoney = db.db("myMoney");
});
Object.keys(Apis).forEach(key=>{
    let item = Apis[key]
    Object.keys(item).forEach(f=>{
        item[f](app)
    })
});
