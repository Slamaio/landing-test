<template>
  <div class="carousel" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="inner" ref="inner" :style="innerStyles">
      <slot name="slides"></slot>
    </div>

    <slot name="navigation" :slot-scope="activeSlide"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'vue-facing-decorator'

@Component({})
export default class CarouselComponent extends Vue {
  @Ref('inner') inner!: any
  @Prop() modelValue!: any
  @Prop({ default: 0 }) autoplay!: number
  @Prop({ default: false }) pauseAutoplayOnHover!: boolean
  @Prop({ default: '0' }) gap!: string
  @Prop({ default: true }) drag!: boolean

  hover = false
  activeSlide = 0

  innerStyles = {}
  step = 0
  transitioning = false

  dragStartX = 0
  dragOffset = 0
  isDragging = false

  mounted() {
    this.resetTranslate()
    if (this.autoplay) {
      setInterval(() => {
        if (!(this.pauseAutoplayOnHover && this.hover)) this.next()
      }, this.autoplay)
    }

    if (this.drag) {
      // Add the event listeners
      this.inner.addEventListener('mousedown', this.handleDragStart.bind(this))
      this.inner.addEventListener('mousemove', this.handleDrag.bind(this))
      this.inner.addEventListener('mouseup', this.handleDragEnd.bind(this))

      this.inner.addEventListener('touchstart', this.handleDragStart.bind(this))
      this.inner.addEventListener('touchmove', this.handleDrag.bind(this))
      this.inner.addEventListener('touchend', this.handleDragEnd.bind(this))
    }
  }

  setStep() {
    const innerWidth = this.inner.scrollWidth
    const totalSlides = this.modelValue.length
    this.step = innerWidth / totalSlides
  }

  goToSlide(index: number) {
    if (this.transitioning || index === this.activeSlide) return

    this.transitioning = true

    const diff = index - this.activeSlide
    const direction = diff > 0 ? 'left' : 'right'
    const absDiff = Math.abs(diff)

    this.moveSlides(absDiff, direction)

    this.afterTransition(() => {
      if (direction === 'left') {
        for (let i = 0; i < absDiff; i++) {
          const slide = this.modelValue.shift()
          this.modelValue.push(slide)
        }
        this.resetTranslate()
        this.activeSlide = (this.activeSlide + absDiff) % this.modelValue.length
      } else {
        for (let i = 0; i < absDiff; i++) {
          const slide = this.modelValue.pop()
          this.modelValue.unshift(slide)
        }
        this.resetTranslate()
        this.activeSlide =
          (this.activeSlide - absDiff + this.modelValue.length) % this.modelValue.length
      }
      this.transitioning = false
    })
  }

  moveSlides(absDiff: number, direction: string) {
    this.setStep()

    const distance = this.step * absDiff
    const translateX = direction === 'left' ? -distance : distance

    this.innerStyles = {
      gap: this.gap,
      transform: `translateX(${translateX}px)`,
    }
  }

  next() {
    if (this.transitioning) return

    this.transitioning = true

    this.moveSlides(1, 'left')

    this.afterTransition(() => {
      const slide = this.modelValue.shift()
      this.modelValue.push(slide)
      this.resetTranslate()
      this.activeSlide = (this.activeSlide + 1) % this.modelValue.length
      this.transitioning = false
    })
  }

  prev() {
    if (this.transitioning) return

    this.transitioning = true

    this.moveSlides(1, 'right')

    this.afterTransition(() => {
      const slide = this.modelValue.pop()
      this.modelValue.unshift(slide)
      this.resetTranslate()
      this.activeSlide = (this.activeSlide - 1 + this.modelValue.length) % this.modelValue.length
      this.transitioning = false
    })
  }

  afterTransition(callback: () => void) {
    const listener = () => {
      callback()
      this.inner.removeEventListener('transitionend', listener)
      this.inner.style.transition = 'transform 0.2s' // Add transition back after dragging
    }
    this.inner.addEventListener('transitionend', listener)
  }

  resetTranslate() {
    this.innerStyles = {
      gap: this.gap,
      transition: 'none',
      transform: 'translateX(0)',
    }
  }

  // handleDragStart(event: MouseEvent) {
  //   if (this.transitioning) return

  //   this.isDragging = true
  //   this.dragStartX = event.clientX
  //   this.dragOffset = 0
  //   this.inner.style.transition = 'none'
  // }

  // handleDrag(event: MouseEvent) {
  //   if (!this.isDragging) return

  //   const dragDistance = event.clientX - this.dragStartX
  //   this.dragOffset = dragDistance

  //   // Move the slides based on the drag distance
  //   this.inner.style.transform = `translateX(${this.dragOffset}px)`
  // }

  // handleDragEnd() {
  //   if (!this.isDragging) return

  //   this.isDragging = false

  //   // Determine the direction of the drag based on the drag offset
  //   const dragThreshold = this.inner.offsetWidth * 0.1
  //   const direction =
  //     this.dragOffset > dragThreshold ? 'left' : this.dragOffset < -dragThreshold ? 'right' : ''

  //   if (direction === 'left') {
  //     this.prev()
  //   } else if (direction === 'right') {
  //     this.next()
  //   } else {
  //     // Reset the position if the drag distance is not enough to trigger a slide change
  //     this.resetTranslate()
  //   }
  // }

  handleDragStart(event: any) {
    if (this.transitioning) return

    this.isDragging = true
    this.dragStartX = this.getEventX(event)
    this.dragOffset = 0
    this.inner.style.transition = 'none'
  }

  handleDrag(event: any) {
    if (!this.isDragging) return

    const dragDistance = this.getEventX(event) - this.dragStartX
    this.dragOffset = dragDistance

    // Move the slides based on the drag distance
    this.inner.style.transform = `translateX(${this.dragOffset}px)`
  }

  handleDragEnd() {
    if (!this.isDragging) return

    this.isDragging = false

    // Determine the direction of the drag based on the drag offset
    const dragThreshold = this.inner.offsetWidth * 0.1
    const direction =
      this.dragOffset > dragThreshold ? 'left' : this.dragOffset < -dragThreshold ? 'right' : ''

    if (direction === 'left') {
      this.prev()
    } else if (direction === 'right') {
      this.next()
    } else {
      // Reset the position if the drag distance is not enough to trigger a slide change
      this.resetTranslate()
    }
  }

  getEventX(event: any) {
    return event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX
  }
}
</script>

<style>
.carousel {
  max-width: 100%;
  overflow: hidden;
  position: relative;
}

.inner {
  display: flex;
  transition: transform 0.2s;
  max-width: calc(100vw - 2rem);
}

.slide {
  display: inline-flex;
  overflow: visible;
}
</style>
