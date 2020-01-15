import properties from './property.js'
import budgets from './budget.js'
import changes from './change.js'
import users from './user.js'
let Apis = Object.assign({},properties);
Object.assign(Apis,budgets);
Object.assign(Apis,changes);
Object.assign(Apis,users);
export default Apis;