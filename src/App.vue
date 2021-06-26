<template>
  <div id="app">
    <BaseLayout>
    <h1>Welcome Kaspi</h1>
    <div class="top">
    <BaseTextField
        :label-text="'Search'"
        magnifier
        class="input"
        v-model="search"
    />
    <BaseButton/>
    </div>
      <div v-for="job in filteredJobs" :key="job.name">
      <JobList :jobs="job" />
      </div>
    </BaseLayout>
  </div>
</template>

<script>
import BaseTextField from "./components/BaseTextField";
import BaseButton from "./components/BaseButton";
import BaseLayout from "./components/BaseLayout";
import JobList from "./components/JobList";

export default {
  name: 'App',
  computed:{
    filteredJobs(){
      return this.jobs.filter(job => job.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))
    }
  },
  components: {
    JobList,
    BaseLayout,
    BaseButton,
    BaseTextField
  },
  data(){
    return{
      search:"",
      jobs:[
        {
          name: "Senior Software Developer (Re-advertised)",
          company: "I&M Bank",
          location: {
            country: "Kenya",
            city: "Nairobi"
          },
          postedDaysAgo: 3,
          views: 420,
          logoSrc:"imBank"
        },
        {
          name: "Media manager",
          company: "Lombrisol",
          location: {
            country: "Morocco",
            city: "Ait Melloul"
          },
          postedDaysAgo: 6,
          views: 328,
          logoSrc:"lombrisol"
        },
        {
          name: "WEB developer",
          company: "Cool Hubs",
          location: {
            country: "Nigeria",
            city: "Owerri"
          },
          postedDaysAgo: 4,
          views: 160
        },
        {
          name: "iOS developer",
          company: "Live Love",
          location: {
            country: "Germany",
            city: "Berlin"
          },
          postedDaysAgo: 11,
          views: 211
        },
        {
          name: "Backend Engineer",
          company: "Revolut",
          location: {
            country: "Kazakhstan",
            city: "Almaty"
          },
          postedDaysAgo: 4,
          views: 441
        },
        {
          name: "DevOps Engineer (Mid-Senior level)",
          company: "Improvado",
          location: {
            country: "Ukraine",
            city: "Kyiv"
          },
          postedDaysAgo: 3,
          views: 63
        },
        {
          name: "Product Development Engineer",
          company: "Kaseya",
          location: {
            country: "Poland",
            city: "Katowice"
          },
          postedDaysAgo: 9,
          views: 255
        },
        {
          name: "C++ Engineer",
          company: "Orion Innovation",
          location: {
            country: "Spain",
            city: "Madrid"
          },
          postedDaysAgo: 2,
          views: 212
        },
        {
          name: "AI AQA Engineer",
          company: "Corning Incorporated",
          location: {
            country: "Norway",
            city: "Oslo"
          },
          postedDaysAgo: 7,
          views: 350
        }
      ]
    }
  }
}
</script>

<style>
#app {


}
.top{
  display: flex;
  flex-direction: row;
}
.input{
  margin-bottom: 8px;
}
</style>
