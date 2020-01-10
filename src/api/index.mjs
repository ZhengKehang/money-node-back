import properties from './property.mjs'
import budgets from './budget.mjs'
import changes from './change.mjs'
let Apis = Object.assign({},properties);
Object.assign(Apis,budgets);
Object.assign(Apis,changes);
export default Apis;