<template>
    <div class="mod_slide_box">
          <div class="setion_inner">
              <!--标题-->
              <div class="index_hd">
                  <h1 class="index_tit">
                    排行榜
                  </h1>
              </div>
              <!--轮播-->
              <div class="mod_slide">
                <div class="mod_ul_slide">
                    <ul class="slide__list" ><!--卡片列表-->
                      <li class="slide__item" v-for="(list,index) in topnlist" :key="index">
                          <div class="playlist__item_box"><!--卡片-->
                              <div class="mod_cover">
                                  <a href="#">
                                      <img :src="list.imgpath" class="playlist__pic" :alt="list.toptext">
                                      <img class="playlist_btnpic" src="./../../static/icon/play_alt.png">
                                      <img class="line_pic" src="./../assets/icon/line.png">
                                  </a>
                              </div>
                            <div class="playlist_info">
                                <h4 class="playlist__title">
                                  <span class="playlist__title_txt">
                                      巅峰榜
                                  </span>
                              </h4>
                              <div class="playlist__other">
                                      <span class="playlist__title_txt2">
                                          {{ list.toptext }}
                                      </span>
                              </div>
                            </div>
                            <div class="topnlist">
                                <ul class="mod_top_list">
                                    <li class="mod_top_item" v-for="(songlist,index) in list.song" :key="index">
                                            <div class="toplist_number">{{ index+1 }}</div>
                                            <div class="toplist_songname">{{ songlist.songname }}</div>
                                            <div class="toplist_artist"> {{ songlist.singer }}</div>
                                    </li>
                                    
                                </ul>

                            </div>
                              
                          </div>
                      </li>
                  </ul>
                </div>
                  
                  
              </div>
             
          </div>
      </div>
</template>

<script>
    export default {
        name:"topn",
    data(){
        return{
            topnlist:[],
            playlist:[]
        }
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.$http.request('./../static/json/topn.json').then(response => {
                   
                    this.topnlist=response.data.topn
                    this.playlist = response.data.topn.song
                }, response => {
                    console.log(response)
                })
            
            }
        }
    }
</script>
<style scoped>
.mod_slide_box{
    position: relative;
}
.setion_inner{      /*轮播头部*/
    background: linear-gradient(rgb(235, 235, 235),rgb(253, 253, 253));
    height: 550px;
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
.slide__list{/*ul*/
    overflow: hidden; /*内容内敛 不溢出*/
    position: relative;
    height: 600px;
    width: 200%;
    text-align: left;

    transition: all 0.4s ease-in-out; 
}
.slide__item{   /*li*/
    display: inline-block; /*切换行内块元素*/
    position: relative;
    height: 500px;
    width: 224px;
    left:-45px;
    margin: 8px;

    text-align: left;
}

.playlist__item_box{   /*li内div卡片*/
     overflow: hidden; /*内容内敛 不溢出*/
     position: relative;
     height: 500px;
     width: 224px;
}

.mod_cover{         /*图片链接div*/
    position: relative;
    display: inline-block;
    overflow: hidden; /*内容内敛 不溢出*/
}
.playlist_info{         /*文字链接div*/
    display: inline-block;
    color: white;
    pointer-events:none;
    position: absolute;
    top:20px;
    margin: 0;
    width: 224px;
    height: 75px;
    text-align: center;
}


.playlist__pic{     /*卡片封面图片*/
    width: 224px;
    height: 500px;
    filter: blur(100px);
    transition: all 0.4s linear;   /*动画过渡*/
}
.playlist_btnpic{       /*播放按钮*/
    pointer-events:none;    /*将图标进行穿透*/
    display: block; 
    position: absolute;   
    opacity: 0;
    top:22%;
    left:40%;

    width: 38px;
    height: 38px;


    transition: all 0.4s ease-in-out; 
}


.line_pic{
    pointer-events:none;    /*将图标进行穿透*/
    display: block; 
    position: absolute; 
    top:24%;
    left:40%;
    width: 38px;
    height: 15px;
    opacity: 1;
    transition: all 0.1s ease-in-out; 
}
img.playlist__pic:hover{    /*封面图片滑过*/
    transform: scale(1.05,1.05); /*放大*/
    /*filter: brightness(80%);/* 使图片变暗 */

}
img.playlist__pic:hover+.playlist_btnpic{    /*play图标随背景一起发生hover事件*/
    opacity: 1;
    transform: scale(1.3,1.3);
}
img.playlist__pic:hover+.playlist_btnpic+img.line_pic{    /*play图标随背景一起发生hover事件*/
    opacity: 0;
}

.playlist__title{   /*卡片链接*/
    color: white;
    margin:0 0 3px 0;
    width: 224px;
    position: relative;
    top:12px;
}
.playlist__title_txt2{
    position: relative;
    top:8px;
     color: white;
    font-size: 26px;
    font-weight: normal;
    color: white;
}
.playlist__other{    /*卡片其他信息*/
    color:white;
    position: relative;
    top:4px;
    font-weight: normal;
}
/********/
.playlist__title_txt{
    font-size: 22px;
    font-weight: normal;
    color: white;
}

.topnlist{  /*排行榜div*/
    position: absolute;
     pointer-events:none;
    top:160px;
    height: 340px;
    width:300px;
}
.mod_top_list{          /*top ul*/
    pointer-events:none;
    display: inline-block;
    list-style-type: none;
    padding: 0px 20px;
    width: 180px;
}
.mod_top_item{          /*top li*/
    color: white;
    display: inline-block;
    position: relative;
    margin: 5px 0;
    width: 224px;
    height: 50px;
}
.toplist_number{
    float: left;
    text-align: center;
    width: 20px;
    padding:2px 2px;
}
.toplist_songname{
    width: 195px;
    padding:2px 2px;
    float: left;
}
.toplist_artist{ 
    float: left;
    width: 180px;
    padding: 6px 25px;
}
/********/

</style>