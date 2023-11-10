// export const increment = check => ({
//   type: 'increment',
//   payload: check ? 10 : 1,
// });

import { createAction } from '@reduxjs/toolkit';

// export const decrement = check => ({
//   type: 'decrement',
//   payload: check ? 10 : 1,
// });

export const increment = createAction('increment');

export const decrement = createAction('decrement');
