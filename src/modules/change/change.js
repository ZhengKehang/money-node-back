import uuid from 'uuid'
export default class Change {
    /**
     * 创建change实例
     * @param change
     */
    constructor(change){
        this.id = uuid.v1();//变更记录
        this.accountBookId = change.accountBookId;//账本id
        this.propertyId = change.propertyId;//账本id
        this.remark = change.remark;//备注
        this.number = change.number||0;//金额
        this.createUid = change.createUid||0;//创建者uid
        this.propertyStatus = change.propertyStatus||1;//资产类型 1-100 负债 101-200 存
        this.status = change.status||1;//变更来源类型 收入1-100 支出101-200
        this.createTime = new Date().getTime();
        this.updateTime = null;
    }
}