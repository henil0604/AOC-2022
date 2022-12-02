const input = await Deno.readTextFile("./input.txt");

const rounds = input.split("\n");

let totalScore = 0;

rounds.forEach(round => {
  let [opposite, me] = round.split(" ");
  me = translate(me);
  
  let score = 0;

  if(me === 'A') score += 1;
  if(me === 'B') score += 2;
  if(me === 'C') score += 3;

  if(opposite === me) score += 3;
  if(opposite === 'A' && me === 'B') score += 6;
  if(opposite === 'B' && me === 'C') score += 6;
  if(opposite === 'C' && me === 'A') score += 6;

  totalScore += score;
})

console.log(totalScore)