'use strict';
const utility = require('../gm/utility');
const locations = require('../gm/defaultTeleports');

module.exports = ({ Command, manager }) => {
  locations.forEach(loc => {
    freeroam.poiManager.create(loc.command, 20, `${loc.label} (/tp ${loc.command})`, loc.position);
  });

manager.category('commands', 'commands usable by all players')
.add(new Command('seat')
.description('Lets you teleport to another seat in your current vehicle, driver seat is 0')
.parameter('snum', 'string')
.handler((player,seatnum) => {  
      if (player.vehicle) {
        player.vehicle.SetOccupant(parseInt(seatnum),player);
      } else {
        jcmp.events.Call('toast_show', player,  {
          heading: 'Vehicle',
          text: "You must be in a vehicle to use this command",
          icon: 'warning',
          loader: true,
          loaderBg: '#4286f5',
          position: 'top-right',
          hideAfter: 5500
      });
      }

  }))

}