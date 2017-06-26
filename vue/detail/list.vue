<template>
    <div class='house-list-module'>
        <!--选项-->
        <div class="house-bar">
            <ul class="hb-list clearfix">
                <li class='on'>
                    <span class="hbl-title">全部户型</span>
                    <span class="hbl-num">19套</span>
                </li>
                <li>
                    <span class="hbl-title">100-200m²</span>
                    <span class="hbl-num">3套</span>
                </li>
                <li>
                    <span class="hbl-title">200-300m²</span>
                    <span class="hbl-num">11套</span>
                </li>
                <li>
                    <span class="hbl-title">300-500m²</span>
                    <span class="hbl-num">3套</span>
                </li>
                <li>
                    <span class="hbl-title">500-1000m²</span>
                    <span class="hbl-num">1套</span>
                </li>
                <li>
                    <span class="hbl-title">1000m²以上</span>
                    <span class="hbl-num">1套</span>
                </li>
            </ul>
        </div>
        <!--轮播图-->
        <div class="house-pic">
            <h3>照片总览<span class="small">户型照片集合</span></h3>
            <div class="hp-list">
                <div class="hpl-btn btn-l"><i class='iconfont icon-shangyiyehoutuifanhui'></i></div>
                <div class="hpl-btn btn-r"><i class='iconfont icon-xiayiyeqianjinchakangengduo'></i></div>
                <div class="hpl-container">
                    <div class="hpl-content clearfix">
                        <div class="list-item">
                            <a href="#">
                                <img :src="src" alt="">
                            </a>
                        </div>
                        <div class="list-item">
                            <a href="#">
                                <img :src="src" alt="">
                            </a>
                        </div>
                        <div class="list-item">
                            <a href="#">
                                <img :src="src" alt="">
                            </a>
                        </div>
                        <div class="list-item">
                            <a href="#">
                                <img :src="src" alt="">
                            </a>
                        </div>
                        <div class="list-item">
                            <a href="#">
                                <img :src="src" alt="">
                            </a>
                        </div>
                        <div class="list-item">
                            <a href="#">
                                <img :src="src" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--详情列表-->
        <div class="house-list">
            <h3>户型列表</h3>
            <div class="hl-title info-list">
                <div class='hlt-item hlt-photo'>照片</div>
                <div class='hlt-item hlt-area'>面积<i class='iconfont icon-biaotou-kepaixu'></i></div>
                <div class='hlt-item hlt-price'><a href="#" class='on'>单价</a> · <a href="#">总价<i class='iconfont icon-biaotou-kepaixu'></i></a></div>
                <div class='hlt-item hlt-floor'>楼层</div>
                <div class='hlt-item hlt-decor'>装修</div>
                <div class='hlt-item hlt-update'>更新<i class='iconfont icon-biaotou-kepaixu'></i></div>
            </div>
            <div class="hl-list">
                <div class="hll-item">
                    <a href="#" class='info-list'>
                        <div class='hlt-item hlt-photo'>
                            <img :src="src" alt="">
                        </div>
                        <div class='hlt-item hlt-area'>
                            <span class='num'>268</span>
                            <span class='unit'>m²</span>
                        </div>
                        <div class='hlt-item hlt-price'>
                            <span class="num">70</span>
                            <span class="unit">元/m²/月</span>
                        </div>
                        <div class='hlt-item hlt-floor'>中层</div>
                        <div class='hlt-item hlt-decor'>精装</div>
                        <div class='hlt-item hlt-update'>18小时前</div>
                    </a>
                </div>
                <a href="#" class='btn-more'>查看更多</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                'src': './images/tu_0001.png'
            }
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
                width: 690px;
                >.hpl-container {
                    overflow: hidden;
                    width: 680px;
                    >.hpl-content {
                        width: 9999px;
                        >.list-item {
                            float: left;
                            width: 170px;
                            height: 100px;
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