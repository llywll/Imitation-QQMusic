<template>
    <div class="mod_slide_box">
          <div class="setion_inner">
              <!--标题-->
              <div class="index_hd">
                  <h1 class="index_tit">
                    精彩推荐
                  </h1>
              </div>
              <!--轮播-->
              <div class="mod_slide">
                <div class="mod_ul_slide">
                    <ul class="slide_list" :style="left_doo"><!--卡片列表-->
                      <li class="slide_item" v-for="(list,index) in playlist" :key="index">

                          <div class="playlist_item_box"><!--卡片-->
                              <div class="mod_cover">
                                  <a :href="list.href">
                                      <img :src="list.imgpath" class="playlist_pic" :alt="list.text">
                                  </a>
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
        name:"focusBox",
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
                this.$http.request('./../static/json/focus.json').then(response => {
                    this.tabitems = response.data.tabitems
                    this.playlist = response.data.newsonglist
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
    background: linear-gradient(rgb(235, 235, 235),rgb(253, 253, 253));
    max-width: 100%;
    min-width: 100%;
}
.setion_inner{      /*轮播头部*/
    height: 400px;
    margin: auto;
    max-width: 100%;
    min-width: 100%;
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




/*******/
.mod_ul_slide{  /*ul容器*/
    margin:auto;
    width: 1200px;
    overflow: hidden;
}
.slide_list{/*ul*/
    overflow: hidden; /*内容内敛 不溢出*/
    position: relative;
    height: 260px;
    width: 200%;
    text-align: left;

    transition: all 0.4s ease-in-out; 
}
.slide_item{   /*li*/
    display: inline-block; /*切换行内块元素*/
    position: relative;
    height: 220px;
    width: 570px;
    left:-45px;
    margin: 14px;

    text-align: left;
}

.playlist_item_box{   /*li内div卡片*/
     overflow: hidden; /*内容内敛 不溢出*/
     position: relative;
     height: 220px;
     width: 570x;
}

.mod_cover{         /*图片链接div*/
    position: relative;
    display: inline-block;
}
.playlist_info{         /*文字链接div*/
    display: inline-block;
    position: absolute;
    top:0px;
    left:110px;
    margin: 0;

    width: 250px;

    text-align: left;
}


.playlist_pic{     /*卡片封面图片*/
    height: 220px;
    width: 570px;
     
}


.playlist_title{   /*卡片链接*/
    margin:0 0 3px 0;
    width: 224px;
    position: relative;
    top:25px;
}
.playlist_other,.js_other{       /*卡片其他信息*/
    position: relative;
    top:12px;
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

.other_time{
    top:-10px;
    left:220px;
}
a.js_playlist:hover{    /*卡片链接滑过*/
    color:#31C27C
}
/********/
.mod_slide_switch{
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
    margin-top: 35px; 
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