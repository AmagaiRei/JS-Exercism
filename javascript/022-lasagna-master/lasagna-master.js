/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
function cookingStatus(remainingTimer) {
   if (remainingTimer === undefined) {
      return `You forgot to set the timer.`;
   } else if (remainingTimer === 0) {
      return `Lasagna is done.`;
   } else {
      return `Not done, please wait.`;
   }
}
function preparationTime(layers, averageTime) {
   if (averageTime === undefined) {
      averageTime = 2;
   }
   return layers.length * averageTime;
}

function quantities(layers) {
   let noodles = 0,
      sauce = 0;
   for (let i = 0; i < layers.length; i++) {
      if (layers[i] === 'noodles') {
         noodles += 50;
      }
      if (layers[i] === 'sauce') {
         sauce += 0.2;
      }
   }
   return {
      noodles,
      sauce,
   };
}

function addSecretIngredient(friendsList, myList) {
   let lastIngredient = friendsList[friendsList.length - 1];
   myList.push(lastIngredient);
}

const recipe = {
   noodles: 200,
   sauce: 0.5,
   mozzarella: 1,
   meat: 100,
};
function scaleRecipe(recipe, amount) {
   const k = amount / 2;
   const newRecipe = { ...recipe };
   const keys = Object.keys(newRecipe);
   for (const key of keys) {
      newRecipe[key] *= k;
   }

   return newRecipe;
}

export {
   cookingStatus,
   preparationTime,
   quantities,
   addSecretIngredient,
   scaleRecipe,
};
