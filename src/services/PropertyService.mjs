import BaseService from './BaseService.mjs'
export default class PropertyService extends BaseService {
    getProperties(req,res){
        global.dbMyMoney.collection("property").find({})
    }
    insertProperty(req,res){
        let propertyOne = {name:"ceshi",number:1000,status:20,remark:"ceshi",isDelete:0,createTime:new Date().getTime(),updateTime:null,rateRules:null};
        global.dbMyMoney.collection("property").insert(propertyOne, function(err, resp) {
            if (err) throw err;
            res.send('success');
        });
    }
}
