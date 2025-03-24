---
layout: single
permalink: /message-board/
title: "Message Board"
---

<h2>Leave a Message:</h2>

<form id="messageForm">
  Name:<br>
  <input id="name" type="text" placeholder="Your name" required/><br>
  Message:<br>
  <textarea id="message" placeholder="Type your message here" required></textarea><br>
  <button type="submit">Post Message</button>
  <button type="button" onclick="clearMessages()">Clear All Messages</button>
</form>

<hr/>

<div id="messageDisplayArea">
  <h3>Messages will appear here:</h3>
</div>

<!-- 透過明確載入JS (重點在下面 ↓) -->
<script src="{{ '/assets/js/message-board.js' | relative_url }}"></script>