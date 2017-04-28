<template lang="html">
    <div class="carousels-demo">
        <div class="block-header">
            <h2>Carousel
                <small>A slideshow component for cycling through elements, like a carousel.</small>
            </h2>
        </div>

        <div>

            <Carousel interval="3000" @change="onchange">
                <CarouselItem>
                    <template slot="default">
                        <img src="../../media/carousel/c-1.jpg" alt="">
                        <div class="carousel-caption">
                            <h3>First Slide Label</h3>
                            <p>Some sample text goes here...</p>
                        </div>
                    </template>
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