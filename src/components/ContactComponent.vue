<template>
    <div class="resume">
      <div class="header">
        <h1>
            <v-badge bordered bottom color="green" dot offset-x="10" offeset-y="10">
            <v-avatar size="80">
                <v-img src="../assets/foto.jpg"></v-img>
            </v-avatar>
        </v-badge>{{ fullName }}</h1>
        <p>{{ jobTitle }}</p>
      </div>
      <div class="content">

        <h2>Integrantes</h2>
        <ul>
          <li v-for="nombre in nombres" :key="nombre.id">
            <h3>{{ nombre.nombreuno }}</h3>
            <p>{{ nombre.nombredos }}</p>

          </li>
        </ul>

        <h2>Tecnologías utilizadas</h2>
        <ul>
          <li v-for="tecnologia in tecnologias" :key="tecnologia.id">
            <h3>{{ tecnologia.position }}</h3>
            <p>{{ tecnologia.company }}</p>
            <p>{{ tecnologia.duration }}</p>
            <p>{{ tecnologia.description }}</p>
          </li>
        </ul>
  
        <h2>Conocimientos</h2>
        <ul>
          <li v-for="conocimiento in conocimientos" :key="conocimiento.id">{{ conocimiento.name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: "Proyecto Películas",
        jobTitle: "Desarrollo de Aplicaciones multiplataformas",
        tecnologias: [
          {
            id: 1,
            position: "Vue",
            company: "Vuetify",
            duration: "TheMovieDB (API)",
            description: "Usamos todas las tecnologías que se pudo conocer para Vue, teniendo en cuenta que existen muchas más las cuales pueden ser utilizadas más adelante :D.",
          },
        ],
        nombres: [
          {
            id: 1,
            nombreuno: "Dennis Alexander Díaz Portillo",
            nombredos: "Cristian Alexander Parada López",
          },
          // Agrega más educación aquí...
        ],
        conocimientos: [
          { id: 1, name: "JavaScript" },
          { id: 2, name: "Vue" },
          { id: 3, name: "HTML" },
          { id: 4, name: "CSS" },
          { id: 5, name: "PHP" },
          { id: 6, name: "Laravel" },
          { id: 7, name: "React" },
          { id: 8, name: "Bootstrap" },
          { id: 9, name: "Git" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .resume {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .content {
    line-height: 1.5;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  h1 {
    font-size: 24px;
  }
  
  h2 {
    font-size: 20px;
    margin-top: 30px;
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  p {
    margin: 5px 0;
  }
  </style>
  