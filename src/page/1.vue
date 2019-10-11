<template>
  <div class="list">
    <div class="item column flex-ra" v-for="(item,index) in 4" :key="index">
        <div class="name">雷军</div>
        <div class="job">董事长</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.list {
  .item {
      background: #fff;
      height:.76rem;
      margin: 15px 15px 0 15px; 
      padding-left: 16px;
      border-radius: 3px;
      .name {
        font-size: 18px;
        color: #000;
      }
      .job {
        color: #696969;
        font-size: 14px;
      }
  }
}

</style>
