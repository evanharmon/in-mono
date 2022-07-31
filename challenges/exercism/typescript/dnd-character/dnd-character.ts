export class DnDCharacter {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  hitpoints: number

  public static generateAbilityScore(): number {
    // roll them d6's and take sum of largest three dice

    // track the rolls
    const rolls = []

    // how to randomly row a d6?
    // create helper function to roll
    // Math.random gives values between 0 and 1
    // remember dice is only 1 thru 6 so don't use FLOOR allowing 0
    const rollD6 = (): number => Math.ceil(Math.random() * 6)

    // roll d6 4 times
    for (let i = 0; i < 4; i++) {
      const roll = rollD6()
      rolls.push(roll)
    }

    // sort rolls
    rolls.sort()

    // take the sum of three highest rolls
    let top3Rolls = 0
    for (let i = 1; i < 4; i++) {
      top3Rolls += rolls[i]
    }

    return top3Rolls
  }

  public static getModifierFor(abilityValue: number): number {
    // modifier formula
    // subtract ten, divide by 2, then round down (floor)

    const modifier = Math.floor((abilityValue - 10) / 2)
    return modifier
  }

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }
}
