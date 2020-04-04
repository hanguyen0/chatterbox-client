var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$select.on('click', RoomsView.handleSubmit);
  },

  renderRoom: function (room) {
    //     <select id="cars">
    //   <option value="volvo">Volvo</option>
    //   <option value="saab">Saab</option>
    //   <option value="mercedes">Mercedes</option>
    //   <option value="audi">Audi</option>
    // </select>
    $(`<option value=${roomname}>${roomname}</option`).appendTo("select")
  },
  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    RoomsView.render(RoomsView.roomsData);
    console.log('inside RoomsView!');
  },
  render: function (roomsData) {

    let html = "<option>";
    let roomObj = {};
    console.log(roomsData);
    for (let i = 0; i < roomsData.length; i++) {
      if (roomObj[roomsData[i]['roomname']] === undefined) {
        roomObj[roomsData[i]['roomname']] = roomsData[i]['roomname'];
      }
    }
    for (let key in roomObj) {
      html += key + "</option>";
    }

    $("select").append(html);
  }  // render: _.template(`

  //     <div class="chat">
  //       <div class="username"><a href="#"><%= username %>:</a></div>
  //       <div class="text"><%= text %></div>
  //     </div>

  //   `)

};
