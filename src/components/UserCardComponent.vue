<template>
  <div class="user">
    <img class="user__avatar" :src="avatar" />
    <div class="user__info">
      <b>{{ title }}</b>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'

@Component({})
export default class ReadyToSellComponent extends Vue {
  @Prop() avatar?: string
  @Prop() title?: string
  @Prop() subtitle?: string
}
</script>

<style scoped>
.user {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user__avatar {
  border-radius: 50%;
}

b,
p {
  align-self: stretch;
}

b {
  font-size: 1.125rem;
  line-height: 133%;

  color: #0e1735;
}

p {
  font-size: 0.875rem;
  line-height: 157%;

  color: #888b97;
}
</style>
