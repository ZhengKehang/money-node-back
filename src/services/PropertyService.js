import BaseService from './BaseService.js'
import Property from '../modules/property/property.js'
import md5 from "md5";
const dealSearch = function (params,type) {
    if(type==='ABId'){
        return {accountBookId:params.accountBookId }
    }else if(type==='PId'){
        return {id:params.propertyId }
    }
};
export default class PropertyService extends BaseService {
    getProperties(params,type){
        return new Promise((resolve, reject)=>{
            let search = dealSearch(params,type);
            this.dbs.myMoney(this.COLLERCTION.PROPERTY).find(search).toArray(function(err, resp) {
                if (err) throw err;
                resolve(resp)
            });
        });
    }
    insertProperty(propertyParams){
        let property = new Property(propertyParams);
        return new Promise((resolve, reject) => {
            this.dbs.myMoney(this.COLLERCTION.PROPERTY).insertOne(property,function(err, resp) {
                if (err) throw err;
                resolve(resp.ops[0])
            });
        })
    }
    async updateProperty(updateParams){
        let properties = await this.getProperties({propertyId:updateParams.propertyId},'PId');
        let property = properties[0];
        property.distance = Math.abs(property.number - updateParams.number);
        let whereStr = {"id":updateParams.propertyId};  // 查询条件
        let updateStr = {$set: { "number" : updateParams.number }};
        return new Promise((resolve, reject) => {
            this.dbs.myMoney(this.COLLERCTION.PROPERTY).updateOne(whereStr,updateStr,function(err, resp) {
                if (err) throw err;
                resolve(property)
            });
        })
    }
}
