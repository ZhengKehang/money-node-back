import BaseService from './BaseService.js'
import Property from '../modules/property/property.js'
export default class PropertyService extends BaseService {
    getProperties(req){
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
