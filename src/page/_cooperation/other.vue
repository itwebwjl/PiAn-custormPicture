<template>
  <div class="content">
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
</template>

<script>
  export default {
    name: "other"
  }
</script>

<style scoped lang="scss">
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
</style>
