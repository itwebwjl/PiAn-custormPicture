<template>
  <div class="financing-detail">
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item,index) in tabs" :title="item" :key="index">
        <div v-show="active == 0" class="wrap">
            <financDes></financDes>
        </div>
        <div v-show="active == 1">
            <finacAnalyze></finacAnalyze>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import financDes from "./components/FinancDes.vue";
import finacAnalyze from "./components/FinacAnalyze.vue";
  export default {
    data() {
      return {
        active: 1,
        tabs: ["信托融资", "融资分析", "股权融资", "债券重置"],
        
      };
    },
    components:{
      financDes,
      finacAnalyze
    }

  };
</script>

<style lang="scss" scoped>
  .financing-detail {
 
  }
</style>
