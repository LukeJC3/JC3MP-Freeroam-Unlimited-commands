'use strict';

module.exports = ({ Command, manager }) => {

manager.category('staff', 'commands only usable by staff')
.add(new Command('nuke')
.description('Spawns you a nuke-launcher')
.handler((player) => {
  if (freeroam.utils.isAdmin(player))  {
    player.GiveWeapon(1064776106, 398, true);
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

//vehicle spawn command
.add(new Command('vehicle')
.description('Spawns vehicles by their hash.')
.parameter('modelhash', 'number', 'vehicle hash (not name)')
.handler((player, modelhash) => {
if (player.freeroam.passiveMode) {
  jcmp.events.Call('toast_show', player,  {
    heading: 'Vehicle',
    text: `This command can not be used in passive/passive+`,
    icon: 'warning',
    loader: true,
    loaderBg: '#4286f5',
    position: 'top-right',
    hideAfter: 5500
});
    return
}
  const vehicle = new Vehicle(modelhash, player.aimPosition, player.rotation); vehicle.dimension = player.dimension;
}))

}