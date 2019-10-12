<template>
  <div class="page-container">
    <van-list>
      <div class="list-item" v-for="(n,index) in 5" :key="n">
        <div class="list-item__title flex-rb flex-cc">
          <div class="title">
            <span>{{index + 1}}</span>
            <span>经营范围</span>
          </div>
          <div class="date">
            2018-02-24
          </div>
        </div>
        <div class="list-item__content">
          <div class="list-item__row flex-rb">
            <div class="left flex-fill">变更前</div>
            <div class="right flex-fill">变更后</div>
          </div>
          <div class="list-item__row flex-rb">
            <div class="left flex-fill" v-html="'1、电脑技术开发 2、手机生产、手机服务(限海淀区永捷北路2号二层经营) 3、从事互联网文化活动'">
            </div>
            <div class="right border flex-fill" v-html="'1、电脑技术开发 2、手机生产、手机服务(限海淀区永捷北路2号二层经营) 3、从事互联网文化活动'">
            </div>
          </div>
          <div class="list-item__row">
            <div class="morebtn">></div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
  export default {
    name: "biangengxinxi"
  }
</script>

<style scoped lang="scss">
  .page-container {
    width: 100%;
    height: 100%;
    background: rgba(245, 246, 250, 1);

    .list-item {
      margin-top: 0.1rem;
      background: #fff;
      padding: 0.18rem;

      .list-item__title {
        .title {
          font-size: 0.18rem;
          font-weight: 500;
        }

        .date {
          font-size: 0.13rem;
          color: #666;
        }
      }

      .list-item__content {
        background: #fafafa;
        padding: 0.1rem 0.15rem;


        .left, .right {
          font-size: 0.14rem;
          padding: 0 0.1rem;
          margin: 0.1rem 0;
        }

        .left {
          color: #999;
        }

        .right {
          color: #333;

          &.border {
            border-left: 1px solid #bdbdbd;
          }
        }

        .morebtn {
          transform: rotate(90deg);
          text-align: center;
          width: 100%;
          color: #507EDE;
        }
      }
    }
  }
</style>
