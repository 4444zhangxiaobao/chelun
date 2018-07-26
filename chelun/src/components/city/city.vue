<template>
    <div class="city">
       <div class="cityOne">
            <div class="cityTop">
                <h4>自动定位</h4>
                <p>北京</p>
            </div>
            <div class="cityCenter">
                <h5>省市</h5>
                    <p v-for="v in cityList" @click="second(v.CityID)"> 
                        <span @click="toggle">{{v.CityName}}</span>
                        <b> > </b>                                          
                    </p>
            </div>
       </div>
        <div class="erjMark" v-show="isShow">
            <div class="marCenter">
                <p v-for="v in sList" @click="add">{{v.CityName}}</p>
            </div>
        </div>
    </div>
</template>
<script>
   export default {
        name : 'App',
        data(){
            return {
                cityList : [],
                sList : [],
                isShow : false,
                cityC : []
            }
        },
        created() {
            fetch('https://baojia.chelun.com/v1-city-alllist.html?_1531182231983').then(res=>res.json()).then(res=>{
                this.cityList = res.data
            })
        },
        methods : {
            second(id){
                fetch(`https://baojia.chelun.com/v1-city-alllist.html?provinceid=${id}`)
                .then(res=>res.json()).then(res=>{
                    this.sList = res.data
                })
            },
            toggle:function(){
                this.isShow = !this.isShow;
            },
            add:function(e){
                let cityName = e.target.outerText
                // window.localStorage  永久存储，除非自己删除，否则不会消失
                // window.sessionStorage  临时存储，当关闭浏览器时会删除
                window.sessionStorage.setItem('cityName',cityName)
                this.$router.push(`/bottomPrice/${this.$route.params.id}`)
            }
        }
    }
</script>
<style src="./city.css"></style>
