<template>
  <component
      :class="'filter-button'"
      v-bind="$attrs"
      v-on="$listeners"
      :is="tag"
  >
    <slot>
      <svg  class="filter-button__logos">
        <use :xlink:href="require('@/assets/icons/sprite.svg') + '#filter'"></use>
      </svg>
    </slot>
  </component>
</template>

<script>
export default {
  name:'BaseButton',
  props:{
    tag: {
      type: String,
      default: "button",
    },

  }
}
</script>

<style scoped lang="scss">
.filter-button{
  width: 40px;
  height: 40px;
  margin-top: 35px;
  margin-left: 8px;
  background: #FFC803;
  border-radius: 8px;
  border: none;
  padding: 11px 13px;
  &__logos{
    width: 14px;
    height: 18px;
  }
}
</style>
