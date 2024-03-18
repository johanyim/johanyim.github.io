<template>
    <div class="horizontal-rule" :style="{'padding-top': padding, 'padding-bottom': padding}">
        <div class="pentagon left"></div>
        <h1>{{ text }}</h1>
        <div class="pentagon right"></div>
    </div>
</template>

<script>
    export default {
        name: 'HRule',
        props: {
            text: {
                type: String,
                default: 'Your Text Here'
            },
            padding: {
                type: String,
                default: '2rem'
            }
        }
    };
</script>

<style scoped lang='scss'>
@import '../assets/style.scss';
.horizontal-rule {
    color: $thirty;
    display: flex;
    align-items: center;
    margin: auto;
    max-width: 100rem;
}


h1 {
    font-weight: normal;
    font-size: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
}

.pentagon {
    width: 0;
    height: 0;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: 2px solid $text;
}


.text {
    flex: 0;
    white-space: nowrap;
}

.right, .left {
    /* transform: rotate(-45deg); */
    flex: 1;

}

</style>
