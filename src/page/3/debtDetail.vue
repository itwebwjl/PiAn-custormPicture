 <template>
  <div class="debt-detail">
    <div class="list" v-for="(item,index) in 4" :key="index">
      <div class="item flex">
        <div class="label">债券全称</div>
        <div class="value">长城证券-金地物业资产支持专项 计划-期次级档资产支持证券</div>
      </div>
      <div class="item flex">
        <div class="label">债券简称</div>
        <div class="value">7.98Y</div>
      </div>
      <div class="item flex">
        <div class="label">债券类型</div>
        <div class="value">7.98Y</div>
      </div>
      <div class="item flex">
        <div class="label">剩余期限</div>
        <div class="value">6.30Y</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>


<style lang="scss" scoped>
  .debt-detail {
    margin: .1rem 0 .27rem 0;
    padding: 0 0.15rem;
    background: #fff;
    .list {
      padding-top: .15rem;
      border-bottom:solid 1px #EDEDED;
      &:last-of-type() {
        border-bottom:solid 1px #EDEDED;
      }
      .item {
        padding-bottom: 0.18rem;
        .label {
          color: #999999;
          font-size: 0.14rem;
          width: 1.39rem;
        }
        .value {
          color: #333333;
          font-size: 0.14rem;
          flex: 1;
        }
      }
    }
  }
</style>
