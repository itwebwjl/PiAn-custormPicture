<template>
  <div class="stock-money">
    <div class="title flex-cc">企业股权融资总额90亿元</div>
    <div class="list">
      <div class="item" v-for="(item,index) in 5" :key="index">
        <div class="item-date">2019-02-19</div>
        <div class="content">
          <div class="tit flex">
            <div class="tit-left">定向增发</div>
            <div class="tit-right">30亿元</div>
          </div>
          <p>向特定投资者小米科技有限责任公司公开发行股份。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .stock-money {
    background: #fff;
    margin: 0.1rem 0 .23rem 0;
    .title {
      height: 0.5rem;
      color: #333333;
      padding-left: 0.15rem;
      font-weight: bold;
    }
    .list {
      padding-left: 0.2rem;
      .item {
        .item-date {
          color: #666666;
          font-size: 0.14rem;
          height: 0.18rem;
          border-left: solid 0.03rem #ff7635;
          padding-left: 0.1rem;
        }
        .content {
          border-left: solid 1px #e8e8e8;
          padding: 0.11rem 0.2rem 0.3rem 0.13rem;
          .tit {
            color: #333333;
            font-weight: bold;
            .tit-left {
              font-size: 0.14rem;
            }
            .tit-right {
              padding-left: 0.3rem;
              font-size: 0.14rem;
            }
          }
          p {
            color: #666666;
            font-size: 0.14rem;
            padding-top: 0.1rem;
          }
        }
        &:last-of-type {
          .content {
            border-left: none;
          }
        }
      }
    }
  }
</style>
