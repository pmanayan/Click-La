<template>
    <div class="my-bg fixed">
        <img src="img/bg-1.jpg">
    </div>
</template>

<style scoped>
.my-bg:after {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.9;
    content: "";
    display: block;
}
</style>