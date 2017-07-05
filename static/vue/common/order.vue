<template>
    <div class="other-info">
        <div class="oi-form">
            <h3>立即预约</h3>
            <form class='oi-order'>
                <div class="num" v-cloak>该大厦近30天共有{{num}}人预约看房</div>
                <div class='form-input' v-if='!stateobj.state'>
                    <div class="oi-input">
                        <input type="text" name="mobile" placeholder="手机号码" v-model='phoneNum'>
                    </div>
                    <div class="oi-input">
                        <input type="text" name="verifyCode" placeholder="验证码" v-model='verNum'>
                        <div class="oi-ver">
                            <a href="javascript:void(0);" @click='getVerNum()'>获取验证码</a>
                        </div>
                    </div>
                </div>
                <div class='regSuccess' v-else>预约手机号：{{stateobj.phone}}</div>
                <div class='order' v-if="orderIter">
                    <p class='order-title'>预约成功</p>
                    <p class='order-text'>客服将在10分钟内与您联系</p>
                </div>
                <input type="button" :value="appointText" class='btn-submit' @click='appoint()' v-else>
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
    import $ from 'jquery';

    export default {
        data: function() {
            return {
                orderIter: false,
                phoneNum: '',
                verNum: '',
                appointText: ''
            }
        },
        props: ['num', 'stateobj', 'idobj'],
        methods: {
            getVerNum: function() {
                if (!this.phoneNum) {
                    alert('手机号码不能为空');
                    return;
                }
                var v = this;
                $.ajax({
                    method: 'post',
                    data: {
                        'phoneNum': v.phoneNum
                    },
                    url: '/api/user/getPhoneCode',
                    success: function(data) {
                        if (data.success) {
                            alert('已发送');
                        }
                    }
                });
            },
            appoint: function() {
                var v = this;
                if (!this.stateobj.state) {
                    if (!this.phoneNum || !this.verNum) {
                        alert('手机号码或验证码不能为空');
                        return;
                    }
                    $.ajax({
                        method: 'post',
                        data: {
                            'phoneNum': v.phoneNum,
                            'phoneCode': v.verNum
                        },
                        url: '/api/user/login',
                        success: function(data) {
                            if (data.success) {
                                v.$emit('reg', data.obj, true);
                                window.location.reload();
                            } else {
                                alert(data.msg);
                            }
                        }
                    })
                } else {
                    $.ajax({
                        method: 'post',
                        data: v.idobj,
                        url: '/api/appiont',
                        success: function(data) {
                            if (data.success) {
                                v.orderIter = true;
                            }
                        }
                    });
                }
            }
        },
        created: function() {
            var v = this;
            $.ajax({
                method: 'get',
                url: '/api/user/getuserloginstatus',
                success: function(data) {
                    v.appointText = data.success ? '我要预约' : '预约看房';
                }
            })
        }
    }
</script>
<style lang="less">
    .other-info {
        background-color: #fff;
        width: 250px;
        padding: 20px;
        float: right;
        >.oi-form {
            >h3 {
                padding-bottom: 0;
                border: none;
            }
            >form {
                >.num {
                    color: #666;
                    font-size: 12px;
                    margin: 10px 0 5px 0;
                }
                >.form-input {
                    >.oi-input {
                        position: relative;
                        >input {
                            border: 0;
                            width: 210px;
                            height: 48px;
                            margin-bottom: 10px;
                            padding: 14px;
                            border-radius: 4px;
                            background-color: #f5f5f5;
                        }
                        >.oi-ver {
                            display: block;
                            position: absolute;
                            left: auto;
                            right: 10px;
                            top: 12px;
                            >a {
                                color: #b2b2b2;
                                font-size: 12px;
                            }
                        }
                    }
                }
                >.regSuccess {
                    font-size: 13px;
                    color: #333;
                    margin-bottom: 10px;
                }
                >.order {
                    text-indent: 5px;
                    >.order-title {
                        font-size: 16px;
                    }
                    >.order-text {
                        font-size: 12px;
                        color: #999;
                    }
                }
                >.btn-submit {
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
        >.oi-contact {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ccc;
            >.oic-title {
                color: #666;
                font-size: 16px;
                font-weight: bold;
                >i {
                    position: relative;
                    top: 4px;
                    margin-right: 10px;
                    font-size: 28px;
                }
            }
            >.oic-tel {
                padding-left: 38px;
                margin: 5px 0 0 0;
                height: 28px;
                line-height: 28px;
                color: #666;
                font-size: 20px;
            }
            >.oic-time {
                padding-left: 38px;
                margin: 5px 0 0 0;
                color: #b2b2b2;
                font-size: 12px;
            }
        }
    }
</style>