<template>
    <div @click="handle">我是子组件 emit</div>
</template>

<script>
// v-if 举例 demo
export default {
    name: 'Emit',
    props: ['psjk'],
    data() {
        return {
            i: 0,
        };
    },
    methods: {
        /**
         * @description: p1 的状态切换
         */
        handle() {
            console.log('来自子组件的打印: ', this.psjk);
            this.i++;
            this.$emit('clickNum', `当前点击总次数为${this.i}`);
        },
    },
};
</script>
