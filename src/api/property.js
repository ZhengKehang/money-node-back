import PropertyService from '../services/PropertyService.js'
import {apis} from "../utils/index.js";
const propertyService = new PropertyService();
export default {
    getListByABId(app){
        app.get('/property/getListByABId', function(req, res){
            propertyService.getProperties(req.body,'ABId');
        });
    },
    insert(app){
        apis.postApi(app,'/property/create', (req,res)=>{
            propertyService.insertProperty(req.body).then(resp=>{
                res.send(resp);
            })
        });
    }
}