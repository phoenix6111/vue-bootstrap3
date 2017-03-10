<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Carousel
                <small>A slideshow component for cycling through elements, like a carousel.</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <Carousel interval="3000" @change="onchange">
                <CarouselItem>
                    <img src="../../media/carousel/c-1.jpg" alt="">
                    <div class="carousel-caption">
                        <h3>First Slide Label</h3>
                        <p>Some sample text goes here...</p>
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <img src="../../media/carousel/c-2.jpg" alt="">
                </CarouselItem>

                <CarouselItem>
                    <img src="../../media/carousel/c-3.jpg" alt="">
                </CarouselItem>
            </Carousel>

        </div>
    </div>
</template>
<script>
    export default {
        name:'Carousels',
        methods: {
            onchange(newIndex,oldIndex) {
//                console.log("new "+newIndex+" old "+oldIndex);
            }
        }
    }
</script>