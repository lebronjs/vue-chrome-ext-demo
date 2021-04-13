<template>
  <div :style="{ '--random-color': bgcolor || randomColor }">
    <h3>随机数</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      content: '',
      bgcolor: '',
    };
  },
  computed: {
    randomColor() {
      return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    },
  },
  created() {
    const self = this;
    document.title = 'welcome hupun';
    axios.get('https://v2.jinrishici.com/one.json?client=npm-sdk/1.0').then(res => {
      this.content = res.data.data.content;
    });
    // 获取storage的颜色
    chrome.storage.sync.get('bgcolor', function (data) {
      self.bgcolor = data.bgcolor;
    });
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  height: 100vh;
  background-color: var(--random-color);
}
</style>
