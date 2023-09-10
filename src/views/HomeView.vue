<template>
  <div>
    <UpcomingMovie></UpcomingMovie>
    <PopularMovie></PopularMovie>
  </div>
</template>

<style>
</style>

<script>
import PopularMovie from '@/components/PopularMovie.vue';
import UpcomingMovie from '@/components/UpcomingMovie.vue';
  export default {
    name: "Home_one",
    components: { 
      PopularMovie,
      UpcomingMovie }
}
</script>
