<template>
  <div class="fina-analyze">
    <van-tabs
      v-model="active"
      animated
      @click="switchTab"
      title-active-color="#FF7635"
      title-inactive-color="#666666"
      color="#fff"
    >
      <van-tab title="渠道分析">
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
      </van-tab>
      <van-tab title="期限分析">
        <div v-show="active == 1">
          <div class="one">
            <div class="titile flex-rc-cc">剩余期限分析图</div>
            <div class="month-wrap flex-re-cc">
              <div class="month-txt">跨度选择：</div>
              <div class="month" @click="isShowMonthFn">3个月</div>
            </div>
            <div id="chart3" style="height:3rem;"></div>
          </div>
          <div class="two">
            <div class="two-title flex-rb-cc">
              <div class="two-th flex start">序号</div>
              <div class="two-th">融资渠道</div>
              <div class="two-th">融资金额(万元)</div>
              <div class="two-th">期限</div>
              <div class="two-th">利率</div>
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
      </van-tab>
    </van-tabs>

    <van-popup v-model="isShowMonth" position="bottom">
      <van-picker confirm-button-text="完成" show-toolbar :columns="columns"/>
    </van-popup>
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
        isShowMonth: false,
        active: 0,
        tabs: ["渠道分析", "期限分析"],
        columns: ["3个月", "半年", "一年"],
        chart2: null,
        chart3: null,
        chart2Options: {
          title: {
            text: "30亿元",
            subtext: "企业融资总额",
            x: "center",
            y: "130",
            textStyle: {
              fontSize: 18,
              fontWeight: "bold",
              color: ["#333"]
            },
            subtextStyle: {
              color: "#999999",
              fontSize: 14
            }
          },
          grid: {
            top: 0,
            left: 0,

          },
          legend: {
            bottom: 0,
            left: "center",
            itemGap: 20,
            itemWidth: 10,
            itemHeight: 10,
            data: [
              "JDG",
              "平安银行",
              "红衫资",
              "今日资产",
              "皇庭国际",
              "其他渠道",
              "未知"
            ]
          },
          series: [
            {
              type: "pie",
              radius: ["40%", "51%"],
              center: ["50%", "50%"],
              labelLine: {
                show: false
              },
              label: {
                show: false
              },
              data: [
                {
                  value: 235,
                  name: "JDG",
                  itemStyle: {
                    color: "#4997FC"
                  }
                },
                {
                  value: 274,
                  name: "平安银行",
                  itemStyle: {
                    color: "#00d795"
                  }
                },
                {
                  value: 310,
                  name: "红衫资",
                  itemStyle: {
                    color: "#ffbf06"
                  }
                },
                {
                  value: 335,
                  name: "今日资产",
                  itemStyle: {
                    color: "#ff7635"
                  }
                },
                {
                  value: 400,
                  name: "皇庭国际",
                  itemStyle: {
                    color: "#a647e9"
                  }
                },
                {
                  value: 400,
                  name: "其他渠道",
                  itemStyle: {
                    color: "#c0b4f5"
                  }
                },
                {
                  value: 100,
                  name: "未知",
                  itemStyle: {
                    color: "#d6d6d6"
                  }
                }
              ]
            }
          ]
        },
        chart3Options: {
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
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.chart2 = echarts.init(document.getElementById("chart2"));
        this.chart2.setOption(this.chart2Options);
      });
    },
    methods: {
      switchTab() {
        if (!this.chart3) {
          this.$nextTick(() => {
            this.chart3 = echarts.init(document.getElementById("chart3"));
            this.chart3.setOption(this.chart3Options);
          });
        }
      },
      isShowMonthFn() {
        this.isShowMonth = !this.isShowMonth;
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
        height: 0.5rem;
        font-weight: bold;
      }

      .month-wrap {
        .month-txt {
          color: #666666;
          font-size: 0.14rem;
        }

        .month {
          width: 0.75rem;
          height: 0.24rem;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(221, 221, 221, 1);
          border-radius: 0.12rem;
          padding-left: 0.11rem;
        }
      }
    }

    .two {
      background: #fff;
      margin-top: 0.1rem;

      .two-title {
        height: 0.6rem;
        border-bottom: solid 1px rgba(232, 232, 232, 1);
        padding: 0 0.15rem;

        .two-th {
          flex: 1;
          color: #999999;
          font-size: 0.13rem;
          text-align: center;

          &:nth-of-type(2) {
            flex: 1.5;
          }

          &:nth-of-type(1) {
            flex: 0.5;
          }
        }
      }

      .two-item {
        margin: 0 0.15rem;
        height: 0.55rem;
        border-bottom: solid 1px rgba(232, 232, 232, 1);

        .two-td {
          color: #333333;
          font-size: 0.14rem;
          flex: 1;
          text-align: center;

          &:nth-of-type(2) {
            flex: 1.5;
          }

          &:nth-of-type(1) {
            flex: 0.5;
          }
        }
      }
    }
  }
</style>
