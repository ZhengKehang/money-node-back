import {apis} from '../utils/index.js'
import UserService from '../services/UserService.js'
const userService = new UserService();
export default {
    createUser(app){
        apis.postApi(app,'/user/create', (req,res)=>{userService.insertUser(req.body,res)});
    },
    login(app){
        apis.postApi(app,'/user/login', (req,res)=>{userService.login(req.body,res)});
    }
}