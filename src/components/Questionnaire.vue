<template>
<div class="questionnaire">
  <div class="questionnaire__notify container">
    <span class="questionnaire__notify-text">
      Мы хотим стать лучше! Пожалуйста, пройдите опрос и оцените качество сервиса.&nbsp;
    </span>
    <span
      class="questionnaire__notify-button"
      @click='showModal = true'>
      Пройти опрос
    </span>
    <div class="questionnaire__notify-close"></div>
  </div>
  <Modal
    v-if='showModal'
    @close='closeModal'>
    <h2 slot="header">Нам важно Ваше мнение!</h2>
    <div slot="body">
      <h3>Оцените, пожалуйста, Вашу готовность рекомендовать
        «Газпромнефть-Корпоративные продажи» своим коллегам / партнерам?</h3>
      <div>
        Для оценки используйте 10-балльную шкалу,
        где 10 – точно готовы рекомендовать, 1 – точно не готовы рекомендовать.
      </div>
      <div>
        <input type="radio" />
      </div>
    </div>
  </Modal>
</div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'Questionnaire',

  components: {
    Modal,
  },

  props: {

  },

  data() {
    return {
      showModal: false,
    }
  },

  methods: {
    closeModal() { this.showModal = false },
  },
}
</script>

<style scoped lang="scss">
  @import "@/scss/questionnaire.scss";
</style>
