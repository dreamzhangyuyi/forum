export const mkGetEpidemicInfo = (req) => {
    return {
      respCode: '0000',
      respDesc: '成功',
      epidemicInfo: [
        { name: "北京", value: Math.round(Math.random() * 10000) },
        { name: "天津", value: Math.round(Math.random() * 10000) },
        { name: "上海", value: Math.round(Math.random() * 10000) },
        { name: "重庆", value: Math.round(Math.random() * 10000) },
        { name: "河北", value: Math.round(Math.random() * 10000) },
        { name: "河南", value: Math.round(Math.random() * 10000) },
        { name: "云南", value: Math.round(Math.random() * 10000) },
        { name: "辽宁", value: Math.round(Math.random() * 10000) },
        { name: "黑龙江", value: Math.round(Math.random() * 10000) },
        { name: "湖南", value: Math.round(Math.random() * 10000) },
        { name: "安徽", value: Math.round(Math.random() * 10000) },
        { name: "山东", value: Math.round(Math.random() * 10000) },
        { name: "新疆", value: Math.round(Math.random() * 10000) },
        { name: "江苏", value: Math.round(Math.random() * 10000) },
        { name: "浙江", value: Math.round(Math.random() * 10000) },
        { name: "江西", value: Math.round(Math.random() * 10000) },
        { name: "湖北", value: Math.round(Math.random() * 10000) },
        { name: "广西", value: Math.round(Math.random() * 10000) },
        { name: "甘肃", value: Math.round(Math.random() * 10000) },
        { name: "山西", value: Math.round(Math.random() * 10000) },
        { name: "内蒙古", value: Math.round(Math.random() * 10000) },
        { name: "陕西", value: Math.round(Math.random() * 10000) },
        { name: "吉林", value: Math.round(Math.random() * 10000) },
        { name: "福建", value: Math.round(Math.random() * 10000) },
        { name: "贵州", value: Math.round(Math.random() * 10000) },
        { name: "广东", value: Math.round(Math.random() * 10000) },
        { name: "青海", value: Math.round(Math.random() * 10000) },
        { name: "西藏", value: Math.round(Math.random() * 10000) },
        { name: "四川", value: Math.round(Math.random() * 10000) },
        { name: "宁夏", value: Math.round(Math.random() * 10000) },
        { name: "海南", value: Math.round(Math.random() * 10000) },
        { name: "台湾", value: Math.round(Math.random() * 10000) },
        { name: "香港", value: Math.round(Math.random() * 10000) },
        { name: "澳门", value: Math.round(Math.random() * 10000) }
      ]
    }
  }

  export const mkGetDailyInfo = (req) => {
    return {
      respCode: '0000',
      respDesc: '成功',
      recentDate: ['1-20','1-21','1-22','1-23','1-24','1-25','1-26','1-27','1-28','1-29','1-30','1-31','2-1'],
      data:{
        total:[291,440,571,830,1287,1975,2744,4515,5974,7711,9689,11791,14380],
        suspectNum:[0,0,393,1072,1965,2684,5794,6973,9239,12167,15238,17988,19544],
        deathNum:[6,7,17,25,41,56,80,106,132,170,216,259,304]
      }
    }
  }