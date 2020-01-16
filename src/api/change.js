import {apis} from '../utils/index.js'
import ChangeService from '../services/ChangeService.js'
import changeStatus from "../modules/change/status.js";
const changeService = new ChangeService();
export default {
    insert(app){
        apis.postApi(app,'/change/create', (req,res)=>{
            changeService.insertChange(req.body).then(resp=>{
                res.send(resp)
            })
        });
    },
    getListByABId(app){
        apis.postApi(app,'/change/getListByABId', function(req, res){
            changeService.getChanges(req.body,'ABId').then(resp=>{
                res.send(resp)
            });
        });
    },
    getListByPId(app){
        apis.postApi(app,'/change/getListByPId', function(req, res){
            changeService.getChanges(req.body,'PId').then(resp=>{
                res.send(resp)
            });
        });
    },
    getChangeStatus(app){
        apis.postApi(app,'/change/getChangeStatus', function(req, res){
            res.send(changeStatus)
        });
    }
}