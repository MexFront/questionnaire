<template>
<div
  v-if='showForm'
  class='questionnaire'>
  <div class='questionnaire__notify container'>
    <span class='questionnaire__notify-text'>
      Мы хотим стать лучше! Пожалуйста, пройдите опрос и оцените качество сервиса.&nbsp;
    </span>
    <span
      class='questionnaire__notify-button'
      @click='openModal'>
      Пройти опрос
    </span>
    <input
      @click='hide'
      class='questionnaire__notify-close-button'
      type='button' />
    <div class='questionnaire__notify-close'></div>
  </div>
  <Modal
    v-if='showModal'
    @close='closeModal'>
    <template v-if='page === 1'>
      <h2 slot='header'>Нам важно Ваше мнение!</h2>
      <div slot='body'>
        <h3>{{ questions.data.label }}</h3>
        <div>
          Для оценки используйте 10-балльную шкалу,
          где 10 – точно готовы рекомендовать, 1 – точно не готовы рекомендовать.
        </div>
        <div class='modal__scale'>
          <img src='/images/dislike-3-x.png' />
          <div class='modal__scale-inner'>
            <span class='modal__rate'
              v-for='(i, index) in ratesTotal'
              :key='index'>
              <input
                v-model='rate'
                :id='`rate-${index + 1}`'
                :value='index + 1'
                type='radio' />
              <label :for='`rate-${index + 1}`'>{{ index + 1 }}</label>
            </span>
          </div>
          <img src='/images/like-3-x.png' />
        </div>
      </div>
      <div slot='footer'>
        <form @submit.prevent='submit'>
          <div class='modal-footer__buttons'>
            <input type='submit' value='Отправить' class='modal__button-send' />
            <input
              type='button'
              value='Больше не спрашивать'
              class='modal__button-noask'
              @click='hide' />
          </div>
        </form>
      </div>
    </template>
    <template v-if='page === 2'>
      <h2 slot='header'>Почему Вы не поставили оценку 10?</h2>
      <div slot='body'>
        <div>
          Выберите не более 3-х ключевых причин.
        </div>
        <div class='modal-body__reasons'>
          <div
            v-for='reason in reasons'
            :key='reason.id'
            class='modal-body__reason'>
            <input
              v-model='checkedReasons'
              :id='`reason-${reason.id}`'
              :disabled='checkedReasons.length > 2 && checkedReasons.indexOf(reason.id) === -1'
              :value='reason.id'
              type='checkbox'>
            <label :for='`reason-${reason.id}`'>{{ reason.label }}</label>
          </div>
        </div>
      </div>
      <div slot='footer'>
        <form @submit.prevent='submit'>
          <div class='modal-footer__buttons'>
            <input type='submit' value='Отправить' class='modal__button-send' />
            <input type='button' value='Закрыть' class='modal__button-close' @click='closeModal' />
          </div>
        </form>
      </div>
    </template>
    <template v-if='page === 3'>
      <h2 slot='header'>Багодарим за оценку!</h2>
      <div slot='body'>
        <div>
          Мы будем признательны, если Вы оставите отзыв или предложение по
          улучшению работы «Газпромнефть-Корпоративные продажи».
        </div>
        <textarea
          v-model='textarea'
          class='modal-body__textarea'
          maxlength='512'
          name='review'
          placeholder='Ваш ответ...'>
        </textarea>
      </div>
      <div slot='footer'>
        <form @submit.prevent='submit'>
          <div class='modal-footer__buttons'>
            <input type='submit' value='Отправить' class='modal__button-send' />
            <input type='button' value='Закрыть' class='modal__button-close' @click='closeModal' />
          </div>
        </form>
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
      notFinished: false,
      page: 1,
      questions: null,
      rate: null,
      showForm: true,
      showModal: false,
      textarea: '',
    }
  },

  mounted() {
    // использую sessionStorage вместо localStorage
    if (sessionStorage.getItem('showForm') === 'false') {
      this.showForm = false
    }

    axios
      .get('questions.json')
      // eslint-disable-next-line no-return-assign
      .then(response => (this.questions = response.data))
  },

  computed: {
    ratesTotal() { return new Array(10) },

    reasons() { return this.questions.data.reasons },
  },

  methods: {
    async submit() {
      const formData = {
        finish: false,
        message: null,
        rate: this.rate,
        reasons: [],
      }

      if (this.page === 3) {
        if (!this.notFinished) formData.finish = true
        formData.message = this.textarea
        formData.reasons = this.checkedReasons
        if (!this.notFinished) this.hide()
      }

      if (this.page === 2) {
        formData.reasons = this.checkedReasons
        if (!this.notFinished) this.page = 3
      }


      axios.post('/', formData)

      if (this.page === 1 && this.rate === 10) this.page = 3
      if (this.page === 1 && this.rate > 1 && this.rate <= 9) this.page = 2
    },

    closeModal() {
      this.showModal = false
      this.notFinished = true
      this.submit()
    },

    openModal() {
      this.showModal = true
      this.notFinished = false
    },

    hide() {
      this.showForm = false
      sessionStorage.setItem('showForm', false)
      this.closeModal()
    },
  },
}
</script>

<style lang='scss'>
  @import '@/scss/questionnaire.scss';
</style>
