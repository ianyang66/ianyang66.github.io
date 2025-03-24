---
layout: single
permalink: /message-board/
title: "Message Board"
---

<h2>Leave a Message:</h2>
<!-- Message form with onsubmit to prevent submit -->
<form id="messageForm" onsubmit="postMessage(); return false;">
  Name:<br>
  <input id="name" type="text" placeholder="Your name" required/><br>
  Message:<br>
  <textarea id="message" placeholder="Type your message here" required></textarea><br>
  <button type="submit">Post Message</button>
  <button type="button" onclick="clearMessages()">Clear All Messages</button>
</form>

<hr/>

<!-- Message display area -->
<div id="messageDisplayArea">
  <h3>Messages will appear here:</h3>
</div>

<!-- JavaScript(Block: to ensure it fully loaded before using) -->
<script>
// Function to display message without reload
function postMessage() {
  // Retrieve values
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;

  if(name.trim() === "" || message.trim() === "") {
    alert("Please enter your name and message.");
    return;
  }

  let messageContainer = document.createElement('div');
  let dateTime = new Date().toLocaleString();
  messageContainer.innerHTML = `<strong>${name}</strong> (${dateTime}):<br>${message}<hr>`;

  // Display on page
  document.getElementById('messageDisplayArea').appendChild(messageContainer);

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
}

// Clear messages displayed 
function clearMessages(){
  document.getElementById('messageDisplayArea').innerHTML = '<h3>Messages cleared.</h3>';
}
</script>