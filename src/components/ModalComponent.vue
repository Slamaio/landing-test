<template>
  <section class="modal">
    <article class="modal-content">
      <slot></slot>
    </article>
    <div class="modal-overlay" @click="closeModal"></div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class ModalComponent extends Vue {
  closeModal() {
    this.$emit('close')
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;

  .modal-content {
    background-color: #fff;
    max-width: 80vw;
    max-height: 80vh;
    padding: 1.25rem;
    z-index: 9999;
  }

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
