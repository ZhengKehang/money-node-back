//处理参数，例如解密，校验等
const dealGetReq = function (req) {
};
const dealPostReq = function (req) {
};
export default {
    getApi(app,api,callback){
        return  app.get(api, function(req, res){
            dealGetReq(req);
            callback(req,res)
        });
    },
    postApi(app,api,callback){
        return  app.post(api, function(req, res){
            dealPostReq(req);
            callback(req,res)
        });
    }
}