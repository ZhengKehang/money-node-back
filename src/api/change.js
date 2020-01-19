import {apis} from '../utils/index.js'
import ChangeService from '../services/ChangeService.js'
import PropertyService from '../services/PropertyService.js'
import changeStatus from "../modules/change/status.js";
const changeService = new ChangeService();
const propertyService = new PropertyService();
export default {
    insert(app){
        apis.postApi(app,'/change/create', (req,res)=>{
            changeService.insertChange(req.body).then(resp=>{
                propertyService.updateProperty({propertyId:resp.propertyId,distance:resp.number,changeStatus:resp.status}).then(result=>{
                    res.send({propertyId:result.id,changeId:resp.id})
                });
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