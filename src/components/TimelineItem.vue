<!-- <template> -->
<!--     <div class="timeline-item"> -->
<!--          -->
<!--         <svg width="100" height="100"> -->
<!--             <circle cx="50" cy="50" r="4" fill="none" stroke="#cdd6f4" stroke-width="2" /> -->
<!--         </svg> -->
<!--         <div class="timeline-content"> -->
<!--             <h3>{{ experience.title }}</h3> -->
<!--             <p><strong>{{ experience.company }}</strong></p> -->
<!--             <p>{{ experience.description }}</p> -->
<!--             <p>{{ experience.start_date }} - {{ experience.end_date }}</p> -->
<!--         </div> -->
<!--     </div> -->
<!-- </template> -->
<!---->
<!-- <script> -->
<!--     export default { -->
<!--         props: { -->
<!--             experience: { -->
<!--                 type: Object, -->
<!--                 required: true -->
<!--             } -->
<!--         }, -->
<!--         methods: { -->
<!--             formatDate(date) { -->
<!--                 // Custom method to format date as needed -->
<!--                 return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }); -->
<!--             } -->
<!--         } -->
<!--     }; -->
<!-- </script> -->
<!---->
<!-- <style scoped lang='scss'> -->
<!-- @import '../assets/style.scss'; -->
<!---->
<!-- .timeline-item { -->
<!--     position: relative; -->
<!--     display: flex; -->
<!-- } -->
<!---->
<!-- .timeline-content { -->
<!--     background-color: $ten; -->
<!--     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); -->
<!-- } -->
<!---->
<!-- .timeline-content h3 { -->
<!-- } -->
<!---->
<!-- .timeline-content p { -->
<!-- } -->
<!---->
<!-- </style> -->
<!---->
<!-- <!-- <div id="div1" style="width: 100px; height: 100px; top:0; left:0; background:#777; position:absolute;"></div> --> -->
<!-- <!-- <div id="div2" style="width: 100px; height: 100px; top:300px; left:300px; background:#333; position:absolute;"></div> --> -->
<!-- <!----> -->
<!-- <!-- <svg width="500" height="500"><line x1="50" y1="50" x2="350" y2="350" stroke="black"/></svg> --> -->
