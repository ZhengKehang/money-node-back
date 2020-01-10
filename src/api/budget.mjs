export default {
    getBudgets(app){
        app.get('/', function(req, res){
            res.send('hello world')
        });
    }
}