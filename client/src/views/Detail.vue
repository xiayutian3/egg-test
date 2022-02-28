<template>
  <div class="detail">
    <div class="title">{{ detail.title }}</div>
    <div class="summary">{{ detail.summary }}</div>
    <div class="content">{{ detail.content }}</div>
    <div class="create-time">{{ detail.createTime }}</div>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup () {
    const route = useRoute()
    const state = reactive({
      detail: {
        id: '2',
        title: 'helli kkk2',
        img: 'https://bpic.588ku.com/element_pic/20/07/01/05fc374082ba84760c4242c7a3678b61.jpg!/fw/150/quality/90/unsharp/true/compress/true',
        summary: '小山峰0',
        content: '放宽了地方HIK',
        createTime: '2022-2-27 10:20:20'
      }
    })
    onMounted(() => {
      fetch(`/article/detail/${route.query.id}`).then(res => res.json()).then(res => {
        if (res.data.createTime) {
          res.data.createTime = moment(res.data.createTime).format('YYYY-MM-DD HH:mm:ss')
        }
        state.detail = res.data
      })
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>
.detail {
  padding: 20px;
  text-align: left;
}
.detail .title {
  font-size: 25px;
  padding-bottom: 20px;
}
.detail .summary {
  padding: 20px;
  background-color: #dcdcdc;
}
.detail .content {
  padding: 20px;
  text-indent: 2em;
  line-height: 200%;
}
.detail .create-time {
  color: #9c9c9c;
  text-align: right;
}
</style>
