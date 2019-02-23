<template>
  <div>
    <p v-show="!loading">クリックすると詳細が表示されます。</p>
    <loading v-show="loading"></loading>
  <div class="card-box" v-show="!loading">
    <div class="language">
      <p>language</p>
      <skill-card :id="language['id']" :name="language['name']" :color="language['color']" :description="language['description']" :date="language['first_experience']" v-for="language in languages" :key="language.id"></skill-card>
    </div>
    <div class="framework">
      <p>framework</p>
      <skill-card :id="framework['id']" :name="framework['name']" :color="framework['color']" :description="framework['description']" :date="framework['first_experience']" v-for="framework in frameworks" :key="framework.id"></skill-card>
    </div>
    <div class="infrastructure">
      <p>infrastructure</p>
      <skill-card :id="infrastructure['id']" :name="infrastructure['name']" :color="infrastructure['color']" :description="infrastructure['description']" :date="infrastructure['first_experience']" v-for="infrastructure in infrastructures" :key="infrastructure.id"></skill-card>
    </div>
  </div>
  </div>
</template>

<script>
  import skillCard from '../molecules/skillCard.vue'
  import loading from '../atoms/loading.vue'
  import axios from 'axios'

  export default {
    components: {
      skillCard,
      loading
    },
    data() {
      return {
        languages: [],
        frameworks: [],
        infrastructures: [],
        loading: true
      }
    },
    mounted() {
      axios.get(`${process.env.VUE_APP_API_BASE_URL}/languages`)
        .then(response => {
          this.data = this.filterResponse(response.data)
          this.loading = false
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
      }
    }
  }
</script>


<style scoped>

  p {
    margin-top: 2%;
    font-size: large;
  }

  .infrastructure {
    margin-bottom: 10%;
  }

</style>
