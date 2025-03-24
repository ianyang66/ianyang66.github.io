document.addEventListener('DOMContentLoaded', function(){

    document.getElementById("messageForm").addEventListener("submit", function(e){
      e.preventDefault(); //此行確保不reload!
  
      let name = document.getElementById('name').value;
      let message = document.getElementById('message').value;
  
      if(name.trim() === "" || message.trim() === ""){
        alert("Please input both your name and message!");
        return;
      }
  
      let messageContainer = document.createElement('div');
      let dateTime = new Date().toLocaleString();
      messageContainer.innerHTML = `<strong>${name}</strong> (${dateTime}):<br>${message}<hr>`;
  
      document.getElementById('messageDisplayArea').appendChild(messageContainer);
  
      document.getElementById('name').value = '';
      document.getElementById('message').value = '';
    });
  
  });
  
  // Clear 全部 messages
  function clearMessages(){
    document.getElementById('messageDisplayArea').innerHTML = '<h3>Messages cleared.</h3>';
  }