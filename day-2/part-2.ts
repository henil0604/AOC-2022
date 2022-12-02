function translate(key: string): string {
  return ({
    'X': 'A',
    'Y': 'B',
    'Z': 'C'
  })[key] as string;
}

const input = await Deno.readTextFile("./input.txt");
const rounds = input.split("\n");

let totalScore = 0;

export function bestChoice(opposite: string, situation: string){
  if(situation === 'Y') {
    return opposite;
  }
  if(situation === 'X') {
    if(opposite === 'A'){
      return 'C' 
    }
    if(opposite === 'B'){
      return 'A'
    }
    if(opposite === 'C'){
      return 'B'
    }
  }
  if(situation === 'Z'){
    if(opposite == 'A'){
     return 'B'; 
    }
    if(opposite == 'B'){
     return 'C'; 
    }
    if(opposite == 'C'){
     return 'A'; 
    }
  }
}



rounds.forEach((round) => {
  let [opposite, situation] = round.split(" ");
  let me = translate(situation);

  let score = 0;

  if (situation === "X") score += 0;
  if (situation === "Y") score += 3;
  if (situation === "Z") score += 6;

  let situationChoice = bestChoice(opposite, situation);

  if(situationChoice === 'A') score += 1;
  if(situationChoice === 'B') score += 2;
  if(situationChoice === 'C') score += 3;

   totalScore += score
});

console.log(totalScore)