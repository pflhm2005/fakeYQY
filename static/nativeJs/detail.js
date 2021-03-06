import Vue from 'vue';
import $ from 'jquery';
import top from '../vue/common/head.vue';
import foot from '../vue/common/foot.vue';
import info from '../vue/common/info.vue';
import orderInfo from '../vue/common/order.vue';
import list from '../vue/detail/list.vue';
import slide from '../vue/common/slide.vue';

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
        regStateObj: {
            state: false,
            phone: ''
        },
        idObj: {
            mansionId: ''
        },
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
        Info: '',
        picNameArr: ['mansionPictures', 'roomPictures'],
        slideIter: 0,
    },
    computed: {
        len: function() {
            return this.totalData.mansionPictures.length;
        },
        slideStyle: function() {
            return 'transform:translate(' + -this.slideIter * 230 + 'px)';
        },
        arroundLen: function() {
            return this.totalData.around.length;
        },
    },
    methods: {
        maskShow: function(index, type) {
            this.dataPic = this.totalData[this.picNameArr[type]];
            this.dataPic.index = index;
            this.maskIter = true;
        },
        maskHide: function() {
            this.maskIter = false;
        },
        ImgModifier: function(el, key, pathIter, ObjKey) {
            var ImagePath = pathIter ? 'http://119.29.243.158:6060/mansionImage/' : 'http://119.29.243.158:6060/roomImage/';
            for (var i = 0; i < el[key].length; i++) {
                if (ObjKey) {
                    el[key][i][ObjKey] = ImagePath + el[key][i][ObjKey];
                } else {
                    el[key][i] = ImagePath + el[key][i];
                }
            }
        },
        hrefModifier: function(el, key, id) {
            var baseUrl = './detail-info.html?mansionId=';
            for (var i = 0; i < el[key].length; i++) {
                el[key][i].href = baseUrl + id + '&roomId=' + el[key][i].id;
            }
        },
        scroll: function(iter) {
            switch (iter) {
                case 1:
                    $('body').animate({ scrollTop: $('#buildingIntro')[0].offsetTop + 'px' }, 500);
                    break;
                case 2:
                    $('body').animate({ scrollTop: $('#buildingSur')[0].offsetTop + 'px' }, 500);
                    break;
            }
        },
        changeState: function(u, s) {
            this.regStateObj.phone = u;
            this.regStateObj.state = s;
        },
        next: function() {
            this.slideIter++;
        },
        prev: function() {
            this.slideIter--;
        },
    },
    created: function() {
        var v = this,
            url = window.location.href;
        var id = url.split('?')[1] ? url.split('?')[1].split('=')[1] : '';
        this.idObj.mansionId = id;
        $.ajax({
            method: 'post',
            data: '',
            url: '/api/mansionDetails?id=' + id,
            success: function(u) {
                var i;

                document.title = '园区云，' + u.name;

                // a标签链接修正
                for (i = 0; i < u.around.length; i++) {
                    u.around[i].href = './detail.html?id=' + u.around[i].id;
                }

                // 大图片路径修正
                v.ImgModifier(u, 'mansionPictures', true);

                // list.vue图片路径修正
                v.ImgModifier(u, 'roomPictures', false);
                v.ImgModifier(u, 'rooms', false, 'roomPicture');
                v.ImgModifier(u, 'around', true, 'titlePicture')

                // list.vue跳转路径添加
                v.hrefModifier(u, 'rooms', id);

                v.totalData = u;

                var map = new BMap.Map("pos_img");

                var point = new BMap.Point(u.longitude, u.latitude);
                map.centerAndZoom(point, 16);

                var marker = new BMap.Marker(point);
                map.addOverlay(marker);

                map.enableScrollWheelZoom();
                map.enableKeyboard();
            }
        });

        $.ajax({
            method: 'get',
            url: '/api/mansionSummary?id=' + id,
            success: function(u) {
                u.titlePicture = 'http://119.29.243.158:6060/mansionImage/' + u.titlePicture;
                v.Info = u;
            }
        });
    }
});