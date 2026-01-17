/*# 1️⃣ Hero Level Classifier Challenge

## What should be used:
- Variables  
- Operators  
- Loops  
- Conditional structures  

## Objective:
Create a variable to store the hero's name and experience points (XP).  
Then, use a conditional structure to display one of the following messages:

- If XP is less than 1,000 = Iron  
- If XP is between 1,001 and 2,000 = Bronze  
- If XP is between 2,001 and 5,000 = Silver  
- If XP is between 5,001 and 7,000 = Gold  
- If XP is between 7,001 and 8,000 = Platinum  
- If XP is between 8,001 and 9,000 = Ascendant  
- If XP is between 9,001 and 10,000 = Immortal  
- If XP is greater than or equal to 10,001 = Radiant  

## Output:
At the end, display the following message:

"The hero named **{name}** is at the **{level}** level."
*/

let name = "Viviane - The stronger!";
let heroXP = 8500;
let Level = ""; // this line was added by an IA (Claude) in the end of exercise 

// Checking condition and values
if (heroXP < 1000) {
    Level = "Iron";
} else if (heroXP >= 1001 && heroXP <= 2000) {
    Level = "Bronze";
} else if (heroXP >= 2001 && heroXP <= 5000) {
    Level = "Silver";
} else if (heroXP >= 5001 && heroXP <= 7000) {
    Level = "Gold";
} else if (heroXP >= 7001 && heroXP <= 8000) {
    Level = "Platinum";
} else if (heroXP >= 8001 && heroXP <= 9000) {
    Level = "Ascendant";
} else if (heroXP >= 9001 && heroXP <= 10000) {
    Level = "Immortal";
} else {
    Level = "Radiant";
}

// Output the result
console.log(`The hero named ${name} is at the ${Level} level.`);
