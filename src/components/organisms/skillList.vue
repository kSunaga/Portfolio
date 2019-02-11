<template>
  <div class="card-box">
    <div class="language">
      <p>language</p>
      <skill-card :name="language['name']" :color="language['color']" :description="language['description']" :date="calcWorkExperience(language['first_experience'])" v-for="language in languages" :key="language.id"></skill-card>
    </div>
    <div class="framework">
      <p>framework</p>
      <skill-card :name="framework['name']" :color="framework['color']" :description="framework['description']" :date="calcWorkExperience(framework['first_experience'])" v-for="framework in frameworks" :key="framework.id"></skill-card>
    </div>
    <div class="infrastructure">
      <p>infrastructure</p>
      <skill-card :name="infrastructure['name']" :color="infrastructure['color']" :description="infrastructure['description']" :date="calcWorkExperience(infrastructure['first_experience'])" v-for="infrastructure in infrastructures" :key="infrastructure.id"></skill-card>
    </div>
  </div>
</template>

<script>
  import skillCard from '../molecules/skillCard.vue'
  import axios from 'axios'

  export default {
    components: {
      skillCard
    },
    data() {
      return {
        response: null,
        languages: [],
        frameworks: [],
        infrastructures: []
      }
    },
    mounted() {
      axios.get('https://fierce-beyond-13003.herokuapp.com/languages')
        .then(response => {
          this.data = this.filterResponse(response.data)
        })
    },
    methods: {
      filterResponse(responses) {
        const self = this
        responses.forEach(function (val, index, response) {
            if (response[index]['skill_id'] === 1) {
              self.languages.push(response[index])

            } else if (response[index]['skill_id'] === 2) {
              self.frameworks.push(response[index])
            } else {
              self.infrastructures.push(response[index])
            }
          })
      },
      calcWorkExperience(start_experience_date) {
        const startDate = new Date(start_experience_date);
        const today = new Date();
        const ms = today.getTime() - startDate.getTime();
        const days = Math.floor(ms / (1000*60*60*24*30));
        return days
      }
    }
  }
</script>


<style scoped>

  p {
    margin-top: 2%;
  }

  .infrastructure {
    margin-bottom: 10%;
  }
  /*.skill-card:hover {*/
  /*height: 200px;*/
  /*transition-delay: 0.5s;*/
  /*}*/
  /*.v-enter-active, .v-leave-active {*/
  /*transition: all 3s;*/
  /*}*/

  /*.v-enter, .v-leave-to {*/
  /*opacity: 0;*/
  /*transform: translateX(-60px);*/
  /*}*/
</style>
