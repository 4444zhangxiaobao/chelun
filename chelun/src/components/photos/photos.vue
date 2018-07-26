<template>
    <div class="photos">
        <div class="topt">
            <p>颜色</p>
            <p @click="gocarK">车款</p>
        </div>
        <div class="centerc">
            <div class="photoImg"v-for="(v,i) in photosList">
                <div class="img" >
                    <div class="imgList" v-for="(val,i) in v.List">
                            <div class="mark" v-if="i==0">
                                <p>{{v.Name}}</p>
                                <p @click="goImages(v.Id)">{{v.Count}}张</p>
                            </div>
                        <img v-lazy="url(val.Url)" @click="goBanner(v.Id)" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
      name: 'App',
      data(){
        return {
            photosList : []
           }
       },
       created() {
           
           fetch(`https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${this.$route.params.id}`).then(res=>res.json()).then(res=>{
               this.photosList = res.data
           })
       },
       methods:{
           url(url){
               let reg = /\{0\}/
               let str = url.replace(reg,1)
               return str
           },
           gocarK(){
               this.$router.push(`/carK/${this.$route.params.id}`)
           },
           goImages(id){
               this.$router.push(`/imagess/${this.$route.params.id}&ImageID=${id}`)
           },
           goBanner(id){
            this.$router.push(`/banner/${this.$route.params.id}&ImageID=${id}`)
           }
       }
    }
</script>
<style src="./photos.css">
  
</style>