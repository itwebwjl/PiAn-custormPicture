<template>
  <div class="page-container">
    <div class="block">
      <div class="title-row flex-rb">
        <div class="total-title">持有产品数量 <span class="tip">(比上月 <span class="red">+1</span>)</span></div>
        <div class="tip">共计: <span class="red">106</span></div>
      </div>
      <div class="echart-container">
        <div id="echart" style="height: 3rem"></div>
      </div>
    </div>

    <!--  业务贡献  -->
    <div class="block">
      <div class="title-row">
        <div class="title">业务贡献</div>
      </div>
      <div class="row" v-for="n in 6" :key="n">
        <div class="label">银行</div>
        <div class="value">高</div>
        <div class="icon"></div>
      </div>
    </div>

    <!--  客户行为  -->
    <div class="block">
      <div class="title-row">
        <div class="title">客户行为</div>
      </div>
      <div class="row flex-rb" v-for="n in 2" :key="n">
        <div class="label">首次购买产品时间</div>
        <div class="value text-right">2019-02-12</div>
      </div>
    </div>
  </div>
</template>

<script>
  // 按需引入 引入 ECharts 主模块
  const echarts = require("echarts/lib/echarts");
  // 引入柱状图
  require("echarts/lib/chart/bar");

  export default {
    name: "overview",
    data() {
      return {
        echartOptions: {
          title: {},
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: -30,
            right: 0,
            bottom: 0,
            top: 15,
            containLabel: true
          },
          xAxis: {
            show: false,
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['好医生', '不动产', '基金', '资管', '健康险', '证券', '信托', '租赁', '养老险', '产险', '银行'],
            axisLabel: {
              align: 'left',
              color: '#666',
              margin: 50
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              type: 'bar',
              data: [8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20],
              barWidth: '15px',
              barCategoryGap: '10px',
              label: {
                show: true,
                position: 'right',
                color: '#999'
              },
              itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  offset: 0,
                  color: "#CBE5FF" // 0% 处的颜色
                }, {
                  offset: 1,
                  color: "#63ACFF" // 60% 处的颜色
                }], false)
              }
            }
          ]
        }
      }
    },
    mounted() {
      const echart = echarts.init(document.getElementById('echart'))
      echart.setOption(this.echartOptions)
    }
  }
</script>

<style scoped lang="scss">
  .page-container {
    .block {
      padding: 0.15rem;
      background: #fff;
      margin-bottom: 0.1rem;

      .title-row {
        .total-title {
          font-size: 0.16rem;
        }

        .tip {
          font-size: 0.13rem;
          color: #999;
        }

        .red {
          color: #EF4642;
          font-size: 0.13rem;
        }

        .title {
          font-size: 0.16rem;
          color: #333;
          font-weight: bold;
        }
      }

      .echart-container {
        height: 2.8rem;
      }

      .row {
        margin-top: 0.2rem;
        display: flex;
        align-items: center;

        .label {
          font-size: 0.14rem;
          font-weight: 300;
          color: #333;
          flex: 0 0 1.7rem;
        }

        .value {
          flex: 0 0 1.45rem;
          font-size: 0.14rem;
          color: #333;

          &.text-right {
            text-align: right;
          }
        }

        .icon {
          width: 0.15rem;
          height: 0.22rem;
          border: 1px solid #333;
        }
      }
    }
  }
</style>
