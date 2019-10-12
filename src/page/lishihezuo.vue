<template>
  <div class="page-container">
    <van-tabs
      animate
      v-model="selectedTab"
      title-active-color="#ff7635"
      title-inactive-color="#999"
      color="#ff7635"
    >
      <van-tab v-for="(tab,index) in tabs" :title="tab" :key="index" :name="index">
      </van-tab>
    </van-tabs>

    <div class="list-wrap" v-if="selectedTab == 0">
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

    <div class="content" v-else>
      <div class="expire-prod">
        即将到期产品类型：企财险
      </div>

      <div class="block">
        <div class="item">
          <div class="item-top flex-rb flex-cc">
            <div class="title">第一次购买</div>
            <div class="tag">直营渠道</div>
          </div>
          <div class="item-info flex">
            <div class="label">产品名称</div>
            <div class="value">企财险</div>
          </div>
          <div class="item-info flex">
            <div class="label">产品价值</div>
            <div class="value">高</div>
          </div>
          <div class="item-info flex">
            <div class="label">购买时间</div>
            <div class="value">2018-11</div>
          </div>
        </div>
        <div class="item border-t">
          <div class="item-top flex-rb flex-cc">
            <div class="title">第一次购买</div>
            <div class="tag">直营渠道</div>
          </div>
          <div class="item-info flex">
            <div class="label">产品名称</div>
            <div class="value">企财险</div>
          </div>
          <div class="item-info flex">
            <div class="label">产品价值</div>
            <div class="value">高</div>
          </div>
          <div class="item-info flex">
            <div class="label">购买时间</div>
            <div class="value">2018-11</div>
          </div>
        </div>
      </div>

      <div class="block-b flex-rb">
        <div>持有产品5个</div>
        <div>变化趋势下降</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "lishihezuo",
    data() {
      return {
        selectedTab: 0,
        tabs: ['总体概况', '银行', '产险', '养老险', '租赁', '信托', '证券', '健康险', '资管', '资金', '不动产', '好医生']
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

    .content {
      padding: 0.20rem 0.15rem;
      flex: 1;

      .expire-prod {
        font-size: 0.14rem;
        font-weight: 400;
        color: #666;
      }

      .block {
        background: #fff;
        overflow: hidden;
        margin: 0.2rem 0 0 0;

        .item {
          margin: 0 0.15rem;
          padding: 0.2rem 0;

          &.border-t {
            border-top: 1px solid #EDEDED;
          }

          .item-top {
            margin: 0 0 0.05rem 0;

            .title {
              font-size: 0.14rem;
              color: #333;
              font-weight: bold;
            }

            .tag {
              background: #FEF6F5;
              width: 0.75rem;
              height: 0.25rem;
              color: #FF7635;
              font-weight: 400;
              font-size: 0.14rem;
              line-height: 0.25rem;
              text-align: center;
            }
          }

          .item-info {
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

      .block-b {
        background: #fff;
        padding: 0.18rem 0.15rem;
        margin-top: 0.1rem;
        font-size: 0.15rem;
        color: #666;
      }
    }

    .list-wrap {
      flex: 1;
      overflow-y: scroll;

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
  }
</style>
