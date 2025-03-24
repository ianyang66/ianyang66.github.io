---
layout: single
permalink: /message-board/
title: "Message Board"
---

<h2>Leave a Message:</h2>
<!-- 留言表單 -->
<form id="messageForm">
  Name:<br>
  <input id="name" type="text" placeholder="Your name" required/><br>
  Message:<br>
  <textarea id="message" placeholder="Type your message here" required></textarea><br>
  <button type="submit">Post Message</button>
  <button type="button" onclick="clearMessages()">Clear All Messages</button>
</form>

<hr/>

<!-- 留言展示區 -->
<div id="messageDisplayArea">
  <h3>Messages will appear here:</h3>
</div>

<!-- JavaScript 留言功能 -->
<script>
// Submit事件處理函數
document.getElementById("messageForm").addEventListener("submit", function(e){
  e.preventDefault(); //阻止表單提交刷新頁面
  
  //取得使用者輸入值
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;
  
  //建立新留言 (文字&時間)
  let messageContainer = document.createElement('div');
  let dateTime = new Date().toLocaleString();
  messageContainer.innerHTML = `<strong>${name}</strong> (${dateTime}):<br>${message}<hr>`;
  
  //將新留言推入顯示區
  document.getElementById('messageDisplayArea').appendChild(messageContainer);

  //清空input欄位讓使用者可繼續留言
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
});

// 刪除全部留言
function clearMessages(){
  document.getElementById('messageDisplayArea').innerHTML = '<h3>Messages cleared.</h3>';
}
</script>