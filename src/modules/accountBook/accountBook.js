import uuid from 'uuid'
export default class AccountBook {
    /**
     * 创建accountBook实例
     * @param accountBook
     */
    constructor(accountBook){
        this.id = uuid.v1();
        this.uids = accountBook.uids;//共享uid列表
        this.createUid = accountBook.createUid;//创建者uid
        this.name = accountBook.createUid;//账本名
        this.picture = accountBook.picture||null;//账本封面
        this.descript = accountBook.descript||null;//账本描述
        this.shareCode = uuid.v1();//分享码
        this.status = accountBook.status||1;//共享 2、废弃 0、私密 1
        this.createTime = new Date().getTime();
        this.updateTime = null;
    }
}