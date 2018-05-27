<template>
  <div id="index">
      <dHeader></dHeader>
      <router-view />
  </div>
</template>
<script>

import dHeader from '@/components/d_header.vue'

export default {
  name:'index',
  components:{
      dHeader
  }
}
</script>

