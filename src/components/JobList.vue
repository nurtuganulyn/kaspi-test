<template>
  <div>
    <JobItem v-for="(job, index) in jobs" :key="index" :job="job"/>
  </div>
</template>

<script>
import JobItem from "./JobItem";
export default {
  name:'JobList',
  components: {JobItem},
  props:{
    jobs:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
