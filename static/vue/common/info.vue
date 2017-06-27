<template>
    <div class="house-info">
        <h3>大厦简介</h3>
        <img class='hi-pic' :src="src" alt="">
        <div class='hi-addr-pos'>
            <ul class='feature'>
                <li>
                    <span class='hi-title'>竣工时间</span>
                    <span class='hi-content'>暂无信息</span>
                </li>
                <li>
                    <span class='hi-title'>地理位置</span>
                    <span class='hi-content'>
                        <a href="#">深圳市南山科技园朗山二路5号</a>
                    </span>
                </li>
            </ul>
        </div>
        <div class="more-info clearfix">
            <ul class='feature'>
                <li>
                    <span class='hi-title'>层高</span>
                    <span class='hi-content'>2.7m</span>
                </li>
                <li>
                    <span class='hi-title'>层数</span>
                    <span class='hi-content'>地上6层</span>
                </li>
                <li>
                    <span class='hi-title'>物业</span>
                    <span class='hi-content'>合欢物业</span>
                </li>
            </ul>
        </div>
        <div class="hi-intro">
            <div></div>
            <div class='hide'>111</div>
            <a href="javascript:void(0);" class='show-more hide'>展开详情</a>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                'src': './images/bg.png'
            }
        },
        props:{
          
        }
    }
</script>
<style lang='less'>
    @feature:feature;
    .@{feature}{
        >li{
            margin-bottom: 20px;
            >.hi-title{
                display: block;
                padding-bottom: 5px;
                color: #b2b2b2;
                font-size: 12px;
            }
            >.hi-content{
                font-size: 14px;
                color:#353535;
            }
        }
    }

    .house-info {
        background-color:#fff;
        width:800px;
        >.hi-pic {
            width: 200px;
            height: 125px;
            border-radius: 4px;
        }
        >.hi-addr-pos {
            width: 567px;
            float: right;
            >ul {
                >li {
                    width: 100%;
                }
            }
        }
        >.more-info {
            >ul {
                >li {
                    width: 33%;
                    float: left;
                }
            }
        }
        >.hi-intro {
            position: relative;
            margin-top: 5px;
            padding: 20px 0 0 0;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            line-height: 1.7;
            font-size: 14px;
            margin-bottom: 50px;
        }
    }
</style>