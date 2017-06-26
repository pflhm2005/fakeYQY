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
        // 渲染数组
        flPos: ['全市区域', '南山', '福田', '罗湖', '宝安', '龙岗', '盐田', '龙华', '坪山', '光明', '大鹏'],
        flPosDetail: [
            ['华侨城', '后海', '科技园', '南山中心区', '南油', '南头', '前海', '蛇口', '西丽'],
            ['笔架山', '八卦岭', '保税区', '车公庙', '福田中心区', '华强', '皇岗', '景田', '莲花', '梅林', '农科中心', '上步', '石厦', '上下沙', '香蜜湖', '新洲', '竹子林'],
            ['布心', '宝安南', '蔡屋围', '翠竹', '东门', '黄贝岭', '洪湖', '莲塘', '泥岗', '人民南', '水贝', '水库', '笋岗', '银湖'],
            ['宝安中心区', '福永', '固戍', '石岩', '沙井', '松岗', '新安', '西乡'],
            ['坂田', '布吉', '横岗', '龙岗中心城', '平湖', '坪地'],
            ['梅沙', '沙头角', '盐田港'],
            ['大浪', '观澜', '龙华', '民治'],
            ['坑梓', '坪山'],
            ['公明', '光明'],
            ['大鹏', '葵涌', '南澳'],
        ],
        flArea: ['面积不限', '100m²以下', '100-200m²', '200-300m²', '300-500m²', '500-100m²', '1000m²以上'],
        flSimplePrice: ['单价不限', '50元以下', '50-80元', '80-100元', '100-150元', '150-200元', '200元以上'],
        flTotalPrice: ['总价不限', '0.5万以下', '0.5万-1.5万', '1.5万-3万', '3万-5万', '5万-10万', '10万以上'],
        // 游标
        posIter1: 0,
        posIter2: null,
        areaIter: 0,
        priceIter: 1,
        simplePriceIter: null,
        totalPriceIter: null
    },
    methods: {
        setSel: function(id, index) {
            switch (id) {
                case -1:
                    this.posIter2 = index;
                    break;
                case 0:
                    this.posIter1 = index;
                    this.posIter2 = null;
                    break;
                case 1:
                    this.areaIter = index;
                    break;
                case 2:
                    this.simplePriceIter = index;
                    this.totalPriceIter = null;
                    break;
                case 3:
                    this.totalPriceIter = index;
                    this.simplePriceIter = null;
                    break;
            }
        },
    },
    mounted: function() {

    }
});