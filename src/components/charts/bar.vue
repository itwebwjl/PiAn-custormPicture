<template>
  <base-chart :id="id" :option="option" :width="width" :height="height"></base-chart>
</template>

<script>
import BaseChart from "./baseChart.vue"
import colors from './colors'
export default {
  name:'bar',
  components:{
    BaseChart
  },
  props:{
    data:{
      type:Array,
      required:true
    },
    axis:{
      type:Array,
      required:true
    },
    legend:{
      type:Array
    },
    horizontal:{
      type:Boolean
    },
    id:{
      type:String,
      required:true
    },
    width:{
      type:String,
      default:'100%'
    },
    height:{
      type:String,
      required:true
    },
  },
  data(){
    return {
      option:{}
    }
  },
  watch:{
    data:{
      handler:function(){
        this.updateOption()
      },
      deep:true
    }
  },
  created(){
    if(this.data.length > 0) {
      this.updateOption()
    }
  },
  methods:{
    updateOption(){
      const valueAxis = {
        axisLine:{
          lineStyle:{
            opacity:0
          }
        },
        axisTick:{
          show:false
        },
        splitLine:{
          lineStyle:{
            type:'dashed'
          }
        }

        const labelAxis = {
          data:this.axis
        }
        let legend={}
        if(this.legend) {
          legend = {
            bottom:0,
            padding:0,
            data:this.legend
          }
        }
        this.option = {
          legend,
          grid:{
            left:'20',
            right:'20',
            top:'30',
            bottom:'20',
            containLabel:true
          },
          xAxis:this.horizontal ? valueAxis : labelAxis,
          yAxis:this.horizontal ? labelAxis:valueAxis,
          series:this.genSeries()
        }
      }
  
    },
    genSeries(){
      const series = []
      if(Array.isArray(this.data[0])) {
        this.data.forEach((val,i) => {
          series.push(this.genSingleSeries(val,i))
        })
      }else {
        series.push(this.genSingleSeries(this.data,'name'))
      }
      console.log(series)
      return series
    },
    genSingleSeries(data,i) {
      return {
        name:this.legend ? this.legend[i] : 'name',
        type:'bar',
        label:{
          show:true,
          color:"#666",
          position:this.horizontal ? 'right':'top'
        },
        itemStyle:{
          color:colors[i]
        },
        data:data
      }
    }
  }
}
</script>

<style>
</style>
