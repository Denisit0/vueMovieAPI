<template>
    <div id="example">
        <h2 class="mx-3 Blue--text" style="text-align: center;">Próximos estrenos</h2>
    <Carousel3d
        :controls-visible="true"
        :clicktable="false"
        :key="upcomingMovies.leght"
        :listData="upcomingMovies"
        :height="500">
        <Slide
        :index="i"
        :key="i"
        v-for="(movie, i) in this.upcomingMovies">
            <figure>
                <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Upcoming movies">
            </figure>
        </Slide>
    </Carousel3d>
    </div>
</template>

<style>
.carousel-3d-container figure{
    margin: 0;
}
.carousel-3d-container figcaption{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    min-width: 100%;
    box-sizing: border-box;
}
.next span,
.prev span{
    color: red;
}

</style>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d';
export default{
    data(){
        return {
            upcomingMovies: []
        };
    },
    components : {
        Carousel3d,
        Slide,
    },
    mounted() {
        this.ftechUpcomingMovies();
    },
    methods:{
        async ftechUpcomingMovies(){
            const response = await this.$http.get(
                "https://api.themoviedb.org/3/movie/upcoming"
            );
            this.upcomingMovies = response.data.results.slice(1,8);
            console.log(this.upcomingMovies);
        }
    }
}

</script>