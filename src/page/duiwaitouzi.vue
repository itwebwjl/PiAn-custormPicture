<template>
  <div class="page-container">
    <van-tabs v-model="selectedTab" title-active-color="#ff7635" title-inactive-color="#999" color="#ff7635">
      <van-tab title="对外投资" name="invest">
        <van-list>
          <div class="card-container">
            <div class="card-item" v-for="n in 4" :key="n">
              <div class="card-item__tag">
                平
              </div>
              <div class="card-item__t">
                <div class="card-item__title">
                  平安银行股份有限公司（平安银行）
                </div>
                <div class="card-item__row">
                  <div class="card-item__amount">
                    8745779798万元人民币
                  </div>
                  <div class="card-item__date">
                    2018-02-24
                  </div>
                </div>
                <div class="card-item__row">
                  <div class="card-item__status">
                    注销
                  </div>
                  <div class="card-item__status active">
                    在营（开业）
                  </div>
                </div>
                <div class="card-item__row flex-rb">
                  <div class="card-item__block">
                    <div class="label">投资比例</div>
                    <div class="value">77.80%</div>
                  </div>
                  <div class="card-item__block">
                    <div class="label">认缴金额(RMB元)</div>
                    <div class="value">86578758697.33</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>

      <van-tab title="关联企业" name="relation">
        <van-list>
          <div class="card-container">
            <div class="card-item flex-cb" v-for="n in 4" :key="n">
              <div class="card-item__tag">
                平
              </div>
              <div class="card-item__t">
                <div class="card-item__title">
                  平安银行股份有限公司（平安银行）
                </div>
                <div class="card-item__row">
                  <div class="card-item__amount">
                    平安银行智汇投资管理 (深圳) 有限公司 (谢永林)、袁平东、许朝能、谢永林等【5000000000.00万元人民币】2015-01-08
                  </div>
                </div>
                <div class="card-item__row">
                  <div class="card-item__status">
                    注销
                  </div>
                  <div class="card-item__status active">
                    在营（开业）
                  </div>
                </div>
              </div>
              <div class="card-item__footer flex-re">
                董事长
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name: "duiwaitouzi",
    data () {
      return {
        selectedTab: 'invest',
        cardTagBgColor: ['#507EDE', '#6FB64D', '#EF4542']
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-container {
    width: 100%;
    height: 100%;
    background: rgba(245, 246, 250, 1);

    .card-container {
      padding: 0.2rem 0.15rem;

      .card-item {
        width: 3.45rem;
        height: 1.98rem;
        background: #fff;
        position: relative;
        margin-bottom: 0.2rem;
        overflow: hidden;

        .card-item__tag {
          position: absolute;
          background: #ff7635;
          transform: rotate(-45deg);
          color: #fff;
          font-size: 0.1rem;
          font-weight: 500;
          width: 0.6rem;
          text-align: center;
          -moz-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          left: -0.20rem;
          top: 0.03rem;
        }

        .card-item__t {
          padding: 0.2rem 0.15rem 0.15rem 0.15rem;


          .card-item__title {
            font-size: 0.18rem;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
          }

          .card-item__row {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 0.1rem;

            .card-item__amount {
              font-size: 0.13rem;
              color: #666;
              font-weight: 400;
            }

            .card-item__date {
              font-size: 0.13rem;
              color: #666;
              margin-left: 0.3rem;
            }

            .card-item__status {
              height: 0.2rem;
              border-radius: 0.1rem;
              border: 1px solid #EDEDED;
              font-size: 0.13rem;
              font-weight: 400;
              padding: 0 0.1rem;
              color: #999;

              &.active {
                border: 1px solid #ff7635;
                color: #ff7635;
              }
            }

            .card-item__block {
              width: 1.55rem;
              height: 0.69rem;
              background: #fafafa;
              padding: 0.1rem 0.2rem;

              .label {
                font-size: 0.14rem;
                font-weight: 400;
                color: #696969;
              }

              .value {
                font-size: 0.17rem;
                color: #424242;
                font-weight: bold;
                margin-top: 0.08rem;
              }
            }
          }
        }


        .card-item__footer {
          border-top: 1px solid #ededed;
          height: 0.4rem;
          background: #fafafa;
          padding: 0.1rem 0.15rem;
          font-size: 0.14rem;
          color: #333;
          font-weight: 400;
        }
      }
    }
  }
</style>
