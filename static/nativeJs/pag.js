import Vue from 'vue';
import $ from 'jquery';
import top from '../vue/common/head.vue';
import foot from '../vue/common/foot.vue';
require('../js/jquery.pagination');

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
        // 非区域筛选数组
        flA: [
            [-1, -1],
            [-1, 100],
            [100, 200],
            [200, 300],
            [300, 500],
            [500, 1000],
            [1000, -1],
        ],
        flPrice: [
            [
                [-1, -1],
                [-1, 50],
                [50, 80],
                [80, 100],
                [100, 150],
                [150, 200],
                [200, -1],
            ],
            [
                [-1, -1],
                [-1, 0.5],
                [0.5, 1.5],
                [1.5, 3],
                [3, 5],
                [5, 10],
                [10, -1],
            ]
        ],
        // 变色
        posIter1: 0,
        posIter2: null,
        posIter3: null,
        areaIter: 0,
        priceTypeIter: 0,
        simplePriceIter: 0,
        totalPriceIter: 0,
        // 区域二、三级菜单
        flPos2Show: false,
        flPos3Show: false,
        list: [],
        // 是否有筛选信息
        noData: false
    },
    computed: {
        ajaxData: function() {
            var priceIndex = this.priceTypeIter === 0 ? this.simplePriceIter : this.totalPriceIter;
            return {
                'region': this.flPos1[this.posIter1].id,
                'street': this.flPos2[this.posIter2] ? this.flPos2[this.posIter2].id : -1,
                'community': this.flPos3[this.posIter3] ? this.flPos3[this.posIter3].id : -1,
                'minArea': this.flA[this.areaIter][0],
                'maxArea': this.flA[this.areaIter][1],
                'type': this.priceTypeIter,
                'minPrice': this.flPrice[this.priceTypeIter][priceIndex][0],
                'maxPrice': this.flPrice[this.priceTypeIter][priceIndex][1],
            };
        }
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
            console.log(this.ajaxData);
            $.ajax({
                method: 'post',
                url: '/api/mansionList?page=1&pageSize=9',
                data: this.ajaxData,
                success: function() {

                }
            })
        },
        ImgModifier: function(el, key, iter) {
            var ImagePath = iter ? 'http://119.29.243.158:6060/mansionImage/' : 'http://119.29.243.158:6060/roomImage/';
            for (var i = 0; i < el.length; i++) {
                el[i][key] = ImagePath + el[i][key];
            }
        },
        hrefModifier: function(el, iter, key) {
            var baseUrl = iter ? './detail.html?id=' : './detail-info.html?id=';
            for (var i = 0; i < el.length; i++) {
                if (key) {
                    for (var j = 0; j < el[i][key].length; j++) {
                        el[i][key][j].href = baseUrl + el[i][key][j].id;
                    }
                } else {
                    el[i].href = baseUrl + el[i].id;
                }
            }
        },
        init: function(u) {
            this.ImgModifier(u, 'titlePicture', true);
            this.hrefModifier(u, true);
            this.hrefModifier(u, false, 'rooms');
            this.list = u;
        }
    },
    created: function() {
        var v = this,
            params = window.location.href.split('?');

        var id = params[1] ? params[1].split('=')[1] : '';
        $.ajax({
            method: 'post',
            data: '',
            url: '/api/searchData',
            success: function(data) {
                var u = data.data;
                v.flPos1 = u;
            }
        });

        $.ajax({
            method: 'post',
            data: {
                'region': id,
                'type': 0
            },
            url: '/api/mansionList?page=1&pageSize=9',
            success: function(data) {
                $('.M-box').pagination({
                    totalData: data.total,
                    showData: 9,
                    callback: function(api) {
                        var index = api.getCurrent();
                        $.ajax({
                            method: 'get',
                            url: '/api/mansionList?page=' + index + '&pageSize=9',
                            success: function(data) {
                                if (data.success) {
                                    v.noData = false;
                                    v.init(data.aaData);
                                } else {
                                    v.noData = true;
                                }
                            }
                        });
                    }
                }, function(api) {
                    if (data.success) {
                        v.init(data.aaData);
                    } else {
                        v.noData = true;
                    }
                });
            }
        });
    },
    mounted: function() {

    }
});