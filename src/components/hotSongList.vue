<template>
    <div class="mod_slide_box">
          <div class="setion_inner">
              <!--标题-->
              <div class="index_hd">
                  <h1 class="index_tit">
                    歌单推荐
                  </h1>
              </div>
              <!--切换-->
              <div class="mod_index_tab">
                  <a v-for="(tablist,index) in tabitems" :key="index" :href="tablist.href" :class="tablist.isaction?'tabaction tabbtn ':'tabitem tabbtn ' ">
                      {{ tablist.text }}
                  </a>
              </div>
              <!--轮播-->
              <div class="mod_slide">
                <div class="mod_ul_slide">
                    <ul class="slide__list" :style="left_doo"><!--卡片列表-->
                      <li class="slide_item" v-for="(list,index) in playlist" :key="index">

                          <div class="playlist__item_box"><!--卡片-->
                              <div class="mod_cover">
                                  <a :href="list.href">
                                      <img :src="list.imgpath" class="playlist__pic" :alt="list.text">
                                      <img class="playlist_btnpic" src="./../assets/icon/play_alt.png">
                                  </a>
                              </div>
                            <div class="playlist_info">
                                <h4 class="playlist__title">
                                  <span class="playlist__title_txt">
                                      <a class="js_playlist" :href="list.text">{{ list.text }}</a>
                                  </span>
                              </h4>
                              <div class="playlist__other">
                                      <span class="playlist__title_txt">
                                      <a class="js_other" :href="list.other">{{ list.other }}</a>
                                  </span>
                              </div>
                            </div>
                              
                          </div>
                      </li>
                  </ul>
                </div>
                  
                  
              </div>
              <!--轮播按钮-->
              <div class="mod_slide_switch js_switch">
                  <div class="slide_action_left" id="left_page">
                      <a href="javascript:;" class="slide_action_btn slide_left" @click="setSlide('left')">
                          <img src="./../assets/icon/left.png"  class="slide_left" />
                      </a>
                  </div>
                  <div class="slide_action_right" d="right_page">
                      <a href="javascript:;" class="slide_action_btn slide_right" @click="setSlide('right')">
                              <img src="./../assets/icon/right.png"  class="slide_right"  />
                      </a>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
    export default {
        name:"hotsonglist",
    data(){
        return{
            tabitems:[],
            playlist:[],
            left_doo:""
        }
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.$http.request('./../static/json/playlist1.json').then(response => {
                    this.tabitems = response.data.tabitems
                    this.playlist = response.data.playlist
                }, response => {
                    console.log(response)
                })
            
            },
            setSlide:function (page){
            if(page=="left")
                {
                    if(this.left_doo=="left:0%"){
                        this.left_doo="left:-100%"
                    }else{
                        this.left_doo="left:0%"
                    }
                }
                
            else if(page=="right")
                { 
                    if(this.left_doo=="left:-100%"){
                        this.left_doo="left:0%"
                    }else{
                        this.left_doo="left:-100%"
                    }
                    }
            }
        }
    }
</script>
<style scoped>
.mod_slide_box{
    position: relative;
    background: linear-gradient(rgb(242, 242, 242),rgb(255, 255, 255));
}
.setion_inner{      /*轮播头部*/
    height: 460px;
    text-align: center;
}
.index_hd{          /*轮播标题div*/
    height: 70px;
    padding: 14px 0 ;
    color: #333;
    text-align: center;
}
.index_tit{     /*轮播标题*/
    display: block;
    font-weight: bold;
    letter-spacing: 12px;
}

.mod_index_tab{     /*导航切换div*/
    text-align: center;
}
.tabbtn{        /*导航切换按钮*/
    margin: 0;
    padding: 35px 20px;
}
.tabaction{     /*导航按钮选中*/
    font-size: 15px;
    color: #31C27C;
}
.tabitem{        /*导航按钮未选中*/
    font-size: 15px;
    color: black;
}

a.tabitem:hover{    /*导航未选中按钮滑过变色*/
    color: #31C27C;
}



/*******/
.mod_ul_slide{  /*ul容器*/
    margin:auto;
    width: 1200px;
    overflow: hidden;
}
.slide__list{/*ul*/
    overflow: hidden; /*内容内敛 不溢出*/
    position: relative;
    height: 320px;
    width: 200%;
    text-align: left;

    transition: all 0.4s ease-in-out; 
}
.slide_item{   /*li*/
    display: inline-block; /*切换行内块元素*/
    position: relative;
    height: 280px;
    width: 224px;
    left:-45px;
    margin: 8px;

    text-align: left;
}

.playlist__item_box{   /*li内div卡片*/
     overflow: hidden; /*内容内敛 不溢出*/
     position: relative;
     height: 280px;
     width: 224px;
}

.mod_cover{         /*图片链接div*/
    height: 224px;
    position: relative;
    display: inline-block;
    overflow: hidden; /*内容内敛 不溢出*/
}
.playlist_info{         /*文字链接div*/
    display: inline-block;
    position: absolute;
    top:224px;
    margin: 0;
    width: 250px;
    height: 55px;
    text-align: left;
}


.playlist__pic{     /*卡片封面图片*/
    width: 224px;
    transition: all 0.4s linear;   /*动画过渡*/
}
.playlist_btnpic{       /*播放按钮*/
    pointer-events:none;    /*将图标进行穿透*/
    display: block; 
    position: absolute;     

    opacity: 0;
    top:40%;
    left:40%;

    width: 50px;



    transition: all 0.4s ease-in-out; 
}


img.playlist__pic:hover{    /*封面图片滑过*/
    transform: scale(1.1,1.1); /*放大*/
    filter: brightness(80%);/* 使图片变暗 */

}
img.playlist__pic:hover+.playlist_btnpic{    /*play图标随背景一起发生hover事件*/
   opacity: 1;
   transform: scale(1.3,1.3);
}


.playlist__title{   /*卡片链接*/
    margin:0 0 3px 0;
    width: 224px;
    position: relative;
    top:12px;
}
.playlist__other,.js_other{       /*卡片其他信息*/
    position: relative;
    top:4px;
    bottom:0px;
    font-size: 14px;
    color: #999;
    font-weight: normal;
}
.js_playlist{  /*卡片链接和其他信息共有属性*/
    font-size: 14px;
    color: #333;
    font-weight: normal;
}
a.js_playlist:hover{    /*卡片链接滑过*/
    color:#31C27C
}
/********/
.mod_slide_switch{

  /*border: 12px solid rgb(64, 0, 241);*/
    position: absolute;
    top :150px;
    width: 100%;
    height: 400px;
    overflow: hidden;
    pointer-events:none;    /*将div进行穿透*/
}
.setion_inner:hover .slide_action_left{
    left:0px;
}
.setion_inner:hover .slide_action_right{
    right: 0px;
}

.slide_action_btn{          /*翻页按钮*/
    display: block;
    margin-top: 60px; 
    background: rgba(0, 0, 0, 0.055);
    pointer-events:visible ;

}
.slide_action_btn:hover{
    background: rgba(0, 0, 0, 0.137);
}
.slide_action_left{             /*左翻页按钮*/
    position: absolute;
    left:-90px;
    transition: all 0.4s ease-in-out;    /*保持过渡*/
}
.slide_action_right{            /*右反翻页按钮*/
    position: absolute;
    right:-90px;
    transition: all 0.4s ease-in-out;    /*保持过渡*/
}
.slide_left,.slide_right{       /*按钮图片*/
    padding: 15px 9px;
}
/********/

</style>