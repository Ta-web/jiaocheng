<template>
    <div>
        <input @input="inputChange" />
        <!-- 下面两个 p 标签是 title 一样的, 只是存在两个写法 -->
        <p v-bind:title="value">我这个 title 是显示的 input 的内容</p>
        <p :title="value">我这个 title 是显示的 input 的内容</p>
    </div>
</template>

<script>
// v-bind 举例
export default {
    name: 'VBind',
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
