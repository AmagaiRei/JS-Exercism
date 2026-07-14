// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
   switch (name) {
      case 'Pure Strawberry Joy':
         return 0.5;
      case 'Energizer':
      case 'Green Garden':
         return 1.5;
      case 'Tropical Island':
         return 3;
      case 'All or Nothing':
         return 5;
      default:
         return 2.5;
   }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
   let wedges = 0;
   let cut = 0;
   if (wedgesNeeded === 0) {
      return 0;
   }
   for (const lime of limes) {
      switch (lime) {
         case 'small':
            wedges += 6;
            cut += 1;
            break;
         case 'medium':
            wedges += 8;
            cut += 1;
            break;
         case 'large':
            cut += 1;
            wedges += 10;
            break;
      }
      if (wedges >= wedgesNeeded) {
         return cut;
      }
   }
   return cut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
   for (let i = 0; i < orders.length; i++) {
      {
         const order = orders[i];
         const mixTime = timeToMixJuice(order);
         timeLeft -= mixTime;
         if (timeLeft <= 0) {
            return orders.slice(i + 1);
         }
      }
   }
   return [];
}
