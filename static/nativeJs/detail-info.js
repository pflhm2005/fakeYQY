import Vue from 'vue';
import $ from 'jquery';
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
    data: {
        Info: [],
    },
    methods: {

    },
    computed: {

    },
    created: function() {
        var v = this,
            url = window.location.href;
        var id = url.split('?')[1] ? url.split('?')[1].split('=')[1] : '';
        $.ajax({
            method: 'get',
            url: '/api/mansionSummary?id=' + id,
            success: function(u) {
                v.Info = u;
            }
        });
    }
});