//simple object spawn command
//type /object [name]
//objects are not fully implemented in jc3mp and lack some features that vehicles have
//most also despawn when you move away from them, which was fixed in the unlimited modpack
'use strict';

module.exports = ({ Command, manager }) => {

manager.category('staff', 'commands only usable by staff')
.add(new Command('object')
.description('Spawns objects by their name.')
.parameter('name', 'string', 'object name (not hash)', { isTextParameter: true })
.handler((player, name) => {
  if (player.freeroam.passiveMode) {
    jcmp.events.Call('toast_show', player,  {
      heading: 'Object',
      text: `This command can not be used in passive/passive+`,
      icon: 'warning',
      loader: true,
      loaderBg: '#4286f5',
      position: 'top-right',
      hideAfter: 5500
  });
    return;
  } else {
  const object = new GameObject(name, player.aimPosition, player.rotation); object.dimension = player.dimension;}
}))

}
