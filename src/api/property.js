import PropertyService from '../services/PropertyService.js'
import {apis} from "../utils/index.js";
const propertyService = new PropertyService();
export default {
    insert(app){
        apis.postApi(app,'/property/create', (req,res)=>{
            propertyService.insertProperty(req.body).then(resp=>{
                res.send(resp);
            })
        });
    },
    getListByABId(app){
        apis.postApi(app,'/property/getListByABId', function(req, res){
            propertyService.getProperties(req.body,'ABId').then(resp=>{
                res.send(resp);
            });
        });
    }
}