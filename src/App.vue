<script setup>
    import HRule from './components/HRule.vue' // +2 requests
    import Timeline from './components/Timeline.vue' // +2 requests
    import starConfig from "./assets/star_config.json" // +1 request
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
        <button id="contact">Contact</button>
    </header>
    <main>
        <vue-particles id="stars" :options="starConfig"/>
        <section id="hero">
            <div class="hero-text-container">
                <h2>Hi, I'm Johan Yim</h2>
                <h1>Let's make lightweight, high-performance applications
                    <div class="social-links">
                        <a href="https://github.com/johanyim" 
                            class="nf nf-fa-github"
                            style="color:#cba6f7"></a>
                        <a href="https://www.linkedin.com/in/johanjyyim" 
                            class="nf nf-md-linkedin"
                            style="color:#74c7ec"></a>
                        <a href="mailto:johanjyyim@gmail.com" 
                            class="nf nf-fa-envelope"
                            style="color:#f38ba8"></a>
                    </div>
                </h1>
            </div>
        </section>

        <section id="about">
            <HRule text='About Me'/>
            <div id="self-image-border">
                <div id="self-image">
                    <img src="./assets/transparent.png" alt="me">
                </div>
            </div>
            <div id="about-text">
                <p>I'm Johan, a Computer Science Master's Graduate from the University of Bath, bringing you clear, maintainable code using idiomatic practices and conventions, without sacrificing speed. I'm from Hong Kong.</p>

                <p>I am an aspiring software engineer with a performance-oriented mindset - looking to save the world from slow apps that just suck. I aim to measure what I make, empirically testing and benchmarking my code to grasp every chance at optimization. I take a compiler-first approach to what I do, unafraid to dive into the computed assembly code. Every millisecond counts. Every request costs money. </p>

                <p>When I'm not in front of the computer, I like to read books, practice piano and solve Rubik's cubes. Sometimes you'll find me doing laps at the swimming pool.</p>

            </div>
        </section>

        <section id="experience">
            <HRule text='Experience'/>
            <Timeline id="timeline"/>
        </section>

        <section id="projects">
            <HRule text='Projects'/>
        </section>

        <section id="skills">
            <HRule text='Skills'/>
        </section>


        <section id="calltoaction">
            <HRule text='Contact'/>
        </section>
    </main>
</template>



<script>

export default {
    data () {
        return {
        }
    }
};
</script>



<style scoped lang="scss">
@import url("https://www.nerdfonts.com/assets/css/webfont.css");
@import './assets/style.scss';
@import './assets/base.css';

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

    #contact {
        margin: 10px;
        border-radius: 10px;
        flex: 0 0 auto;
        padding: 1rem;
        background: $ten;
        color: $sixty;
    }

}

#stars {
    position: absolute;
    z-index:-1;
    width: 100vw;
    height: 80vh;
}
    section {
        padding-left: 3rem;
        padding-right: 3rem;
    }
    #hero {
        min-height: 80vh;
        margin-top: 6rem;
        display: flex;
        justify-content: center;
    }

    #about {
        background: $sixty;
    }
    
    #skills {
        background: $sixty;
    }
    
    #projects {
        background: $sixty;
    }



    p {
        color: $thirty;
        font-weight: 300;
        margin-bottom: 2rem;
        @include screen(s) { font-size: 1rem; }
        @include screen(m) { font-size: 1.5rem; }
        @include screen(l) { font-size: 1.5rem; }
        @include screen(xl) { font-size: 2rem; }
    }

    #hero {
        display: flex;
        width: 100%;

        h2 {
            color: $overlay1;
            font-weight: 400;
            @include screen(s) { font-size: 1.5rem; }
            @include screen(m) { font-size: 1.5rem; }
            @include screen(l) { font-size: 2rem; }
        }

        h1 {
            color: $text;
            font-weight: 400;
            @include screen(s) { font-size: 2rem; }
            @include screen(m) { font-size: 2.5rem; }
            @include screen(l) { font-size: 3rem; }
            @include screen(xl) { font-size: 4rem; }
        }

        .hero-text-container {
            margin: auto;
            padding: 3rem;
            width: 100%;
            max-width: 80rem;
        }
    }


    $profile-border-width: 0.5rem;
    $profile-border-color: $ten;
    $profile-dimension: 10rem;
    $profile-background: $surface1;

    #about {
        margin: auto;

        #self-image, 
        #self-image-border, 
        #self-image img { clip-path: polygon(50% 100%, 100% 62%, 83% 0, 18% 0, 0 62%); }
        
        #self-image-border {
            background: $profile-border-color;
            position: relative;
            width: $profile-dimension;
            height: $profile-dimension;
            margin: auto;
        }

        #self-image {
            position: relative;
            height: $profile-dimension - $profile-border-width;
            width: $profile-dimension - $profile-border-width;
            background: $profile-background;
            margin: auto;
            top: calc($profile-border-width / 2);
        }

        #about-text {
            max-width: 60rem;
            margin: auto;

        }
    }

    #experience {
        margin: auto;
        #timeline {
            margin: auto;
            max-width: 80rem;
        }
    }

    a.nf {
        display: inline-block;
        text-decoration: none;
        padding: 0 1rem;
        &:hover{
            color: $overlay0;
            cursor: pointer;
        }
    }





</style>
