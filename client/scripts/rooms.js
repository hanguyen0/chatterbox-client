var Rooms = {
  // roomsData: [],
  // populateRooms: function(data) {
  //   for (let i = 0; i < data.length; i++) {
  //     this.roomsData.push({ username: data[i]['username'], text: data[i]['text'], roomname: data[i]['roomname'] });
  //   }
  // }
  data: new Set,
  selected: 'lobby',
  isSelected: function (roomname) {
    return roomname === Rooms.selected || 
          !roomname && Rooms.isSelected === 'lobby';
  },

  update: function (messages) {
    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms.data.add(room));
  }
};