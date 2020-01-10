import express from 'express';
import Apis from './src/api/index.mjs'
const app = express();
import mongodb from 'mongodb'
const connectUrl = "mongodb://localhost"

let server = app.listen(8081, function () {
    console.log(`Your App is running`);
});
mongodb.MongoClient.connect(connectUrl,{useUnifiedTopology: true },function (err, db) {
    if (err) throw err;
    global.dbMyMoney = db.db("myMoney");
});
Object.keys(Apis).forEach(key=>{
    Apis[key](app)
});