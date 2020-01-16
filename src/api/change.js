import {apis} from '../utils/index.js'
import ChangeService from '../services/ChangeService.js'
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
        app.get('/change/getListByABId', function(req, res){
            changeService.getChanges(req.body,'ABId');
        });
    },
    getListByPId(app){
        app.get('/change/getListByPId', function(req, res){
            changeService.getChanges(req.body,'PId');
        });
    },
}