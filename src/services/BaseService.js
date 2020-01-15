import {dates,dbs} from '../utils/index.js'
import collection from '../modules/collection.js'
import cheerio from 'cheerio'
import superagent from 'superagent'
import mongodb from 'mongodb'
export default class BaseService {
    constructor() {
        this.dates = dates;
        this.dbs = dbs;
        this.cheerio = cheerio;
        this.superagent = superagent;
        this.mongoClient = mongodb.MongoClient;
        this.COLLERCTION = collection;
    }
}
