import {apis} from '../utils/index.js'
import UserService from '../services/UserService.js'
const userService = new UserService();
export default {
    /**
     * 创建用户
     * @param app
     */
    createUser(app){
        apis.postApi(app,'/user/create', (req,res)=>{
            userService.insertUser(req.body).then(resp=>{
                res.send(resp);
            })
        });
    },
    /**
     * 登录接口
     * @param app
     */
    login(app){
        apis.postApi(app,'/user/login', (req,res)=>{
            userService.login(req.body).then(resp=>{
                res.send(resp);
            })
        });
    }
}