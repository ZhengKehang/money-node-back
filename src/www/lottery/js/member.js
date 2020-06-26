
var getMembers = function () {
    return new Promise((resolve, reject) => {
        const url = 'http://120.26.131.106:8081/'
        $.post(`${url}lottery/list`,{},(resp)=>{
            resp = JSON.parse(resp)
            let list =  resp.map((item,index) => {
                return {
                    name: item.name,
                    phone: `No.${index}`
                }
            })
            console.log('list',list)
            resolve(
                list
            )
        })
    })
}
