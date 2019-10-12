<template>
  <div class="page-container">
    <van-tabs
      animate
      v-model="selectedTab"
      title-active-color="#ff7635"
      title-inactive-color="#999"
      color="#ff7635"
      @click="onClickTab"
    >
      <van-tab v-for="(tab,index) in tabs" :key="index" :name="index" :title="tab">
      </van-tab>
    </van-tabs>

    <div class="content" @scroll="onContentScroll" ref="content">
      <div class="content-item" id="item0">
        <div class="content-item__title">
          基础信息
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle">成立日期</div>
          <div class="content-item__subvalue flex-rb">
            <div class="link">刘德</div>
            <div class="link" style="cursor: pointer">查看他的公司情况></div>
          </div>
        </div>
        <div class="content-item__row flex-rb">
          <div>
            <div class="content-item__subtitle">成立日期</div>
            <div class="content-item__subvalue">
              2014/07/01
            </div>
          </div>
          <div>
            <div class="content-item__subtitle">经营状态</div>
            <div class="content-item__subvalue">
              在营（开业）
            </div>
          </div>
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle">
            企业类型
          </div>
          <div class="content-item__subvalue">
            有限责任公司（自然人投资或控股）
          </div>
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle">
            所属行业
          </div>
          <div class="content-item__subvalue">
            科技推广和应用服务业
          </div>
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle">
            企业英文名称
          </div>
          <div class="content-item__subvalue">
            Ping An Insurance(Group) Company of China,Ltd.
          </div>
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle">
            曾用名
          </div>
          <div class="content-item__subvalue">
            刘涛
          </div>
        </div>
      </div>

      <div class="content-item" id="item1">
        <div class="content-item__title">
          注册信息
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle">
            统一社会信用代码
          </div>
          <div class="content-item__subvalue">
            911103020908102694H
          </div>
        </div>
        <div class="content-item__row flex-rb">
          <div class="flex-fill">
            <div class="content-item__subtitle">所在国家</div>
            <div class="content-item__subvalue">
              中国
            </div>
          </div>
          <div class="flex-fill">
            <div class="content-item__subtitle">省份</div>
            <div class="content-item__subvalue">
              北京
            </div>
          </div>
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle">
            注册地址
          </div>
          <div class="content-item__subvalue">
            北京市北京经济技术开发区科创十四街99号33 33幢D栋2层2203号（集中办公区）
          </div>
        </div>
      </div>

      <div class="content-item" id="item2">
        <div class="content-item__title">
          经营信息
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle flex-cc">
            经营范围
            <div class="content-item__tag">在营（开业）</div>
          </div>
          <div class="content-item__subvalue" style="font-size: 0.15rem; color: #999">
            基础软件、应用软件技术服务；提供以上技术的技术服务、技术咨询、技术转让、技术培训；货物进出口、技术进出口、代理进出口。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）
          </div>
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle">
            营业期限
          </div>
          <div class="content-item__subvalue">
            1988-03-21 至 1988-03-21
          </div>
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle">
            核准日期
          </div>
          <div class="content-item__subvalue">
            1988-08-06
          </div>
        </div>
        <div class="content-item__row">
          <div class="content-item__subtitle">
            登记机关
          </div>
          <div class="content-item__subvalue">
            福田局
          </div>
        </div>
      </div>

      <div class="content-item" id="item3">
        <div class="content-item__title">
          分支机构
        </div>
        <div class="content-item__row">
          <div class="content-item__subvalue" style="font-size: 0.15rem; color: #999">
            中国平安保险（集团）股份有限公司平安大厦业务工作委员会
            中国平安保险（集团）股份有限公司平安大厦停车场
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gongshangxinxi",
    data() {
      return {
        tabs: ['基础信息', '注册信息', '经营信息', '分支机构'],
        selectedTab: 0,

        contentScrollTop: 0,
        itemOffsetTop: [
          0, 0, 0, 0
        ]
      }
    },
    mounted() {
      this.itemOffsetTop = [
        document.getElementById('item0').offsetTop - 54,
        document.getElementById('item1').offsetTop - 54,
        document.getElementById('item2').offsetTop - 54,
        document.getElementById('item3').offsetTop - 54
      ]
    },
    methods: {
      onContentScroll(event) {
        const contentScrollTop = this.$refs.content.scrollTop
        this.contentScrollTop = contentScrollTop
        const itemOffsetTop = this.itemOffsetTop
        for (let i in itemOffsetTop) {
          if (contentScrollTop <= itemOffsetTop[i] && contentScrollTop >= (itemOffsetTop[i - 1] ? itemOffsetTop[i - 1] : 0) - 10) {
            this.selectedTab = i - 1 < 0 ? 0 : i - 1
          }
        }
      },
      onClickTab(name, title) {
        const self = this
        this.$nextTick(() => {
            console.log('on click tab name: ', name, ' title: ', title)
            let currContentScrollTop = this.contentScrollTop
            let itemScrollTop = document.getElementsByClassName('content-item')[name].offsetTop - 54
            // let step = itemScrollTop / 50; //每步的距离
            // let stop = false
            // let timer = null
            //
            // function jump() {
            //   if (itemScrollTop >= currContentScrollTop) {
            //     if (currContentScrollTop >= itemScrollTop) {
            //       stop = true
            //     }
            //     currContentScrollTop += step;
            //   } else {
            //     if (currContentScrollTop <= itemScrollTop) {
            //       stop = true
            //     }
            //     currContentScrollTop -= step;
            //   }
            //   console.log(currContentScrollTop, itemScrollTop, stop)
            //   if (stop) {
            //     clearTimeout(timer)
            //   } else {
            //     self.$refs.content.scrollTop = currContentScrollTop;
            //     timer = setTimeout(jump, 10)
            //   }
            // }
            //
            // jump()
            this.$refs.content.scrollTop = itemScrollTop
          }
        )
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-container {
    width: 100%;
    height: 100%;
    background: rgba(245, 246, 250, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    /deep/ .van-tabs {
      flex: 0 0 0.44rem;
    }

    .content {
      flex: 1;
      overflow: scroll;

      .content-item {
        background: #fff;
        margin-top: 0.1rem;
        padding: 0.15rem;

        .content-item__title {
          font-size: 0.18rem;
        }

        .content-item__row {
          .content-item__tag {
            height: 0.18rem;
            background: #ff7635;
            font-size: 0.12rem;
            color: #fff;
            position: relative;
            margin-left: 0.17rem;

            &:before {
              content: "";
              width: 0px;
              height: 0px;
              border-top: 0.09rem solid transparent;
              border-bottom: 0.09rem solid transparent;
              border-right: 0.08rem solid #ff7635;
              position: absolute;
              top: 0;
              left: -0.08rem;
            }
          }

          .content-item__subtitle {
            margin-top: 0.2rem;
            font-size: 0.17rem;
            color: #666;
          }

          .content-item__subvalue {
            margin-top: 0.1rem;
            font-size: 0.17rem;
            color: #333;
            font-weight: 500;

            .link {
              color: #507EDE;
            }
          }
        }
      }
    }
  }
</style>
