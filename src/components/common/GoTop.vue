<template>
    <div class="goTop">
        <div class="scroll" :class="{show:toTopShow}">
           
            <div id="toTop" @click="scrollToTop">
                <i class="iconfont icon-arrow-up"></i>
            </div>
           
        </div>
    </div>
</template>
<script>
    export default {
       
        props:{
            step:{   //此数据是控制动画快慢的
                type:Number,
                default:50  
            }
        },
        data(){
            return {
                toTopShow:false,
            }
        },
        methods: {
            refresh(){
            this.$emit('goRefresh')
            },
            handleScroll() {
                //首先修改相对滚动位置
                this.scrollTop = this.scrollTop = window.pageYOffset || document.body.scrollTop
                if (this.scrollTop > 300) {
                this.toTopShow = true
                }else {
                this.toTopShow = false
                }
            },
            scrollToTop() {
                let timer = null, _that = this
                //动画，使用requestAnimationFrame代替setInterval
                cancelAnimationFrame(timer)
                timer = requestAnimationFrame(function fn() {
                if (_that.scrollTop > 0) {
                    _that.scrollTop -= 50
                    //然后修改这里实现动画滚动效果
                    document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
                    timer = requestAnimationFrame(fn)
                } else {
                    cancelAnimationFrame(timer);
                    _that.toTopShow = false
                }
                })
            }
        },
        mounted() {
        this.$nextTick(function () {
            //修改事件监听
            window.addEventListener('scroll', this.handleScroll)
            
        });
        },
        destroyed() {
        
        window.removeEventListener('scroll', this.handleScroll)
        
        }
    }
</script>
<style scoped lang="stylus">
    .scroll{
            position: fixed;
            right: px2rem(10);
            bottom:px2rem(140);
            width:px2rem(60);
            /* height: 92px; */
            cursor: pointer;
            display: none;
        }
        .scroll>div{
            width: px2rem(60);
            height: px2rem(60);
          
            line-height:px2rem(60);
            text-align: center;
            background-color: rgba(0,0,0,0.8);
            color: #fff;
            z-index: 888;
            margin-top:1px;
            border-radius: 50%

        }
        .scroll>div>i{
            font-size: px2rem(30);
        }
        .scroll>div:hover{
            background-color: rgba(0,0,0,0.8);
        }
        .show{
            display: block;
        }
</style>
