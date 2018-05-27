<template>
      <div class="main">
          <div class="mod_data">
              <span class="data_cover">
                  <img class="data_photo" src="./../../static/img/300.jpg"/>
              </span>

                <div class="data_cont">
                    <h1 class="data_name_txt">
                        每日新歌：金志文新单献唱莽荒纪
                    </h1>

                    <div class="data_singer">
                            <a href="javascript:;" class="data_singer_txt">QQ音乐新歌推荐</a>
                    </div>

                    <ul class="data_info">
                        <li class="data_info_item">
                            <div>
                                <span>标签：</span>
                                <a href="javascript:;" class='data_singer_txt'>国语</a>
                            </div>
                        </li>
                        <li class="data_info_item">播放量：13.8万</li>
                        <li class="data_info_item">收藏量：150</li>
                    </ul>

                    <div class="data__actions">
                        <a class="mod_btn_green" href="javascript:;">
                            播放全部
                        </a>
                        <a class="mod_btn" href="javascript:;">
                            收藏
                        </a>
                        <a class="mod_btn" href="javascript:;">
                            评论
                        </a>
                        <a class="mod_btn" href="javascript:;">
                            更多
                        </a>
                    </div>
                </div>
          </div>

          <div class="detail_layout">
              <div class="detail_layout_main">
                  <div class="mod_songlist">

                    <ul class="songlist_header">
                        <li class="onglist_edit">
                            <input type="checkbox" />
                        </li>
                        <li class="songlist_header_name">
                            歌曲
                        </li>
                        <li class="songlist_header_author">歌手</li>
                        <li class="songlist_header_album">专辑</li>
                        <li class="songlist_header_time">时长</li>
                    </ul>

                    <ul class="songlist_list">
                        <li v-for="(list,index) in songlist" :key="index" :class="index%2!=0?'list_gray':'list_white'">
                            <div class="songlist_item">
                                <div class="songlist_edit">
                                    <input type="checkbox" />
                                </div>
                                <div class="songlist_number">
                                    {{ index+1 }}
                                </div>
                                <div class="songlist_songname">
                                   {{ list.MusicName }}
                                </div>
                                <div class="mod_list_menu">
                                        123
                                </div>
                                <div class="songlist_artist">
                                   {{ list.singer }}
                                </div>
                                <div class="songlist_album">
                                   {{ list.album }}
                                   </div>
                                <div class="songlist_time">
                                   {{ list.songTime }}
                                   </div>
                            </div>
                        </li>
                    </ul>
                  </div>
              </div>

              <div class="detail_layout__other">
                  <h3>简介</h3>
                  <div class="about_cont">
                      <p>
                          电影《超时空同居》发布电影主题曲《不要忘了我》，
                          雷佳音首度开唱，佟丽娅娓娓合声，金志文新单《莽荒》献唱电视剧《莽荒纪》片头曲；
                          五月天开黑战歌《I will carry you》炸裂上线，来不及解释了，快上车；马叔新单阳光明媚风；
                          张碧晨新歌为世界调色；卡妹魅力声线打造新单；为社长和山花新单爆灯；林肯公园大麦为爱发声；
                          胡夏新歌挑战超宽音域；宇多田光2018回归首单；韩红林俊杰惊艳合作；EXO超级小分队CBX发歌了；
                          张靓颖迷幻电子唱贪恋；陈伟霆新歌尽显王者风范；尹美莱说唱SWAG爆棚；许嵩精雕细琢清甜情歌；
                          黄子韬引领C-POP潮流；徐良李玉刚首次合唱；五月天重译后来的我们；大张伟可爱新歌超治愈；
                          听于文文娓娓道来；成龙十六年后重返歌坛；陈奕迅献唱后来的我们；李健温情演绎游子情；
                          麻辣鸡COS春丽超slay；汪苏泷电气摇滚新风格；卡里文杜丽帕给你一个吻；旋风爸比林志颖亲情主打；
                          李玉刚再展双声唱法；遇见BTS遇见更好的自己；郑恺催情演绎好久不见；汪苏泷助阵南方有乔木；
                          流行歌者李宇春唱流行；田馥甄爱了很久的朋友；李玉刚音乐境界再突破；张杰献声远大前程；
                          燕姿和你说半句再见；GAGA女士送你一支歌；赵东林&三姨新曲爆可爱；金志文新歌助你乘风破浪;
                          南征北战唱响远大前程;汪苏泷深情献唱影视插曲；神话出道20周年快乐;Alan Walker助阵电影热单；
                          听萌德新曲度周末；群星化身名侦探强势集结；Alan Walker助阵电影热单；曲婉婷归来释放音乐魅力；
                          听古巨基定义成熟男人；凤凰传奇唱响华夏传说；Rihanna热单混音出炉；林志颖挚爱主打深情绽放；
                          Kygo携Miguel强势合作；烟鬼新单依旧强势等音源新鲜出炉，同样的主题，更深的领悟。
                          这张最新鲜的歌单里，我们为你挑好了每日高品质好歌！
                      </p>
                  </div>
                  <a href="javascript:;">[更多]</a>
              </div>
              
          </div>
      </div>
