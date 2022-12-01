const input = await Deno.readTextFile("./input.txt");

const elfies = input.split("\n\n");

let highest = 0;
let sum = [];

for (const elf of elfies) {
  const items = elf.split("\n").map((s) => parseInt(s, 10));
  const total = items.reduce((a, b) => a + b, 0);

  sum.push(total);
}

const topThree = sum.sort((a, b)=> b-a).slice(0, 3);

const topThreeTotal = topThree.reduce((a, b)=>a+b, 0);

console.log(topThreeTotal)