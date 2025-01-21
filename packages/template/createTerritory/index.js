mp.events.addCommand("createturf", (player, fullText, name, factionid) => {
	console.log(player);
    //if(player.info.admin < 1337) return player.pushError(`You are not authorized to use that command.`);
	if(factionid == undefined || name == undefined) return player.pushExample(`/createturf [name] [faction id]`);
	let turf = {
		turfName: name,
		pos: player.position,
		factOwnId: factionid,
		rotation: player.heading,
        color: player[player.name].color
	};
	//let ln = Turfs.length;
	player.call('war_showZones', [JSON.stringify(turf)]);
	mp.events.call('createTurf', [JSON.stringify(turf)]);
	player.sendMessageToAdmins(`[Staff] ${player.name} created a turf (ID: ${Turfs.length}).`, null, 'admin-message');
});