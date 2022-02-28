<template>
  <div class="home">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.id" @click="handleClick(item.id)">
        <div class="list">
          <div class="left">
            <img :src="item.img" alt="" />
          </div>
          <div class="right">
            <div class="title">{{ item.title }}</div>
            <div class="create-time">{{ item.createTime }}</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script lang="ts">
import { List, Cell } from 'vant'
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import moment from 'moment'

interface ListItem {
  id: string;
  title: string;
  img: string;
  summary: string;
  content: string;
  createTime: string;
}
interface StateType {
  loading:boolean;
  finished:boolean;
  list:ListItem[]
}
export default defineComponent({
  name: 'Home',
  setup () {
    const router = useRouter()

    const state = reactive<StateType>({
      loading: false,
      finished: false,
      list: []
    })

    const onLoad = () => {
      fetch('/article/lists').then(res => res.json()).then(res => {
        state.loading = false
        state.finished = true
        state.list = res.data.map((item:any) => {
          if (item.createTime) {
            item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')
          }
          return item
        })
      })
      //
      // setTimeout(() => {
      //   state.loading = false
      //   state.finished = true
      //   state.list = [
      //     {
      //       id: '1',
      //       title: 'helli kkk',
      //       img: 'https://bpic.588ku.com/element_pic/20/07/01/05fc374082ba84760c4242c7a3678b61.jpg!/fw/150/quality/90/unsharp/true/compress/true',
      //       summary: '小山峰0',
      //       content: '放宽了地方HIK',
      //       createTime: '2022-2-27 10:20:20'
      //     },
      //     {
      //       id: '3',
      //       title: 'helli world',
      //       img: 'https://bpic.588ku.com/element_pic/20/07/01/05fc374082ba84760c4242c7a3678b61.jpg!/fw/150/quality/90/unsharp/true/compress/true',
      //       summary: '小山峰0',
      //       content: '放宽了地方HIK',
      //       createTime: '2022-2-27 10:20:20'
      //     }
      //   ]
      // }, 1000)
    }

    const handleClick = (id:string) => {
      router.push({
        path: '/detail',
        query: {
          id
        }
      })
    }

    return {
      ...toRefs(state),
      onLoad,
      handleClick
    }
  },
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  }
})
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: row;
}
.list .left img {
  width: 150px;
  height: 100px;
  border-radius: 10px;
}
.list .right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
}
.list .right .title {
  font-size: 18px;
}
.list .right .create-time {
  font-size: 12px;
  color: #9e9e9e;
}
</style>
