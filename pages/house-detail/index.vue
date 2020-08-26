<template>
    <div ref="cscs" class="housedetail">
        <div class="housebannarimg">
<!--            <div class="goback" @click="goback">-->
<!--                <img src="../../assets/images/public/backwhite.svg" alt="">-->
<!--            </div>-->
            <div class="swiperimg">
                <van-swipe style="height: 100%" ref="vanswipe">
<!--                    <van-swipe-item  v-if="panorashow" :style="{ 'background-image': 'url(' + linkurl+typebannerimg + ')','background-repeat':'no-repeat','background-size':'cover' }">-->
<!--                        <a :href="'https://www.inyihome.com/forword/view3d?'+housedata.houseno">-->
<!--                            &lt;!&ndash;<img :src="linkurl+typebannerimg" alt="">&ndash;&gt;-->
<!--                            <img class="panoricon" src="../../assets/images/house/housedetail360.svg" alt="">-->
<!--                        </a>-->
<!--                    </van-swipe-item>-->
<!--                    <van-swipe-item v-if="videoshow" :style="{ 'background-image': 'url(' + linkurl+typebannerimg + ')','background-repeat':'no-repeat','background-size':'cover' }">-->
<!--                        <a :href="'https://www.inyihome.com/forword/viewvideom?'+housedata.houseno">-->
<!--                            &lt;!&ndash;<img :src="linkurl+typebannerimg" alt="">&ndash;&gt;-->
<!--                            <img class="videoicon" src="../../assets/images/house/housedetailvideo.svg" alt="">-->
<!--                        </a>-->
<!--                    </van-swipe-item>-->
                    <template v-for="bannarimg in userCheckUrl">
                        <van-swipe-item :key="bannarimg.id" :style="{ 'background-image': 'url(' + yihomeGlobalVariable+bannarimg.imgurl + ')','height':'100%','background-repeat':'no-repeat','background-size':'cover' }">
                        </van-swipe-item>
                    </template>
                    <div class="custom-indicator" slot="indicator">
