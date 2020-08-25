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


Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});



