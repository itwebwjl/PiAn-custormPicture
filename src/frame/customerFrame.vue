<template>
  <div class="page-container">
    <div class="header">
      <div class="title-row">
        <div class="title">京东方科技集团股份有限公司</div>
        <div class="link">客户关系</div>
      </div>
      <div class="tag-row">
        <div class="tag">战略客户</div>
        <div class="tag">上市企业</div>
        <div class="tag">钻石客户</div>
      </div>
      <div class="line"></div>
      <div class="info-row">
        <div class="info-row__item">
          <div class="label">法定代表人</div>
          <div class="value">王红</div>
        </div>
        <div class="info-row__item">
          <div class="label">注册资本</div>
          <div class="value">1000万</div>
        </div>
        <div class="info-row__item">
          <div class="label">注册日期</div>
          <div class="value">2010-01-01</div>
        </div>
      </div>
    </div>

    <div class="section">
      <van-tabs
        animate
        v-model="selectedTab"
        title-active-color="#ff7635"
        title-inactive-color="#999"
        color="#ff7635"
      >
        <van-tab
          v-for="(tab,index) in tabs"
          :key="index"
          :disabled="tab.disabled"
          :title="tab.name"
          :name="index"
        ></van-tab>
      </van-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "customerFrame",
    data() {
      return {
        selectedTab: 1,
        tabs: [{
          name: '客户资料',
          path: ''
        }, {
          name: '集团合作',
          path: '/customer/cooperation'
        }, {
          name: '战略方案',
          disabled: true,
          path: ''
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-container {
    width: 100%;
    height: 100%;
    background: rgba(245, 246, 250, 1);

    .header {
      padding: 0.2rem 0.15rem;
      background: #fff;

      .title-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .title {
          font-size: 0.18rem;
          color: #000;
        }

        .link {
          font-size: 0.13rem;
          text-decoration: underline;
          color: #507EDE;
        }
      }

      .tag-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0.15rem 0 0 0;

        .tag {
          padding: 0.04rem 0.13rem 0.05rem 0.12rem;
          border: 1px solid #FF7635;
          border-radius: 0.14rem;
          margin: 0 0.1rem 0 0;
          font-size: 0.13rem;
          color: #FF7635;
        }
      }

      .line {
        border-top: 1px solid #ededed;
        margin: 0.2rem 0;
      }

      .info-row {
        display: flex;
        flex-direction: row;

        .info-row__item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          /*height: 0.3rem;*/
          justify-content: space-between;

          .label {
            font-size: 0.13rem;
            color: #050505;
            font-weight: 300;
          }

          .value {
            font-size: 0.16rem;
            font-weight: 500;
            color: #050505;
          }
        }
      }
    }

    .section {
      margin-top: 0.1rem;
    }
  }
</style>
