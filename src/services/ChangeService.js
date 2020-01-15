import BaseService from './BaseService.js'
import Change from '../modules/change/change.js'
export default class AccountService extends BaseService {
    insertChange(changeParams){
        let change = new Change(changeParams);
        return new Promise((resolve, reject)=>{
            this.dbs.myMoney(this.COLLERCTION.CHANGE).insertOne(change,function(err, resp) {
                if (err) throw err;
                resolve(resp)
            });
        });
    }
}
