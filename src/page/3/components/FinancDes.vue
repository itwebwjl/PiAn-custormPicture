<template>
  <div class="financ-des">
    <div class="one">
      <!-- <div class="one-title flex-rc-cc">债权融资各年度总额趋势</div> -->
      <div id="chart1" style="height:3rem"></div>
    </div>
    <div class="two">
      <div class="two-title flex-rb-cc">
        <div class="two-th">项目名称</div>
        <div class="two-th flex-re">2019年年报</div>
        <div class="two-th flex-re">2018年年报</div>
        <div class="two-th flex-re">2017年年报</div>
      </div>
      <div class="two-item flex-rb-cc" v-for="(item,index) in 4" :key="index">
        <div class="two-td">债权融资</div>
        <div class="two-td flex-re">1.3亿</div>
        <div class="two-td flex-re">1.0亿</div>
        <div class="two-td flex-re">1.2亿</div>
      </div>
      <div class="two-item flex-rb-cc">
        <div class="two-td">长期抵押借款</div>
        <div class="two-td flex-re">1.3亿</div>
        <div class="two-td flex-re">1.0亿</div>
        <div class="two-td flex-re">1.2亿</div>
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
        chart1: null,
        chart1Options: {
          tooltip: {
            trigger: "axis"
          },
          title: {
            text: "债权融资各年度总额趋势",
            left: "center",
            top: 20
          },
          splitLine: {
            show: false
          },
          grid: {
            left: "20",
            top: "60",
            bottom: "20",
            right: "20",
            containLabel: true
          },
          label: {
            // show:true,
          },
          xAxis: {
            data: ["2015", "2016", "2017", "2018", "2019"],
            type: "category",
            boundaryGap: false,
            axisLabel: {
              margin: 20,
              color: "#999999",
              fontSize: 14
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          yAxis: {
            show: true,
            // name: "",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#EDEDED"
              }
            },
            axisLabel: {
              show: false
            }
          },
          series: [
            {
              type: "line",
              symbolSize: 10, //折线点的大小
              lineStyle: {
                color: "#4997FC"
              },
              itemStyle: {
                borderColor: "#4997FC",
                borderWidth: 2
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#4997FC"
                    },
                    {
                      offset: 1,
                      color: "#ffffff"
                    }
                  ],
                  false
                )
              },
              data: [150, 136, 120, 200, 120]
            }
          ]
        }
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.chart1 = echarts.init(document.getElementById("chart1"));
        this.chart1.setOption(this.chart1Options);
      });
    }
  };
</script>

<style lang="scss" scoped>
  .financ-des {
    margin-top: 0.1rem;
    padding-bottom: 0.27rem;
    .one {
      background-color: #fff;
      .one-title {
        color: #333333;
        font-weight: bold;
        height: 0.5rem;
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
          white-space: nowrap;
        }
      }
      .two-item {
        margin: 0 0.15rem;
        height: 0.45rem;
        border-bottom: solid 1px rgba(232, 232, 232, 1);
        &:last-of-type {
          border-bottom: none;
        }
        .two-td {
          color: #333333;
          font-size: 0.14rem;
          flex: 1;
          white-space: nowrap;
        }
      }
    }
  }
</style>
