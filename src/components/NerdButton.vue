<template>
    <a :href="url" class="nerd-button">
        <span class="nerd-icon" v-html="getIcon"></span>
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
        },
        computed: {
            getIcon() {
                return `<i class="nf ${this.symbol}"></i>`;
            }
        }
    };
</script>

<style scoped lang='scss'>
@import '../assets/style.scss';

.nerd-button {
    display: inline-block;
    text-decoration: none;
    border: none;
    padding: 0 1rem;
    border-radius: 5px;
    &:hover{
        background-color: $base;
        cursor: pointer;
    }
}


</style>
