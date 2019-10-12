<template>
  <div class="believe-harmony">
    <div class="list" v-for="(item,index) in 4 " :key="index">
      <div class="item">
        <div class="title flex-cc">平安集团信托股份有限公司</div>
        <div class="content flex-cc">
          <div class="left">融资金额</div>
          <div class="right momeny">90,000万元</div>
        </div>
        <div class="content flex-cc">
          <div class="left">利率</div>
          <div class="right">-</div>
        </div>
        <div class="content flex-cc">
          <div class="left">期限</div>
          <div class="right">3年</div>
        </div>
        <div class="content flex-cc">
          <div class="left">起始日期</div>
          <div class="right">2017-20-23</div>
        </div>
        <div class="content flex-cc">
          <div class="left">截止日期</div>
          <div class="right">2019-12-12</div>
        </div>
        <div class="content flex">
          <div class="left">信托计划</div>
          <div class="right">平安信托·金地西岸湖城大境集合资 金信托计划</div>
        </div>
        <div class="expand flex-rc-cc">展开</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
      }
    }
  };
</script>

<style lang="scss" scoped>
  .believe-harmony {
    padding-bottom: .2rem;
    .list {
      .item {
        margin-top: 0.1rem;
        background: #fff;
        .title {
          height: 0.5rem;
          font-weight: bold;
          padding-left: 0.15rem;
        }
        .content {
          padding: 0  0.15rem;
          padding-bottom: 0.15rem;
          .left {
            color: #999999;
            font-size: 0.14rem;
            width: 1.32rem;
            flex-shrink: 0;
          }
          .right {
            color: #333333;
            font-size: 0.14rem;
              &.momeny {
            color: #FF7635;
          }
          }
        }
        .expand {
          height: 0.4rem;
          border-top: solid 1px #ededed;
        }
      }
    }
  }
</style>
