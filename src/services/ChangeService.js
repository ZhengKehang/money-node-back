import BaseService from './BaseService.js'
import Change from '../modules/change/change.js'
const dealSearch = function (params,type) {
    if(type==='PId'){
        return {propertyId:params.propertyId }
    }else if(type==='ABId'){
        return {accountBookId:params.accountBookId }
    }
};
export default class AccountService extends BaseService {
    insertChange(changeParams){
        let change = new Change(changeParams);
        return new Promise((resolve, reject)=>{
            this.dbs.myMoney(this.COLLERCTION.CHANGE).insertOne(change,function(err, resp) {
                if (err) throw err;
                resolve(resp.ops[0])
            });
        });
    }
    getChanges(params,type){
        return new Promise((resolve, reject)=>{
            let search = dealSearch(params,type);
            this.dbs.myMoney(this.COLLERCTION.CHANGE).find(search).toArray(function(err, resp) {
                if (err) throw err;
                resolve(resp.ops[0])
            });
        });
    }
}
