'use strict';

module.exports = ({ Command, manager }) => {

manager.category('commands', 'commands usable by all players')
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