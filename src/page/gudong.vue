<template>
  <div class="page-container">
    <van-list>
      <div class="shareholder-item" v-for="(item,index) in 4" :key="index">
        <div class="shareholder-item__top">
          <span class="shareholder-item__name">雷军</span>
          <div class="shareholder-item__tag">大股东</div>
        </div>
        <div class="shareholder-item__bottom">
          <div class="shareholder-item__block">
            <span class="label">出资比例</span>
            <span class="value">77.80%</span>
          </div>
          <div class="shareholder-item__block">
            <span class="label">出资金额(万元)</span>
            <span class="value">1,234,231</span>
          </div>
          <div class="shareholder-item__block">
            <span class="label">股东类型</span>
            <span class="value">自然人股东</span>
          </div>
          <div class="shareholder-item__block">
            <span class="label">出资日期</span>
            <span class="value">2010-04-17</span>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
  export default {
    name: "gudong"
  }
</script>

<style scoped lang="scss">
  .page-container {
    height: 100%;
    width: 100%;
    background: rgba(245, 246, 250, 1);
    padding: 0.1rem 0.15rem;

    .shareholder-item {
      background: #fff;
      width: 3.45rem;
      height: 2.22rem;
      margin-bottom: 0.1rem;

      .shareholder-item__top {
        padding: 0.12rem 0.15rem;
        display: flex;
        flex-direction: row;
        align-items: center;

        .shareholder-item__name {
          font-size: 0.18rem;
          font-weight: 400;
        }

        .shareholder-item__tag {
          height: 0.18rem;
          width: 0.42rem;
          background: #ff7635;
          font-size: 0.12rem;
          color: #fff;
          position: relative;
          margin-left: 0.17rem;

          &:before {
            content: "";
            width: 0px;
            height: 0px;
            border-top: 0.09rem solid transparent;
            border-bottom: 0.09rem solid transparent;
            border-right: 0.08rem solid #ff7635;
            position: absolute;
            top: 0;
            left: -0.08rem;
          }
        }
      }

      .shareholder-item__bottom {
        padding: 0.12rem 0.15rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        .shareholder-item__block {
          width: 1.55rem;
          height: 0.69rem;
          display: flex;
          flex-direction: column;
          background: rgba(250, 250, 250, 1);
          padding: 0.1rem 0.2rem;
          margin-bottom: 0.05rem;

          .label {
            font-size: 0.14rem;
            color: rgba(105, 105, 105, 1);
          }

          .value {
            font-size: 0.21rem;
            font-weight: bold;
            color: rgba(66, 66, 66, 1);
          }
        }
      }
    }
  }
</style>
