import BaseService from './BaseService.js'
import AccountBook from '../modules/accountBook/accountBook.js'
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
}
