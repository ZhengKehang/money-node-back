import BaseService from './BaseService.js'
import User from '../modules/user/user.js'
import md5 from 'md5'
export default class UserService extends BaseService{
    async login(loginInfo,res){
        let search = {account:loginInfo.account,password: md5(loginInfo.password)};
        console.log('search',search);
        this.dbs.myMoney(this.COLLERCTION.USER).find(search).toArray(function(err, resp) {
            if (err) throw err;
            let user = null;
            let isLogin = false;
            if(resp&&resp.length){
                isLogin = true;
                user = resp[0];
            }
            res.send({login:isLogin,user:user})
        });
    }
    /**
     * 获取用户列表
     * @param search 搜索条件
     * @param res
     */
    getUsers(search,res){
    }

    /**
     * 创建用户
     * @param req 处理后的参数
     * @param res
     */
    insertUser(userParams,res){
        let user = new User(userParams);
        this.dbs.myMoney(this.COLLERCTION.USER).insertOne(user,function(err, resp) {
            if (err) throw err;
            res.send(resp);
        });
    }
}
