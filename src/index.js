import express from '_express@4.17.1@express';
import Apis from './api/index.js'
const app = express();
import mongodb from '_mongodb@3.5.0@mongodb'
const connectUrl = "mongodb://localhost"
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
let server = app.listen(8081, function () {
    console.log(`Your App is running`);
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