'use strict';

module.exports = ({ Command, manager }) => {

manager.category('staff', 'commands only usable by staff')
.add(new Command('explode')
.parameter('target', 'string', 'target player (name or part of name)')
.description('Explodes a players vehicle')
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
   if (typeof res[0].vehicle !== 'undefined') {
     res[0].vehicle.health = 0; 
     jcmp.events.Call('toast_show', player,  {
       heading: 'Rank error',
       text: `Exploded ${target}'s vehicle`,
       icon: 'info',
       loader: true,
       loaderBg: '#4286f5',
        position: 'top-right',
       hideAfter: 5500
   });
   } else {            
     jcmp.events.Call('toast_show', player,  {
       heading: 'Rank error',
       text: `This player doesnt currently have a vehicle`,
       icon: 'error',
       loader: true,
       loaderBg: '#4286f5',
        position: 'top-right',
       hideAfter: 5500
   });
   return;
 } 

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