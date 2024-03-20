<template>
    <a :href="url" class="nerd-button">
        <!-- <span class="nerd-icon" v-html="getIcon"></span> -->
        <i :class="'nf ' + symbol"></i>
    </a>
</template>

<script>
    export default {
        props: {
            symbol: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    };
</script>

<style scoped lang='scss'>
@import '../assets/style.scss';
.nerd-button {
    display: inline-block;
    text-decoration: none;
    padding: 0 1rem;
    &:hover{
        color: $overlay0;
        cursor: pointer;
    }
}


</style>
