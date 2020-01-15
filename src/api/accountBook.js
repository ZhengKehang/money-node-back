import AccountService from '../services/AccountService.js'
import {apis} from "../utils/index.js";
const accountService = new AccountService();
export default {
    insert(app){
        apis.postApi(app,'/accountBook/create', (req,res)=>{
            accountService.insertAccountBook(req.body).then(resp=>{
                res.send(resp);
            })
        });
    }
}