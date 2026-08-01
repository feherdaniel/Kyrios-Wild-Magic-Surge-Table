function getWildMagic(d100, isA) {
    let wildMagicTableA = {
      1: "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
      2: "The next time you make an ability check, it is automatically a critical fail.",
      3: "For the next minute, you can see invisible creatures as glowing souls.",
      4: "For the next minute, the first time you take damage each round, the nearest creature within 30 feet of you takes the same amount of psychic damage.",
      5: "The Great Galactic Frog devours all of your Sorcery Points. The next time you cast a spell, it creates a frog infused with your spell's damage type. For each Sorcery Point consumed, one of the frog's attributes increases randomly. If the frog dies during this combat, it is lost permanently.",
      6: "The soul of the last creature you personally killed becomes trapped in a black gemstone, which appears in your palm.",
      7: "You cast Fireball as a 3rd-level spell centered on yourself.",
      8: "You cast Lightning Bolt in a random cardinal direction. Roll a 1d4 to decide the direction.",
      9: "You cast Affliction of Malice on a target of your choice within 30 feet.",
      10: "You cast Shadow Blade at the highest spell level available.",
      11: "Roll a d10. Your height grows by a number of inches equal to the roll.",
      12: "For the next minute, you gain the features of a random class and a random subclass within that class.",
      13: "You cast Confusion centered on yourself.",
      14: "For the next minute, you see the souls of creatures around you.",
      15: "For the next minute, you regain 5 hit points at the start of each of your turns.",
      16: "For the next minute, whenever you speak, all creatures within 60 feet of you start booing, using up their reaction forcibly. If a creature can't make sounds or doesn't have a reaction, nothing happens.",
      17: "You grow a beard of black feathers that remains until you sneeze.",
      18: "You grow elegant vampiric fangs for 24 hours.",
      19: "You cast Howling Agony on yourself.",
      20: "A tiny fiend appears within 15 feet of you and spends one minute giving objectively terrible tactical advice, after which it disappears.",
      21: "You inflict Blood Boil on the target for two rounds. If the target dies during this time, its body violently explodes, creating a cloud of burning blood. Tiny creatures create a 10-foot-radius cloud, while the radius increases by 20 feet for each size category above Tiny. The area is filled with scorching blood and becomes difficult terrain. A creature that enters the blood cloud for the first time on a turn or starts its turn there takes fire damage. The base damage is 2d6 which is increased by 1d6 for each size category above Small.",
      22: "You cast Shadow of Moil on yourself.",
      23: "Your skin turns a pale corpse-like grey. A Remove Curse spell can end this effect.",
      24: "Your blood becomes black as ink. A Remove Curse spell can end this effect.",
      25: "An eye appears on your forehead for the next hour. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.",
      26: "Roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn. Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.",
      27: "Do not reveal the contents of this entry to another creature. You must ensure that no creature suspects the existence of this effect. If a creature learns the truth from you, or if you willingly confirm its suspicions before this effect has been resolved, your tongue instantly crumbles to ash. You are permanently unable to speak, and this curse can be ended only by a Wish spell or True Resurrection. During the next long rest, the greatest fear of a random party member manifests into reality. Regardless of the form or challenge it takes, the party must overcome it. Once every party member's greatest fear has been overcome in this way, the party gains a reward.",
      28: "The next humanoid corpse you touch rises as a Zombie under your control for 1 hour.",
      29: "You can teleport into another creature's body that you can see within 60 feet of you. Compare your current hit points with the target's current hit points. The creature with fewer hit points is torn apart and dies instantly. If both creatures have the same number of hit points, each creature must make a Constitution saving throw. The creature with the higher result survives, while the creature with the lower result is torn apart and dies instantly. If the results are tied, both creatures are torn apart. A creature slain in this way can only be returned to life by the Resurrection spell or more powerful magic.",
      30: "For the next minute, a random creature within 120 feet of you becomes linked. Every time you move or make an action or bonus action, the linked creature also does the same. This applies to the linked creature as well.",
      31: "You are transported to the Shadowfell until the end of your next turn.",
      32: "A random creature is transported to the Shadowfell until the end of its next turn.",
      33: "Maximize the damage of the next damaging spell you cast.",
      34: "The next time you take damage, your max hit points are reduced by the amount of damage you took. The effect lasts until you take a long rest.",
      35: "Roll a d10. Your age regresses by a number of years equal to the roll.",
      36: "You cast Clairvoyance to a location decided by the DM.",
      37: "1d4 swarms of bats appear within 20 feet of you and obey simple commands for 1 minute.",
      38: "You magically fill the pockets and pouches of all creatures within 120 feet with goodberries. Until the next dawn, whenever an affected creature attempts to draw or use an item from a pouch, pocket, or container, it must succeed on a DC 10 Dexterity (Sleight of Hand) check or waste the action searching through the berries. The berries are harmless and surprisingly delicious; they can be consumed during a long rest.",
      39: "Your footsteps cause thorny brambles to erupt from the ground behind you. For the next minute, whenever you leave a space, a wall of thorns grows in the space you occupied. The wall follows the rules of the Wall of Thorns spell and is 10 feet high and 5 feet thick. A creature that enters the wall for the first time on a turn or ends its turn there takes 7d8 slashing damage.",
      40: "You regain 2d10 hit points.",
      41: "For the next minute, creatures damaged by your spells bleed black mist.",
      42: "You transform into Vampiric Mist for 1 minute.",
      43: "A Small fey creature appears, steals one unattended object worth at most 1 gp (or a gold coin if there is no such object), laughs, and vanishes.",
      44: "For the next minute, you may teleport between shadows you can see as a bonus action.",
      45: "You cast Levitate on yourself.",
      46: `A glittering disco ball appears, hovering 20 feet above you, while funky music fills the air. The disco ball remains for 3 rounds. For the duration, every creature within 120 feet of the disco ball must dance uncontrollably. At the start of each of its turns, a creature must make a Dexterity (Acrobatics) check and a Charisma (Performance) check, adding the results together. The effects are the following:

    20 or higher. The creature keeps the beat and can act normally this turn.
    19 or lower. The creature fails to keep the beat, takes 1d10 psychic damage, continues trying to dance, and can't take actions, bonus actions, or reactions until the start of its next turn. It can still move up to half its speed as part of its dance. Loud booing echoes from the disco ball.
    40 or higher. The creature dances with legendary flair. It can choose any number of other creatures it can see within 120 feet of the disco ball. Chosen creatures take 2d10 psychic damage. Afterwards, the disco ball turns into a golden crown, which promptly flies over to the creature and places itself on top of its head, ending the dance-off, and the music is replaced with cheering and clapping. You've been crowned King of the Dance Floor.`,
      47: "An allied Vampire Spawn appears within 30 feet of you for 1 minute.",
      48: "Two Shadows controlled by the DM appear within 15 feet of you for 1 minute.",
      49: "For the next minute, you can hear other creatures' surface thoughts within 30 feet of you as if using Detect Thoughts, but you can't see.",
      50: "You can't speak for the next minute. Whenever you try, black mist exits your mouth.",
      51: "For the next minute, you feel uncontrollable hunger. You eat everything edible you can get your hands on that can fit in your mouth. Your size increases with each piece of food you consume. For every 15 pounds eaten, you count as one size larger. After the effect ends, your size goes back to normal.",
      52: "For the next minute, anything you touch starts turning into gold. Creatures must make a DC 12 Constitution saving throw at the start of each of their turn. On a failed save, the goldenization progresses further. After 1 failed save, the creature's speed is reduced to 0. After 3 failed saves, they have disadvantage on all attack rolls. After 5 failed saves, the creature turns to gold completely. On a successful save, nothing happens. After 3 successful saves, the goldenization ends. The successes and failures don't need to be consecutive; keep track of both. Objects need to be held for a total of 10 seconds to turn them to gold completely. The goldenization ends if it hasn't turned to gold completely and the effect runs out.",
      53: "You are immune to being intoxicated by alcohol for the next 5d6 days.",
      54: "You gain Darkvision up to 300 feet for 24 hours.",
      55: "Your hair falls out and regrows within 24 hours.",
      56: "For the next hour, an illusory red carpet appears beneath your feet wherever you walk, vanishing after 6 seconds.",
      57: "All nonmagical flames within 200 feet of you are extinguished.",
      58: "Every shadow within 60 feet of you stretches unnaturally for 1 minute.",
      59: "You regain your highest-level expended spell slot.",
      60: "A single bat appears within 10 feet of you. It is hostile towards everyone except you.",
      61: "For the next minute, you and the creature closest to you become magnetically repelled from one another. The creature must be within 40 feet of you when this effect occurs; otherwise, nothing happens. Both of you are immediately pushed to the nearest unoccupied spaces so that you are 40 feet apart. For the duration, your speeds are halved, and whenever either of you moves within 40 feet of the other, the other is pushed the same distance in the opposite direction, provided it can be moved.",
      62: "For the next 24 hours, you can breathe underwater.",
      63: "You cast Cloud of Daggers on yourself.",
      64: "You cast Darkness centered on yourself.",
      65: "Up to three creatures you choose within 30 feet of you take 4d10 necrotic damage.",
      66: "A shallow pool of lava with a 25-foot radius bursts from under your feet. Any creature that starts its turn standing in the pool takes 1d10 fire damage, and any creature that ends its turn there takes 5d10 fire damage (DC 15 Constitution saving throw for half damage). The pool disappears after 10 minutes.",
      67: "For the next minute, you must whisper when you speak.",
      68: "A random creature within 500 feet of you becomes marked for death. You know its direction for 24 hours.",
      69: "For the next minute, every movement you make looks as if it was in slow motion, you have the effects of Slow and your initiative drops to 0.",
      70: "For the next minute, you can use your blood to open any lock at the cost of 5 maximum hit points. The hit points lost this way can only be regained by a Wish spell.",
      71: "Roll a d4. The next cantrip you cast within 1 minute 'echoes' a number of times equal to the result of the roll. For every echo, the same cantrip is cast on the same target at no additional cost.",
      72: "Your blood and the blood of creatures of your choice within 30 feet of you hardens for the next minute. The affected creatures gain resistance to slashing and piercing damage, but gain vulnerability to bludgeoning damage for the duration.",
      73: "A random creature within 120 feet of you gains vulnerability to necrotic damage for 1 minute.",
      74: `The Many-Faced Traveler whispers in your ear, offering to reveal everyone's true face. Roll a d20.

    1: Every creature within 60 feet that has an alternate form randomly assumes an alternate form belonging to another affected creature. The forms remain swapped until the start of your next turn.
    2-9: You gain blindsight out to 60 feet for 1 minute.
    10-15: You gain truesight out to 120 feet for 1 minute.
    16-18: Every creature within 60 feet takes 1d8 psychic damage for each alternate form it has.
    19: Every creature within 60 feet that has an alternate form assumes one at random until the start of your next turn.
    20: You steal one random alternate form from a random creature within 60 feet for 1 minute. You can assume that form, and the creature cannot.`,
      75: "You glow with eerie crimson light in a 30-foot radius for 1 minute. Any creature that ends its turn within 5 feet of you takes 1d4 piercing damage.",
      76: "A beam of dark light shines upon you. Your attacks deal an extra 1d6 necrotic damage for 1 minute.",
      77: "You cast Polymorph on yourself. On a failed save, you become a bat.",
      78: "For the next minute, whenever you miss with an attack, another random creature within 10 feet of the target takes half the damage instead.",
      79: "Swirling black rose petals surround you for 1 minute.",
      80: "Every mirror within 300 feet of you cracks.",
      81: "You immediately regain and may spend one Hit Die.",
      82: "A Phantom Warrior spawns within 15 feet of you, possessing a random uncommon magical item. Only you can see and deal damage to the Phantom Warrior. If you kill it, the uncommon magical item is left on the ground where it was killed.",
      83: "Every creature of your choice within 30 feet of you takes 2d8 necrotic damage. You regain hit points equal to the damage dealt.",
      84: "You and a random creature swap initiatives for the rest of combat. If there is no combat, nothing happens.",
      85: "You cast Summon Shadowspawn.",
      86: "Your AC increases by 5 for the next minute.",
      87: "You cast Phantom Steed. The steed appears skeletal or shadowy.",
      88: "A random creature within 60 feet of you is affected by Banishment to the Shadowfell.",
      89: "You turn into a putrid loaf of bread. The bread needs to be consumed for you to rematerialize. Any creature that eats from the bread becomes poisoned until they take a long rest, and the long rest takes 3 times as much rations as it normally would, so that their body can be cleansed of the filth.",
      90: "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
      91: "Until the next dawn, if you die, you rise as an undead version of yourself with 1 hit point. While you're an undead, you can't cast spells and your Strength score is increased by 4. A Greater Restoration or an equivalent effect can bring you back to life.",
      92: "If an ally dies within the next minute, its spirit remains visible and communicative for 1 minute.",
      93: "Your size decreases to Tiny for the next minute.",
      94: "A random object within 120 feet of you disappears into a pocket dimension. The DM decides when it reappears.",
      95: "You gain vulnerability to fire, cold, lightning and acid damage for the next minute.",
      96: "In the next minute, the next spell you cast is treated as if it was cast using a spell slot one level higher, if possible. Afterward, you take force damage equal to twice the spell's original level.",
      97: "For the next minute, you turn into a black goat, attacking target closest to you indiscriminately. If your head has turned into a small sun earlier in the same day (89. in the other table), you summon the Black Shepherd. All enemies turn into black goats and all allies turn into white goats. If you defeat the Black Shepherd, you permanently gain an unmarked level in Strength Domain Cleric, granting you all the class features available at that level.",
      98: "You gain 20 temporary hit points formed from stolen lifeforce.",
      99: "Somewhere in the multiverse an immortal snail comes into existence. If it ever touches you, you instantly die.",
      100: "You swap personalities."
    };
  
    let wildMagicTableB = {
      1: "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
      2: "The next time you make an ability check, it is automatically a critical success.",
      3: "For the next minute, you can see any invisible creature if you have line of sight to it.",
      4: "For the next minute, you can see through objects and creatures within 30 feet of you, as if they were completely transparent.",
      5: "A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later.",
      6: "Your shadow detaches from you and follows its own agenda for 1 minute.",
      7: "You cast Sleet Storm as a 3rd-level spell centered on yourself.",
      8: "You cast Fast Friends on a random creature within 60 feet of you.",
      9: "You cast Magic Missile as a 5th-level spell.",
      10: "You cast Melf's Minute Meteors.",
      11: "Roll a d10. Your height shrinks by a number of inches equal to the roll.",
      12: "For the next minute, you gain the features of another random Sorcerer subclass.",
      13: `A completely ordinary carp falls from the sky on a random space within 30 feet of you. If it falls on a creature, the creature takes 1d6 bludgeoning damage. If you're indoors, the carp breaks through the ceiling. If the carp receives Bardic Inspiration, it begins singing a sea shanty. Three rounds later a sailing ship falls from the sky, centered on the carp.

Roll a d4 to determine the ship:

1: Sloop, 20 × 10 ft., 5d10 bludgeoning damage
2: Cutter, 40 × 15 ft., 7d10 bludgeoning damage
3: Brigantine, 60 × 20 ft., 9d10 bludgeoning damage
4: Galleon, 100 × 30 ft., 12d10 bludgeoning damage.`,
      14: "You briefly glimpse every possible future. Gain advantage on your next attack roll, ability check, and saving throw.",
      15: "For the next minute, an ally of your choice within 60 feet of you that you can see regains 5 hit points at the start of each of their turns.",
      16: "For the next minute, whenever you speak, all creatures within 60 feet of you start clapping, using up their reaction forcibly. If a creature doesn't have hands or a reaction, nothing happens.",
      17: "The Coin of Fate appears in your hand, a token of the Colorless and All-Colored. Only you can see it. You may wager anything of value in a coin toss: your life, wealth, possessions, memories, or anything else you possess. In return, you may ask for something of equal value. If the Colorless and All-Colored deems the wager fair, the coin may be flipped. If you win, your wish is granted. If you lose, fate claims what you wagered forever, beyond the reach of any magic, even a Wish spell.",
      18: "You grow a fabulous mustache.",
      19: "You cast Grease centered on yourself.",
      20: "A future version of yourself appears for 1 minute and may offer advice.",
      21: "Creatures have disadvantage on saving throws against the next spell you cast in the next minute.",
      22: "For the next 3 rounds, any spell you cast does not take effect immediately. Instead, it manifests at the start of your next turn.",
      23: "Your skin turns a vibrant shade of blue. A Remove Curse spell can end this effect.",
      24: "A gift arrives from a random plane of existence. The DM determines the item.",
      25: "Your ears grow three times as large for the next hour. During that time, you have advantage on Wisdom (Perception) checks that rely on hearing.",
      26: "On the following round, four shards appear within 60 feet of you at random unoccupied locations or embedded in random enemies. Each shard is attuned to one of the following damage types: fire, cold, lightning, and acid. A shard can only be damaged by its own damage type. If all four shards are destroyed within the same round, the party gains one random dimensional crafting material.",
      27: "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.",
      28: "You cast Animate Dead on an applicable corpse you can see within 60 feet of you.",
      29: "You teleport up to 60 feet to an unoccupied space you can see.",
      30: "A random creature you can see teleports up to 60 feet to a space that you choose.",
      31: "You are transported to the Astral Plane until the end of your next turn.",
      32: "A random creature is transported to the Astral Plane until the end of its next turn.",
      33: "Minimize the damage of the next damaging spell you cast within the next minute.",
      34: "For the next turn of combat, all creatures in the combat are forced to attack you. If a creature cannot reach you, it takes the Dash action to move closer. If it can't attack you for some reason, it takes the Dodge action.",
      35: "Roll a d10. Your age progresses by a number of years equal to the roll.",
      36: "You cast Aura of Purity as a 4th-level spell.",
      37: "1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.",
      38: "A portal to Limbo opens within 30 feet of you for 1 round.",
      39: "For the next minute, the ground becomes slippery under your feet. You can only move 20 feet at a time, taking 1d6 bludgeoning damage if you collide with a creature or object. If it is a creature, the creature takes 1d6 bludgeoning damage as well. Every feet you slide counts towards your movement for the turn, but you can start a slide even if you have less than 20 feet movement left, provided it is more than 0. If you end your turn without moving, roll a DC 14 Dexterity saving throw, or fall prone.",
      40: "An ally of your choice that you can see regains 2d10 hit points.",
      41: "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
      42: "You turn into a Shambling Mound for the next minute. While in this form, you attack the closest creature indiscriminately. If you take 20 damage in this form, the effect breaks.",
      43: "Gravity reverses in a 30-foot radius around you until the start of your next turn.",
      44: "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns.",
      45: "You cast Levitate on a random creature within 60 feet of you, ignoring the saving throw.",
      46: `The weather immediately changes for 1 minute. A creature that cannot see the sky in any way ignores the effects.

Roll a d20 to determine the weather:

1: A blood moon rises. The number to roll a critical hit is reduced by 5.
2: A full moon appears. At the start of a creature's turn, it must make a DC 14 Wisdom saving throw. On a fail, it's affected by Confusion until the start of its next turn.
3-4: A violent thunderstorm begins. At the start of each round, one creature is hit by lightning, which deals 2d10 lightning damage.
5-7: Rain begins to fall. All units need to spend twice as much movement, as if walking on difficult terrain.
8-12: The sky becomes overcast. All brightly lit spaces become dim, and all dimly lit spaces become dark.
13-15: A brilliant rainbow spans the sky. All creatures gain Inspiration.
16-18: Every star disappears from the sky. At the start of a creature's turn, it takes 1d4 psychic damage.
19: A solar eclipse darkens the world. Something beyond comprehension appears, devouring the sun and swallowing its light. Every creature that witnesses this must make a DC 20 Wisdom saving throw. On a failed save, the creature suffers a short-term madness effect.
20: Three suns shine in the sky. All creatures regain 10 hit points. While the effect lasts, all creatures have disadvantage on Wisdom (Perception) checks that rely on sight, and invisible creatures automatically get revealed.`,
      47: "A unicorn controlled by the DM appears within 5 feet of you for 1 minute.",
      48: "You cast Hideous Laughter on yourself or a random creature within 60 feet of you that you can see.",
      49: "For the next minute, you can understand all languages, but you can't speak.",
      50: "You can't speak for the next minute. Whenever you try, you feel a sharp pain in your throat and you take 1d4 piercing damage.",
      51: "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to Magic Missile.",
      52: "You cast Warding Wind as a 2nd-level spell.",
      53: "You become intoxicated by alcohol for the next 1d4 hours.",
      54: "For the next hour, every creature within 120 feet of you starts speaking in a random language.",
      55: "You become two-dimensional for 1 minute, and other creatures may move through the space you occupy.",
      56: "You become four-dimensional for 1 minute and may move through occupied spaces.",
      57: "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
      58: "For the next minute, any object you touch that isn't being worn or carried by another creature freezes into ice.",
      59: "You regain your lowest-level expended spell slot.",
      60: "An ordinary goose appears within 10 feet of you, holding a knife in its bill. It is inexplicably hostile towards everyone. Peace was never an option.",
      61: "For the next minute, you and the creature closest to you become gravitationally attracted to one another. The creature must be within 60 feet of you when this effect occurs; otherwise, nothing happens. Both of you are immediately pulled to the nearest unoccupied spaces halfway between your current positions. For the duration, your speeds are halved, and whenever either of you moves, the other is dragged the same distance in the same direction, provided it can be moved.",
      62: "You are frightened by the nearest creature until the end of your next turn.",
      63: "You cast Zone of Truth centered on yourself.",
      64: "You cast Daylight centered on yourself.",
      65: "Up to three creatures you choose within 30 feet of you take 4d10 radiant damage.",
      66: "A natural hot spring with a 60-foot radius breaks out of the ground under your feet. The hot spring counts as difficult terrain, and spending an hour bathing in it has the same effect as taking a long rest. The hot spring disappears after 2 hours.",
      67: "You must say all your thoughts out loud for the next minute.",
      68: "Every creature within 120 feet of you is transported into a temporary astral void for 1 minute.",
      69: "For the next minute, every movement you make looks as if it was sped up, you have the effects of Haste and your initiative increases to 100.",
      70: "You and each creature within 30 feet of you become blind for the next minute. The blindness ends on a creature when it takes damage.",
      71: "For the next minute, you may cast a cantrip as a bonus action once on each of your turns. A cantrip cast this way cannot target the same creature again until it has targeted another creature.",
      72: "Roll a d4. For the next minute, your speed increases by a number of feet equal to 10 times the number rolled.",
      73: "A miniature black hole erupts from your chest. For 3 rounds your speed becomes 0 and creatures are pulled toward you.",
      74: "The next spell you cast affects every valid target within range.",
      75: "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.",
      76: "For the next minute, every creature within 120 feet of you teleports 10 feet in a random direction after taking an action. If the space a creature would teleport to is occupied, nothing happens.",
      77: "You cast Polymorph on yourself. On a failed save, you become a sheep.",
      78: "Every nonmagical liquid within 60 feet of you instantly freezes.",
      79: "Illusory butterflies and flower petals flutter around you for 1 minute.",
      80: "A tiny solar system begins orbiting your head for 1 hour.",
      81: "You can take one additional action immediately.",
      82: "A random creature within 60 feet of you gains an additional action on their next turn.",
      83: "Every creature within 30 feet of you takes 1d10 radiant damage. You gain temporary hit points equal to the total damage dealt.",
      84: "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
      85: "You cast Mirror Image.",
      86: "An ally of your choice within 60 feet of you that you can see has their AC increased by 5 for the next minute.",
      87: "You swap locations with a random creature within 300 feet of you that is on the same plane.",
      88: "Every creature within 120 feet of you transforms into a perfect copy of you for 10 minutes.",
      89: "For the next minute, your head turns into a small sun and your muscles grow significantly. While in this form, your Strength is raised to 30, you can only make unarmed attacks, you cannot cast spells, and the radiance of your head blinds all other creatures within 60 feet of you.",
      90: "You become blind and deaf for the next minute. The effect ends if you take damage.",
      91: "If you die within the next minute, you immediately return as if by Reincarnate.",
      92: "If an ally you can see dies within the next minute, they return as if by Reincarnate.",
      93: "Your size increases to Huge for the next minute.",
      94: "For the next minute, you sweat copper coins.",
      95: "You and all creatures within 30 feet of you gain resistance to fire, lightning, and acid damage and vulnerability to cold damage for the next minute.",
      96: "The ground within 60 feet of you becomes unnaturally bouncy for 1 minute. On the bouncy ground, falling damage is reduced to 0, but jump distance is tripled.",
      97: "You and all creatures within 30 feet of you are targeted by Dispel Magic.",
      98: "You regain all expended sorcery points.",
      99: "You collapse into a writhing amalgam of flesh for 3 rounds. It has an AC of 8, a crawling speed of 5, and can only cast spells with a verbal component only.",
      100: "You swap personalities."
    };

    return isA ? wildMagicTableA[d100] : wildMagicTableB[d100];
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const output = document.getElementById("output");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const roll = (parseInt(document.getElementById("roll").value, 10) || 0);
    const radioResult = document.querySelector('input[name="wildMagicType"]:checked').value;
    const result = getWildMagic(roll, radioResult === "A");
    output.value = result;
  });
});