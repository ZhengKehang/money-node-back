import PropertyService from '../services/PropertyService.js'
import ChangeService from '../services/ChangeService.js'
import {apis} from "../utils/index.js";
import propertyStatus from '../modules/property/status.js'
const propertyService = new PropertyService();
const changeService = new ChangeService();

export default {
    insert(app){
        apis.postApi(app,'/property/create', (req,res)=>{
            let params = req.body;
            propertyService.insertProperty(params).then(property=>{
                let status = params.status;//资产类型
                params.propertyId = property.id;
                params.status = status>100?100:300;//初始变更类型
                params.propertyStatus = status;
                changeService.insertChange(params).then(change=>{
                    res.send({properId:property.id,changeId:change.id})
                })
            });
        });
    },
    update(app){
        apis.postApi(app,'/property/update', (req,res)=>{
            let params = req.body;
            propertyService.updateProperty(params).then(property=>{
                let changeParams  = {
                    remark:params.remark,
                    number:Math.abs(property.distance),
                    accountBookId:property.accountBookId,
                    propertyId:property.id,
                    createUid:property.createUid,
                    propertyStatus:property.status,
                    status:property.status>100?99:299
                };
                changeService.insertChange(changeParams).then(change=>{
                    res.send({properId:property.id,changeId:change.id})
                })
            });
        });
    },
    getListByABId(app){
        apis.postApi(app,'/property/getListByABId', function(req, res){
            propertyService.getProperties(req.body,'ABId').then(resp=>{
                res.send(resp);
            });
        });
    },
    getPropertyStatus(app){
        apis.postApi(app,'/property/getProperStatus', function(req, res){
            res.send(propertyStatus)
        });
    }
}