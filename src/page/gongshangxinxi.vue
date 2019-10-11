<template>
  <div class="page-container">
    <van-tabs v-model="selectedTab" title-active-color="#ff7635" title-inactive-color="#999" color="#ff7635">
      <van-tab v-for="(tab,index) in tabs" :key="index" :name="index" :title="tab">
      </van-tab>
    </van-tabs>

    <div class="content">
      <div class="content-item">
        <div class="content-item__title">
          基础信息
        </div>
        <div class="content-item__row">

        </div>
      </div>

      <div class="content-item">
        <div class="content-item__title">
          注册信息
        </div>
      </div>

      <div class="content-item">
        <div class="content-item__title">
          经营信息
        </div>
      </div>

      <div class="content-item">
        <div class="content-item__title">
          分支机构
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gongshangxinxi",
    data () {
      return {
        tabs: ['基础信息', '注册信息', '经营信息', '分支机构'],
        seletedTab: 0
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-container {
    width: 100%;
    height: 100%;
    background: rgba(245, 246, 250, 1);

    .content {
      .content-item {
        background: #fff;
        margin-top: 0.1rem;
        padding: 0.15rem;

        .content-item__title {
          font-size: 0.18rem;
        }
      }
    }
  }
</style>
