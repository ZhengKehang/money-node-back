import uuid from 'uuid'
import md5 from 'md5'
export default class User {
    constructor(user){
        this.id = uuid.v1();
        this.account = user.account;
        this.password = md5(user.password);
        this.name = user.name;
        this.age = user.age||null;
        this.sex = user.sex||null;
        this.status = user.status||0;//用户权限
        this.remark = user.remark||null;
        this.avatar = user.avatar||null;
        this.isDelete = 0;
        this.createTime = new Date().getTime();
        this.updateTime = null;
    }
}