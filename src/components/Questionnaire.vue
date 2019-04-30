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
    :show='showModal'
    @close='closeModal'>
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
