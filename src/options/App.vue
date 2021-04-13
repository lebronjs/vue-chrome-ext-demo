<template>
  <div>新标签背景色：<input type="text" v-model="color" @change="change" /></div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  data() {
    return {
      color: '',
      timer: null,
    };
  },
  created() {
    console.log(chrome.storage);
  },
  methods: {
    change(e) {
      this.timer = null;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        chrome.storage.sync.set({ bgcolor: e.target.value }, function () {
          chrome.notifications.create(null, {
            type: 'basic', //"basic", "image", "list", or "progress"
            iconUrl: 'icons/16.png',
            title: '提示',
            message: '背景色设置成功:' + e.target.value,
            //progress: 60,
            //imageUrl
          });
        });
      }, 1500);
    },
  },
};
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
