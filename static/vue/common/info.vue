<template>
    <div class="house-info">
        <h3>大厦简介</h3>
        <img class='hi-pic' :src="src" alt="">
        <div class='hi-addr-pos'>
            <ul class='feature'>
                <li>
                    <span class='hi-title'>竣工时间</span>
                    <span class='hi-content'>{{info.etbTime}}</span>
                </li>
                <li>
                    <span class='hi-title'>地理位置</span>
                    <span class='hi-content'>
                        <a href="#">{{info.address}}</a>
                    </span>
                </li>
            </ul>
        </div>
        <div class="more-info clearfix">
            <ul class='feature'>
                <li>
                    <span class='hi-title'>层高</span>
                    <span class='hi-content'>{{info.heightDesc}}</span>
                </li>
                <li>
                    <span class='hi-title'>层数</span>
                    <span class='hi-content'>{{info.numDesc}}</span>
                </li>
                <li>
                    <span class='hi-title'>物业</span>
                    <span class='hi-content'>{{info.tntName}}</span>
                </li>
            </ul>
        </div>
        <div class="more-info clearfix">
            <ul class='feature'>
                <li>
                    <span class='hi-title'>物业费</span>
                    <span class='hi-content'>{{info.tntPrice}}</span>
                </li>
                <li>
                    <span class='hi-title'>车位</span>
                    <span class='hi-content'>{{info.parkingDesc}}</span>
                </li>
                <li>
                    <span class='hi-title'>车位月租金</span>
                    <span class='hi-content'>{{info.parkingPrice}}</span>
                </li>
            </ul>
        </div>
        <div class="more-info clearfix">
            <ul class='feature'>
                <li>
                    <span class='hi-title'>空调</span>
                    <span class='hi-content'>{{info.airCondition}}</span>
                </li>
                <li>
                    <span class='hi-title'>空调费</span>
                    <span class='hi-content'>{{info.airConditionCost}}</span>
                </li>
                <li>
                    <span class='hi-title'>空调开放时长</span>
                    <span class='hi-content'>{{info.airConditionTime}}</span>
                </li>
            </ul>
        </div>
        <div class="more-info clearfix">
            <ul class='feature'>
                <li>
                    <span class='hi-title'>电梯</span>
                    <span class='hi-content'>{{info.elevatorDesc}}</span>
                </li>
                <li>
                    <span class='hi-title'>网络</span>
                    <span class='hi-content'>{{info.internetDesc}}</span>
                </li>
                <li>
                    <span class='hi-title'>入驻企业</span>
                    <span class='hi-content'>{{info.companyName}}</span>
                </li>
            </ul>
        </div>
        <div class="hi-intro">
            <div>{{info.description}}</div>
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
        props: ['info']
    }
</script>
<style lang='less'>
    @feature: feature;
    .@{feature} {
        >li {
            margin-bottom: 20px;
            >.hi-title {
                display: block;
                padding-bottom: 5px;
                color: #b2b2b2;
                font-size: 12px;
            }
            >.hi-content {
                font-size: 14px;
                color: #353535;
            }
        }
    }
    
    .house-info {
        background-color: #fff;
        width: 800px;
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
            height:100px;
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