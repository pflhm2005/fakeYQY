import Vue from 'vue';
import swiper from 'swiper';
import $ from 'jquery';
import top from '../vue/common/head.vue';
import foot from '../vue/common/foot.vue';
import info from '../vue/common/info.vue';
import orderInfo from '../vue/common/order.vue';
import list from '../vue/detail/list.vue';

new Vue({
    el: "#app",
    components: {
        'top': top,
        'foot': foot,
        'info': info,
        'list': list,
        'orderInfo': orderInfo
    },
    data: {
        bigPic: ['../images/tu_0001.png',
            '../images/tu_0002.png',
            '../images/tu_0003.png',
            '../images/tu_0004.png',
            '../images/tu_0005.png',
        ],
        test: '123'
    },
    created: function() {

    }
});