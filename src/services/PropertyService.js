import BaseService from './BaseService.js'
export default class PropertyService extends BaseService {
    getProperties(req,res){
    }
    insertProperty(req,res){
        let propertyOne = {name:"ceshi",number:1000,status:20,remark:"ceshi",isDelete:0,createTime:new Date().getTime(),updateTime:null,rateRules:null};
        this.dbs.myMoney(this.COLLERCTION.PROPERTY).insertOne(propertyOne,function(err, resp) {
            if (err) throw err;
            res.send(resp);
        });
    }
}
