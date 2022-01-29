'use strict';

module.exports = ({ Command, manager }) => {

manager.category('staff', 'commands only usable by staff')
.add(new Command('restart')
.description('restarts the server')
.handler(player => {
  if (freeroam.utils.isAdmin(player))  {

    var actor = `[Server] ${player.name}`;
    jcmp.events.Call("serverrestart", actor);
    console.log(" > server shutting down");
    setTimeout(function() {
        jcmp.server.Restart();
    }, 5000);

  }

  else {
    jcmp.events.Call('toast_show', player,  {
      heading: 'Rank error',
      text: `You are not allowed to use this command`,
      icon: 'error',
      loader: true,
      loaderBg: '#4286f5',
      position: 'top-right',
      hideAfter: 5500
  });
    return
  }
  
}))

}