<template>
<div class="questionnaire">
  <div class="questionnaire__notify container">
    <span class="questionnaire__notify-text">
      Мы хотим стать лучше! Пожалуйста, пройдите опрос и оцените качество сервиса.&nbsp;
    </span>
    <span class="questionnaire__notify-button">
      Пройти опрос
    </span>
    <div class="questionnaire__notify-close"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Questionnaire',

  components: {

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
  @import "@/scss/questionnaire.scss";
</style>
