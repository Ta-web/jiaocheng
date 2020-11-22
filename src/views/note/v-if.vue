<template>
    <div>
        <div>
            <button @click="p1Handle">p1 显示状态切换</button>
            <button @click="p2Handle">p2 显示状态切换</button>
        </div>
        <!-- 根据 v-if 的值来判断是否显示 p 标签(真值显示, 假值不显示) -->
        <p v-if="showP1">p1</p>
        <p v-if="showP2">p2</p>
    </div>
</template>

<script>
// v-if 举例 demo
export default {
    name: 'VIf',
    data() {
        return {
            showP1: true,
            showP2: false,
        };
    },
    methods: {
        /**
         * @description: p1 的状态切换
         */
        p1Handle() {
            this.showP1 = !this.showP1;
        },
        /**
         * @description: p2 的状态切换
         */
        p2Handle() {
            this.showP2 = !this.showP2;
        },
    },
};
</script>
