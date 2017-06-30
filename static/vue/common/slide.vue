<template>
    <div class="window-slide">
        <div class="mask-container">
            <div class="slide-container">
                <div class="slide-wrapper">
                    <template v-for="item in src">
                        <div class="slide-item">
                            <img :src="item" alt="">
                        </div>
                    </template>
</div>
<div class="btn btn-l" @click='slideIter !==0 && slidePic(1)'><i class='iconfont icon-shangyiyehoutuifanhui'></i></div>
<div class="btn btn-r" @click='slideIter != 1-len && slidePic(-1)'><i class='iconfont icon-xiayiyeqianjinchakangengduo'></i></div>
</div>
</div>
<div class="swiper-wrapper-title">
    <span class="tit">大厦图片</span>(<span class='currentIndex' v-cloak>{{1-slideIter}}</span>/<span class='totalPic' v-cloak>{{len}}</span>)
</div>
<div class="close" @click='close()'>
    <i class='iconfont icon-cuowuguanbiquxiao-xianxingyuankuang'></i>
</div>
</div>
</template>
<script>
    import $ from 'jquery';

    export default {
        data: function() {
            return {
                slideIter: this.src.index || 0,
            }
        },
        methods: {
            slidePic: function(iter) {
                this.slideIter += iter;
                $('.slide-wrapper').animate({
                    'left': this.slideIter * 1910 + 'px'
                }, 200);
            },
            close: function() {
                this.$emit('close');
                this.picCollection = [];
            }
        },
        computed: {
            len: function() {
                return this.src.length;
            },
            picCollection: function() {
                return this.src;
            },
        },
        props: ['src'],
        mounted: function() {

        }
    }
</script>
<style lang="less">
    .window-slide {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.85);
        padding: 1px;
        >.mask-container {
            margin-top: 6%;
            height: 76%;
            >.slide-container {
                width: 100%;
                height: 100%;
                margin: 0 auto;
                border-radius: 4px;
                overflow: hidden;
                position: relative;
                >.slide-wrapper {
                    margin-left: 350px;
                    position: relative;
                    height: 100%;
                    width: 10000%;
                    >.slide-item {
                        height: 100%;
                        float: left;
                        padding-right: 740px;
                        >img {
                            width: 1184px;
                            height: 100%;
                        }
                    }
                }
                >.btn {
                    position: absolute;
                    top: 0;
                    width: 200px;
                    height: 100%;
                    cursor: pointer;
                    >i {
                        top: 40%;
                        position: relative;
                        color: #fff;
                        font-size: 60px;
                        left: 25%;
                    }
                }
                >.btn-l {
                    left: 10px;
                }
                >.btn-r {
                    right: 10px;
                }
            }
        }
        >.swiper-wrapper-title {
            text-align: center;
            line-height: 30px;
            color: #fff;
            font-size: 12px;
            font-weight: 500;
            opacity: .4;
            width: 100%;
            >.tit {
                color: #fff;
                font-size: 12px;
                font-weight: 500;
            }
        }
        >.close {
            position: absolute;
            right: 50px;
            top: 50px;
            cursor: pointer;
            >i {
                color: #fff;
                font-size: 30px;
            }
        }
    }
</style>