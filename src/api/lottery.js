import LotteryService from '../services/LotteryService.js'
import {apis} from "../utils/index.js";
const lotteryService = new LotteryService();
export default {
    insert(app){
        apis.postApi(app,'/lottery/create', (req,res)=>{
            lotteryService.insertPerson(req.body.name).then(resp=>{
                res.send(resp)
            })
        });
    },
    getPersons(app){
        apis.postApi(app,'/lottery/list', function(req, res){
            lotteryService.getPersons(req.body).then(resp=>{
                res.send(resp)
            });
        });
    }
}