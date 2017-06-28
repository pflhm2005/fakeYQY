import Vue from 'vue';
import $ from 'jquery';
import top from '../vue/common/head.vue';
import foot from '../vue/common/foot.vue';
import info from '../vue/common/info.vue';
import orderInfo from '../vue/common/order.vue';
import list from '../vue/detail/list.vue';
import slide from '../vue/common/slide.vue';

var mansionImagePath = 'http://119.29.243.158:6060/mansionImage/',
    roomImagePath = 'http://119.29.243.158:6060/roomImage/';

new Vue({
    el: "#app",
    components: {
        'top': top,
        'foot': foot,
        'info': info,
        'list': list,
        'orderInfo': orderInfo,
        'slide': slide
    },
    data: {
        maskIter: false,
        dataPic: [],
        totalData: {
            // 大厦名字
            name: '',
            // 价格范围
            scopePrice: '',
            // 更新时间
            updateTime: '',
            // 预约人数
            appiontCount: '',
            // 区
            city: '',
            // 均价
            avgPrice: '',
            // 周边大厦
            around: [],
            // 大图
            mansionPictures: [],

            // 大厦列表组件数据
            countRooms: [],
            roomPictures: [],
            rooms: [],

        },
        // 大厦简介
        Info: ''
    },
    computed: {
        len: function() {
            return this.totalData.mansionPictures.length;
        }
    },
    methods: {
        maskShow: function() {
            this.dataPic = this.totalData.mansionPictures;
            this.maskIter = true;
        },
        maskHide: function() {
            this.maskIter = false;
        },
    },
    created: function() {
        var v = this;
        var id = window.location.href.split('?')[1].split('=')[1];
        $.ajax({
            method: 'post',
            data: '',
            url: '/api/mansionDetails?id=' + id,
            success: function(u) {
                var i;
                // a标签链接修正
                for (i = 0; i < u.around.length; i++) {
                    u.around[i].href = './detail.html?id=' + u.around[i].id;
                }

                // 大图片路径修正
                for (i = 0; i < u.mansionPictures.length; i++) {
                    u.mansionPictures[i] = mansionImagePath + u.mansionPictures[i];
                }

                // list.vue图片路径修正
                for (i = 0; i < u.roomPictures.length; i++) {
                    u.roomPictures[i] = roomImagePath + u.roomPictures[i];
                }
                for (i = 0; i < u.rooms.length; i++) {
                    u.rooms[i].roomPicture = roomImagePath + u.rooms[i].roomPicture;
                }

                v.totalData = u;

                var map = new BMap.Map("pos_img");

                var point = new BMap.Point(u.longitude, u.latitude);
                map.centerAndZoom(point, 16);

                var marker = new BMap.Marker(point);
                map.addOverlay(marker);

                map.enableScrollWheelZoom();
                map.enableKeyboard();

                console.log(u);
            }
        });

        $.ajax({
            method: 'get',
            url: '/api/mansionSummary?id=' + id,
            success: function(u) {
                v.Info = u;
            }
        })
    }
});