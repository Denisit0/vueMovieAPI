<template>
    <nav>
        <v-system-bar app dark>
            <v-spacer></v-spacer>
           
        </v-system-bar>
        <v-app-bar app color="green" dark>
            <v-icon class="mr-2">fas fa-video</v-icon>
            <v-btn text class="ml-3" color="gray" to="/">
            <v-toolbar-title>Proyecto Películas</v-toolbar-title>
            </v-btn>
            <v-btn text class="ml-2" to="/">Películas</v-btn>
            <v-btn text class="ml-2" to="/ActorsComponent">Actores</v-btn>
            <v-btn text class="ml-2" to="/ContactComponent">Contáctanos</v-btn>
            
            <v-spacer></v-spacer>
            <v-autocomplete
            clearable
            hide-no-data
            hide-selected
            color="white"
            label="Search"
            prepend-inner-icon="search" 
            flat
            :items="movies"
            item-text="title"
            item-value="id"
            id="search">

            <template v-slot:item="{item}">
                <v-btn text :to="`/movie/${item.id}`">{{ item.title }}</v-btn>
            </template>
        </v-autocomplete>
        <v-badge bordered bottom color="green" dot offset-x="10" offeset-y="10">
            <v-avatar size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-avatar>
        </v-badge>
        </v-app-bar>
    </nav>
</template>

<script>

</script>

<script>
export default {
    data:()=>({
        drawer: null,
        model:'',
        search: null,
        movies: [],
    }),
    mounted() {
        this.loadMovies();
    },
    methods: {
        loadMovies: async function () {
            try {
                const response = await this.$http.get("/movie/popular");
                this.movies = response.data.results;
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>