<template>
  <div :id="id" :ref="id" :style="{width:width,height:height}"></div>
</template>

<script>
  let BaseChart = require("echarts/lib/echarts");
  require("echarts/lib/component/tooltip");
  require("echarts/lib/component/legend");
  export default {
    name: "echarts",
    props: {
      id: {
        type: String,
        required: true
      },
      option: {
        type: Object,
        required: true
      },
      width: {
        type: String,
        default: "100%"
      },
      height: {
        type: String,
        required: true
      },
      events: {
        type: Array
      }
    },
    watch: {
      width() {
        this.resize();
      },
      height() {
        this.resize();
      },
      option: {
        handler: function() {
          this.chart.setOption(this.option);
        },
        deep: true
      }
    },
    created(){
      this.$bus.om('resize',this.resize)
    },
    mounted(){
      this.init()
    },
    destroyed(){
      this.chart.dispose()
      this.$bus.off('resize',this.resize)
    },
    methods:{
      resize(){
        this.$nextTick(() => {
          this.chart.resize()
        })
      },
      init(){
        this.chart = echarts.init(this.$refs[this.id])
        this.char.setOption(this.option)
        if(this.events) {
          this.events.forEach((e) => {
            if(e.query) {
              this.chart.on(e.name,e.query,e.handler)
            }else {
              this.chart.on(e.name,e.handler)
            }
          })
        }
      }
    }
  };
</script>

<style scoped>
</style>
