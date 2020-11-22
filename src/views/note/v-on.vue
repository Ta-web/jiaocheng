<template>
    <div>
        <!-- 下面两个 input 标签绑定的事件是一样的, 只是存在两个写法 -->
        <input v-on:input="inputChange" />
        <!-- <input @input="inputChange" /> -->
        <p :title="value">我这个 title 是显示的 input 的内容</p>
    </div>
</template>

<script>
// v-on 举例
export default {
    name: 'VOn',
    data() {
        return {
            value: '',
        };
    },
    methods: {
        /**
         * @description: 输入框的内容发生变化时触发
         * @param {Event} ev: event 对象
         */
        inputChange(ev) {
            this.value = ev.target.value;
        },
    },
};
</script>

<style></style>
