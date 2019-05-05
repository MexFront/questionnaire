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
    <template v-if='page === 1'>
      <h2 slot="header">Нам важно Ваше мнение!</h2>
      <div slot="body">
        <h3>{{ questions.data.label }}</h3>
        <div>
          Для оценки используйте 10-балльную шкалу,
          где 10 – точно готовы рекомендовать, 1 – точно не готовы рекомендовать.
        </div>
        <div class="modal__scale">
          <img src="/images/dislike-3-x.png" />
          <div class="modal__scale-inner">
            <span class="modal__mark"
              v-for='(i, index) in marksTotal'
              :key='index'>
              <input
                v-model='mark'
                :id='`mark-${index + 1}`'
                :value='index + 1'
                type="radio" />
              <label :for='`mark-${index + 1}`'>{{ index + 1 }}</label>
            </span>
          </div>
          <img src="/images/like-3-x.png" />
        </div>
      </div>
      <div slot="footer">
        <div class="modal-footer__buttons">
          <input type="button" value="Отправить" class="modal__button-send" />
          <input type="button" value="Больше не спрашивать" class="modal__button-noask" />
        </div>
      </div>
    </template>
    <template v-if='page === 2'>
      <h2 slot="header">Почему Вы не поставили оценку 10?</h2>
      <div slot="body">
        <div>
          Выберите не более 3-х ключевых причин.
        </div>
        <div class="modal-body__reasons">
          <div
            v-for='reason in reasons'
            :key='reason.id'
            class="modal-body__reason">
            <input
              v-model='checkedReasons'
              :id='`reason-${reason.id}`'
              :disabled='checkedReasons.length > 2 && checkedReasons.indexOf(reason.label) === -1'
              :value='reason.label'
              type='checkbox'>
            <label :for='`reason-${reason.id}`'>{{ reason.label }}</label>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="modal-footer__buttons">
          <input type="button" value="Отправить" class="modal__button-send" />
          <input type="button" value="Закрыть" class="modal__button-close" />
        </div>
      </div>
    </template>
    <template v-if='page === 3'>
      <h2 slot="header">Багодарим за оценку!</h2>
      <div slot="body">
        <div>
          Мы будем признательны, если Вы оставите отзыв или предложение по
          улучшению работы «Газпромнефть-Корпоративные продажи».
        </div>
        <textarea
          class='modal-body__textarea'
          maxlength='512'
          name='review'
          placeholder='Ваш ответ...'>
        </textarea>
      </div>
      <div slot="footer">
        <div class="modal-footer__buttons">
          <input type="button" value="Отправить" class="modal__button-send" />
          <input type="button" value="Закрыть" class="modal__button-close" />
        </div>
      </div>
    </template>
  </Modal>
</div>
</template>

<script>
import axios from 'axios'
import Modal from './Modal.vue'

export default {
  name: 'Questionnaire',

  components: {
    Modal,
  },

  data() {
    return {
      checkedReasons: [],
      mark: null,
      page: 3,
      questions: null,
      showModal: false,
    }
  },

  mounted() {
    axios
      .get('questions.json')
      // eslint-disable-next-line no-return-assign
      .then(response => (this.questions = response.data))
  },

  computed: {
    marksTotal() { return new Array(10) },

    reasons() { return this.questions.data.reasons },
  },

  methods: {
    closeModal() { this.showModal = false },
  },
}
</script>

<style lang="scss">
  @import "@/scss/questionnaire.scss";
</style>
