<template>
  <div id="app">
    <BaseLayout>
      <div class="title">
        <h1>job<h2>Agent</h2></h1>
        <img class="title__logo" src="@/assets/icons/title-logo.svg">
      </div>
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
            class="select"
            selected

        >
          <option>Default</option>
          <option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value"
              :selected="item.id==item.value"

          >{{item.value}}</option>
        </select>
      </div>
    <div v-for="job in filteredJob" :key="job.id">
    <JobItem :job="job"/>
    </div>
    </BaseLayout>
  </div>
</template>

<script>
import BaseTextField from "./components/Base/BaseTextField";
import BaseButton from "./components/Base/BaseButton";
import BaseLayout from "./layouts/BaseLayout";
import JobItem from "./components/common/JobItem"
import {mapGetters, mapActions} from "vuex"

export default {
  name: 'App',
  computed:{
    ...mapGetters({
      jobs:"getJobs"
    }),
    filteredJob(){
      const jobs = this.jobs.filter((job) =>{
        return job.name.toLowerCase().includes(this.search.toLowerCase())
      });
      if(this.sort == 'view'){
        return jobs.sort(function (a,b) {
          return b.views - a.views
        });
      }else if(this.sort == 'date'){
        return jobs.sort(function (a,b) {
          return a.postedDaysAgo - b.postedDaysAgo
        });
      }else {
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
      sort:'Default',
      options:[
        {
          id:1,
          label: "Views",
          value: 'view'
        },
        {
          id:2,
          label: "Date",
          value: 'date'
        }
      ],
      showFilter:false,
      search:"",
      // jobs:[
      //   {
      //     name: "Senior Software Developer (Re-advertised)",
      //     company: "I&M Bank",
      //     location: {
      //       country: "Kenya",
      //       city: "Nairobi"
      //     },
      //     postedDaysAgo: 3,
      //     views: 420,
      //     logoSrc:"/imBank.svg"
      //   },
      //   {
      //     name: "Media manager",
      //     company: "Lombrisol",
      //     location: {
      //       country: "Morocco",
      //       city: "Ait Melloul"
      //     },
      //     postedDaysAgo: 6,
      //     views: 328,
      //     logoSrc:"/lombrisol.svg"
      //   },
      //   {
      //     name: "WEB developer",
      //     company: "Cool Hubs",
      //     location: {
      //       country: "Nigeria",
      //       city: "Owerri"
      //     },
      //     postedDaysAgo: 4,
      //     views: 160,
      //     logoSrc:"/cool.svg"
      //   },
      //   {
      //     name: "iOS developer",
      //     company: "Live Love",
      //     location: {
      //       country: "Germany",
      //       city: "Berlin"
      //     },
      //     postedDaysAgo: 11,
      //     views: 211,
      //     logoSrc:"/liveLove.svg"
      //   },
      //   {
      //     name: "Backend Engineer",
      //     company: "Revolut",
      //     location: {
      //       country: "Kazakhstan",
      //       city: "Almaty"
      //     },
      //     postedDaysAgo: 4,
      //     views: 441,
      //     logoSrc:"/liveLove.svg"
      //   },
      //   {
      //     name: "DevOps Engineer (Mid-Senior level)",
      //     company: "Improvado",
      //     location: {
      //       country: "Ukraine",
      //       city: "Kyiv"
      //     },
      //     postedDaysAgo: 3,
      //     views: 63
      //   },
      //   {
      //     name: "Product Development Engineer",
      //     company: "Kaseya",
      //     location: {
      //       country: "Poland",
      //       city: "Katowice"
      //     },
      //     postedDaysAgo: 9,
      //     views: 255,
      //     logoSrc:"/liveLove.svg"
      //   },
      //   {
      //     name: "C++ Engineer",
      //     company: "Orion Innovation",
      //     location: {
      //       country: "Spain",
      //       city: "Madrid"
      //     },
      //     postedDaysAgo: 2,
      //     views: 212,
      //     logoSrc:"/liveLove.svg"
      //   },
      //   {
      //     name: "AI AQA Engineer",
      //     company: "Corning Incorporated",
      //     location: {
      //       country: "Norway",
      //       city: "Oslo"
      //     },
      //     postedDaysAgo: 7,
      //     views: 350,
      //     logoSrc:"/liveLove.svg"
      //   }
      // ]
    }
  },
  methods:{
    filterShow(){
      console.log("check")
      this.showFilter = !this.showFilter
    },
    ...mapActions({
      fetchJobs:"fetchJobs"
    })
  },
  created() {
    this.fetchJobs()
  }
}
</script>

<style scoped lang="scss">
#app {


}
.top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
.select{
  background: #FFFFFF;
}
.arrow-down{
  width: 13px;
  height: 9px;
}
.title{
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 25px;
  h1{
    display: flex;
    flex-direction: row;
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.24px;
    color: #EEAB02;
    margin: 0 0 0 120px;
  }
  h2{
    font-family: SF Pro Text;
    font-style: italic;
    font-weight: 300;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.24px;
    color: #000000;
    margin: 0;

  }
  &__logo{
    width: 30px;
    height: 30px;
  }
}

</style>
