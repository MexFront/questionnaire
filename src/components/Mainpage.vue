<template>
<div class="page">
  <header class="page__header header">
    <div class="header__logo container">
      <img src="/images/opti-24-logo.svg" />
      <img src="/images/gpn-logo.svg" />
    </div>
  </header>
  <section class="page__content">
    <Questionnaire
      >

    </Questionnaire>
  </section>
  <footer class="page__footer footer">
    <div class="footer__logo container">
      <img src="/images/opti-24-logo-new.svg" />
      <img class="footer__logo-img _opacity_low" src="/images/gpn-logo.svg" />
    </div>
  </footer>
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
  @import "@/scss/mainpage.scss";
</style>
