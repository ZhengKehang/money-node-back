import PropertyService from '../services/PropertyService.js'
import {apis} from "../utils/index.js";
const propertyService = new PropertyService();
export default {
    getList(app){
        app.get('/property/getList', function(req, res){
            propertyService.getProperties(req);
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