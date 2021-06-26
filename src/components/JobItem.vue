<template>
  <div class="job-card">
    <div class="job-card__left">
      left
    </div>
    <div class="job-card__right">
      <div class="job-card__title">
        <h1>{{job.name}}</h1>
      </div>
      <div class="job-card__content">
        <div class="company-name">
          Company:<p>{{job.company}}</p>
        </div>
        <div class="company-location">
          Location:<p>{{job.location.country}}, {{job.location.city}}</p>
        </div>
      </div>
      <div class="job-card__footer">
        <div class="job-card__date">
          <svg class="time-logo">
            <use :xlink:href="require('@/assets/icons/sprite.svg') + '#time'"></use>
          </svg>
          <p>Posted {{job.postedDaysAgo}} days ago</p>
        </div>
        <div class="job-card__divider">
          <svg class="divider-logo">
            <use :xlink:href="require('@/assets/icons/sprite.svg') + '#divider'"></use>
          </svg>
        </div>
        <div class="job-card__views">
          <svg class="eye-logo">
            <use :xlink:href="require('@/assets/icons/sprite.svg') + '#eye'"></use>
          </svg>
          <p>{{job.views}} Views</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'JobItem',
  props:["job"]
}

</script>

<style scoped lang="scss">
.job-card{
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(33, 33, 33, 0.16);
  border-radius: 8px;
  width: 90%;
  height: 138px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  padding: 16px;
  &__left{
    width: 20%;
  }
  &__right{
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  &__title{
    margin-bottom: 22px;
    h1{
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      color: #636363;
      margin: 0;
    }
  }
  &__content{
    margin-bottom: 24px;
  }
  &__footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__date{
    font-size: 12px;
    line-height: 14px;
    color: #636363;
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    p{
      margin: 0;
    }
  }
  &__views{
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    p{
      font-size: 12px;
      line-height: 14px;
      color: #636363;
      margin: 0;
    }
  }

}
.job-card__logos{
  width: 40px;
  height: 40px;
}
.company-name{
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #636363;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
  p{
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    text-decoration-line: underline;
    color: #E06D06;
    margin: 0;
  }
}
.company-location{
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #636363;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p{
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    text-decoration-line: underline;
    color: #E06D06;
    margin: 0;
  }
}
.time-logo{
  width: 12px;
  height: 14px;
  margin-right: 8px;
}
.eye-logo{
  width: 14px;
  height: 14px;
  margin-right: 8px;
}
.divider-logo{
  width: 4px;
  height: 4px;
  line-height: 100px;
}
</style>
