<template>
  <div :class="$style['barChart']" ref="barChart" :chartOption="chartOption">
  </div>
</template>

<script>
export default {
  name: 'bar-chart',
  data() {
    return {
      chartOption: {}
    }
  },
  created() {

  },
  mounted () {
    
  },
  methods: {
    initBarChart() {
      let chart = this.$echarts.init(this.$refs.barChart)
      chart.setOption(this.chartOption)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
.barChart {

}
</style>
