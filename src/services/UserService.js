import BaseService from './BaseService.js'
import User from '../modules/user/user.js'
import md5 from 'md5'
export default class UserService extends BaseService{
    /**
     * 用户查询和对比
     * @param loginInfo
     *
     * @returns {Promise<any>}
     */
    login(loginInfo){
        return new Promise((resolve, reject)=>{
            let search = {account:loginInfo.account,password: md5(loginInfo.password)};
            this.dbs.myMoney(this.COLLERCTION.USER).find(search).toArray(function(err, resp) {
                if (err) throw err;
                let user = null;
                let isLogin = false;
                if(resp&&resp.length){
                    isLogin = true;
                    user = resp[0];
                }
                resolve({login:isLogin,user:user});
            });
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
     * @param userParams 处理后的参数
     */
    insertUser(userParams){
        let user = new User(userParams);
        return new Promise((resolve, reject)=>{
            this.dbs.myMoney(this.COLLERCTION.USER).insertOne(user,function(err, resp) {
                if (err) throw err;
                resolve(resp)
            });
        });
    }
}
