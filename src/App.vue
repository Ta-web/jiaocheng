<template>
    <div id="app">
        <div class="a">
            <div class="toubu">
                <img src="~@/assets/logo.jpg" class="img" />
                <ul class="miaoshu">
                    <router-link to="/shouye" tag="li" class="title">首页</router-link>
                    <router-link to="/qiye" tag="li" class="title">企业动态</router-link>
                    <router-link to="/hangYeDongTai" tag="li" class="title">行业动态</router-link>
                    <router-link to="/liNian" tag="li" class="title">企业理念</router-link>
                    <router-link to="/liuYan" tag="li" class="title">网站留言</router-link>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
li {
    list-style: none;
}
#app {
    background-color: #6699ff;
    width: 100vw;
    height: 100vh;
}
.a {
    width: 1024px;
    margin: auto;
    background-color: white;
}

.toubu {
    height: 78px;
    display: flex;
    justify-content: space-between;
    background-image: url('~@/assets/head_bg.jpg');
}
.img {
    height: 78px;
}
.miaoshu {
    display: flex;
}
.title {
    height: 78px;
    width: 90px;
    line-height: 78px;
    text-align: center;
    /* 在 css 里面 ~@ 代表 src 目录 */
    background-image: url('~@/assets/menu_bg.jpg');
    cursor: pointer;
}
</style>
