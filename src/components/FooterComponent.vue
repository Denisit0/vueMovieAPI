<template>
    <v-footer dark padless>
        <v-card flat tile class="pink white--text text-conter">
            <v-card-text>
                <v-btn v-for="icon in icons" :href="getSocialLink(icon)" :key="icon" class="mx-4 white--text" icon>
                    <v-icon size="24">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text>
            <v-divider></v-divider>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: ()=>({
        icons:[
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram'
        ]
    }),
    methods: {
    getSocialLink(icon) {
      const socialLinks = {
        'mdi-facebook': 'https://www.facebook.com/d3nisit0',
        'mdi-twitter': 'https://twitter.com/Dennisd40510021',
        'mdi-linkedin': 'https://www.linkedin.com/in/dennis-alexander-d%C3%ADaz-portillo-720a55215/',
        'mdi-instagram': 'https://www.instagram.com/d3nisit0/?hl=es'
      };
      // Devuelve la URL correspondiente al icono
      return socialLinks[icon] || '#'; 
    }
  }
}
</script>

<style>
</style>