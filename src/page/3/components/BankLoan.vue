<template>
  <div class="bank-loan">
    <div class="one">
      <div id="chart4" style="height:3rem;"></div>
      <div class="one-bot">
        <div class="end-time flex-rb-cc">
          <div class="txt">截止日期</div>
          <div class="time flex-cc">
            <div class="left-arrow"></div>
            <div class="swiper">2018-12-31 2018-09-30</div>
            <div class="right-arrow"></div>
          </div>
        </div>
        <div class="item flex">
          <div class="item-label">融资金额</div>
          <div class="item-txt flex-re">2018-09-30</div>
          <div class="item-txt flex-re">2018-09-30</div>
        </div>
        <div class="item flex">
          <div class="item-label">授权总额</div>
          <div class="item-txt flex-re">3838.00亿元</div>
          <div class="item-txt flex-re">3580.00亿元</div>
        </div>
        <div class="item flex">
          <div class="item-label">已使用</div>
          <div class="item-txt flex-re">2090.00亿元</div>
          <div class="item-txt flex-re">2090.00亿元</div>
        </div>
        <div class="item flex">
          <div class="item-label">未使用</div>
          <div class="item-txt flex-re">2090.00亿元</div>
          <div class="item-txt flex-re">2090.00亿元</div>
        </div>
        <div class="item flex">
          <div class="item-label">授信家数</div>
          <div class="item-txt flex-re">-</div>
          <div class="item-txt flex-re">6家</div>
        </div>
      </div>
    </div>
    <div class="two">
      <div class="two-title flex-rb-cc">
        <div class="two-title_left">授信明细</div>
        <div class="two-title_right" @click="showPickFn">图标 2018-12-31</div>
      </div>
      <div class="middle">
        <div class="middle-tr flex">
          <div class="middle-th flex-rc-cc">授信机构</div>
          <div class="middle-th flex-rc-cc">授信额度</div>
          <div class="middle-th flex-rc-cc">
            已使用
            <br>(亿元)
          </div>
          <div class="middle-th flex-rc-cc">
            未使用
            <br>(亿元)
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-item flex" v-for="(item,index) in 4" :key="index">
          <div class="bottom-td flex-cc">中国工商银行股份有限公司</div>
          <div class="bottom-td flex-rc-cc">850.00</div>
          <div class="bottom-td flex-rc-cc">398.65</div>
          <div class="bottom-td flex-rc-cc">451.35</div>
        </div>
      </div>
    </div>

    <van-popup v-model="isShowPick" position="bottom">
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
        currentDate: new Date(),
        chart4: null,
        chart4Options: {
          // title: {
          //   text: "国庆节快乐"
          // },
          tooltip: {
            trigger: "axis"
          },
          xAxis: {
            data: ["2015-03-01", "2015-03-01", "2015-03-01", "2015-03-01", "2015-03-01", "2015-03-01", "2015-03-01", "2015-03-01", "2015-03-01", "2015-03-01"],
            axisLabel: {
              rotate: 45,
              fontSize: 7,
              color: '#999'
            }
          },
          yAxis: {
            name: "授信额度(亿元)",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          legend: {
            bottom: 0,
            left: "center",
            data: ["已使用", "未使用"]
          },
          series: [
            {
              name: '已使用',
              type: "bar",
              stack: 'use',
              data: [12, 5, 4, 4],
              position: 'insideTop',
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "#CBE5FF" // 0% 处的颜色
                }, {
                  offset: 1,
                  color: "#63ACFF" // 60% 处的颜色
                }], false)
              }
            },
            {
              name: '未使用',
              type: "bar",
              stack: 'use',
              data: [2, 30, 1, 10, 3, 30],
              position: 'insideTop',
              itemStyle: {
                color: '#eee'
              }
            }
            // {
            //   name: "3",
            //   type: "bar",
            //   data: [10, 30, 1, 2, 10, 20]
            // }
          ]
        },
        isShowPick: false
      };
    },
    methods: {
      showPickFn() {
        // console.log(123)
        // console.log(this.isShowPick)
        // let a = !this.isShowPick
        this.isShowPick = !this.isShowPick;
      }
    },
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
      margin-top: 0.1rem;

      .one-bot {
        padding: 0 0.15rem;

        .end-time {
          height: 0.5rem;
          color: #333333;

          .txt {
            font-weight: bold;
          }

          .time {
            .left-arrow {
              // width: 50px;
              // height: 50px;
              border: 0.08rem solid;
              border-color: #fff #000 #fff #fff;
            }

            .swiper {
              font-weight: bold;
              padding: 0 0.1rem;
            }

            .right-arrow {
              border: 0.08rem solid;
              border-color: #fff #fff #fff #000;
            }
          }
        }

        .item {
          padding-bottom: 0.15rem;

          .item-label {
            font-size: 0.14rem;
            flex: 1;
            color: #999999;
          }

          .item-txt {
            font-size: 0.14rem;
            flex: 1;
            color: #333;
          }
        }
      }
    }

    .two {
      margin-top: 0.1rem;
      background: #fff;

      .two-title {
        padding: 0 0.15rem;
        height: 0.5rem;
        color: #333;
        font-weight: bold;

        .two-title_left {
          color: #333;
          font-weight: bold;
        }

        .two-title_right {
        }
      }

      .middle {
        .middle-tr {
          padding: 0 0.15rem;
          height: 0.6rem;
          background: rgba(247, 247, 247, 1);
          border: 1px solid rgba(232, 232, 232, 1);

          .middle-th {
            color: #999999;
            flex: 1;
            font-size: 0.13rem;

            &:nth-of-type(1) {
              flex: 2;
            }
          }
        }
      }

      .bottom {
        padding: 0 0.15rem;

        .bottom-item {
          height: 0.56rem;

          .bottom-td {
            color: #333;
            font-size: 0.14rem;
            flex: 1;
            text-align: center;

            &:nth-of-type(1) {
              flex: 2;
            }
          }
        }
      }
    }
  }
</style>
