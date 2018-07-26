<template>
    <div class="banner">
        <!-- @click="hide" ref="hidden" -->
        <div class="swiper-container banners">
            <div class="swiper-wrapper list">
                <div class="swiper-slide lists" v-for="(v,i) in bannerList" @click="gogogo">
                    <img :src="url(v.Url)" alt="" height="100%">
                    <p><span>{{i+1}}</span>/<span>{{count}}</span></p>
                </div>
            </div>
        </div>
        <div class="page">
            <div class="pages">
                <h4 @click="gobottomPrice">询问底价</h4>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        name : 'banner',
        data(){
            return {
                bannerList : [],
                count : 0,
                countBefore:0
            }
        },
        created() {
            fetch(`https://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=${this.$route.params.id}`).then(res=>res.json()).then(res=>{
                this.bannerList = res.data.List
                this.count = res.data.Count
            })
        },
        methods : {
            url(url,i){
               let reg = /\{0\}/
               let str = url.replace(reg,1)
               return str
            },
            gobottomPrice(){
                this.$router.push(`/bottomPrice/${this.$route.params.id}`)
            },
            gogogo(){
                this.$router.back()
            }
            // hide(){
            //     console.log(this.$refs.hidden.style.display = 'none')
            // }
        },
        mounted() {
            new Swiper('.swiper-container', {
                initialSlide :0,
                loop: true,
                speed: 400,
                // autoplay: 2000,
                autoplayDisableOnInteraction: false,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true//修改swiper的父元素时，自动初始化swiper
                })       
        }
        
    }
</script>
<style src="./banner.css"></style>