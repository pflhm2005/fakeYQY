<template>
    <div class='house-list-module'>
        <!--选项-->
        <div class="house-bar">
            <ul class="hb-list clearfix">
                <template v-for="(item,index) in count">
                    <li :class='{on:titleIter === index}' @click='changeList(index)' v-show="!!item.count">
                        <span class="hbl-title" v-cloak>{{item.title}}</span>
                        <span class="hbl-num" v-cloak>{{item.count}}套</span>
                    </li>
                </template>
</ul>
</div>
<!--轮播图-->
<div class="house-pic">
    <h3>照片总览<span class="small">户型照片集合</span></h3>
    <div class="hp-list">
        <div class="hpl-btn btn-l" v-show="slideIter !== 0" @click='prev()'><i class='iconfont icon-shangyiyehoutuifanhui'></i></div>
        <div class="hpl-btn btn-r" v-show='len>4 && slideIter<len-3' @click='next()'><i class='iconfont icon-xiayiyeqianjinchakangengduo'></i></div>
        <div class="hpl-container">
            <div class="hpl-content clearfix" :style='slideStyle'>
                <template v-for="(item,index) in pic">
                            <div class="list-item" :class='{opc:index === slideIter+4}'>
                                <a href="javascript:void(0);" @click='lmaskshow(index)'>
                                    <img :src="item" alt="">
                                </a>
                            </div>
                        </template>
            </div>
        </div>
    </div>
</div>
<!--详情列表-->
<div class="house-list">
    <h3>户型列表</h3>
    <div class="hl-title info-list">
        <div class='hlt-item hlt-photo'>照片</div>
        <div class='hlt-item hlt-area' @click='sort("area")'>面积<i class='iconfont icon-biaotou-kepaixu'></i></div>
        <div class='hlt-item hlt-price' @click='sort("price")'><a href="javascript:void(0);" :class='{on:priceIter ==0}' @click='showSimplePrice'>单价</a> · <a href="javascript:void(0);" :class='{on:priceIter ==1}' @click='showTotalPrice'>总价<i class='iconfont icon-biaotou-kepaixu'></i></a></div>
        <div class='hlt-item hlt-floor'>楼层</div>
        <div class='hlt-item hlt-decor'>装修</div>
        <div class='hlt-item hlt-update' @click='sort("updateTime")'>更新<i class='iconfont icon-biaotou-kepaixu'></i></div>
    </div>
    <div class="hl-list">
        <template v-for="(item,index) in list">
                    <div class="hll-item" v-show="index < showNum">
                        <a :href="item.href" class='info-list'>
                            <div class='hlt-item hlt-photo'>
                                <img :src="item.roomPicture" alt="">
                            </div>
                            <div class='hlt-item hlt-area'>
                                <span class='num' v-cloak>{{item.area}}</span>
                                <span class='unit'>m²</span>
                            </div>
                            <div class='hlt-item hlt-price' v-show="priceIter == 0">
                                <span class="num" v-cloak>{{item.price}}</span>
                                <span class="unit">元/m²/月</span>
                            </div>
                            <div class='hlt-item hlt-price' v-show="priceIter == 1">
                                <span class="num" v-cloak>{{item.totalPrice}}</span>
                                <span class="unit">元/月</span>
                            </div>
                            <div class='hlt-item hlt-floor' v-cloak>{{item.floor}}</div>
                            <div class='hlt-item hlt-decor' v-cloak>{{item.fitment}}</div>
                            <div class='hlt-item hlt-update' v-cloak>{{item.coverUpdateTime}}</div>
                        </a>
                    </div>
                </template>
        <a href="javascript:void(0);" v-show="showNum < list.length" class='btn-more' @click='showMore'>查看更多</a>
    </div>
