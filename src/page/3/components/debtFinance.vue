<template>
  <div class="debt-finance">
    <van-tabs
      v-model="active"
      animated
      @click="switchTab"
      title-active-color="#FF7635"
      title-inactive-color="#666666"
      color="#fff"
      @disabled="onClickDisabled"
    >
      <van-tab title="境内">
        <div v-show="active == 0">
          <div class="one">
            <div class="title flex-rc-cc">DCM注册</div>
            <div class="middle flex-cc">
              <div class="register">注册号</div>
              <div class="has-time">有效期</div>
              <div class="total flex-rc-cc">
                总额度
                <br>(亿元)
              </div>
              <div class="has-use flex-rc-cc">
                已使用
                <br>(亿元)
              </div>
            </div>
            <div class="bottom flex">
              <div class="register bot flex-cc">中市协注[20 18]SCP263号</div>
              <div class="has-time bot flex-cc">2018-10-11至2020-10-11</div>
              <div class="total bot flex-rc-cc">40</div>
              <div class="has-use bot flex-rc-cc">-</div>
            </div>
          </div>
          <div class="two">
            <div id="chart5" style="height:3rem;"></div>
          </div>
          <div class="three">
            <div class="title flex-rc-cc">境内债券融资明细表</div>
            <div class="middle flex-cc">
              <div class="th flex">债券简称</div>
              <div class="th flex">剩余年限</div>
              <div class="th flex">票面利率</div>
              <div class="th flex">金额（亿元）</div>
              <div class="th flex">发行日</div>
            </div>
            <div class="bottom">
              <div class="tr flex-cc" v-for="(item,index) in 4" :key="index" @click="toPushDebtDetail">
                <div class="td flex-rc name">松花湖次139007</div>
                <div class="td">0.85</div>
                <div class="td">5.35%</div>
                <div class="td">15000</div>
                <div class="td">2015- 3-10</div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="境外" disabled>
        <div v-show="active == 1"></div>
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
        active: 0,
        chart5: null,
        chart5Options: {
          tooltip: {
            trigger: "axis"
          },
          xAxis: {
            data: ['0-3个月', '3-6个月', '6-9个月', '9-12个月', '1年以上', '其他'],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#999',
              interval: 0
            }
          },
          yAxis: {
            name: "万元",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#ededed'
              }
            }
          },
          grid: {
            top: 40,
            left: 20,
            right: 0
          },
          series: [{
            type: "bar",
            data: [2000, 1000, 15000, 10000, 5000, 1800],
            label: {
              show: true,
              position: 'top',
              color: '#999'
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "#CBE5FF" // 0% 处的颜色
              }, {
                offset: 1,
                color: "#63ACFF" // 60% 处的颜色
              }], false)
            }
          }]
        }
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.chart5 = echarts.init(document.getElementById("chart5"));
        this.chart5.setOption(this.chart5Options);
      });
    },
    methods: {
      switchTab() {
      },
      onClickDisabled(name, title) {
        this.$toast(title + '已被禁用');
      },
      toPushDebtDetail() {
        this.$router.push('/debtDetail')
      }
    }
  };
</script>

<style lang="scss" scoped>
  .debt-finance {
    .one {
      margin-top: 0.1rem;

      .middle {
        background: rgba(247, 247, 247, 1);
        border-top: 1px solid rgba(232, 232, 232, 1);
        border-bottom: 1px solid rgba(232, 232, 232, 1);
        color: #999999;
        padding: 0 0.15rem;
        height: 0.6rem;
      }

      .bottom {
        height: 0.56rem;
        background: #fff;
        padding: 0 0.15rem;
      }

      .register {
        font-size: 0.13rem;
        flex: 2;

        &.bot {
          color: #333;
          font-size: 0.14rem;
        }
      }

      .has-time {
        font-size: 0.13rem;
        flex: 2;
        text-align: center;

        &.bot {
          color: #333;
          font-size: 0.14rem;
        }
      }

      .total {
        font-size: 0.13rem;
        flex: 1;

        &.bot {
          color: #333;
          font-size: 0.14rem;
        }
      }

      .has-use {
        font-size: 0.13rem;
        flex: 1;

        &.bot {
          color: #333;
          font-size: 0.14rem;
        }
      }
    }

    .two {
      background-color: #fff;
      margin-top: 0.1rem;
    }

    .three {
      margin-top: 0.1rem;

      .middle {
        padding: 0 0.15rem;
        background: rgba(247, 247, 247, 1);
        border: 1px solid rgba(232, 232, 232, 1);
        height: 0.4rem;

        .th {
          flex: 1;
          color: #999999;
          font-size: 0.13rem;
        }
      }

      .bottom {
        background-color: #fff;
        padding: 0 .15rem;

        .tr {
          height: 0.55rem;

          .td {
            flex-shrink: 0;
            font-size: .14rem;
            flex: 1;
            white-space: normal;

            &.name {
              color: #507EDE;
            }
          }
        }
      }
    }

    .title {
      height: 0.5rem;
      color: #333;
      font-weight: bold;
      background: #fff;
    }
  }
</style>
