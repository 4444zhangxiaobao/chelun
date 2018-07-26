<template>
    <div class="bottomPrice">
        <div class="btop">
            <!-- {{bottomList.details.car_name}} -->
            <dl @click="gocarK" v-if="bottomList.details">
                <dt><img :src="bottomList.details.serial.Picture" alt=""></dt>
                <dd>
                    <h4>{{bottomList.details.serial.AliasName}}</h4>
                    <p>
                        <span>{{bottomList.details.market_attribute.year}}</span>
                        <span>{{bottomList.details.car_name}}</span>
                        <b> > </b>
                    </p>
                </dd>
            </dl>            
        </div>
        <div class="bcenter">
            <div class="ctop">个人信息</div>
            <p>姓名<input type="text" placeholder="请输入你的真实中文姓名" v-model="name"></p>
            <p>手机<input type="text" placeholder="请输入你的真实手机号码" v-model="num"></p>
            <p @click="goCity">城市<span>{{cityName}}</span></p>
            <button class="btn" @click="clicks">询问最低价</button>
        </div>
        <div class="bfooter">
            <div class="ftop">选择报价经销商</div>
            <div class="fcenter" v-for="v in bottomList.list">
                <p><input type="radio"></p>
                <dl>
                    <dt>
                        <p>{{v.dealerShortName}}</p>
                        <h6>{{v.address}}</h6>
                    </dt>
                    <dd>
                        <h6>{{v.promotePrice}}万</h6>
                        <h5>售{{v.saleRange}}</h5>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : '',
        data(){
            return {
                bottomList : [],
                cityName:'北京',
                name : '',
                num : '',
                user : {
                    name : 'zxb',
                    num : 123
                }
            }
        },
        created() {
            // console.log(this.$route.params.car_id)
            fetch('https://baojia.chelun.com/v2-dealer-alllist.html?carId=126282&cityId=201&_1531123411691').then(res=>res.json()).then(res=>{
                this.bottomList = res.data
                console.log(res.data)
            })
            this.cityName = window.sessionStorage.getItem('cityName')
        },
        methods : {
            goCity(){
                this.$router.push(`/city/${this.$route.params.id}`)
            },
            gocarK(){
               this.$router.push(`/carK/${this.$route.params.id}`)
            },
            clicks(){
                if(this.name === ''){
                    alert('请输入姓名')
                }else if(this.num === ''){
                    alert('请输入手机号')
                }else{
                    this.$router.push('/login')
                }
            }
        }
    }
</script>
<style src="./bottomPrice.css">
    /* *{
        padding:0;
        margin:0;
        list-style:none;
    }
    .bottomPrice{
        width:100%;
        height:100%;
        background:#eee;
    } */
</style>