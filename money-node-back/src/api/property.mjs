import PropertyService from '../services/PropertyService.mjs'
const propertyService = new PropertyService();
export default {
    getList(app){
        app.get('/property/getList', function(req, res){
            propertyService.getProperties(req,res);
        });
    },
    insert(app){
        app.get('/property/insert', function(req, res){
            propertyService.insertProperty(req,res);
        });
    }
}