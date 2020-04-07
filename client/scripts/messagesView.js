var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    $(document).ready(function () {
      debugger;
      MessagesView.render(Messages.chats)
    });
    // MessagesView.render(Messages.chats);
    // MessagesView.render();
  },

  render: function () {
    // let html = "";
    // for (let i = 0; i < chatsArray.length; i++) {
    //   html += MessageView.render(chatsArray[i]);
    // }
    // $("#chats").append(html);
    Messages
      .item()
      .filter(message => Rooms.isSelected(message.roomname))
      .each((message) => {
        let $message = MessageView.render(message);
        MessagesView.$chats.append($message);
      })
  },
};