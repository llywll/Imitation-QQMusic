<template>
  <div class="mod_header">
      
      <div class="section_inner">
            <!--logo-->
            <h1 class="logo">
                <a href="http://y.qq.com">
                    <img class="music_logo" alt="qq音乐" src="./../assets/img/logo.png" />
                </a>
            </h1>
            <!--顶部按钮区-->
            <ul class="mod_top_nav">
                    <li v-for="(btnlist,index) in items" :key="index" :class="btnlist.isaction?'action_li top_nav_item':'top_nav_item'">
                        <a :href="btnlist.link" :class="btnlist.isaction?'ck_action':'ck_link'" @click="setAction(index)">{{ btnlist.text }}</a>
                    </li>
            </ul>
             <!--二级导航-->
            <ul class="mod_top_subnav">
                    <li v-for="(btnlist,index) in items2" class="top_subnav_item" :key="index">
                            <a :href="btnlist.link" :class="btnlist.isaction?'ck_action_sub':'ck_link_sub'">{{ btnlist.text }}</a>
                        </li>
            </ul>
            <!--顶部搜索区-->
            <div class="mod_top_search">
                <div class="mod_search_input">
                    <input type="text" placeholder="搜索音乐、MV、歌单、用户" class="search_input" @focus="showSearchBox()" @blur="HideSearchBox()">
                    <button class="search_input_btn">
                        <img class="icon_img" src="./../assets/icon/search_btn.png" />
                    </button>
                </div>
            </div>
            <!--搜索框-->
            <div :class="isShow">
                <div class="mod_search_other">
                    <div class="search_hot">
                        <dl class="search_hot_list">
                            <dt class="search_hot_tit">热门搜索</dt>
                            <dd>
                                <a class="search_hot_link" v-for="(list,index) in search_hot_list" :key="index" :href="list.link">
                                    <span class="search_text search_hot_number">{{ list.nubmer }}</span>
                                    <span class="search_text search_hot_name">{{ list.name }}</span>
                                    <span class="search_text search_hot_other">{{ list.other }}</span>
                                </a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <!--用户信息-->
            <div class="mod_top_login">
                <div class="login_btns">
                    <a href="#" class="dl_btn" @click="open_box()">登录</a>
                    <a href="#" class="ktlz_btn">开通绿钻豪华版</a>
                    <a href="#" class="ktff_btn">开通付费包</a>
                </div>
            </div>
      </div>
      <div :class="popup">
          <div class="login_box">
              <div class="login_handoff">
                  <a href="#" class="handoff_btn se_action">账号登录</a>
                  <a href="#" class="handoff_btn">其他登陆</a>
                  <a href="#" class="close_login_box" @click="close_box()">X</a>
              </div>
              <div class="login_bodyBox">
                    <div class="login_info">
                        <span class="info_tit h_tit">账号密码登陆</span>
                        <span class="info_tit">推荐使用快速安全登录，防止盗号。</span>
                    </div>
                    <div class="info_from">
                        <div :class="user_box">                            
                            <input class="info_input" type="text" placeholder="账号登录" name="username" v-model="scan.user" ref="user" @focus="showBorder($event.currentTarget)" @blur="hideBorder($event.currentTarget)"/>
                            <a class="clean_text" href="javascript:void(0);" :style="user_clear">X</a>
                        </div>
                        <div :class="pass_box">
                            <input class="info_input" type="password"  placeholder="密码" name="password" v-model="scan.pass" ref="pass" @focus="showBorder($event.currentTarget)" @blur="hideBorder($event.currentTarget)" />
                            <a class="clean_text" href="javascript:void(0);" :style="pass_clear">X</a>
                        </div>
                        <div class="input_btn">
                            <button class="from_submit">登录</button>
                        </div>
                        <div class="input_other">
                            <a class="a_link remember_btn">下次自动登录</a>
                            <a href="#" class="a_link register_btn">注册新账号</a>
                            <a href="#" class="a_link">意见反馈</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"dHeader",
     data(){
      return{
        items:[],
        items2:[],
        search_hot_list:[],
        isShow:"js_smartbox dropt",
        user_box:"input_box",
        pass_box:"input_box",
        user_clear:"display:none",
        pass_clear:"display:none",
        popup:"mod_popup_mask off_box",
        scan:{
            user:"",
            pass:""
        }
      }
    },
    mounted(){
        this.getData();
    },
    watch:{
            scan:{
                handler:function(val,oldval){
                    this.user_clear=this.$refs.user.value==""?"display: none":"display: inline-block"
                    this.pass_clear=this.$refs.pass.value==""?"display: none":"display: inline-block"
                },
                deep:true
            }
        },
    methods:{
        getData(){
            this.$http.request('./..//static/json/index.json').then(response => {
                this.items = response.data.items
                this.items2=response.data.items2
                this.search_hot_list=response.data.search_hot_list
            }, response => {
                console.log(response)
            })
        },
        setAction(index){
            console.log(index)
        },
        showSearchBox(){
            this.isShow="js_smartbox show"
        },
        HideSearchBox(){
            this.isShow="js_smartbox drop"
        },
        showBorder(ele){
            if(ele.name=="username")
                    this.user_box="input_box input_focus"
            else if(ele.name=="password")
                    this.pass_box="input_box input_focus"
        },
        hideBorder(ele){
            if(ele.name=="username")
                    this.user_box="input_box"
            else if(ele.name=="password")
                    this.pass_box="input_box"
        },
        open_box(){
            this.popup="mod_popup_mask open_box"
        },
        close_box(){
            this.popup="mod_popup_mask off_box"
        }
        
    }
}
</script>

