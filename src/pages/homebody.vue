<template>
  <div class="mainBody">
      <!--热门歌单-->
      <hotsonglist></hotsonglist>
      <!--新歌首发-->
      <newsonglist></newsonglist>
      <!--精彩推荐-->
      <focusBox></focusBox>
      <!--新碟首发-->
      <newcd></newcd>
      <!--排行榜-->
      <topn></topn>
  </div>
</template>
<script>
import hotsonglist from '@/components/hotSongList.vue'
import newsonglist from '@/components/newsonglist.vue'
import focusBox from '@/components/focus_box.vue'
import newcd from '@/components/newcd.vue'
import topn from '@/components/topn.vue'
export default {
  name:'mainBody',
  components:{
      hotsonglist,
      newsonglist,
      focusBox,
      newcd,
      topn
  }
}
</script>
