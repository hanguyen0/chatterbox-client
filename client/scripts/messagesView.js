var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('submit', MessagesView.render);
  },

  //updates the DOM to view a list of messages
  renderMessage: function(message) {
    let html = "";
    // for (let i = 0; i < message.length; i++) {
      html += MessageView.render(message.text);
    // }  
    $("#chats").append(html);
  },

  render: function(chatsArray){
    let html = "";
    for (let i = 0; i < chatsArray.length; i++) {
      html += MessageView.render(chatsArray[i]);
    }  
    $("#chats").append(html);
  },
}; 