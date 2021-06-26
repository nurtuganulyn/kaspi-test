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
    <BaseButton
        v-on:click.native="filterShow"
    />
    </div>
      <div v-if="showFilter" class="filter">
        <a class="filter--label">Sort by:</a>
        <select
            v-model="sort"
        >
          <option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value"
          />
        </select>
      </div>
    <div v-for="job in filteredJob" :key="job.id">
    <JobItem :job="job"/>
    </div>
    </BaseLayout>
  </div>
</template>

<script>
import BaseTextField from "./components/BaseTextField";
import BaseButton from "./components/BaseButton";
import BaseLayout from "./components/BaseLayout";
import JobItem from "./components/JobItem"

export default {
  name: 'App',
  computed:{
    filteredJob(){
      const jobs = this.jobs.filter((job) =>{
        return job.name.toLowerCase().includes(this.search.toLowerCase())
      });
      if(this.sort == 'view'){
        return jobs.sort(function (a,b) {
          return b.views - a.views
        });
      }else{
        return jobs
      }
    },
  },
  components: {
    BaseLayout,
    BaseButton,
    BaseTextField,
    JobItem
  },
  data(){
    return{
      sort:"",
      options:[
        {
          label:"Default",
          value:'none'
        },
        {
          label: "Views",
          value: 'view'
        }
      ],
      showFilter:false,
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
  },
  methods:{
    filterShow(){
      console.log("check")
      this.showFilter = !this.showFilter
    }
  }
}
</script>

<style scoped lang="scss">
#app {


}
.top{
  display: flex;
  flex-direction: row;
}
.input{
  margin-bottom: 8px;
}
.filter{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
  margin-top: 9px;
  &--label{
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #636363;
   }
}
.arrow-down{
  width: 13px;
  height: 9px;
}
</style>
