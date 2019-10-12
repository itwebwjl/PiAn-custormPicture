<template>
  <div class="financing-detail">
    <van-tabs sticky v-model="active" swipeable title-active-color="#FF7635" title-inactive-color="#666666" color="#FF7635" line-width=".56rem" line-height=".02rem">
      <!-- <van-tab v-for="(item,index) in tabs" :title="item" :key="index">
        <div v-show="active == 0">
            <financDes></financDes>
        </div>
        <div v-show="active == 1">
            
        </div>
        <div v-show="active == 2">
           
        </div>
      </van-tab>-->
      <van-tab title="信托融资">
        <financDes></financDes>
      </van-tab>
      <van-tab title="融资分析">
        <finacAnalyze></finacAnalyze>
      </van-tab>
      <van-tab title="银行授信">
        <BankLoan></BankLoan>
      </van-tab>
      <van-tab title="信托融资">
        <Believeharmony></Believeharmony>
      </van-tab>
      <van-tab title="贸易融资">
        <TradeHarmony></TradeHarmony>
      </van-tab>
      <van-tab title="股权融资">
        <StockMoney></StockMoney>
      </van-tab>
      <van-tab title="债券融资">
        <debtFinance></debtFinance>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import financDes from "./components/FinancDes.vue";
  import finacAnalyze from "./components/FinacAnalyze.vue";
  import BankLoan from "./components/BankLoan.vue";
  import Believeharmony from "./components/Believeharmony.vue";
  import TradeHarmony from "./components/TradeHarmony.vue";
  import StockMoney from "./components/StockMoney.vue";
  import debtFinance from "./components/debtFinance.vue";
  export default {
    data() {
      return {
        active: 1,
      };
    },
    components: {
      financDes,
      finacAnalyze,
      BankLoan,
      Believeharmony,
      TradeHarmony,
      StockMoney,
      debtFinance
    }
  };
</script>

<style lang="scss" scoped>
  .financing-detail {

  }
</style>
