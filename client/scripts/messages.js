var Messages = {
  chats: {},
  // addMessages: function (data) {
  //     for (let i = 0; i < data.length; i++) {
  //         this.chats.push({ username: data[i]['username'], text: data[i]['text'], roomname: data[i]['roomname'] });
  //     }
  //     // console.log(data);
  // }
  //allow chaining function in MessagesView
  item: function () {
    return _.chain(Messages.chats);
  },

  add: function (message, callback = () => { }) {
    Messages.chats[message.objectId] = message;
    callback();
  },

  update: function (messages, callback = () => { }) {
    for (let message of messages) {
      //update message with opjectId coming from Parse.create()
      Messages.chats[message.objectId] = Messages.conform(message);
    }
    callback();
  },

  conform: function (message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || ';
    return message;
  }
}