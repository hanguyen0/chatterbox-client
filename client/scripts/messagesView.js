var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    $(document).ready(function () {
      MessagesView.render(Messages.chats)
    });
    // MessagesView.render(Messages.chats);
    // MessagesView.render();
  },

  //updates the DOM to view a list of messages
  renderMessage: function (message) {
    let html = "";
    // for (let i = 0; i < message.length; i++) {
    html += MessageView.render(message.text);
    // }
    $("#chats").append(html);
  },

  render: function () {
    // let html = "";
    // for (let i = 0; i < chatsArray.length; i++) {
    //   html += MessageView.render(chatsArray[i]);
    // }
    // $("#chats").append(html);
    _.each(Messages.chats, (message) => {
      let $message;
      if (message.username) {
        $message = MessageView.render(message);
      }

      MessagesView.$chats.append($message);
    });
  },
};