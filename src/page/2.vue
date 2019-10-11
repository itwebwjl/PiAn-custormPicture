<template>
  <section class="history-partner">
    <van-tabs v-model="active" swipeable :swipe-threshold="5">
      <van-tab v-for="(item,index) in tabs" :title="item" :key="index">
        <div v-show="active == 0" class="one-wrap">
          <div class="one">
            <div class="title flex-cc">跨系列数</div>
            <div class="one-list flex-ra">
              <div class="column flex">
                <div class="top flex-rc">银行</div>
                <div class="bot active"></div>
              </div>
              <div class="column flex">
                <div class="top flex-rc">产险</div>
                <div class="bot"></div>
              </div>
              <div class="column flex">
                <div class="top flex-rc">银行</div>
                <div class="bot"></div>
              </div>
              <div class="column flex">
                <div class="top flex-rc">银行</div>
                <div class="bot"></div>
              </div>
              <div class="column flex">
                <div class="top flex-rc">本月</div>
                <div class="bot"></div>
              </div>
            </div>
          </div>
          <div class="two">
            <div class="flex-rb-cc">
              <div class="title flex-cc">持有产品类型数量</div>
              <div class="total">共计：25</div>
            </div>
            <div id="chart1" style="height:2rem;"></div>
          </div>
          <div class="three">
            <div class="title flex-cc">业务贡献</div>
            <div class="three-item flex-rb-cc" v-for="(item,index) in 4" :key="index">
              <div class="left">银行</div>
              <div class="middle">高</div>
              <div class="right">金牌</div>
            </div>
          </div>
        </div>
        <div v-show="active ==1" class="wrap">
          <div class="list">
            <div class="list-item" v-for="index in 5" :key="index">
              <div class="title flex-rb-cc">
                <div class="left-title">存款</div>
                <div class="right-title date flex-rc-cc">五个月内到期</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="active==2" class="wrap">
          <p class="tip flex-cc">即将到期产品类型：企财险</p>
          <div class="content">
            <div class="one">
              <div class="title flex-rb-cc">
                <div class="left-title">第一次购买</div>
                <div class="right-title flex-rc-cc">直营渠道</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
            </div>
            <div class="two">
              <div class="title flex-rb-cc">
                <div class="left-title">第一次购买</div>
                <div class="right-title flex-rc-cc">直营渠道</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
            </div>
          </div>
          <div class="bot flex-rb-cc">
            <div class="bot-left">持有产品5个</div>
            <div class="bot-right">变化趋势下降</div>
          </div>
        </div>
        <div v-show="active==3" class="wrap">
          <p class="tip flex-cc">即将到期产品类型：税延养老险</p>
          <div class="content">
            <div class="one">
              <div class="title flex-rb-cc">
                <div class="left-title">第一次购买</div>
                <div class="right-title flex-rc-cc">直营渠道</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
            </div>
            <div class="two">
              <div class="title flex-rb-cc">
                <div class="left-title">第一次购买</div>
                <div class="right-title flex-rc-cc">直营渠道</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
            </div>
          </div>
          <div class="bot flex-rb-cc">
            <div class="bot-left">持有产品5个</div>
            <div class="bot-right">变化趋势下降</div>
          </div>
        </div>
        <div v-show="active==4" class="wrap">
          <p class="tip flex-cc">即将到期产品类型：金融租聘</p>
          <div class="content">
            <div class="one">
              <div class="title flex-rb-cc">
                <div class="left-title">第一次购买</div>
                <div class="right-title flex-rc-cc">直营渠道</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
            </div>
            <div class="two">
              <div class="title flex-rb-cc">
                <div class="left-title">第一次购买</div>
                <div class="right-title flex-rc-cc">直营渠道</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
              <div class="item flex-cc">
                <div class="attribute">产品名称</div>
                <div class="value">企财险</div>
              </div>
            </div>
          </div>
          <div class="bot flex-rb-cc">
            <div class="bot-left">持有产品5个</div>
            <div class="bot-right">变化趋势下降</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </section>
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
        tabs: ["总体感慨", "银行", "产检", "养老险", "租赁"],
        chart1: null,
        chart1Options: {
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
            },
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
    created(){
      document.title = '历史合作'
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
  .history-partner {
    .one-wrap {
      margin-top: 0.1rem;
      .one {
        background: #fff;

        .one-list {
          padding-bottom: 0.22rem;
          .top {
            color: #666666;
            font-size: 0.14rem;
            padding-bottom: 0.1rem;
          }
          .bot {
            width: 0.61rem;
            height: 0.1rem;
            background: rgba(232, 232, 232, 1);
            &.active {
              background: rgba(253, 187, 156, 1);
            }
          }
        }
      }
      .two {
        margin-top: .1rem;
        background: #fff;
        .total {
          padding-right: .15rem;
          color: #333333;
          font-size: .14rem;
        }
      }
      .three {
         margin-top: .1rem;
        background: #fff;
        .three-item {
          color: #333333;
          font-size: 0.14rem;
          padding: 0 .25rem .2rem .25rem;
          .left {
          }
          .middle {
          }
          .right {
          }
        }
      }
      .title {
        padding: 0 .15rem;
        font-weight: bold;
        height: 0.6rem;
        color: #333333;
      }
    }
    .wrap {
      padding: 0 0.1rem;
      .tip {
        height: 50px;
        color: #666666;
        font-size: 0.14rem;
      }
      .list {
        margin-top: 0.1rem;
        background: #fff;
        padding: 19px 10px;
        margin-bottom: 0.1rem;
        border-radius: 0.05rem;
        .list-item {
          border-bottom: 1px solid #ededed;
        }
      }
      .content {
        background: #fff;
        padding: 19px 10px;
        margin-bottom: 0.1rem;
        border-radius: 0.05rem;
        .one {
          border-bottom: 1px solid #ededed;
        }
        .two {
          
        }
      }
      .bot {
        height: 0.5rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.05rem;
        padding: 0 0.15rem;
        .bot-left {
          color: #666666;
          font-size: 0.15rem;
        }
        .bot-right {
          color: #666666;
          font-size: 0.15rem;
        }
      }

      // 公共
      .title {
        height: 0.5rem;

        .left-title {
          font-weight: bold;
          color: #333333;
          font-size: 0.14rem;
        }
        .right-title {
          padding: 0 0.1rem;
          height: 0.25rem;
          font-size: 0.14rem;
          background: rgba(254, 246, 245, 1);
          border-radius: 0.02rem;
          color: #ff7635;
          &.date {
            background: #fff;
          }
        }
      }
      .item {
        padding-bottom: 0.15rem;
        .attribute {
          color: #999999;
          font-size: 0.14rem;
        }
        .value {
          color: #333333;
          font-size: 0.14rem;
          padding-left: 0.68rem;
        }
      }
    }
  }
</style>
