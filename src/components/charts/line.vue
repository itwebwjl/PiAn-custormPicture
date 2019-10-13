<template>
  <base-chart :id="id" :option="option" :width="width" :height="height"></base-chart>
</template>

<script>
import BaseChart from "./baseChart.vue"
import colors from './colors'
import echarts from "echarts/lib/echarts"
import 'echarts/lib/chart/line'
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
    yAxisName:{
      type:String
    },
    yAxisUnit:{
      type:String
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
        nameGap:20,
        nameTextStyle:{
          padding:[0,0,0,20]
        },
        axisLine:{
          lineStyle:{
            opacity:0
          }
        },
        axisTick:{
          show:false
        },
        axisLabel:{
          color:"#81828E"
        },
        splitLine:{
          lineStyle:{
            type:'dashed'
          }
        }
        if(this.yAxisName) {
          valueAxis.name = this.yAxisName + (this.yAxisUnit ? `(${this.yAxisUnit})` : '')
        }

        const labelAxis = {
          axisTick:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color:'#E2E2E2'
            }
          },
          axisLabel:{
            color:"#81828E"
          },
          data:this.axis
        }

        let legend={}
        if(this.data.length > 1) {
          legend = {
            bottom:0,
            padding:0,
            data:this.data.map((v) => {
              return {name:v.name}
            })
          }
        }
        this.option = {
          tooltip:{
            show:true,
            trigger:'axis',
            formatter:this.genToolTipText()
          },
          legend,
          grid:{
            left:'0',
            right:'10',
            top:'25',
            bottom:'30',
            containLabel:true
          },
          xAxis:labelAxis,
          yAxis:valueAxis,
          series:this.genSeries()
        }
      }
 
 

    },
    genToolTipText(){
      let res = '{b0}<br />'
      this.data.forEach((v,i) => {
        res += `{a${i}} : {c${i}}${this.yAxisUnit || ''}<br />`
      })
      return res
    },
    genSeries(){
      return this.data.map((val,i) => {
        return this.genSingleSeries(val,i)
      })
    },
    genSingleSeries(data,i) {
      return {
        name:data.name || 'name',
        type:'line',
        symbol:'none',
        itemStyle:{
          color:this.genColor(data.color) || colors[i]
        },
        data:data.value
      }
    },
    genColor(color){
      if(Array.isArray(color)) {
        return new echarts.graphic.LineaarGradient(0,0,1,0,[
          {offset:0,color:color[0]},
          {offset:1,color:color[1]}
        ])
      }else {
        return color
      }
    }
  }
}
</script>

<style>
</style>
