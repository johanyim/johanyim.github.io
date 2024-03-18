<script setup>
    import {ref, onMounted} from 'vue'
    import experiences from '../experiences.json'
    import LeaderLine from 'vue3-leaderline'
    const count = experiences.length;
    const randoms = [...Array(count)].map(() => Math.floor(Math.random() * 100));
    const circleRef = ref([])

    onMounted(() => {
    // idk why but I 
        setTimeout(() => {
            for (let i = 0; i <= count - 1; i++) {
                const startCircle = circleRef.value[i]
                const endCircle = circleRef.value[i+1]

                if (startCircle && endCircle) {
                    new LeaderLine(startCircle, endCircle, {
                        color: "#313244",
                        path: "straight",
                        startPlug: "disc",
                        endPlug: "disc",
                        startPlugColor: "#cdd6f4",
                        endPlugColor: "#cdd6f4",
                        startPlugSize: Math.random()*2 + 1,
                        endPlugSize: Math.random()*2 + 1,
                        size: 2,
                    });
                }
            }
        }, 100)
    })

</script>
<template>
    <div id="timeline">

        <div class="timeline-entry" 
            v-for="(data, index) in experiences" 
            :key="data.id">
            <div class="star">  
                <svg width="150" height="100">
                    <circle 
                    :circleId="data.id"
                    :ref="(circle) => (circleRef[data.id] = circle)" 
                    :cx="randoms[index]" 
                    cy="50" r="0" 
                    fill="none" 
                    stroke="#cdd6f4" stroke-width="2" />
                </svg>
            </div>
            <div class="timeline-description">{{data.description}}</div>
        </div>  
    </div>
</template>

<script>

    export default {
        props: {
        },
        methods: {
            formatDate(date) {
                // Custom method to format date as needed
                return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
            },
            randomPosition() {
                return Math.floor(Math.random() * 100);
            }
        },

        data() {
            return {
            };
        },

        mounted() {
        },

    };




</script>

<style scoped lang='scss'>
@import '../assets/style.scss';

* {
    color: $thirty;
}

#timeline {
    display: flex;
    width: 100%;
    display: flex;
    flex-direction: column;

    .timeline-entry {
        display:flex;
    }

}

</style>

<!-- <div id="div1" style="width: 100px; height: 100px; top:0; left:0; background:#777; position:absolute;"></div> -->
<!-- <div id="div2" style="width: 100px; height: 100px; top:300px; left:300px; background:#333; position:absolute;"></div> -->
<!---->




<!-- <svg width="500" height="500"><line x1="50" y1="50" x2="350" y2="350" stroke="black"/></svg> -->
    <!-- <div class="timeline-item"> -->
    <!--      -->
    <!--     <svg width="100" height="100"> -->
    <!--         <circle cx="50" cy="50" r="4" fill="none" stroke="#cdd6f4" stroke-width="2" /> -->
    <!--     </svg> -->
    <!--     <div class="timeline-content"> -->
    <!--         <h3>{{ experience.title }}</h3> -->
    <!--         <p><strong>{{ experience.company }}</strong></p> -->
    <!--         <p>{{ experience.description }}</p> -->
    <!--         <p>{{ experience.start_date }} - {{ experience.end_date }}</p> -->
    <!--     </div> -->
    <!-- </div> -->
