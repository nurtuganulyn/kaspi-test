<template>
  <div class="text-block">
    <h1 class="text-block__title">JOB SEARCH</h1>
    <input
        class="text-block__input"
        :type="text"
        :value="value"
        @input="inputHandle"

    />
    <svg v-if="magnifier" class="text-block__magnifier">
      <use :xlink:href="require('@/assets/icons/sprite.svg') + '#magnifier'"></use>
    </svg>
    <label class="text-block__label">{{labelText}}</label>
  </div>
</template>

<script>
export default {
  name:'BaseTextField',
  props:{
    magnifier:{
      type:Boolean,
      default:false
    },
    labelText:{
      type:String,
      required: true
    },
    value: {
      type: [String, null],
      required: true,
    },
  },
  methods:{
    inputHandle(e) {
      this.$emit('input', e.target.value);
    }
  }
}

</script>

<style scoped lang="scss">
.text-block{
  $self:&;
  display: flex;
  flex-direction: column;
  position: relative;
  &.magnifier {
    #{$self}__magnifier {
      display: block;
    }

    #{$self}__input {
      padding: 19px 40px 5px 40px;
    }

    #{$self}__label {
      left: 40px;
    }
  }
  &__title{
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #636363;
    margin-top: 0;
    margin-bottom: 16px;
    text-align: left;
  }
  &__input{
    width: 240px;
    height: 40px;
    background: #EAEAEA;
    border-radius: 8px;
    border:none;
    padding-left: 36px;
    line-height: 15px;
    &:focus~#{$self}__label {
      top: 25px;
      font-size: 10px;
      color: #71757a;
    }
  }
  &__magnifier{
    width: 15px;
    height: 18px;
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(50%);
  }
  &__label{
    position: absolute;
    pointer-events: none;
    left: 36px;
    top: 50%;
    transform: translateY(0%);
    white-space: nowrap;
    overflow: hidden;
    line-height: 40px;
    transition: 0.3s;
    color: #636363;
  }
}
</style>
