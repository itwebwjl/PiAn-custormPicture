<template>
  <div class="fina-analyze">
    <van-tabs v-model="active" animated @change="switchTab">
      <van-tab v-for="(item,index) in tabs" :title="item" :key="index">
        <div v-show="active == 0">
          <div class="one">
            <div id="chart2" style="height:3rem;"></div>
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
        <div v-show="active == 1">
          <div class="one">
            <div class="titile">企业融资总额30亿元</div>
            <div class="tabs flex">
              <div class="tab-left flex-rc-cc">3个月</div>
              <div class="tab-middle flex-rc-cc">半年</div>
              <div class="tab-right flex-rc-cc">一年</div>
            </div>
            <div id="chart3" style="height:3rem;"></div>
          </div>

          <div class="two"></div>
        </div>
      </van-tab>
    </van-tabs>
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
        active: 1,
        tabs: ["渠道分析", "期限分析"],
        chart2: null,
        chart3: null,
        chart2Options: {
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
        },
        chart3Options: {
          // title: {
          //   text: "国庆节快乐"
          // },
          tooltip: {
            trigger: "axis"
          },
          xAxis: {
            data: ["银行", "产险", "养老险", "租赁"]
          },
          yAxis: {
            name: "个"
          },
          // legend: {
          //   top: 0,
          //   right: "5%",
          //   data: ["1", "2", "3"]
          // },
          series: [
            {
              name: "1",
              type: "bar",
              data: [12, 5, 4, 4]
            }
            // {
            //   name: "2",
            //   type: "bar",
            //   data: [2, 30, 1, 10, 3, 30]
            // },
            // {
            //   name: "3",
            //   type: "bar",
            //   data: [10, 30, 1, 2, 10, 20]
            // }
          ]
        }
      };
    },
    mounted() {
      this.$nextTick(() => {
        // this.chart3 = echarts.init(document.getElementById("chart3"));
        // this.chart3.setOption(this.chart3Options);
        this.chart2 = echarts.init(document.getElementById("chart2"));
        this.chart2.setOption(this.chart2Options);
      });
    },
    methods: {
      switchTab(index) {
        if (index == 0) {
        } else if (index == 1) {
          this.$nextTick(() => {
            // this.chart3 = echarts.init(document.getElementById("chart3"));
            this.chart3.setOption(this.chart3Options);
          });
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .fina-analyze {
    .one {
      background: #fff;
      margin-top: 0.1rem;
      padding: 0 0.15rem;
      .titile {
        color: #333333;
        padding: 0.2rem 0;
        font-weight: bold;
      }
      .tabs {
        border: solid 1px #ff7e40;
        height: 0.3rem;
        border-radius: 0.04rem;
        .tab-left {
          flex: 1;
          background: rgba(255, 235, 225, 1);
          color: #ff7635;
          font-size: 0.14rem;
          border-right: solid 1px #ff7e40;
        }
        .tab-middle {
          flex: 1;
          height: 0.3rem;
          color: #ff7635;
          font-size: 0.14rem;
          border-right: solid 1px #ff7e40;
        }
        .tab-right {
          flex: 1;
          height: 0.3rem;
          color: #ff7635;
          font-size: 0.14rem;
          // border-right: solid 1px #FF7E40;
        }
      }
    }
    .two {
      background: #fff;
      margin-top: 0.1rem;
      .two-title {
        height: 0.41rem;
        border-bottom: solid 1px rgba(232, 232, 232, 1);
        padding: 0 0.15rem;
        .two-th {
          flex: 1;
          color: #999999;
          font-size: 0.13rem;
          text-align: center;
          // white-space: nowrap;
        }
      }
      .two-item {
        margin: 0 0.15rem;
        height: 0.45rem;
        border-bottom: solid 1px rgba(232, 232, 232, 1);
        .two-td {
          color: #333333;
          font-size: 0.14rem;
          flex: 1;
          text-align: center;
        }
      }
    }
  }
</style>
