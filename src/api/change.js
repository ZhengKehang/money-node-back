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
    }
}