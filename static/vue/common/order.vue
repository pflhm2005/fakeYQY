<template>
    <div class="other-info">
        <div class="oi-form">
            <h3>立即预约</h3>
            <form class='oi-order'>
                <div class="num">该大厦近30天共有{{num}}人预约看房</div>
                <div class="oi-input">
                    <input type="text" name="mobile" placeholder="手机号码" value="">
                </div>
                <div class="oi-input">
                    <input type="text" name="verifyCode" placeholder="验证码" value="">
                    <div class="oi-ver">
                        <a href="javascript:void(0);">获取验证码</a>
                    </div>
                </div>
                <input type="submit" value="预约看房" class='btn-submit'>
            </form>
        </div>
        <div class="oi-contact">
            <div class="oic-title">
                <i class='iconfont icon-dianhua'></i>免费电话预约
            </div>
            <div class="oic-tel">40000-40-360</div>
            <div class="oic-time">( 早9:00-晚10:00 )</div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['num']
    }
</script>
<style lang="less">
    .other-info{
        background-color: #fff;
        width: 250px;
        padding: 20px;
        margin-right: 10px;
        >.oi-form{
            >h3{
                padding-bottom: 0;
                border: none;
            }
            >form{
                >.num{
                    color: #666;
                    font-size: 12px;
                    margin: 10px 0 20px 0;
                }
                >.oi-input{
                    position: relative;
                    >input{
                        border: 0;
                        width: 210px;
                        height: 48px;
                        margin-bottom: 10px;
                        padding: 14px;
                        border-radius: 4px;
                        background-color: #f5f5f5;
                    }
                    >.oi-ver{
                        display: block;
                        position: absolute;
                        left: auto;
                        right: 10px;
                        top: 12px;
                        >a{
                            color: #b2b2b2;
                            font-size: 12px;
                        }
                    }
                }
                >.btn-submit{
                    width: 210px;
                    height: 48px;
                    line-height: 48px;
                    display: block;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 600;
                    text-align: center;
                    background: #fb565c;
                    border-radius: 4px;
                    border: 0;
                    padding: 0;
                }
            }
        }
        >.oi-contact{
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ccc;
            >.oic-title{
                color: #666;
                font-size: 16px;
                font-weight: bold;
                >i{
                    position: relative;
                    top: 4px;
                    margin-right: 10px;
                    font-size: 28px;
                }
            }
            >.oic-tel{
                padding-left: 38px;
                margin: 5px 0 0 0;
                height: 28px;
                line-height: 28px;
                color: #666;
                font-size: 20px;
            }
            >.oic-time{
                padding-left: 38px;
                margin: 5px 0 0 0;
                color: #b2b2b2;
                font-size: 12px;
            }
        }
    }
</style>