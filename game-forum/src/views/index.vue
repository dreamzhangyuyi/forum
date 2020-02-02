<template>
  <div>
    {{ title }}
    <el-button @click="getEpidemicInfo">刷新</el-button>
    <div :class="$style.chinaMap" ref="chinaMap"></div>
    <div :class="$style.chart" ref="chart"></div>
    <div :class="$style['guageChart']" ref="guageChart"></div>
  </div>
</template>

<script>
import { reqTest,getEpidemicInfo } from "@/api/index";
import "../../static/china.js";

export default {
  data() {
    return {
      title: "首页",
      epidemicInfo: []
    };
  },
  created() {
      this.getEpidemicInfo();
  },
  mounted() {
    this.initChart();
    this.initGuage();
  },
  methods: {
    reqTest() {
      reqTest().then(response => {
        console.log("response:" + response.data.respCode);
      });
    },
    getEpidemicInfo() {
      getEpidemicInfo().then(response => {
        console.log(response.data.epidemicInfo)
        this.epidemicInfo = response.data.epidemicInfo
        console.log(this.epidemicInfo)
        this.initChinaMap()
      })
    },
    initChart() {
      let myChart = this.$echarts.init(this.$refs.chart);
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    initGuage() {
      let guage = this.$echarts.init(this.$refs.guageChart);
      console.log(guage);
      guage.setOption({
        title: { text: "仪表盘" },
        series: [
          {
            name: "仪表盘",
            type: "gauge",
            startAngle: 225,
            endAngle: -45,
            data: [
              { name: "num", value: 20 },
              { name: "num1", value: 30 }
            ],
            min: 0,
            max: 100
          }
        ]
      });
    },
    initChinaMap() {
      let chinaMap = this.$echarts.init(this.$refs.chinaMap);
      console.log(chinaMap);
      // window.onresize = chinaMap.resize;
      chinaMap.setOption({
        title: {
          //标题
          text: "新型肺炎疫情地图",
          subtext: "实时更新",
          left: "left"
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["人数"]
        },
        // dataRange: {
        //   min: 0,
        //   max: 9999,
        //   x: "left",
        //   y: "bottom",
        //   text: ["高", "低"],
        //   calculable: true
        // },
        toolbox: {
          show: true,
          orient: "vertical",
          x: "right",
          y: "center",
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        roamController: {
          show: true,
          x: "right",
          mapTypeControl: {
            china: true
          }
        },
        visualMap: {
          min: 0,
          max: 9999,
          left: "5%",
          top: "bottom",
          text: ["高", "低"],
          calculable: true,
          color: ["#0b50b9", "#c3e2f4"]
        },
        selectedMode: "single",
        series: [
          {
            name: "确诊人数",
            type: "map",
            mapType: "china",
            roam: false,
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } }
            },
            data: this.epidemicInfo
          }
        ]
      });
    }
  }
};
</script>

<style module>
.chart {
  height: 500px;
}
.guageChart {
  width: 400px;
  height: 300px;
}
.chinaMap {
  width: 100vw;
  height: 100vh;
  /* height: 1000px; */
}
</style>