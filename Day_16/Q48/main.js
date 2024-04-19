"use strict";
// Combining Arrays with Spread Operator:
let priceSet1 = [10000, 12000, 16000];
let priceSet2 = [15000, 20000, 14000];
let combinedPrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(combinedPrices);
