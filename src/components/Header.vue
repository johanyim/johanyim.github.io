<script>
</script>

<template>
    <header>
        <h1>Johan Yim</h1>
        <!-- <nav> -->
        <!--     <ul> -->
        <!--         <li>Who am I</li> -->
        <!--         <li>Who am I</li> -->
        <!--         <li>Who am I</li> -->
        <!--         <li>Who am I</li> -->
        <!--     </ul> -->
        <!-- </nav> -->
        <button id="cta">Contact</button>
    </header>
    
</template>

<style scoped lang='scss'>
@import '../assets/style.scss';

header {
    color: $thirty;
    width: 100%;
    position: fixed;
    top: 0; left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $header-height;
    background: $crust;
    z-index: 1;


    h1 {
        flex: 0 0 auto;
        font-size: 2rem;
        margin: 1rem;
    }

    nav {
        ul {
            display: flex;
        }
    }

    button#cta {
        margin: 10px;
        border-radius: 10px;
        flex: 0 0 auto;
        padding: 1rem;
        background: $ten;
        color: #11111b;
    }

}





</style>



