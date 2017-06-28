import Vue from 'vue';
import $ from 'jquery';
import top from '../vue/common/head.vue';
import foot from '../vue/common/foot.vue';
import '../nativeJs/page';

new Vue({
    el: '#app',
    components: {
        'top': top,
        'foot': foot,
    },
    data: {
        // 渲染数组
        flPos1: [],
        flPos2: [],
        flPos3: [],
        flArea: ['面积不限', '100m²以下', '100-200m²', '200-300m²', '300-500m²', '500-100m²', '1000m²以上'],
        flSimplePrice: ['单价不限', '50元以下', '50-80元', '80-100元', '100-150元', '150-200元', '200元以上'],
        flTotalPrice: ['总价不限', '0.5万以下', '0.5万-1.5万', '1.5万-3万', '3万-5万', '5万-10万', '10万以上'],
        // 变色
        posIter1: 0,
        posIter2: null,
        posIter3: null,
        areaIter: 0,
        priceIter: 1,
        simplePriceIter: null,
        totalPriceIter: null,
        // 区域二、三级菜单
        flPos2Show: false,
        flPos3Show: false,
    },
    methods: {
        setSel: function(id, index) {
            var baseUrl = '/api/searchData',
                v = this;
            switch (id) {
                case 0:
                    this.posIter1 = index;
                    this.posIter2 = null;
                    this.flPos3Show = false;
                    $.ajax({
                        method: 'get',
                        url: baseUrl + '?id=' + this.flPos1[index].id,
                        success: function(data) {
                            v.flPos2 = data.data;
                            v.flPos2Show = true;
                        }
                    });
                    break;
                case 1:
                    this.posIter2 = index;
                    this.posIter3 = null;
                    $.ajax({
                        method: 'get',
                        url: baseUrl + '?id=' + this.flPos2[index].id,
                        success: function(data) {
                            v.flPos3 = data.data;
                            v.flPos3Show = true;
                        },
                    });
                    break;
                case 2:
                    this.posIter3 = index;
                    break;
                case 3:
                    this.areaIter = index;
                    break;
                case 4:
                    this.simplePriceIter = index;
                    this.totalPriceIter = null;
                    break;
                case 5:
                    this.totalPriceIter = index;
                    this.simplePriceIter = null;
                    break;
            }
        },
    },
    created: function() {
        var v = this;

        $.ajax({
            method: 'post',
            data: '',
            url: '/api/searchData',
            success: function(data) {
                var u = data.data;
                v.flPos1 = u;
            }
        });

        // $.ajax({
        //     method: 'post',
        //     data: '',
        //     url: '/api/mansionList?page=1&pageSize=10',
        //     success: function(data) {
        //         console.log(data);
        //     }
        // });

        $(".pageBox").pageFun({
            interFace: "/api/mansionList?page=1&pageSize=10",
            displayCount: 9,
            maxPage: 5,
            dataFun: function(data) {
                console.log(data);
            },
            pageFun: function(i) {
                console.log(i);
            }
        });
    },
    mounted: function() {

    }
});