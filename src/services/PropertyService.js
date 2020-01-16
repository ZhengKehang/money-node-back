import BaseService from './BaseService.js'
import Property from '../modules/property/property.js'
import md5 from "md5";
const dealSearch = function (params,type) {
    if(type==='ABId'){
        return {accountBookId:params.accountBookId }
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
                resolve(resp)
            });
        })
    }
}
