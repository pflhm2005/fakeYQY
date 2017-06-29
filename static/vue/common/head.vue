<template>
    <div class="head">
        <!--顶部-->
        <div class="top box">
            <!--logo-->
            <a href="./index.html" class='logo'>
                <img :src="logo" alt="">
            </a>
            <!--tel-->
            <div class="t-tel">
                <a href="javascript:void(0);" class='regbtn fl' @click='maskIter=true' v-if="isReg">登录</a>
                <p v-else>{{regPhone}}用户已登录</p>
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
        <div class="reg" v-show="maskIter" @click.self='maskIter=false'>
            <div class="form">
                <div class="content">
                    <h1>快捷登录</h1>
                    <h2>登录享受更多服务</h2>
                    <form class='login-form'>
                        <div class="mobile">
                            <input type="text" placeholder='手机号码' v-model='phoneNum'>
                        </div>
                        <div class="ver">
                            <input type="text" placeholder="验证码" v-model='verNum'>
                            <a href="javascript:void(0);" class='getVer' @click='getVerNum()'>获取验证码</a>
                        </div>
                        <a href="javascript:void(0);" class='submit' @click='sub()'>确定</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery';

    export default {
        data: function() {
            return {
                'logo': './images/logo.png',
                'phoneIcon': './images/Icon.png',
                maskIter:false,
                phoneNum:'',
                verNum:'',
                isReg:false,
                regPhone:''
            }
        },
        methods:{
            getVerNum:function(){
                if(!!this.phoneNum){
                    alert('手机号码不能为空');
                    return ;
                }
                var v =this;
                $.ajax({
                    method:'post',  
                    data:{
                        'phoneNum':v.phoneNum
                    },
                    url:'/user/getPhoneCode',
                    success:function(data){
                        if(data.success){
                            alert('已发送');
                        }
                    }
                });
            },
            sub:function(){
                if(!!this.phoneNum || !!this.verNum){
                    alert('手机号码或验证码不能为空');
                    return ;
                }
                var v = this;
                $.ajax({
                    method:'post',
                    data:{
                        'phoneNum':v.phoneNum,
                        'phoneCode':v.verNum
                    },
                    url:'/api/login',
                    success:function(data){
                        if(data.success){
                            v.maskIter = false;
                            this.regPhone = data.obj;
                        }else{
                            alert(data.msg);
                        }
                    };
                })
            }
        },
        created:function(){
            var v = this;
            $.ajax({
                method:'get',
                url:'/api/getuserloginstatus',
                success:function(data){
                    if(data.success){
                        v.isReg = true;
                        
                    }
                }
            })
        }
        
    }
</script>
<style lang='less'>
    .head {
        width: 100%;
    }
    .reg{
        z-index:9999;
        position:fixed;
        width:100%;
        height:100%;
        left:0;
        top:0;
        background-color:rgba(0,0,0,.7);
        >.form{
            width:420px;
            height:350px;
            margin:250px auto;
            background-color:#fff;
            border-radius:8px;
            >.content{
                padding-top:44px;
                text-align:center;
                >h1{
                    height: 31px;
                    font-size: 25px;
                    font-weight: 500;
                    color: #000;
                }
                >h2{
                    height: 19px;
                    font-size: 14px;
                    color: #666;
                    margin-top: 15px;
                }
                >.login-form{
                    margin: 29px auto;
                    width: 360px;
                    >div{
                        height: 48px;
                        margin-bottom: 10px;
                        border-radius: 4px;
                        background-color: #f5f5f5;
                        >input{
                            height: 100%;
                            line-height: 20px;
                            padding: 4px 19px;
                            outline: 0;
                            border-radius: 4px;
                            background: #f5f5f5;
                            font-size: 15px;
                            border: 0;
                            width: 100%;
                            
                        }
                        >.getVer{
                            float: right;
                            margin-right: 15px;
                            position: relative;
                            margin-top: -30px;
                            text-decoration: none!important;
                            font-size: 12px;
                            height: 16px;
                            width: 63px;
                        }
                    }
                    >.submit{
                        background-color: #148fcc;
                        color:#fff;
                        width:360px;
                        display:block;
                        height:48px;
                        margin-top:20px;
                        line-height:47px;
                        border-radius:4px;
                        text-align:center;
                    }
                }
            }
        }
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
            >.regbtn{
                margin:20px 10px;
                font-size:13px;
                color:#aaa;
                padding:5px 10px;
            }
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
                >a {
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