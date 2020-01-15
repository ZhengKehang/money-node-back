import properties from './property.js'
import budgets from './budget.js'
import changes from './change.js'
import users from './user.js'
import accountBooks from './accountBook.js'
let Apis = {};
Object.assign(Apis,budgets);
Object.assign(Apis,users);
Object.assign(Apis,accountBooks);
Object.assign(Apis,properties);
Object.assign(Apis,changes);
export default Apis;