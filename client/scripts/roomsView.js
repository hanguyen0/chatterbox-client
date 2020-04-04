var RoomsView = {

  $input: $('#addRoom'),
  $button: $('#rooms button'),
  $select: $('select'),//$select: $('#rooms select')

  initialize: function () {
    RoomsView.$input.on('submit', RoomsView.handleSubmit);
    // RoomsView.$select.on('click', RoomsView.handleSubmit);
  },

  renderRoom: _.template(`

        <option value="roomname"><%- roomname %></option>

  `),

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // RoomsView.render(RoomsView.roomsData);
    console.log('inside RoomsView!');
  },

  render: function (roomsData) {

    let html = "";
    let roomObj = {};
    console.log(roomsData);
    for (let i = 0; i < roomsData.length; i++) {
      if (roomObj[roomsData[i]['roomname']] === undefined) {
        roomObj[roomsData[i]['roomname']] = roomsData[i]['roomname'];
      }
    }
    console.log(roomObj)
    for (let key in roomObj) {
      html += RoomsView.renderRoom(key);
    }

    $("select").append(html);
  }  // render: _.template(`

  //     <div class="chat">
  //       <div class="username"><a href="#"><%= username %>:</a></div>
  //       <div class="text"><%= text %></div>
  //     </div>

  //   `)

};
