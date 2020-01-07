<template>
  <div>
    {{ title }}
    <el-button @click="reqTest">click</el-button>
    <div :class="$style.chart" ref="chart"></div>
    <div :class="$style['guageChart']" ref="guageChart"></div>
  </div>
</template>

<script>
import { reqTest } from '@/api/index'

export default {
  data() {
    return {
      title: "首页"
    }
  },
  mounted() {
    this.initChart()
    this.initGuage()
  },
  methods: {
    reqTest() {
      reqTest().then(response => {
        console.log("response:" + response.data.respCode);
      })
    },
    initChart() {
      let myChart = this.$echarts.init(this.$refs.chart)
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    initGuage() {
      let guage = this.$echarts.init(this.$refs.guageChart)
      console.log(guage)
      guage.setOption({
        title: { text: '仪表盘' },
        series: [{
          name: '仪表盘',
          type: 'gauge',
          startAngle: 225,
          endAngle: -45,
          data: [{ name: 'num', value: 20 },
          { name: 'num1', value: 30 }],
          min: 0,
          max: 100
        }]
      })
    }
  }
}
</script>

<style module>
.chart {
  height: 500px;
}
.guageChart {
  width: 400px;
  height: 300px;
}
</style>