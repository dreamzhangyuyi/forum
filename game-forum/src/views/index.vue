<template>
  <div :class="$style.background">
    <h3>{{ title }}</h3>
    <!-- <el-button @click="getEpidemicInfo">刷新</el-button> -->
    <div :class="$style.chinaMap" ref="chinaMap"></div>
    <div :class="$style.chart" ref="chart"></div>
    <!-- <div :class="$style['guageChart']" ref="guageChart"></div> -->
  </div>
</template>

<script>
import { reqTest, getEpidemicInfo, getDailyInfo } from "@/api/index";
import "../../static/china.js";

export default {
  data() {
    return {
      title: "愿每个人平安",
      epidemicInfo: [],
      recentDate: [],
      totalNum: [],
      suspectNum: []
    };
  },
  created() {
    this.getEpidemicInfo();
    this.getDailyInfo();
  },
  watch: {
    epidemicInfo(val) {
      this.initChinaMap()
    },
    recentDate(val) {
      this.initChart()
    },
    totalNum(val) {
      this.initChart()
    },
    suspectNum(val) {
      this.initChart()
    }
  },
  mounted() {
    // this.initChinaMap()
    // this.initChart()
    // this.initGuage();
  },
  methods: {
    reqTest() {
      reqTest().then(response => {
        console.log("response:" + response.data.respCode);
      });
    },
    getEpidemicInfo() {
      getEpidemicInfo().then(response => {
        this.epidemicInfo = response.data.epidemicInfo;
        // this.initChinaMap();
      });
    },
    getDailyInfo() {
      getDailyInfo().then(response => {
        this.recentDate = response.data.recentDate
        this.totalNum = response.data.data.total
        this.suspectNum = response.data.data.suspectNum
        this.deathNum = response.data.data.deathNum
        // this.initChart();
      });
    },
    initChart() {
      let myChart = this.$echarts.init(this.$refs.chart);
      myChart.setOption({
        title: { text: "每日人数变化" },
        tooltip: {},
        xAxis: {
          data: this.recentDate
        },
        legend: {
          data: ["每日确诊人数", "每日疑似人数","每日死亡人数"]
        },
        yAxis: {},
        series: [
          {
            name: "每日确诊人数",
            type: "line",
            data: this.totalNum
          },
          {
            name: "每日疑似人数",
            type: "line",
            data: this.suspectNum
          },
          {
            name: "每日死亡人数",
            type: "line",
            data: this.deathNum
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
        // toolbox: {
        //   show: true,
        //   orient: "vertical",
        //   x: "right",
        //   y: "center",
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
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
.background {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, burlywood, rgb(100,100,0,0.6));
  /* transition: background-color .5s; */
  z-index: -1;
}
.chart {
  width: 30vw;
  height: 40vh;
  display: inline-block;
}
.guageChart {
  width: 400px;
  height: 300px;
}
.chinaMap {
  width: 60vw;
  height: 80vh;
  display: inline-block;
  /* height: 1000px; */
}
</style>