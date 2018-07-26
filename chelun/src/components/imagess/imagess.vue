<template>
    <div id="imagess">
        <div class="imagesContent">
            <div class="imageBox" v-for="v in imagesList">
                <img v-lazy="url(v.Url)" alt=""  @click="goBanner(v.Id)">
            </div>
        </div>
    </div>
</template>
  <script>
  export default {
    name: 'App',
    data(){
        return {
            imagesList : []
        }
    },
    created() {
        fetch(`https://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=${this.$route.params.id}`).then(res=>res.json()).then(res=>{
            this.imagesList = res.data.List
            console.log(res.data)
        })
    },
    methods:{
      url(url){
          let reg = /\{0\}/
          let str = url.replace(reg,1)
          return str
      },
      goBanner(id){
            console.log(id)
            this.$router.push(`/banner/${this.$route.params.id}`)
        }
    }
}
  </script>
    
  <style src="./imagess.css">

  </style>
  