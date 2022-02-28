<template>
  <div>
    <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead" />
    <van-cell-group inset>
      <van-field v-model="title" label="文章标题" placeholder="请输入文章标题" />
      <van-field v-model="summary" label="文章简介" placeholder="请输入文章简介" />
      <van-field type="textarea" autosize v-model="content" label="文章内容" placeholder="请输入文章内容" />
    </van-cell-group>
    <van-button type="primary" @click="handleAdd" class="add-button">提交</van-button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { Uploader, CellGroup, Field, Button, Toast } from 'vant'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup () {
    const router = useRouter()
    const state = reactive({
      count: 0,
      fileList: [],
      title: '',
      summary: '',
      content: '',
      img: ''
    })

    const afterRead = (file) => {
      console.log('file: ', file)
      // file.status = 'uploading'
      // file.message = '上传中...'

      // setTimeout(() => {
      //   file.status = 'failed'
      //   file.message = '上传失败'
      // }, 1000)
      state.img = file.content
    }
    const handleAdd = () => {
      const data = {
        title: state.title,
        summary: state.summary,
        content: state.content,
        // img: state.img
        img: 'http://xxx/img/a.jpg'
      }
      console.log('data: ', data)
      fetch('/article/create', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json()).then(res => {
        if (res.status === 200) {
          Toast.success('文章发布成功')
          router.push('/home')
        } else {
          Toast.fail('文章发布失败')
        }
      })
    }

    return {
      ...toRefs(state),
      afterRead,
      handleAdd
    }
  },
  components: {
    [Button.name]: Button,
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Toast.name]: Toast
  }
})
</script>

<style lang="scss">
.add-button{
  position: absolute;
  left: 0;
  bottom: 80px;
  width: 100%;
}
</style>
