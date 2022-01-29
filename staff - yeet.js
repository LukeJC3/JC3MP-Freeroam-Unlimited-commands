'use strict';

module.exports = ({ Command, manager }) => {

manager.category('staff', 'commands only usable by staff')
.add(new Command('yeet')
.parameter('target', 'string', 'networkId or (part of) name')
.description('yeets a player')
.handler((player, target, reason) => {
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

    if (typeof res[0].vehicle == 'undefined') {
      res[0].position = new Vector3f (res[0].position.x , ((res[0].position.x + freeroam.utils.random(-60, 60)) + freeroam.utils.random(-60, 60)), (res[0].position.z + freeroam.utils.random(-60, 60)))
      jcmp.events.CallRemote('yeet', res[0]);
    }
    if (typeof res[0].vehicle !== 'undefined') {
      res[0].vehicle.linearVelocity = new Vector3f(freeroam.utils.random(-100, 100), freeroam.utils.random(-100, 100) ,freeroam.utils.random(-100, 100));
    }
    jcmp.events.Call('toast_show', player,  {
      heading: 'Yeet successful',
      text: `Yeeted ${res[0].escapedNametagName}`,
      icon: 'success',
      loader: true,
      loaderBg: '#4286f5',
      position: 'top-right',
      hideAfter: 5500
  });
    jcmp.events.Call('toast_show', res[0],  {
      heading: 'yeet',
      text: `Get yeeted son`,
      icon: 'warning',
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