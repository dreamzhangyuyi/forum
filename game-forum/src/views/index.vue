<template>
  <div>
    {{ title }}
    <el-button @click="reqTest">click</el-button>
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
  methods: {
    reqTest() {
      reqTest().then(response => {
        console.log("response:"+response.data.respCode);
      })
    }
  }
}
</script>