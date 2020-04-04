var MessageView = {
//updates DOM to view one message
  render: _.template(`
      
      <div class="chat">
        <div class="username"><a href="#"><%= username %>:</a></div>
        <div class="text"><%= text %></div>
      </div>
      
    `)

};