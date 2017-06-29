<template>
    <div class="head">
        <!--顶部-->
        <div class="top box">
            <!--logo-->
            <a href="#" class='logo'>
                <img :src="logo" alt="">
            </a>
            <!--tel-->
            <div class="t-tel">
                <div class='icon fl'>
                    <img :src="phoneIcon">24小时服务热线
                </div>
                <div class='number fl'>400 8888 400</div>
            </div>
        </div>
        <!--tab栏-->
        <div class="tab">
            <ul class='tab-list'>
                <li class='trangle'></li>
                <li>
                    <a href="./index.html">主页</a>
                </li>
                <li>
                    <a href="#">园区招聘</a>
                </li>
                <li>
                    <a href="#">政策优惠</a>
                </li>
                <li>
                    <a href="#">关于我们</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                'logo': './images/logo.png',
                'phoneIcon': './images/Icon.png'
            }
        }
    }
</script>
<style lang='less'>
    .head {
        width: 100%;
    }
    
    .top {
        height: 74px;
        >.logo {
            line-height: 74px;
            >img {
                vertical-align: middle;
            }
        }
        >.t-tel {
            color: #525252;
            float: right;
            >.icon {
                margin-top: 18px;
                font-size: 12px;
                width: 85px;
                height: 38px;
                >img {
                    margin-right: 5px;
                    float: left;
                }
            }
            >.number {
                margin-top: 22px;
                font-size: 24px;
                height: 30px;
                line-height: 30px;
                border-left: 1px solid #ccc;
                margin-left: 10px;
                padding-left: 10px;
            }
        }
    }
    
    .tab {
        height: 48px;
        >.tab-list {
            height: 100%;
            margin-left: 678px;
            background-color: #fb565c;
            >.trangle {
                width: 0;
                height: 0;
                border-width: 48px 29px 0px 0px;
                border-color: transparent #fb565c #fb565c transparent;
                border-style: solid;
                background-color: #fff;
            }
            >li {
                height: 100%;
                float: left;
                a {
                    font-size: 15px;
                    padding: 14px 20px;
                    color: #fff;
                    display: inline-block;
                    border-right: 1px solid #fc6b70;
                }
            }
        }
    }
</style>