</div>
</div>
</template>
<script>
    export default {
        data: function() {
            return {
                titleIter: 0,
                slideIter: 0,
                sortIter: {
                    area: 1,
                    price: 1,
                    updateTime: 1
                },
                priceIter: 0,
                showNum: 9,
            }
        },
        props: ['count', 'pic', 'list'],
        methods: {
            next: function() {
                this.slideIter++;
            },
            prev: function() {
                this.slideIter--;
            },
            sort: function(iter) {
                var v = this;
                v.sortIter[iter] *= -1;
                this.list.sort(function(a, b) {
                    return (a[iter] - b[iter]) * v.sortIter[iter];
                });
            },
            changeList: function(index) {
                console.log(index);
                this.titleIter = index;
            },
            lmaskshow: function(index) {
                this.$emit('lmaskshow', index);
            },
            showSimplePrice: function() {
                this.priceIter = 0;
            },
            showTotalPrice: function() {
                this.priceIter = 1;
            },
            showMore: function() {
                this.showNum += 9;
                console.log(this.showNum);
            }
        },
        computed: {
            len: function() {
                return this.pic.length;
            },
            slideStyle: function() {
                return 'transform:translate(' + -this.slideIter * 170 + 'px)';
            },
            titleObj: function() {
                return this.count;
            }
        },
        created: function() {

        }
    }
</script>
<style lang='less'>
    .house-list-module {
        background-color: #fff;
        >.house-bar {
            margin-bottom: 20px;
            font-size: 12px;
            color: #666;
            >.hb-list {
                border-bottom: 2px solid #fb565c;
                >li {
                    width: 100px;
                    float: left;
                    padding-top: 22px;
                    padding-bottom: 10px;
                    text-align: center;
                    cursor: pointer;
                    >span {
                        width: 101px;
                        display: block;
                        padding-top: 10px;
                        border-right: 1px solid #eee;
                    }
                    &.on {
                        background-color: #fb565c;
                    }
                    &.on>span {
                        color: #fff;
                    }
                    &.on>.hbl-num {
                        opacity: .5;
                    }
                }
            }
        }
        >.house-pic {
            margin-bottom: 20px;
            >h3 {
                margin-bottom: 10px;
                padding-top: 18px;
                font-size: 14px;
                >.small {
                    color: #b2b2b2;
                    margin-left: 10px;
                    font-size: 12px;
                }
            }
            >.hp-list {
                position: relative;
                width: 785px;
                >.hpl-container {
                    overflow: hidden;
                    width: 765px;
                    >.hpl-content {
                        user-select: none;
                        width: 9999px;
                        position: relative;
                        >.list-item {
                            float: left;
                            width: 170px;
                            height: 100px;
                            &.opc {
                                opacity: 0.5;
                            }
                            >a {
                                width: 160px;
                                height: 100px;
                                margin-right: 10px;
                                >img {
                                    border-radius: 4px;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
                >.hpl-btn {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    top: 40px;
                    cursor: pointer;
                    z-index: 1;
                    >i {
                        font-weight: bold;
                        font-size: 20px;
                    }
                }
                >.btn-l {
                    left: -20px;
                }
                >.btn-r {
                    right: 0px;
                }
            }
        }
        >.house-list {
            >h3 {
                padding: 9px 0;
                padding-top: 20px;
                font-size: 14px;
            }
            >.hl-title {
                height: 40px;
                line-height: 40px;
                >.hlt-item {
                    font-weight: bold;
                    height: 40px;
                    line-height: 38px;
                }
            }
            >.hl-list {
                >.hll-item {
                    height: 80px;
                    overflow: hidden;
                    padding: 10px 0;
                    margin-top: 20px;
                    >a {
                        >.hlt-item {
                            height: 60px;
                            line-height: 60px;
                        }
                        >.hlt-price {
                            color: #cc2929;
                        }
                        >.hlt-update {
                            color: #b2b2b2;
                        }
                    }
                }
                >.btn-more {
                    display: block;
                    width: 400px;
                    height: 36px;
                    line-height: 34px;
                    margin: 0 auto;
                    margin-top: 30px;
                    text-align: center;
                    font-size: 12px;
                    color: #666;
                    border-radius: 4px;
                    border: solid 1px #ccc;
                    &:hover {
                        border-color: #17a1e6;
                        color: #17a1e6;
                    }
                }
            }
        }
    }
</style>