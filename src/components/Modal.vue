<template>
<transition name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper"
      @click='onWrapperClick'>
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button class="modal-default-button" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    show: { type: Boolean, default: false },
  },

  data() {
    return {

    }
  },

  mounted() {
    // document.addEventListener('click', this.handleClickOutside)
  },

  beforeDestroy() {
    // document.removeEventListener('click', this.handleClickOutside)
  },

  methods: {
    // handleClickOutside(event) {
    //   console.log('el:', this.$el)
    //   console.log('target:', event.target)
    //   if (this.show && !this.$el.contains(event.target)) {
    //     if (document.contains(event.target)) this.$emit('close')
    //   }
    // },

    onWrapperClick() {
      console.log(this.$el)
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
  @import "@/scss/modal.scss";
</style>
