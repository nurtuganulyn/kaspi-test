<template>
  <div class="base-layout">
    <main>
      <slot/>
    </main>
  </div>

</template>

<script>
export default {
  name:'BaseLayout'
}

</script>

<style scoped lang="scss">
.base-layout{
  padding: 0 24px;
}
</style>
