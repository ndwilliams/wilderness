// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
	let total = 0
	for (const trail of trails) {
		total += trail.length
	}
	return Math.round(total)
}

// Get the shortest of all trails
const shortTrail = (trails) => {
	let shortest = trails[0].length
	for (const trail of trails) {
		if (trail.length < shortest) {
			shortest = trail.length
		}
	}
	return shortest
}

// Get the longest of all trails
const longTrail = (allTrails) => {
	let longest = allTrails[0].length
	for (const trail of allTrails) {
		if (trail.length > longest) {
			longest = trail.length
		}
	}
	return longest
}

// Get details about all the trails
const trailDetails = (trails) => {
	for (const trail of trails) {
		console.log(
			`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.\nThe highlighted plant for the trip is ${trail.plantHighlight}.\n`
		)
	}
}

// Get the sum of all rivers
const totalRiverKilometers = (rivers) => {
	let total = 0
	for (const river of rivers) {
		total += river.length
	}
	return total
}

// Get the shortest of all rivers
const shortRiver = (allRivers) => {
	let shortest = allRivers[0].length
	for (const river of allRivers) {
		if (river.length < shortest) {
			shortest = river.length
		}
	}
	return shortest
}

// Get the longest of all rivers
const longRiver = (allRivers) => {
	let longest = allRivers[0].length
	for (const river of allRivers) {
		if (river.length > longest) {
			longest = river.length
		}
	}
	return longest
}

//Least Expensive Trails
const findLeastExpensiveTrail = (trails) => {
	let leastTrails = ""
	for (const trail of trails) {
		if (trail.price === "$") {
			leastTrails += `\n\t${trail.trailName}`
		}
	}
	return leastTrails
}

//Most Expensive Trails
const findMostExpensiveTrail = (trails) => {
	let mostTrails = ""
	for (const trail of trails) {
		if (trail.price === "$$$$" || trail.price === "$$$$$") {
			mostTrails += `\n\t${trail.trailName}`
		}
	}
	return mostTrails
}

//Least Expensive Rivers
const findLeastExpensiveRivers = (rivers) => {
	let leastRivers = ""
	for (const river of rivers) {
		if (river.price === "$") {
			leastRivers += `\n\t${river.river}`
		}
	}
	return leastRivers
}

//Most Expensive Rivers
const findMostExpensiveRivers = (rivers) => {
	let mostRivers = ""
	for (const river of rivers) {
		if (river.price === "$$$$" || river.price === "$$$$$") {
			mostRivers += `\n\t${river.river}`
		}
	}
	return mostRivers
}

// Get details about all the Rivers
const riverDetails = (rivers) => {
	for (const river of rivers) {
		console.log(
			`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length} kilometers long.\nThe unique fish for the trip is ${river.uniqueFish}.\n`
		)
	}
}

module.exports = {
	totalTrailMiles,
	shortTrail,
	longTrail,
	totalRiverKilometers,
	shortRiver,
	longRiver,
	findLeastExpensiveTrail,
	findMostExpensiveTrail,
	findLeastExpensiveRivers,
	findMostExpensiveRivers,
	trailDetails,
	riverDetails,
}
