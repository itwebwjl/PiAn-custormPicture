<template>
  <div class="page-container">
    <van-tabs
      animate
      v-model="selectedTab"
      title-active-color="#ff7635"
      title-inactive-color="#999"
      color="#ff7635"
    >
      <van-tab v-for="(tab,index) in tabs" :title="tab.label" :key="index" :name="tab.name">
      </van-tab>
    </van-tabs>

    <cooperation-overview v-if="selectedTab === 'overview'"></cooperation-overview>
    <cooperation-bank v-else-if="selectedTab === 'bank'"></cooperation-bank>
    <cooperation-other v-else></cooperation-other>
  </div>
</template>

<script>
  import cooperationOverview from './_cooperation/overview'
  import cooperationBank from './_cooperation/bank'
  import cooperationOther from './_cooperation/other'

  export default {
    name: "lishihezuo",
    components: {
      cooperationOverview,
      cooperationBank,
      cooperationOther
    },
    data() {
      return {
        selectedTab: 'overview',
        tabs: [
          {label: '全部', name: 'overview'},
          {label: '银行', name: 'bank'},
          {label: '产险', name: 'productInsurance'},
          {label: '养老险', name: 'agedInsurance'},
          {label: '租赁', name: 'lease'},
          {label: '信托', name: 'trust'},
          {label: '证券', name: 'bond'},
          {label: '健康险', name: 'healthyInsurance'},
          {label: '资管', name: 'fundManagement'},
          {label: '资金', name: 'fund'},
          {label: '不动产', name: 'immovableProperty'},
          {label: '好医生', name: 'haoyisheng'}]
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .page-container {
    width: 100%;
    height: 100%;
    background: rgba(245, 246, 250, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
</style>
