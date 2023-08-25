import { getPositive } from "./ModuleScripts.js";
import { getMin } from "./ModuleScripts.js";
import { getMax } from "./ModuleScripts.js";
import { getNegative } from "./ModuleScripts.js";
import { getOddPositive } from "./ModuleScripts.js";
import { getEvenPositive } from "./ModuleScripts.js";
import { getOddPositiveSum } from "./ModuleScripts.js";
import { getEvenPositiveSum } from "./ModuleScripts.js";
import { getEvenPositiveMult } from "./ModuleScripts.js";
import { getMaxZero } from "./ModuleScripts.js";

let array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

console.log(array);

getPositive(array);
getMin(array);
getMax(array);
getNegative(array);
getOddPositive(array);
getEvenPositive(array);
getOddPositiveSum(array);
getEvenPositiveSum(array);
getEvenPositiveMult(array);
getMaxZero(array);