<!--                        <span v-if="panorashow" class="panoramabtn" @click.stop="gopanorma">全景</span>-->
<!--                        <span v-if="videoshow" class="videobtn" @click.stop="govideo">视频</span>-->
                        <span class="photobtn">图片</span>
                    </div>
                </van-swipe>
            </div>
            <!-- 收藏 -->
            <div class="collectbtn">
                <img v-if="iscollect" @click="collectbtn" src="../../assets/images/collects.svg" alt />
                <img v-else @click="collectbtn" src="../../assets/images/collect.svg" alt />
            </div>
            <span class="bottomadorn"></span>
        </div>
        <div class="houseinfobox">
            <!-- 基本信息 -->
            <div class="housebasicinfo">
                <div class="basicinfotop">
                    <div class="housetitle">{{houseInfo.name}}</div>
                    <a class="mapicon" @click="mapshow(housedata.id)">
                        <img src="../../assets/images/gomap.svg" alt />
                    </a>
                </div>
                <div class="basicinfobottom">
                    <span v-if="housedata.housetypeid=='147'" class="tag">{{housedata.bedcount}}室{{housedata.stoolcount}}卫{{housedata.washcount}}浴</span>
                    <span
                            v-for="itemtag of housedata.tag"
                            :style="{'background':itemtag.color}"
                            :key="itemtag.id"
                            class="tag"
                    >{{itemtag.name}}</span>
                </div>
            </div>

            <!-- 房源概括 -->
            <div class="houserecap">
                <p class="basictitle">房源概况</p>
                <div class="recapinfobox">
                    <div class="recapinfoitem" v-if="housedata.houseno!=''">
                        <img src="../../assets/images/overviewcard.svg" alt />
                        <span>{{houseInfo.no}}</span>
                    </div>
                    <div class="recapinfoitem" v-if="housedata.school!=null">
                        <img src="../../assets/images/nearbyschool.svg" alt />
                        <div>
              <span
                      v-for="(itemschool,ind) in schoolCheckLabel"
                      :key="ind"
              >{{itemschool.name}}、</span>
                        </div>
                    </div>
                    <div class="recapinfoitem" v-if="houseInfo.address!=null">
                        <img src="../../assets/images/overviewaddress.svg" alt />
                        <span>{{houseInfo.address}}</span>
                    </div>
                    <div class="recapinfoitem" v-if="houseInfoDescCh.info!=null">
                        <img src="../../assets/images/overviewicon.svg" alt />
                        <div class="itemtext">
                            <div ref="housedec" class="housedec">
                                <span v-html="houseInfoDescCh.info"></span>
                            </div>
                            <p v-if="isrecapmore" @click="recapmore($event)" class="morebtn">查看更多</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 配套设施 -->
            <div class="housefacility">
                <p class="basictitle">配套设施</p>
                <div class="facilityiconbox">
                    <div
                            v-for="(facilitytag,i) in userCheckLabel1.slice(0,9)"
                            :key="i"
                            class="facilityicon"
                    >
                        <img :src="yihomeGlobalVariable+facilitytag.img" alt />
                        <span>{{facilitytag.labelDetalName}}</span>
                    </div>
                    <div
                            class="facilityicon"
                            @click="facilityshow=true"
                            v-if="userCheckLabel1.length>=9"
                    >
                        <img src="../../assets/images/facilitymore.svg" alt />
                    </div>
                </div>
            </div>

            <div class="housefacility">
                <p class="basictitle">安全保障</p>
                <div class="facilityiconbox">
                    <div
                            v-for="(facilitytag,i) in userCheckLabel2.slice(0,9)"
                            :key="i"
                            class="facilityicon"
                    >
                        <img :src="yihomeGlobalVariable+facilitytag.img" alt />
                        <span>{{facilitytag.labelDetalName}}</span>
                    </div>
                    <div
                            class="facilityicon"
                            @click="facilityshow=true"
                            v-if="userCheckLabel2.length>=9"
                    >
                                                <img src="../../assets/images/facilitymore.svg" alt />
                    </div>
                </div>
            </div>

            <!-- 活动中心
            <div class="facilityaction">
              <img src="../../assets/images/home/detailactive.png" alt />
            </div> -->
            <!-- 可选单间 -->
            <div class="houseroombox">
                <div class="roomhead">
                    <span class="basictitle">可选单间</span>
                    <img v-if="housedata.housetypeid=='148'"
                         src="../../assets/images/roomcaption.svg"
                         alt
                         @click="roomshow=true"
                    />
                </div>
                <div class="roomtag">
                    <span class="tag" :class="{tagact:'1'==sortlistindex}"  @click="sortclick(1,'全部')">全部</span>
                    <span v-for="(roomtag, $ii) in roomlist" :key="roomtag.id" v-if="$ii < 5" :class="{tagact:roomtag.id==sortlistindex}" @click="sortclick(roomtag.id,roomtag.name)" class="tag">{{roomtag.name}}</span>
                </div>
                <div class="roomlist">
                    <div class="roomitem" v-for="(item,$$index) in houseRoome" :key="$$index">
                        <template v-if="item.room.status != 1 && item.room.status != 5">
                            <div class="itemhead">
                                <span>{{item.room.name}}</span>
<!--                                <span>{{currencysymbol}}{{room.minrent}}/周</span>-->
                            </div>
                            <div class="itemcontent">
                                <div class="contentleft">
                                    <div class="roombasic">
                                        <span>面积：{{item.minArea || 0}}㎡ ~ {{item.mmaxArea || 0}}㎡</span>
                                    </div>
                                    <div class="roombasic">
                                        <span>卫浴类型：{{item.weiyu[0].labelDetalId | fliterWeiyu }}</span>
                                    </div>
                                    <div class="roombasic">
<!--                                        @click="roompreview(room.roomimg)"-->
<!--                                        v-if="index < 4"-->
                                        <img
                                                v-for="(itemimg, index) in item.urls"
                                                :key="index"
                                                :src="linkurl+itemimg.imgurl"
                                        />
                                    </div>
                                </div>
