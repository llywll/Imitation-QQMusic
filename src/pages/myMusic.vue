<template>
  <div class="my_music">
      <ul v-for="(list,index) in users" :key="index">
        <li>{{ index }},{{ list.name }}</li>
        <li>{{ index }},{{ list.sex }}</li>
        <li>{{ index }},{{ list.age }}</li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"myMusic", 
  data(){
      return{
        users:[]

      }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            this.$http.request('http://localhost:3000/mymusic').then(response => {
                this.users = response.data.user
                console.log(this.users)
            }, response => {
                console.log(response)
            })
        },
        setAction(index){
            console.log(index)
        }
    }
}
</script>
