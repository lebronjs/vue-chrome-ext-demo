chrome.runtime.onInstalled.addListener(function () {
  //邮件百度搜索
  chrome.contextMenus.create({
    title: '使用度娘搜索：%s', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    id: 'bd',
    documentUrlPatterns: ['*://www.baidu.com/*'], //只在百度可以右键使用百度搜索，真是个人才
  });
  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    console.log(info, tab);
    // 注意不能使用location.href，因为location是属于background的window对象
    chrome.tabs.create({ url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText) });
    chrome.notifications.create(null, {
      type: 'basic', //"basic", "image", "list", or "progress"
      iconUrl: 'icons/16.png',
      title: '提示',
      message: '您刚才点击了自定义右键菜单！',
      //progress: 60,
      //imageUrl
    });
  });

  // 多级邮件菜单
  chrome.contextMenus.create({
    type: 'normal',
    title: 'Menu A',
    id: 'a',
  });
  chrome.contextMenus.create({
    type: 'radio',
    title: 'Menu B',
    id: 'b',
    checked: true,
  });
  chrome.contextMenus.create({
    type: 'radio',
    title: 'Menu C',
    id: 'c',
  });
  chrome.contextMenus.create({
    type: 'checkbox',
    title: 'Menu D',
    id: 'd',
    checked: true,
  });
  chrome.contextMenus.create({
    type: 'separator',
    id: 'aaa',
  });
  chrome.contextMenus.create({
    type: 'checkbox',
    title: 'Menu E',
    id: 'e',
  });
  chrome.contextMenus.create({
    type: 'normal',
    title: 'Menu F',
    id: 'f',
    parentId: 'a',
  });
  chrome.contextMenus.create({
    type: 'normal',
    title: 'Menu G',
    id: 'g',
    parentId: 'a',
  });
});

// chrome.contextMenus.onClicked.addListener(function (info, tab) {
//   console.log(info);
//   if (info.menuItemId === 'bd') {
//     // 注意不能使用location.href，因为location是属于background的window对象
//     chrome.tabs.create({ url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText) });
//   }
// });
