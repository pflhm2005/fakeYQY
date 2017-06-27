import Vue from 'vue';
import top from '../vue/common/head.vue';
import foot from '../vue/common/foot.vue';
import info from '../vue/common/info.vue';
import orderInfo from '../vue/common/order.vue';

new Vue({
    el: '#app',
    components: {
        'top': top,
        'foot': foot,
        'info': info,
        'orderInfo': orderInfo
    },
});