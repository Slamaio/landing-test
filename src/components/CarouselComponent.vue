<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <slot name="slides"></slot>
    </div>
  </div>
  <slot name="navigation"></slot>
  <div v-if="!$slots.navigation">
    <!-- <button @click="prev">prev</button>
    <button @click="next">next</button> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'vue-facing-decorator'

@Component({})
export default class CarouselComponent extends Vue {
  @Ref('inner') inner!: any
  @Prop() modelValue!: any
  @Prop() autoplay = 0
  @Prop() pauseAutoplayOnHover = false

  innerStyles = {}
  step = ''
  transitioning = false

  activeIndex = 0

  mounted() {
    this.setStep()
    this.resetTranslate()
    if (this.autoplay) {
      setInterval(() => {
        this.next()
      }, this.autoplay)
    }
  }

  setStep() {
    const innerWidth = this.inner.scrollWidth
    const totalSlides = this.modelValue.length
    this.step = `${innerWidth / totalSlides}px`
  }

  next() {
    if (this.transitioning) return

    this.transitioning = true

    this.moveLeft()

    this.afterTransition(() => {
      const slide = this.modelValue.shift()
      this.modelValue.push(slide)
      this.resetTranslate()
      this.transitioning = false
    })
  }

  prev() {
    if (this.transitioning) return

    this.transitioning = true

    this.moveRight()

    this.afterTransition(() => {
      const slide = this.modelValue.pop()
      this.modelValue.unshift(slide)
      this.resetTranslate()
      this.transitioning = false
    })
  }

  moveLeft() {
    this.setStep()
    this.innerStyles = {
      transform: `translateX(-${this.step})`,
    }
  }

  moveRight() {
    this.setStep()
    this.innerStyles = {
      transform: `translateX(${this.step})`,
    }
  }

  afterTransition(callback: () => void) {
    const listener = () => {
      callback()
      this.inner.removeEventListener('transitionend', listener)
    }
    this.inner.addEventListener('transitionend', listener)
  }

  resetTranslate() {
    this.innerStyles = {
      transition: 'none',
    }
  }
}
</script>

<style>
.carousel {
  max-width: 90vw;
  overflow: visible;
}

.inner {
  display: flex;
  transition: transform 0.2s;
  white-space: nowrap;
}

.slide {
  display: inline-flex;
  overflow: visible;
}

/* optional */
.carousel button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
