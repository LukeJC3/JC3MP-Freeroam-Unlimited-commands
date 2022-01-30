//simple weapon spawn command
//type /weapon [hash]
'use strict';

module.exports = ({ Command, manager }) => {

manager.category('staff', 'commands only usable by staff')
.add(new Command('weapon')
.description('Spawns weapons by their hash.')
.parameter('modelhash', 'number', 'weapon hash (not name)')
.handler((player, modelhash) => {
if (player.freeroam.passiveMode) {
  jcmp.events.Call('toast_show', player,  {
    heading: 'Weapon',
    text: `This command can not be used in passive/passive+`,
    icon: 'warning',
    loader: true,
    loaderBg: '#4286f5',
    position: 'top-right',
    hideAfter: 5500
});
    return;
}
else {player.GiveWeapon(modelhash, 398, true)}
}))

}
