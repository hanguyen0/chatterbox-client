var Rooms = {
    roomsData: [],
    populateRooms: function(data) {
      for (let i = 0; i < data.length; i++) {
        this.roomsData.push({ username: data[i]['username'], text: data[i]['text'], roomname: data[i]['roomname'] });
      }
    }
};