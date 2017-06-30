import Vue from 'vue';
import $ from 'jquery';
import top from '../vue/common/head.vue';
import foot from '../vue/common/foot.vue';
import info from '../vue/common/info.vue';
import slide from '../vue/common/slide.vue';
import orderInfo from '../vue/common/order.vue';

new Vue({
    el: '#app',
    components: {
        'top': top,
        'foot': foot,
        'info': info,
        'orderInfo': orderInfo,
        'slide': slide
    },
    data: {
        idObj: {
            mansionId: null,
            blockId: null,
            roomId: null
        },
        Info: [],
        totalData: {
            pictures: []
        },
        maskIter: false,
        dataPic: '',
        picNameArr: ['pictures'],
        regStateObj: {
            state: false,
            phone: ''
        },
    },
    methods: {
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
        maskShow: function(index, type) {
            this.dataPic = this.totalData[this.picNameArr[type]];
            this.dataPic.index = index;
            this.maskIter = true;
        },
        maskHide: function() {
            this.maskIter = false;
        },
        changeState: function(u, s) {
            this.regStateObj.phone = u;
            this.regStateObj.state = s;
        }
    },
    computed: {
        len: function() {
            return this.totalData.pictures.length;
        }
    },
    created: function() {
        var v = this,
            url = window.location.href;
        var id = url.split('?')[1] ? url.split('?')[1].split('&') : '';
        var roomId = id[1].split('=')[1],
            mansionId = id[0].split('=')[1];

        this.idObj.mansionId = mansionId;
        this.idObj.roomId = roomId;

        $.ajax({
            method: 'get',
            url: '/api/mansionSummary?id=' + mansionId,
            success: function(u) {
                u.titlePicture = 'http://119.29.243.158:6060/mansionImage/' + u.titlePicture;
                v.Info = u;
            }
        });

        $.ajax({
            method: 'get',
            url: '/api/roomDetails?id=' + roomId,
            success: function(u) {
                v.ImgModifier(u, 'pictures', false);
                v.idObj.blockId = u.blockId;
                v.totalData = u;
            }
        });
    }
});