</template>

<script>
export default {
    name:'songinfo',
    data(){
        return{
            songlist:[]
        }
        },
        mounted(){
            this.getData()
        },
        methods:{
            getData(){
                this.$http.request('./../static/json/songlist.json').then(response => {
                    this.songlist = response.data.songlist
                }, response => {
                    console.log(response)
                })
            
            }
        }
}
</script>

<style scoped>
    .main{     /*容器*/
        height: 1000px;
        /*background: linear-gradient(rgb(235, 235, 235),rgb(253, 253, 253));*/
    }
    .mod_data{    /*头部*/
        margin: auto;
        position: relative;
        width: 1200px;
        height: 300px;
        min-width: 1200px;
        min-height: 300px
    }
    .data_cover{    /*span*/
        display: inline-block;
        margin-top: 35px;
    }
    .data_photo{        /*专辑或歌单img*/
        width: 250px;
        height: 250px;
    }

    .data_cont{     /*专辑或者歌单信息*/
        position: absolute;
        margin-left:25px;
        margin-top: 55px; 
        top:0;
        right:0;
        height: 160px;
        width: 900px;

    }
    .data_name_txt{  /*专辑标题*/
        font-weight: normal;
        display: inline;
    }
    .data_singer{   /*创建者*/
        margin: 10px 0px;
    }
    .data_singer_txt{   /*创建者a*/
        color: black
    }
    .data_singer_txt:hover{
        color:#31C27C
    }
    .data_info{
        list-style-type: none;
        padding: 0;
        margin-top: 5px
    }
    .data_info_item{
        font-size: 13px;
        margin: 8px 0px;
    }


    /*按钮组*/

    .mod_btn_green{ /*绿色按钮*/
        display: inline-block;
        background-color: #31C27C;
        color: white;
        padding: 8px 30px;
        border-radius: 2px;
    }
    .mod_btn{       /*白色按钮*/
        display: inline-block;
        color: black;
        padding: 8px 45px;
        border: 1px solid thistle;
        border-radius: 2px;
    }
    .mod_btn_green:hover{  /*绿色按钮变色*/
        background-color: rgb(43, 173, 111);
    }
    .mod_btn:hover{     /*白色按钮变色*/
        background-color: rgb(231, 227, 227);
    }




    /*****列表*****/

    .detail_layout{     /*详情容器*/
        margin: auto;
        position: relative;
        width: 1200px;
        height: 600px;
        min-width: 1200px;
    }
    .detail_layout_main{    /*列表加评论*/
        float: left;
        width: 860px;
        height: 600px;
    }

    .mod_songlist{      /*表头容器*/
        width: 860px;
        height: 400px;
    }

    .songlist_header{       /*表头ul*/
        height: 50px;
        line-height: 50px;
        background-color: rgba(221, 221, 221, 0.479);
    }
    .songlist_header>li{    /*表头li*/
        list-style-type: none;
        display: inline-block;
        position: relative;
    }
    .onglist_edit{      /*多选框*/
        width: 40px;
        left: -40px;
    }
    .songlist_header_name{  /*歌曲名*/
        width: 350px;
    }
    .songlist_header_author,.songlist_header_album{/*作者  专辑*/
        width: 135px;
    }
    .songlist_header_time{/*时长*/
        width: 50px;
        left:40px;
    }

    /***********************/

    .songlist_list{/*表身ul*/
        position: relative;
        padding: 0;
        top:-16px;
    }
    .songlist_list>li{  /*表身li*/
        list-style-type: none;
        display: inline-block;
        position: relative;
        width: 857px;
    }
    .songlist_edit,.songlist_number,.songlist_songname,.mod_list_menu,.songlist_artist,.songlist_album,.songlist_time{
        /*选择 条目数 歌曲名 悬浮菜单 作者 专辑 时长*/
        overflow: hidden; 
        display: inline-block;
        height: 50px;
        line-height: 50px;
    }
    .list_gray{/*表身奇数变色*/
        background-color: rgba(221, 221, 221, 0.479);
    }
    .list_white{/*表身偶数变色*/
        background-color: white;
    }
    .songlist_edit{ /*选择*/
        width: 40px;
    }
    .songlist_songname{/*歌曲名*/
        left: 20px;
        width: 350px;
    }
    .songlist_number{/*条目数 */
        width: 34px;
    }
    .mod_list_menu{/*悬浮菜单*/
        display: none;
        width: 200px;
    }
    .songlist_artist{/*作者*/
        width: 135px;
    }
    .songlist_album{/*专辑*/
        width: 135px;
    }
    .songlist_time{/*时长*/
        margin-left: 40px;
        width: 50px;
    }

    /*******************************/

    .detail_layout__other{/*其他信息*/
        float: left;
        position: relative;
        top:20px;
        left: 50px;
        width: 290px;
        height: 200px;
    }
    .detail_layout__other>h3{/*标题*/
        margin: 0;
        font-size: 22px;
        font-weight: normal;
    }
    .about_cont{/*内容*/
        position: relative;
        top:5px;
        height: 95px;
        font-size: 15px;
        overflow: hidden;
    }
</style>
