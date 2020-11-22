<template>
    <div class="qiye">
        <img src="~@/assets/sec_banner.jpg" class="qiyetu" />
        <div class="neirongkuang">
            <div class="cebian">
                <router-link to="/qiye" tag="p" class="cebianneirong">>企业新闻</router-link>
                <router-link to="/hangYeDongTai" tag="p" class="cebianneirong">>行业动态</router-link>
                <router-link to="/liNian" tag="p" class="cebianneirong">>企业理念</router-link>
                <router-link to="/liuYan" tag="p" class="cebianneirong">>网站留言</router-link>
            </div>
            <div class="xinwen">
                <img src="~@/assets/company_news.jpg" class="qiyetu" />
                <div class="xinwenneirong">
                    <p>DS品牌巡展武汉站开幕 移动旗舰</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>北汽集团考察菲斯科 仅瞄准Atlanti</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>北汽亮相长春车展 共庆中国汽车六</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>特斯拉电动车将进入纳斯达克100指数</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>中国今年将成宝马头号市场 18年来销量增400倍</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>特斯拉市值飙升超越菲亚特 或将被谷歌收购</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>广汽丰田6月销量创新高</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>奥迪研发总监杜翰墨被迫下课 哈肯贝格再度回归</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>最美双行线 GLK美好中国行精彩演绎京北纯粹之旅</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>十年成就同行同悦--华晨宝马十周年</p>
                    <p>2020-4-5</p>
                </div>
            </div>
        </div>
        <HFooter></HFooter>
    </div>
</template>

<script>
import HFooter from '@/views/components/footer.vue';
export default {
    components: {
        HFooter,
    },
};
</script>

<style scoped>
.qiyetu {
    width: 100%;
}
.neirongkuang {
    width: 1004px;
    height: 411px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
}
.cebian {
    width: 262px;
    height: 411px;
    text-align: center;
    border-right: 1px solid black;
}
.cebianneirong {
    padding: 20px;
    cursor: pointer;
}
.xinwen {
    width: 742px;
    height: 411px;
}
.xinwenneirong {
    padding-left: 60px;
    padding-bottom: 12px;
    display: flex;
    justify-content: space-between;
}
</style>
