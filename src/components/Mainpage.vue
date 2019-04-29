<template>
<div class="page">
  This is MainPage
  <Questionnaire></Questionnaire>
</div>

</template>

<script>
import Questionnaire from './Questionnaire.vue'


export default {
  name: 'Mainpage',

  components: {
    Questionnaire,
  },

  props: {

  },

  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
  .page {
  }
</style>
