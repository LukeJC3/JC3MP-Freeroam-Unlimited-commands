'use strict';

module.exports = ({ Command, manager }) => {

manager.category('staff', 'commands only usable by staff')
.add(new Command('unpause')
.parameter('target', 'string', 'networkId or (part of) name')
.description('unpause a player')
.handler((player, target) => {
  if (freeroam.utils.isAdmin(player))  {

    const res = freeroam.utils.getPlayer(target);
    if (res.length === 0 || res.length > 1) {
      jcmp.events.Call('toast_show', player,  {
        heading: 'Player not found',
        text: "There are too many or no players with this name",
        icon: 'error',
        loader: true,
        loaderBg: '#4286f5',
        position: 'top-right',
        hideAfter: 5500
    });
      return;
    }

    jcmp.events.CallRemote('unpause', res[0]);
    jcmp.events.Call('toast_show', player,  {
      heading: 'Unpause successful',
      text: `Enabled controls for ${res[0].escapedNametagName}`,
      icon: 'success',
      loader: true,
      loaderBg: '#4286f5',
      position: 'top-right',
      hideAfter: 5500
  });
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