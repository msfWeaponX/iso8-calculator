// Ion calculator

const upgradeIsoCrystal = {     // Level : Ions to upgrade
	0: 0,
	1: 0,
	2: 1000,
	3: 4000,
	4: 15000,
	5: 50000,
}

const upgradeIsoClass = {    // Level : Ions to upgrade
	0: 0,
	1: 0,
	2: 5000,
	3: 15000,
	4: 25000,
	5: 50000,
}

const crystalCount = {   // Level : crystals to upgrade
	0: 0,
	1: 1,
	2: 3,
	3: 9,
	4: 27,
	5: 81,
}

const calcPrintHealth = document.querySelector('#healthResult')
const calcPrintArmor = document.querySelector('#armorResult')
const calcPrintFocus = document.querySelector('#focusResult')
const calcPrintDamage = document.querySelector('#damageResult')
const calcPrintResist = document.querySelector('#resistResult')
const calcPrintTotal = document.querySelector('#totalIons')

document.querySelector('#btn').addEventListener('click', calcTotals)
  
function calcTotals() {
 
  let isoLevels = []
  
  let healthCrystals = 0
  let healthIons = 0
 
  let armorCrystals = 0
  let armorIons = 0
 
  let focusCrystals = 0
  let focusIons = 0
 
  let damageCrystals = 0
  let damageIons = 0
 
  let resistCrystals = 0
  let resistIons = 0
 
  let ionTotal = 0
  
  const healthLevel = document.querySelector('#health').value
  const armorLevel = document.querySelector('#armor').value
  const focusLevel = document.querySelector('#focus').value
  const damageLevel = document.querySelector('#damage').value
  const resistLevel = document.querySelector('#resist').value
  
  isoLevels.push(healthLevel)
  isoLevels.push(armorLevel)
  isoLevels.push(focusLevel)
  isoLevels.push(damageLevel)
  isoLevels.push(resistLevel)
  
  const min = Math.min(...isoLevels)
  console.log(min)
  
if(healthLevel < 5){
  	for(let i = 5; i > healthLevel; i--){
		healthCrystals = healthCrystals + crystalCount[i]
		healthIons = healthIons + (upgradeIsoCrystal[i])
		calcPrintHealth.innerText = "You need " + healthCrystals + " HEALTH crystals and " + healthIons + " ions"
	} 
}else if(parseInt(healthLevel) === 5){
		calcPrintHealth.innerText = "Your HEALTH crystal is max level"
}else{
		calcPrintHealth.innerText = "Please enter a valid level 1 - 5"
}

if(armorLevel < 5){
	for(let i = 5; i > armorLevel; i--){
		armorCrystals = armorCrystals + crystalCount[i]
		armorIons = armorIons + (upgradeIsoCrystal[i])
		calcPrintArmor.innerText = "You need " + armorCrystals + " ARMOR crystals and " + armorIons + " ions"
	}
}else if(parseInt(armorLevel) === 5){
	calcPrintArmor.innerText = "Your ARMOR crystal is max level"
}else{
	calcPrintArmor.innerText = "Please enter a valid level 1 - 5"
}
if(focusLevel < 5){
	for(let i = 5; i > focusLevel; i--){
		focusCrystals = focusCrystals + crystalCount[i]
		focusIons = focusIons + (upgradeIsoCrystal[i])
		calcPrintFocus.innerText = "You need " + focusCrystals + " FOCUS crystals and " + focusIons + " ions"
	}
}else if(parseInt(focusLevel) === 5){
	calcPrintFocus.innerText = "Your FOCUS crystal is max level"
}else{
	calcPrintFocus.innerText = "Please enter a valid level 1 - 5"
}
if(damageLevel < 5){
	for(let i = 5; i > damageLevel; i--){
		damageCrystals = damageCrystals + crystalCount[i]
		damageIons = damageIons + (upgradeIsoCrystal[i])
		calcPrintDamage.innerText = "You need " + damageCrystals + " DAMAGE crystals and " + damageIons + " ions"
	}
}else if(parseInt(damageLevel) === 5){
	calcPrintDamage.innerText = "Your DAMAGE crystal is max level"
}else{
	calcPrintDamage.innerText = "Please enter a valid level 1 - 5"
}
if(resistLevel < 5){
	for(let i = 5; i > resistLevel; i--){
		resistCrystals = resistCrystals + crystalCount[i]
		resistIons = resistIons + (upgradeIsoCrystal[i])
		calcPrintResist.innerText = "You need " + resistCrystals + " RESIST crystals and " + resistIons + " ions"
	}
}else if(parseInt(resistLevel) === 5){
	calcPrintResist.innerText = "Your RESIST crystal is max level"
}else{
	calcPrintResist.innerText = "Please enter a valid level 1 - 5"
}
if(min < 5){
	for(let i = 5; i > min; i--) {    // use the lowest input to loop through upgradeCrystals, something is wrong with the logic below 4,4,4,4,4 inputs should equal 300,000
		ionTotal = ionTotal + upgradeIsoClass[i]
		console.log(upgradeIsoClass[i])
	}
	calcPrintTotal.innerText = resistIons + damageIons + focusIons + armorIons + healthIons + ionTotal  + " total ions needed"
}else if(min === 5){
	calcPrintTotal.innerText = "You are already at max level"
}else{
	calcPrintTotal.innerText = "Mistakes were made..."
}
}
