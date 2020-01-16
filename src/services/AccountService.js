import BaseService from './BaseService.js'
import AccountBook from '../modules/accountBook/accountBook.js'
const dealSearch = function (params,type) {
    if(type==='uid'){
        return {uids:eval("/"+params.uid+"/") }
    }
};
export default class AccountService extends BaseService {
    insertAccountBook(accountBookParams){
        let accountBook = new AccountBook(accountBookParams);
        return new Promise((resolve, reject)=>{
            this.dbs.myMoney(this.COLLERCTION.ACCOUNT_BOOK).insertOne(accountBook,function(err, resp) {
                if (err) throw err;
                resolve(resp)
            });
        });
    }
    getAccountBooks(params,type){
        return new Promise((resolve, reject)=>{
            let search = dealSearch(params,type);
            this.dbs.myMoney(this.COLLERCTION.ACCOUNT_BOOK).find(search).toArray(function(err, resp) {
                if (err) throw err;
                resolve(resp)
            });
        });
    }
}
