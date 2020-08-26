import Vue from 'vue'

const filters = {
    fliterWeiyu: function(v) {
        const _data = [
            { id: 133, name: '共享卫浴' },
            { id: 134, name: '独立卫浴' },
            { id: '', name: '不限' },
        ];
        const findList = _data.filter(ele => ele.id == v);
        return findList.length > 0 ? findList[0].name : ''
    },
    fliterSymble: function(v) {
        const _data = [
            { countryId: 134, countryName: 'UK', name: '£' },
            { countryId: 136, countryName: 'AU', name: 'A$' },
            { countryId: 138, countryName: 'US', name: '$' },
        ];
        const findList = _data.filter(ele => ele.countryId == v);
        return findList.length > 0 ? findList[0].name : ''
    }
}

Date.prototype.format = function(fmt) {
    let o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(let k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};


Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});