<!--                                <div class="contentright" v-if="item.usersLeaseperiods.length == 0">-->
<!--                                    <span class="btnend">已租罄</span>-->
<!--                                </div>-->
                            </div>
                            <div class="timelist">
                                <p class="no-house" v-if="item.usersLeaseperiods.length == 0">已租罄</p>
                                <div class="zuqi" v-for="(val,ind) in item.usersLeaseperiods" :key="ind">
                                    <p class="zuqi-date">{{val.minStartDate}}入住 <i class="iconfont zuqi-date-next">&#xe61f;</i>{{val.maxStartDate}}离开</p>
                                    <p class="zuqi-week">固定租期{{val.periods}}{{val.leaseType | filterLeaseType}}</p>
                                    <div class="zuqi-right">
                                        <div class="zuqi-right-money"><span class="zuqi-right-money-symble">{{houseInfo.countryId | fliterSymble}}{{val.rent}}</span><span>/{{val.leaseType | filterLeaseType}}</span></div>
                                        <div class="zuqi-right-btn" :class="{'zuqi-right-btn-disable': item.room.status != 2}" @click="item.room.status == 2 && apply(val)">{{item.room.status == 2 ? '立即预定' : '已租罄'}}</div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <!-- 住房租房须知 -->
            <div class="housenotice" v-if="houseInfoXuzhi.info">
                <p class="basictitle">住房租房须知</p>
                <div class="noticetext">
                    <p ref="housenotice" class="text" v-html="houseInfoXuzhi.info"></p>
                    <p class="noticemore" v-if="isnoticemore" @click="noticemore($event)">查看更多</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import { Swipe, SwipeItem, ImagePreview, Popup } from "vant";
    // import { minheight, getStore, setStore } from "../../assets/js/uilts";
    import { setTimeout } from "timers";
    // import homeStay from "../../components/homestay";
    // import homeFlats from "../../components/homeflats";
    // import countDown from "../../components/countDown"
    export default {
        name: "housedetail",
        computed:{
            swiper() {
                return this.$refs.vanswipe
            }
        },
        components: {
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [ImagePreview.name]: ImagePreview,
            [Popup.name]: Popup,
            // homeStay,
            // homeFlats,
            // countDown
        },
        filters:{
            imgStrClac:function(str,num){
                let res = str.replace(/(.*)\./,'$1'+num+'.');   //$1 + 替换后的字符
                return res;
            },
            filterLeaseType: (val) => {
                let type = '';
                switch (val) {
                    case '0': type = '天'; break
                    case '1': type = '周'; break
                    case '2': type = '月'; break
                }
                return type
            }
        },
        data() {
            return {
                linkurl: "https://www.inyihome.com",
                swipercurrent: 0,
                housedata: "",
                housebannerimg: [],
                imagepreviewbanner: [],
                islogre: "",
                isrecapmore: false,
                isnoticemore: false,
                housefacilityall: "", //配套设施
                facilityshow: false,
                roomshow: false,
                istoken: "",
                typebannerimg:'', //当存在全景和360的时候
                panorashow:0,
                videoshow:0,
                photoshow:0,
                sortlistindex:0,//单间分类
                sortlisttext:'',
                housetext:'',
                currentStatus:true,


                /**
                 * common
                 */
                fullPath: '',

                /**
                 * 收藏
                 */
                collectList: [],
                iscollect: false,

                /**
                 * 房源信息
                 */
                houseInfo: {},
                roomlist: [],
                houseRoome: {},
                houseInfoTuigai: '', //退改政策
                houseInfoXuzhi: '', //租房须知
                houseInfoDescCh: '', //房源概括中文
                houseInfoDescEn: '', //房源概括英文
                userCheckLabel:[], //房源中的label信息  标签
                schoolCheckLabel:[], //房源中的label信息  学校
                addressCheckLabel:[], //房源中的label信息  地址

                userCheckLabel1:[], //房源中的label信息  标签 ==》  配套设施
                userCheckLabel2:[], //房源中的label信息  标签 ==》  安全保障
                userCheckLabel3:[], //房源中的label信息  标签 ==》  房源标签

                userCheckUrl:[],  // 图片
                userCheckUrl2:[],  // 视频
            };
        },

        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
            this.fullPath = this.$route.query.houseid;

            if (this.$route.query.houseid) {
                this.fullPath = this.$route.query.houseid;
            } else {
                var str = this.$route.fullPath;
                this.fullPath = this.getCaption(str);
            }

            this.getCurrentHouseDetails(this.fullPath);
            this.getApiRoomType();
            this.getCollectList();
            if (process.browser) {
                if (localStorage.getItem('backurl')) {
                    localStorage.removeItem('backurl');
                }
            }


        },

        methods: {
            mapshow(id) {
                // this.$router.push({ path: "/mapdetail", query: { houseid: id } });
            },

            sortclick(id,text){
                this.sortlistindex=id
                this.sortlisttext=text
            },
            recapmore(e) {
                let text = e.target.innerHTML;
                if (text == "查看更多") {
                    this.$refs.housedec.style.height = "100%";
                    e.target.innerHTML = "收起更多";
                } else {
                    this.$refs.housedec.style.height = "2.54667rem";
                    e.target.innerHTML = "查看更多";
                }
            },
            noticemore(e) {
                let text = e.target.innerHTML;
                if (text == "查看更多") {
                    this.$refs.housenotice.style.height = "100%";
                    e.target.innerHTML = "收起更多";
                } else {
                    this.$refs.housenotice.style.height = "3.46667rem";
                    e.target.innerHTML = "查看更多";
                }
            },

            //收藏
            collectbtn() {
                if(this.iscollect){
                    this.delcollect()
                }else this.collect()
            },

            getApiRoomType(){
                this.$request.getApiRoomType().then(res => {
                    this.roomlist = res.data
                })
            },
            getCurrentHouseDetails(number) {
                const houseloading = this.$loading({
                    lock: true,
                    text: '正在加载',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                this.$request.findhousedetail({houseId: number}).then(res => {
                    if(res.code === 200 ){
                        houseloading.close();
                        if (Object.keys(res.data).length == 0) {
                            this.$confirm('当前房屋信息不存在', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                this.$router.push({
                                    path: '/'
                                })
                            }).catch(() => {
                                this.$router.push({
                                    path: '/'
                                })
                            });
                            return
                        } else {
                            this.housedetails = res.data;
                            this.houseInfo = res.data.house;
                            this.houseRoome = res.data.rooms;
                            for(let item of this.houseRoome){
                                item.weiyu = item.lables.filter(ele => ele.labelTypeId === 16);
                            }

                            const checkAll = res.data.lables;
                            checkAll.forEach(el=>{
                                if(el.type==1){
                                    this.userCheckLabel.push(el)
                                }
                                // if(el.type==2){
                                // 	this.schoolCheckLabel.push(el)
                                // }
                                if(el.type==3){
                                    this.addressCheckLabel.push(el)
                                }
                            });

                            this.schoolCheckLabel = res.data.schools;

                            res.data.infos.forEach(el=>{
                                if(el.type==1){
                                    this.houseInfoDescCh = el
                                }
                                if(el.type==2){
                                    this.houseInfoDescEn = el
                                }
                                if(el.type==3){
                                    this.houseInfoTuigai = el
                                }
                                if(el.type==4){
                                    this.houseInfoXuzhi = el
                                }
                            });


                            //再次循环this.userCheckLabel
                            this.userCheckLabel.forEach(el=>{
                                if(el.labelTypeId==2){//配套设施
                                    this.userCheckLabel1.push(el)
                                }
                                if(el.labelTypeId==3){//安全保障
                                    this.userCheckLabel2.push(el)
                                }
                                if(el.labelTypeId==15){//房源标签
                                    this.userCheckLabel3.push(el)
                                }
                            });

                            res.data.urls.forEach(el=>{
                                if(el.type==1){
                                    this.userCheckUrl.push(el)
                                }
                                if(el.type==2){
                                    this.userCheckUrl2.push(el)
                                }
                            });


                            this.myaddress = res.address;
                            //this.dropMap(res.address);
                            //周边房源
                            // this.getAroundHouse(res.cityid);

                            this.addressData = res.addresses;
                            if(res.school){
                                // 地址数组里面的字段名称和学校里面的字段名称不同  组件select使用的是地址数组里面的字段  需要把学校里面的字段变成和地址里面的字段相同

                                res.school.forEach((item,index)=>{
                                    item['addressdetail'] = item['address']
                                    item['addressname'] = item['schoolname']
                                })
                                this.addressData = res.addresses.concat(res.school);
                            }


                            //this.endAddress = this.addressData[0].addressdetail;
                            /* 当前房源的房间类型 */
                            this.roomType = res.housetag;
                            /* 所有房间 */
                            this.allRoom = res.room;
                            this.oldAllRoom = res.room;

                            this.currencysymbol = res.country.currencysymbol;


                            /* 检查是否收藏房间 */
                            this.checkCollect();
                        }
                    }else{
                        houseloading.close();
                        this.$toast('网络错误');
                    }
                })
            },
            apply(data){
                this.fullscreenLoading = true;
                this.$request.houseapply({usersLeaseperiodId: data.id}).then(res => {
                    this.fullscreenLoading = false;
                    if (res.code === 200) {
                        this.$toast('数据提交成功，客服稍后会和您联系');
                        this.reserveStatus = false;
                    }else if(res.code === 401){
                        this.$toast(res.msg);
                        setTimeout(() => {
                            localStorage.setItem('backurl', this.$route.fullPath);
                            this.$router.push({
                                path: '/login'
                            })
                        },2000)
                    }  else {
                        this.$toast(res.msg);
                    }
                }).catch(e => {
                    this.fullscreenLoading = false;
                    localStorage.setItem('backurl', this.$route.fullPath);
                    this.$router.push({
                        path: '/login'
                    })
                })
            },
            findCollect(){
                const _Index = this.collectList.findIndex(ele => ele.houseId == this.fullPath)
                this.iscollect = _Index != -1 ? true : false
            },
            getCollectList(){
                if(localStorage.getItem('token')){
                    this.$request.getCollectList().then(res => {
                        if (res.code === 200) {
                            this.collectList = res.data
                        }
                    })
                }
            },
            collect() {
                if(localStorage.getItem('token')){
                    this.$request.insertfavorite({
                        houseId: this.houseInfo.id
                    }).then(res => {
                        if (res.code == 200) {
                            this.iscollect = true;
                            this.$toast("收藏成功");
                        }else if(res.code === 401){
                            this.$toast(res.msg);
                            setTimeout(() => {
                                localStorage.setItem('backurl', this.$route.fullPath);
                                this.$router.push({
                                    path: '/login'
                                })
                            },2000)
                        } else this.$toast(res.msg);
                    }).catch(e => {
                        this.$message.error('网络错误');
                    })
                }else{

                }
            },
            delcollect() {
                if(localStorage.getItem('token')){
                    this.$request.deletefavorite({
                        id: this.houseInfo.id
                    }).then(res => {
                        if (res.code == 200) {
                            this.iscollect = false;
                            this.$toast("取消收藏");
                        }else if(res.code === 401){
                            this.$toast(res.msg);
                            setTimeout(() => {
                                localStorage.setItem('backurl', this.$route.fullPath);
                                this.$router.push({
                                    path: '/login'
                                })
                            },2000)
                        } else this.$toast(res.msg);
                    }).catch(e => {
                        this.$message.error('网络错误');
                    })
                }else{
                    localStorage.setItem('backurl', this.$route.fullPath);
                    this.$router.push({
                        path: '/login'
                    })
                }
            },
        }

    };
