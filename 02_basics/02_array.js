const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)

// const allHeroes =marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)


const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6],7, [6, 7, [4,5]] ]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Mrityunjay"));
// console.log(Array.from("Mrityunjay"))
console.log(Array.from({name : "Mrityunjay"})) //interesting


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
let score5 = [500, 600, 700, 800]
console.log(Array.of(score1, score2, score3, score4, score5))