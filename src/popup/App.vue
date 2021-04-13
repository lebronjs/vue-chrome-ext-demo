<template>
  <button @click="click">click</button>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  methods: {
    click() {
      let color = 'green';
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs);
        console.log(document);
        chrome.tabs.executeScript(tabs[0].id, { code: 'document.body.style.backgroundColor = "' + color + '";' });
      });
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
