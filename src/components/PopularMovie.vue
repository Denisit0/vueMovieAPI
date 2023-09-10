<template>
    <div class="mx-3">
        <h2 class="mt-2 grey--text">Películas populares</h2>
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id">
                    <MovieCard :movie="movie" :genres="genres"></MovieCard>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
export default {
   components:{
    MovieCard,
   },
   data: function(){
    return{
        movies: [],
        genres: []
    };
   },
   async mounted() {
    this.ftechGenres();
    try{
        const response = await this.$http.get ("movie/popular")
        this.movies = response.data.results;
    }catch(error){
        console.log(error)
    }
   },
   methods:{
    async ftechGenres(){
        try{
            const response = await this.$https.get('/genre/movie/list')
            this.genres = response.data.genres;
        }catch(error){
            console.log(error)
        }
    }
   }
}

</script>

<style>

</style>