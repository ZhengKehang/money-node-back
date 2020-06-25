import BaseService from './BaseService.js'

export default class LotteryService extends BaseService {
    insertPerson(name){
        return new Promise((resolve, reject)=>{
            this.dbs.myMoney(this.COLLERCTION.LOTTERY).insertOne({name},function(err, resp) {
                if (err) throw err;
                resolve(resp)
            });
        });
    }
    getPersons(params,type){
        return new Promise((resolve, reject)=>{
            this.dbs.myMoney(this.COLLERCTION.LOTTERY).find().toArray(function(err, resp) {
                if (err) throw err;
                resolve(resp)
            });
        });
    }
}
