// Parte I

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15)) + 15
dragon.damage = dragonDamage()

// 2 - Crie uma função que retorna o dano causado pelo warrior.

const warriorDamage = () => {

  return Math.floor(Math.random() * (warrior.weaponDmg * warrior.strength - warrior.strength)) + warrior.strength

}

let turno = 0

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

const mageDamage = () => {
  turno += 1
  let dano = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence
  if (mage.mana <= 0) return "Não possui mana suficiente"
  let manaGasta = mage.mana - turno * 15
  return {
    damage: dano,
    mana: manaGasta
  }
}

// Parte II

const warriorVsDragon = () => {
  warrior.damage = warriorDamage()
  return dragon.healthPoints = dragon.healthPoints - warrior.damage
}

const mageVsDragon = () => {
  mage.damage = mageDamage()
  return dragon.healthPoints = dragon.healthPoints - warrior.damage
}

const dragonVsComp = () => {
  dragon.damage = dragonDamage()
  let ca = Object.keys(battleMembers);

  let retornado = ca.filter((item) => {
    return item !== 'dragon'
  })
  let vidaMage = retornado[0]
  let vidaWarrior = retornado[1]

  warrior.healthPoints = battleMembers[vidaWarrior]['healthPoints'] - dragon.damage
  mage.healthPoints = battleMembers[vidaMage]['healthPoints'] - dragon.damage
}

const gameActions = {
  turnoWarrior: () => callback(),
  turnoMage: (callback2) => callback2(),
  turnoDragon: (callback3) => callback3()
};

const finalTurno = (callback, callback2, callback3) => {
  gameActions.turnoWarrior = callback()  
  gameActions.turnoMage = callback2()  
  gameActions.turnoDragon = callback3()  
  mage.mana = mage.damage.mana
  mage.damage = mage.damage.damage
  return gameActions
}

finalTurno(warriorVsDragon, mageVsDragon, dragonVsComp)
  console.log(battleMembers)

