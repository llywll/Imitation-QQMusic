<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name:"app"
}
</script>

<style >
    @font-face{
        font-family: '苹方Bold';
        src: url('/static/font/pingFangBold.ttf');
    }
    @font-face {
        font-family: '苹方Light';
        src: url('/static/font/pingFangLight.ttf');
    } 
    @font-face {
        font-family: '苹方Heavy';
        src: url('/static/font/pingFangHeavy.ttf');
    }
    @font-face {
        font-family: '苹方Regular';
        src: url('/static/font/pingFangRegular.ttf');
    }
  #app{
      margin: 8px 0 0;  /*中间组件总div*/
      height: 100%;
      }
  body{
        height: 1000px;
        margin: 0;
        font-family: '苹方Regular';
      }
    a{      /*为所有超链接去掉下划线*/
        text-decoration:none;
      } 
    .zhezhao{
        position: absolute;
        margin: -10px;
        z-index: 999999;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.192)
    }
    .divdialog{
        width: 500px;
        height: 500px;
        background: rgba(255, 255, 255, 0.863);
        border:1px solid #31C27C;
    }

/*******滑动条******/
::-webkit-scrollbar
{
    width: 8px;
    height: 2px;
    background-color: white;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    background-color: rgba(51, 51, 51, 0.308);
}

/*****************/
</style>
