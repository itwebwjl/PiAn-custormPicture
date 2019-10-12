<template>
  <div class="bank-loan">
    <div class="one">
      <div id="chart4" style="height:3rem;"></div>
    </div>
    <div class="two">
      <div class="two-title flex-rb-cc">
        <div class="two-th flex start">序号</div>
        <div class="two-th">融资渠道</div>
        <div class="two-th">融资类型</div>
        <div class="two-th">融资金额(万元)</div>
        <div class="two-th">融资占比</div>
      </div>
      <div class="two-item flex-rb-cc" v-for="(item,index) in 4" :key="index">
        <div class="two-td flex start">{{index+1}}</div>
        <div class="two-td">平安银行深圳福田支行</div>
        <div class="two-td">银行贷款</div>
        <div class="two-td">70000</div>
        <div class="two-td">32.59%</div>
      </div>
    </div>
  </div>
</template>

<script>
  // 按需引入 引入 ECharts 主模块
  var echarts = require("echarts/lib/echarts");
  // 引入柱状图
  require("echarts/lib/chart/line");
  require("echarts/lib/chart/bar");
  require("echarts/lib/chart/pie");
  // 引入提示框和标题和标注组件
  require("echarts/lib/component/tooltip");
  require("echarts/lib/component/title");
  require("echarts/lib/component/legend");
  export default {
    data() {
      return {
        chart4: null,
        chart4Options: {
          roseType: "angle",
          legend: {
            bottom: 0,
            right: "5%",
            data: [
              "JDG",
              "平安银行",
              "红衫资",
              "今日资产",
              "皇庭国际",
              "其他渠道"
            ]
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "55%",
              data: [
                { value: 235, name: "JDG" },
                { value: 274, name: "平安银行" },
                { value: 310, name: "红衫资" },
                { value: 335, name: "今日资产" },
                { value: 400, name: "皇庭国际" },
                { value: 400, name: "其他渠道" }
              ]
            }
          ]
        }
      };
    },
    methods: {},
    mounted() {
      this.$nextTick(() => {
        this.chart4 = echarts.init(document.getElementById("chart4"));
        this.chart4.setOption(this.chart4Options);
      });
    }
  };
</script>

<style lang="scss" scoped>
  .bank-loan {
    .one {
      background: #fff;
    }
  }
</style>