</script>
<style lang="scss" scoped>
    /*import 'vant/lib/index.css';*/
    .countWrapper{
        background: #FFDD5C;
        border-radius: 3px;
        padding: 12px;
        padding-right: 15px;
        margin-top:13px;
        .title{
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #333333;
            letter-spacing: 0.53px;
            margin-bottom: 10px;
            line-height: 22px;
        }
        .content{
            display: flex;
            margin-bottom: 7px;
            p{
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #333333;
                letter-spacing: 0.6px;
                line-height: 17px;
            }
            .btnActivity{
                background: #FF5C64;
                border-radius: 26px;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #FFFFFF;
                letter-spacing: 0.4px;
                padding: 0px 12px;
                margin-left: 21px;
                white-space: nowrap;
                line-height: 30px;
            }
        }
        .time{
            font-family: PingFangSC-Medium;
            font-size: 12px;
            color: #FF4A5E;
            letter-spacing: 0.4px;
            text-align: right;
            text-align: left;
        }
    }
    .vueload{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width:80%
        }
    }
    .goback{
        position: absolute;
        top:0;
        left:0;
        z-index: 100;
        width:50px;
        height:50px;
        margin-top: 12px;
        margin-left:12px;
    }


    .housedetail {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #fff;
        z-index: 9;
        overflow-y: auto;
        .housebannarimg {
            height: 245px;
            position: relative;

            .bottomadorn {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 8px;
                background: #fff;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
            }

            .collectbtn {
                position: absolute;
                width:50px;
                height:50px;
                top: 0;
                right: 0;
                padding-top:12px;


                img {
                    display: block;
                }
            }

            .swiperimg {
                height: 100%;

                .van-swipe {
                    height: 100%;

                    img {
                        width: 100%;
                        height: 100%;
                        display: block;
                        object-fit: cover;
                    }
                    .panoricon,.videoicon{
                        position: absolute;
                        top:50%;
                        left:50%;
                        margin-left:-25px;
                        margin-top:-25px;
                        width:50px;
                        height:50px;
                    }
                }
            }

            .custom-indicator {
                position: absolute;
                bottom: 21px;
                font-size: 14px;
                color: #fff;
                letter-spacing: 0.7px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                span {
                    margin: 0 7.5px;
                    font-size: 10px;
                    color: #666666;
                    letter-spacing: 0.5px;
                    background: #FFFFFF;
                    border-radius: 14px;
                    background: rgba(235, 232, 227,0.8);
                    border-radius: 14px;
                    display:block;
                    width:43px;
                    height:20px;
                    text-align: center;
                    line-height: 20px;
                    font-family: PingFangSC-Regular;
                }

                .typeaction {
                    background: #38B7FF;
                    color: #fff;
                }
            }
        }

        .houseinfobox {
            padding: 12px;

            .basicinfotop {
                display: flex;
                align-items: flex-start;
                position: relative;
                .housetitle {
                    flex: 1;
                    font-size: 22PX;
                    color: #333333;
                    letter-spacing: 2.1px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 28PX;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                    font-family: pingFangSC-Medium;
                    padding-right: 62px;
                }

                .mapicon {
                    position: absolute;
                    right:0;
                    width: 45px;
                    height: 45px;
                    background-image: linear-gradient(-213deg, #38B7FF 0%, #4FBEFC 100%);
                    box-shadow: 0 2px 6px 0 #38B7FF;
                    border-radius: 50%;
                    text-align: center;
                    margin-left: 17px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            .basicinfobottom {
                padding-right: 62px;
                margin-top: 15px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                .tag {
                    display: inline-block;
                    padding:0 5px;
                    font-family: PingFangSC-Regular;
                    font-size: 11px;
                    color: #ffffff;
                    text-align: center;
                    background: #ff7d74;
                    border-radius: 3.02px;
                    margin-bottom: 6px;
                    height:22px;
                    line-height: 22px;
                    margin-right: 6px;
                }

                .tagempty {
                    width: 30%;
                    height: 0px;
                }
            }
        }

        .houserecap {
            margin-top: 12px;
            .recapinfobox {
                padding: 15px 0;
                border-bottom: 1px solid #f4f4f4;
                .recapinfoitem {
                    font-size: 14PX;
                    color: #666666;
                    letter-spacing: 1.84px;
                    display: flex;
                    align-items: baseline;
                    line-height: 20px;
                    margin-bottom: 8px;

                    img {
                        flex-shrink: 0;
                        margin-right: 10px;
                        line-height: 22px;
                        display: block;
                    }

                    span {
                        flex: 1;
                    }

                    .itemtext {
                        width: 100%;

                        .housedec {
                            overflow: hidden;
                        }

                        .morebtn {
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #38b7ff;
                            letter-spacing: 0.8px;
                            line-height: 22px;
                            margin-top:3px;
                        }
                    }
                }
                .recapinfoitem:last-child{
                    margin-bottom:5px;
                }
            }
        }

        .housefacility {
            margin-top: 20px;

            .facilityiconbox {
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                .facilityicon {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 20%;
                    margin-top: 15px;

                    span {
                        font-family: PingFangSC-Regular;
                        font-size: 12PX;
                        color: #666666;
                        letter-spacing: 0.6px;
                        text-align: center;
                        margin-top: 8px;
                    }

                    img {
                        width: 25PX;
                        height: 25PX;
                    }
                }
            }
        }

        .facilityaction {
            margin-top: 15px;
        }

        .housenotice {
            margin-top: 20px;

            .noticetext {
                margin-top: 10px;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #666666;
                letter-spacing: 0.8px;
                line-height: 22px;

                .text {
                    overflow: hidden;
                }

                .noticemore {
                    color: #38b7ff;
                }
            }
        }

        .housetraffic {
            margin-top: 20px;

            .trafficmap {
                min-height: 235px;
                margin-top: 10px;
                position: relative;

                .maptotal {
                    position: absolute;
                    font-size: 12px;
                    background: #fff;
                    height: 30px;
                    width: 250px;
                    text-align: center;
                    line-height: 30px;
                    top: 150px;
                    left: 50%;
                    margin-left: -125px;
                }
            }
        }

        .houseroombox {
            margin-top: 20px;

            .roomhead {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .roomtag {
                margin-top: 10px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                .tag {
                    font-family: PingFangSC-Medium;
                    padding: 5px 12px;
                    background: #f4f4f4;
                    border-radius: 3.65px;
                    font-size: 14PX;
                    color: #333333;
                    margin-top: 8px;
                    margin-right: 8px;
                    line-height: 18px;
                }
                .tagact {
                    color: #fff;
                    background: #38B7FF
                }
            }
        }

        .basictitle {
            font-family: PingFangSC-Medium;
            font-size: 18px;
            color: #333333;
            letter-spacing: 0.9px;
        }

        .facilitypopup {
            .close {
                margin-top: 18px;
                margin-left: 18px;
                font-size: 16px;
                color:#333;
            }

            .facilitypopupitem {
                margin-top: 30px;

                .itemtitle {
                    font-family: PingFangSC-Medium;
                    font-size: 20PX;
                    color: #333333;
                    letter-spacing: 1px;
                    margin: 0 18px;
                }

                .iconbox {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .iconitem {
                        margin-top: 15px;
                        display: flex;
                        flex-direction: column;
                        width: 25%;
                        align-items: center;

                        img {
                            width: 25px;
                            height: 25px;
                            display: block;
                        }

                        span {
                            font-family: PingFangSC-Regular;
                            font-size: 12PX;
                            color: #666666;
                            letter-spacing: 0.6px;
                            text-align: center;
                            line-height: 22px;
                        }
                    }

                    .iconitemempty {
                        width: 25%;
                        height: 0;
                    }
                }
            }
        }

    }

    .roomitem {
        margin-top: 12px;
        background: #ffffff;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 0 6px;
        padding-top: 11px;
        overflow: hidden;

        .itemhead {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            line-height: 20px;
            span {
                font-size: 15PX;
                color: #333333;
                letter-spacing: 0.75px;
                font-family: PingFangSC-Medium;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .price{
                flex-shrink: 0;
                margin-left:10px;
                font-family: PingFangSC-Medium;
                b {
                    font-size: 10px !important;
                    letter-spacing: 0.75px;
                    text-align: center;
                    line-height: 21px;
                }
            }
        }

        .itemcontent {
            // margin-top: 6px;
            position: relative;
            display: flex;
            align-items: flex-start;
            .contentleft {
                flex: 1;

                .roombasic {
                    margin-top: 6px;
                    font-size: 12px;
                    color: #666666;
                    letter-spacing: 0.6px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    line-height: 16px;
                    font-family: PingFangSC-Regular;
                    .minweek {
                        margin-right: 10px;
                    }
                    img {
                        display: block;
                        width: 60px;
                        height: 44px;
                        margin-bottom: 8px;
                        margin-right: 8px;
                    }

                    .imgempty {
                        height: 0;
                        border: none;
                        margin: 0;
                    }

                    .showmore {
                        color: #38b7ff;
                    }
                }
            }

            .contentright {
                height: 100%;

                span {
                    margin-top: 15px;
                    display: block;
                    background: #38b7ff;
                    box-shadow: 0 2px 4px 0 #38b7ff;
                    border-radius: 2px;
                    width: 67px;
                    height: 25px;
                    font-size: 12px;
                    color: #ffffff;
                    letter-spacing: 0.6px;
                    text-align: center;
                    line-height: 25px;
                    margin-left: 10px;
                }

                .btnend {
                    background: #cdcdcd;
                    box-shadow: 0 2px 4px 0 #e0e0e0;
                }
            }
        }

        .timelist {
            .fiexdtime {
                background: #ffffff;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
                border-radius: 6px;
                margin-bottom: 12px;
                padding: 12px 6px;
                min-height: 88px;
                display: flex;

                .timeitemleft {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    span {
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #666666;
                        letter-spacing: 0.6px;
                    }
                }

                .timeitemright {
                    flex-shrink: 0;
                    width: 100px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: space-between;

                    .price {
                        font-size: 15px;
                        color: #333333;
                        letter-spacing: 0.75px;
                        text-align: center;
                        font-family: PingFangSC-Medium;
                        b{
                            font-family: PingFangSC-Medium;
                            font-size: 12px;
                            letter-spacing: 0.75px;
                            text-align: center;
                            line-height: 21px;
                        }
                    }

                    .oldprice {
                        font-size: 14px;
                        color: #cdcdcd;
                        letter-spacing: 0.7px;
                        text-decoration: line-through;
                        b{
                            font-family: PingFangSC-Medium;
                            font-size: 10px;
                            letter-spacing: 0.75px;
                            text-align: center;
                            line-height: 21px;
                        }
                    }

                    .morebtn {
                        display: block;
                        width: 67px;
                        height: 25px;
                        line-height: 25px;
                        background: #38b7ff;
                        box-shadow: 0 2px 4px 0 #38b7ff;
                        border-radius: 2px;
                        font-size: 12px;
                        color: #ffffff;
                        letter-spacing: 0.6px;
                        text-align: center;
                        font-family: PingFangSC-Medium;
                    }
                }
            }

            .selecttime {
                min-height: 180px;
                border: 1px solid #e5e4e4;
                overflow: hidden;
                margin-bottom: 12px;
                padding: 0 8px;

                .timeitem {
                    padding: 8px 0;
                    border-bottom: 1px solid #f4f4f4;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .item {
                        width: 120px;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        justify-content: center;

                        span {
                            font-family: PingFangSC-Regular;
                            font-size: 10px;
                            color: #a6a6a6;
                            letter-spacing: 0.5px;
                            text-align: center;
                        }

                        input {
                            width: 100%;
                            height: 25px;
                            outline: none;
                            border: 1px solid #f4f4f4;
                            font-size: 14px;
                            text-align: center;
                            margin-top: 6px;
                            color: #333;
                            appearance: none;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                        }

                        input::-webkit-input-placeholder {
                            vertical-align: middle;
                            font-size: 12px;
                            line-height: 1.7;
                            color: #b9b0b0;
                            // transform: translate(0, 4px);
                        }
                    }

                    .iteminfo {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        span {
                            line-height: 22px;
                        }

                        .price {
                            font-size: 14px;
                            color: #333333;
                            letter-spacing: 0.7px;
                            font-family: PingFangSC-Medium;
                            b{
                                font-family: PingFangSC-Medium;
                                font-size: 12px;
                                letter-spacing: 0.7px;
                                text-align: center;
                                line-height: 20px;
                            }
                        }

                        .week {
                            font-family: PingFangSC-Regular;
                            font-size: 12px;
                            color: #666666;
                            letter-spacing: 0.6px;
                        }

                        .infobtn {
                            display: block;
                            width: 67px;
                            height: 25px;
                            line-height: 25px;
                            background: #38b7ff;
                            box-shadow: 0 2px 4px 0 #38b7ff;
                            border-radius: 2px;
                            font-size: 12PX;
                            color: #ffffff;
                            letter-spacing: 0.6px;
                            text-align: center;
                            font-family: PingFangSC-Medium;
                        }
                    }
                }

                .timetoast {
                    display: flex;
                    align-items: flex-start;
                    padding: 8px 0;

                    img {
                        margin-top: 3px;
                        margin-right: 7px;
                        flex-shrink: 0;
                    }

                    p {
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #666666;
                        letter-spacing: 0.6px;
                        line-height: 22px;
                        flex: 1;
                    }
                }
            }
        }
    }

    .houseitem {
        margin-top: 12px;
        background: #ffffff;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 0 6px;
        padding-top: 11px;
        .itemhead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                font-size: 15PX;
                color: #333333;
                letter-spacing: 0.75px;
                text-align: center;
                font-family: PingFangSC-Medium;
                b{
                    font-family: PingFangSC-Medium;
                    font-size: 10px;
                    letter-spacing: 0.75px;
                    text-align: center;
                    line-height: 21px;
                }
            }
        }
        .itemcontent {
            // margin-top: 6px;
            position: relative;
            display: flex;
            align-items: flex-start;
            .contentleft {
                flex: 1;
                .roombasic {
                    margin-top: 6px;
                    font-size: 12PX;
                    color: #666666;
                    letter-spacing: 0.6px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    line-height: 16px;
                    flex-wrap: wrap;
                    span{
                        font-family: PingFangSC-Regular;
                        margin-right: 15px;
                    }
                    img {
                        display: block;
                        width: 60px;
                        height: 44px;
                        margin-right:7px;
                        margin-bottom:8px;
                    }
                    .imgempty {
                        height: 0;
                        border: none;
                        margin: 0;
                    }
                }
            }
            .contentright {
                height: 100%;
                span {
                    margin-top: 30px;
                    display: block;
                    background: #38b7ff;
                    box-shadow: 0 2px 4px 0 #38b7ff;
                    border-radius: 2px;
                    width: 67px;
                    height: 25px;
                    font-size: 12px;
                    color: #ffffff;
                    letter-spacing: 0.6px;
                    text-align: center;
                    line-height: 25px;
                    // margin-left: 5px;
                    font-family: PingFangSC-Medium;
                }
                .btnend {
                    background: #cdcdcd;
                    box-shadow: 0 2px 4px 0 #e0e0e0;
                }
            }
        }
    }

    .no-house{
        line-height: 20px;
        margin: 12px 0 20px;
        text-align: center;
    }
    .zuqi{
        margin-top: 15px;
        position: relative;
        padding: 10px 0 15px;
        border-top: 1px solid #E6E6E6;
        border-bottom: 1px solid #E6E6E6;
        &:last-child{
            border-bottom: none;
        }
        &-date{
            line-height: 30px;
            font-size: 14px;
            &-next{
                font-size: 20px;
                color: #2f3c9f;
                position: relative;
                top: 3px;
                margin: 0 10px 0 4px;
            }
        }
        &-week{
            line-height: 30px;
            font-size: 15px;
            font-weight: 600;
            margin-top: 2px;
        }
        &-right{
            margin: 10px 0 6px;
            &-money{
                font-size: 14px;
                top: 30px;
                margin-left: 10px;
                display: inline-block;
                &-symble{
                    color: rgb(255,86,89);
                }
            }
            &-btn{
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #fff;
                letter-spacing: 0.8px;
                line-height: 22px;
                margin-right: 21px;
                float: right;
                display: inline-block;
                background: #38b7ff;
                box-shadow: 0 0.05333rem 0.10667rem 0 #38b7ff;
                border-radius: 4px;
                padding: 4px 15px;
                font-weight: 600;
                position: relative;
                top: -7px;
            }
            &-btn-disable{
                background-color: rgb(178, 178, 178);
            }
        }
    }

    /deep/.van-swipe__indicators{
        display: none;
    }
</style>
