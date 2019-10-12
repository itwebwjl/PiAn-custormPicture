<template>
  <div class="trade-harmony">
    <div class="list" v-for="(item,index) in 4 " :key="index">
      <div class="item">
        <div class="title flex-cc">平安集团信托股份有限公司</div>
        <div class="content flex-cc">
          <div class="left">融资类型</div>
          <div class="right">债券融资</div>
        </div>
        <div class="content flex-cc">
          <div class="left">融资金额</div>
          <div class="right momeny">1.9亿元</div>
        </div>
        <div class="content flex-cc">
          <div class="left">起始日期</div>
          <div class="right">2017-20-23</div>
        </div>
        <div class="content flex-cc">
          <div class="left">期限</div>
          <div class="right">1年</div>
        </div>
        <div class="content flex">
          <div class="left">转让财产</div>
          <div class="right">大唐华银电力股份有限公司将下属分公司，大唐华银电力股份有限公司金竹山火力发电分公司牵动的编号为SGHN00000DYG2384</div>
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
  .trade-harmony {
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
