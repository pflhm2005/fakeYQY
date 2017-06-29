import Vue from 'vue';
import $ from 'jquery';
import top from '../vue/common/head.vue';
import foot from '../vue/common/foot.vue';
var rootPath = 'http://119.29.243.158:6060',
    rootPath2 = 'http://119.29.243.158:7070/';
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
        // 图片
        picArr: [],
        regionArr: []
    },
    computed: {

    },
    methods: {
        hrefAdd: function(el) {
            var baseUrl = './pag.html?r=';
            for (var i = 0; i < el.length; i++) {
                el[i].href = baseUrl + el[i].id;
            }
        }
    },
    created: function() {
        var v = this;

        $.ajax({
            method: 'post',
            data: '',
            url: '/api/searchData',
            success: function(data) {
                var u = data.data;
                v.hrefAdd(u);
                v.regionArr = u;
            }
        });

        $.ajax({
            method: 'get',
            url: '/api/indexMansionList',
            success: function(data) {
                if (data.success) {
                    var u = data.aaData,
                        l = u.length;
                    for (var i = 0; i < l; i++) {
                        u[i].titlePicture = rootPath + '/mansionImage/' + u[i].titlePicture;
                        u[i].href = './detail.html?id=' + u[i].id;
                    }
                    v.picArr = u;
                }
            },
            error: function() {
                console.log(1);
            }
        });
    }
});