const input = await Deno.readTextFile("./input.txt");

const elfies = input.split("\n\n");

let highest = 0;

for (const elf of elfies) {
  const items = elf.split("\n").map((s) => parseInt(s, 10));
  const total = items.reduce((a, b) => a + b, 0);
  
  if (total > highest) {
    highest = total;
  }
}


console.log(highest)