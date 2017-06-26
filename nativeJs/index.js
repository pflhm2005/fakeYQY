import Vue from 'vue';
import top from '../vue/common/head.vue';
import foot from '../vue/common/foot.vue';

new Vue({
    el: '#app',
    components: {
        'top': top,
        'foot': foot,
    },
    data: {
        sear: '',
        region: '',
        type: '',
        area: '',
        price: '',
        items: [{
            'src': './images/tu_0004.png',
            'name': '卓越前海壹号',
            'intro': '前海门户领先商务综合体（南山-前海）'
        }, {
            'src': './images/tu_0006.png',
            'name': '天健创智中心',
            'intro': '前海门户领先商务综合体（南山-前海）'
        }, {
            'src': './images/tu_0005.png',
            'name': '天健创智中心',
            'intro': '前海门户领先商务综合体（南山-前海）'
        }, {
            'src': './images/tu_0007.png',
            'name': '天健创智中心',
            'intro': '前海门户领先商务综合体（南山-前海）'
        }, {
            'src': './images/tu_0001.png',
            'name': '天健创智中心',
            'intro': '前海门户领先商务综合体（南山-前海）'
        }, {
            'src': './images/tu_0002.png',
            'name': '天健创智中心',
            'intro': '前海门户领先商务综合体（南山-前海）'
        }, {
            'src': './images/tu_0003.png',
            'name': '天健创智中心',
            'intro': '前海门户领先商务综合体（南山-前海）'
        }, {
            'src': './images/tu_0008.png',
            'name': '天健创智中心',
            'intro': '前海门户领先商务综合体（南山-前海）'
        }, ]
    },
    computed: {

    },
    methods: {
        getSel: function(id) {
            var e = event.target || event.srcElement;
            if (e.tagName === 'A') {
                var index = e.dataset ? e.dataset.id : e.attributes[1].nodeValue;
                switch (id) {
                    case 0:
                        this.region = index;
                        break;
                    case 1:
                        this.type = index;
                        break;
                    case 2:
                        this.area = index;
                        break;
                    case 3:
                        this.price = index;
                        break;
                }
                this.selReq();
            }
        },
        selReq: function() {

        },
        searReq: function() {
            console.log(this.sear);
        }
    }
});