<style scoped>
.mod_popup_mask{  /*登录遮罩层**/
    position: fixed;
    display:none;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.322);
    z-index: 14;
}
.login_box{             /*登录框*/
    position: relative;
    width: 30vw;
    background: white;
    border-radius: 3px;
    margin:0 auto;
    margin-top: 15%;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.425);
}
.login_handoff{         /*登陆方式切换区*/
    text-align: center;
    border-bottom:1px solid rgba(0, 0, 0, 0.11); 
}
.se_action{
    color: #31C27C;
}

.handoff_btn{       /*切换按钮*/
    display: inline-block;
    margin: 0 50px;
    padding:15px 10px;
}
.handoff_btn:hover{
    color: #31C27C;
}
.close_login_box{
    display:inline-block;
    position:absolute;
    right:15px;
    top:10px;
}
.open_box{
    display:block;
}
.off_box{
    display:none;
}
.close_login_box:hover{
    color: #31C27C;
}
.info_tit{
    text-align: center;
    display: block;
    color: rgba(0, 0, 0, 0.856);
}
.h_tit{
    font-size: 22px;
    padding: 15px 0;
    color: black;
}
.input_box{    
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.24);
    width: 272px;
    height: 38px;
    margin: 16px auto;
    padding: 0px 0px 0px 10px;
    border-radius: 2px;

}
.info_from{
    margin-top: 40px;
}
.info_input{
    width: 272px;
    height: 38px;
    font-family: "苹方Regular";
    font-size: 15px;
    background: initial;
    outline: none;
    border:0;
}
.clean_text{
    display:none;
    position: absolute;
    right: 10px;
    top: 0;
    line-height: 42px;
}
.input_focus{
    /*border: 1px solid rgb(160, 209, 255);*/
    box-shadow: 0px 0px 0px 1px rgb(160, 209, 255);
}
.input_btn{
    text-align: center;
}
.info_input:focus::-webkit-input-placeholder{
    color: rgba(0, 0, 0, 0.24);    
}
.from_submit{
    font-family: "苹方Regular";
    width: 282px;
    height: 42px;
    border: none;
    outline: none;
    color: white;
    font-size: 18px;
    background: rgb(136,206,47);
    border-radius: 2px;
    cursor: pointer;
    margin-bottom:40px;
}

.input_other{
    overflow:hidden;
    text-align: right;
}
.a_link{
    display:inline-block;
    margin:5px 2.5px;
    padding:0px 2.5px; 
    font-size:13px;
}
.a_link:hover{
    text-decoration:underline;
}
.remember_btn{
    position: absolute;
    left:0;
}
.register_btn{
    padding-right: 10px;
    border-right:1px solid rgba(0, 0, 0, 0.274); 
}
/******/
    .mod_header{    /*头部最外层div*/
        position: relative;
        margin: auto;
        top:-10px;
        height: 130px;
        min-height: 130px;
    }
    .section_inner{     /*inner区div*/
    
        position: relative;
        margin: auto;
        height: 150px;
        max-width: 1200px;
        min-width: 1200px;
    }
    .logo{          /*logo*/
        display: inline-block;
        width: 170px;
        line-height: 1.5;
    }
    .mod_top_nav{   /*顶部按钮组ul*/
        display: inline-block;
        position: absolute;
        top:-20px;
        margin-left:25px ;
        padding: 0;
        height: 92px;
    }   
    .top_nav_item{      /*顶部按钮组 li*/
        display: inline-block;
    }
    .ck_action{             /*选中按钮*/
        display: inline-block;
        background-color: #31C27C;
        height:90px;
        line-height: 90px;
        padding: 0px 20px;
        font-size: 20px;
        color:white;
    }
    .ck_link{           /*未选中按钮*/
        display: inline-block;
        background-color: white;
        height:90px;
        line-height: 90px;
        padding: 0px 20px;
        font-size: 20px;
        color:black;
    }
    .ck_link:hover{     /*鼠标滑过事件*/
         color: #31C27C;
    }

    .mod_top_subnav{        /*二级按钮组ul*/
        width: 990px;
        height: 50px;
        position: relative;
        top:-30px;
        padding: 0 0 0 210px;
        border-top: 1px solid rgba(0, 0, 0, 0.041)
    }
    .top_subnav_item{           /*二级按钮组li*/
        display: inline-block;
        height: 50px;
    }
    .ck_action_sub{         /*二级按钮选中*/
        display: inline-block;
        color: #31C27C;
        height: 50px;
        line-height: 50px;
        padding: 0px 20px;
    }
    .ck_link_sub{           /*二级按钮未选中*/
        display: inline-block;
        line-height: 50px;
        color:black;
        height: 50px;
        padding: 0px 20px;
    }
     .ck_link_sub:hover{     /*鼠标滑过事件*/
         color: #31C27C;
    }


    /********/
