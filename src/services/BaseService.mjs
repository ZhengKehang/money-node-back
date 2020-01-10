import {dates} from '../utils/index.mjs'
import cheerio from 'cheerio'
import superagent from 'superagent'
import mongodb from 'mongodb'
const connectUrl = "mongodb://localhost"
export default class BaseService {
    constructor() {
        this.dates = dates;
        this.cheerio = cheerio;
        this.superagent = superagent;
        this.mongoClient = mongodb.MongoClient;
        this.connectUrl = connectUrl;
    }
}
