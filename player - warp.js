//Command to change game dimensions
//0 is the default
'use strict';

module.exports = ({ Command, manager }) => {

manager.category('staff', 'commands only usable by staff')
.add(new Command('warp')
.parameter('number', 'number', 'number of the dimension')
.description('Jump to a different jc3 dimension')
.handler((player, number) => {
if (freeroam.utils.isAdmin(player))  {

  player.dimension = number;
  jcmp.events.Call('toast_show', player,  {
    heading: 'Rank error',
    text: `You warped to dimension '${number}`,
    icon: 'info',
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
