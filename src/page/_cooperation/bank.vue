<template>
  <div class="list-wrap">
    <van-list class="list-content">
      <div class="list-container">
        <div class="list-item" v-for="(n) in 5" :key="n">
          <div class="list-item__top flex-rb">
            <div class="title">存款</div>
            <div class="expired">5个月内到期</div>
          </div>
          <div class="list-item__row">
            <div class="label">产品名称</div>
            <div class="value">一年定期存款</div>
          </div>
          <div class="list-item__row">
            <div class="label">金额</div>
            <div class="value">30-50万元</div>
          </div>
          <div class="list-item__row">
            <div class="label">开始时间</div>
            <div class="value">2028-11</div>
          </div>
          <div class="list-item__row">
            <div class="label">期限</div>
            <div class="value">1年</div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
  export default {
    name: "bank"
  }
</script>

<style scoped lang="scss">
  .list-wrap {
    flex: 1;

    .list-content {
      margin: 0.1rem;
      background: #fff;

      .list-container {
        background: #fff;
        padding: 0 0.1rem;

        .list-item {
          border-bottom: 1px solid #ededed;
          padding: 0.2rem 0;

          &:last-child {
            border-bottom: 0;
          }

          .list-item__top {
            .title {
              font-size: 0.14rem;
              color: #333
            }

            .expired {
              color: #FF7635;
              font-size: 0.14rem;
            }
          }

          .list-item__row {
            display: flex;
            margin: 0.15rem 0 0 0;

            .label {
              width: 1.43rem;
              font-size: 0.14rem;
              color: #999;
            }

            .value {
              font-size: 0.14rem;
              color: #333;
            }
          }
        }
      }
    }
  }
</style>
