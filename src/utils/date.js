import moment from 'moment';
export default {
    formatDateTime(val,prop) {
        if(!val){
            return "";
        }
        let datetime = new Date(val.replace(new RegExp('-','g'),'/'));
        return datetime.pattern(prop.format);
    },
    format(dateObj = new Date(), format = 'YYYY-MM-DD HH:mm:ss') {
        return moment(dateObj).format(format);
    }
}