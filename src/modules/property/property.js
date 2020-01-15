import uuid from 'uuid'
export default class Property {
    /**
     * 创建资产property实例
     * @param property
     */
    constructor(property){
        this.id = uuid.v1();//资产
        this.accountBookId = property.accountBookId;//账本id
        this.remark = property.remark;//备注
        this.number = property.number||0;//金额
        this.createUid = property.createUid||0;//创建者uid
        this.status = property.status||1;//资产类型 1-100 负债 101-200 存款
        this.createTime = new Date().getTime();
        this.updateTime = null;
    }
}