.mod_top_search{
    position:absolute;
    top:0px;
    right: 284px;
    padding-top: 25px;
}

.mod_search_input{       /*搜索框外层div*/
    display: inline-block;
    border: 1px solid thistle;
    border-radius:3px;      /*圆角边框 3px幅度*/
    width: 200px;
    height: 36px;
    padding: 0px 0px 0px 10px;  /*内边距left增加10px*/

}
.search_input{          /*搜索框input*/
    width: 80%;
    height: 34px;
    font-size: 14px;
    color: rgb(129, 131, 130);
    position: absolute;
    border: 0;
    line-height: 80px;      /*行高 60px*/
    outline:none;
}
.icon_img{     /*搜索确定按钮icon*/
    width: 22px;
}
.search_input_btn{          /*搜索按钮*/
    cursor:pointer;
    position: absolute;
    background: transparent;
    outline:none;   /*输入框焦点边框：去掉*/
    border: 0;
    top:32px;
    right: 0;
}


.js_smartbox{
    border: 1px solid rgba(0, 0, 0, 0.219);
    position: absolute;
    background-color: white;
    border-bottom-left-radius:2px; 
    border-bottom-right-radius:2px; 
    width: 210px;
    height: 220px;
    top:61px;
    right: 284px;
    z-index: 13;
    overflow: hidden;
}

.search_hot_list,.search_hot_list dd{
    margin:5px 0;
}
.search_hot_tit{
    display: none;
}

.search_hot_link{
    display: inline-block;
    padding-top:8px;
    padding-bottom:8px;  
    width: 100%;
}
.search_hot_link:hover{
    background-color: #31C27C;
}
.search_hot_link:hover span{
    color: white;
}
.search_hot_number{
    padding:0px 8px; 
    font-size: 14px;
    color: #ff4222;
}
.search_hot_name{
    font-size:15px; 
    color: rgb(0, 0, 0);
}
.search_hot_other{
    color: rgba(0, 0, 0, 0.767);
    font-size:12px; 
    display: inline-block;
    position: absolute;
    right: 0;
    padding: 2px 8px ;
}
/******************************************************/

.mod_top_login{             /*右侧按钮组总div*/
    position: absolute;
    height: 90px;
    top:0px;
    right:0;
}
.login_btns{
    position:relative;
    top:20px;
    
}
.dl_btn{    /*登录按钮*/
    display: inline-block;
    font-size: 16px;
    color: black;
    margin-right:15px ;
}
.ktlz_btn,.ktff_btn{    /*开通按钮*/
    display: inline-block;
    color: white;
    font-size: 13px;
    padding: 12px 10px;
    border-radius: 2px;
}
.ktlz_btn{
    background-color: #31C27C;

}
.ktff_btn{
    background-color: white;
    border: 1px solid rgba(51, 51, 51, 0.199);
    color: black;
}
.dl_btn:hover{
    color: #31C27C;
}
.ktlz_btn:hover{
    background-color: rgb(42, 163, 104);
}
.ktff_btn:hover{
    background-color: rgb(236, 236, 236);
}




/**************************/
.drop{
    animation: hide 0.2s 0.8s linear forwards;
}
.dropt{
        height: 0;
        opacity: 0;
}
.show{
    animation: show 0.1s linear forwards;
}
@keyframes hide
{
    from {
     opacity: 1;
     height: 220px;
        }
    to {  
        height: 0;
        opacity: 0;
    }
}
@keyframes show
{
    from {
        height: 0;
        opacity: 0;
        }
    to {  
     opacity: 1;
     height: 220px;
    }
}
</style>

