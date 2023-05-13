<template>
  <div class="tag" :class="'tag--' + variation">
    <IconFire class="icon" v-if="variation == 'popular'" />
    <IconHouse class="icon" v-if="variation == 'new-house'" />
    <IconWallet class="icon" v-if="variation == 'best-deals'" />
    {{ variation.replace('-', ' ') }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'
import IconFire from '@/components/icons/IconFire.vue'
import IconHouse from '@/components/icons/IconHouse.vue'
import IconWallet from '@/components/icons/IconWallet.vue'

@Component({
  components: {
    IconFire,
    IconHouse,
    IconWallet,
  },
})
export default class TagComponent extends Vue {
  @Prop() variation!: string
}
</script>

<style scoped lang="scss">
.tag {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.625rem;

  border-radius: 2rem;

  position: absolute;
  left: 1rem;
  bottom: 1rem;

  font-size: 0.875rem;
  line-height: 1.125rem;

  text-transform: capitalize;

  &--popular {
    background: #fee2e2;
    color: #ef4444;
  }

  &--new-house {
    background: #dbeafe;
    color: #1d4ed8;
  }

  &--best-deals {
    background: #d1fae5;
    color: #047857;
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
