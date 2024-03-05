const { database } = require("./data.js")
const {
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
} = require("./functions.js")
const { riverBanner, riverDetailsBanner } = require("./riverbanner.js")
const { trailBanner, trailDetailsBanner } = require("./trailbanner.js")

const allTrails = database.trails
const allRivers = database.rivers

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)

trailBanner()
const trailTotal = totalTrailMiles(allTrails)
console.log(
	`\nWe service ${trailTotal} kilometers of wilderness trails across the US`
)

const shortestTrail = shortTrail(allTrails)
console.log(`The shortest trail is ${shortestTrail} kilometers`)

const longestTrail = longTrail(allTrails)
console.log(`The longest trail is ${longestTrail} kilometers\n`)

const leastExpensiveTrails = findLeastExpensiveTrail(allTrails)
console.log(`The least expensive trails are ${leastExpensiveTrails}\n`)

const mostExpensiveTrails = findMostExpensiveTrail(allTrails)
console.log(`The most expensive trails are ${mostExpensiveTrails}\n`)
trailDetailsBanner()

trailDetails(allTrails)

riverBanner()
const riverTotal = totalRiverKilometers(allRivers)
console.log(`\nWe service ${riverTotal} kilometers of rivers across the US`)

const shortestRiver = shortRiver(allRivers)
console.log(`The shortest river is ${shortestRiver} kilometers`)

const longestRiver = longRiver(allRivers)
console.log(`The longest river is ${longestRiver} kilometers\n`)

const leastExpensiveRivers = findLeastExpensiveRivers(allRivers)
console.log(`The least expensive rivers are ${leastExpensiveRivers}\n`)

const mostExpensiveRivers = findMostExpensiveRivers(allRivers)
console.log(`The most expensive rivers are ${mostExpensiveRivers}\n`)

riverDetailsBanner()

riverDetails(allRivers)
