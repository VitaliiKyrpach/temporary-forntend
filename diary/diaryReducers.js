export const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};
export const handleFulfilledAllDiary = (state, { payload }) => {
  console.log('payload', payload);
  state.error = null;
  state.isLoading = false;
  state.productsInDiary = payload.productsInDiary || ['hello', 'world'];
  state.exercisesInDiary = payload.exercisesInDiary || [];
  state.burnedCaloriesByDate = payload.burnedCaloriesByDate || 0;
  state.consumedCaloriesByDate = payload.consumedCaloriesByDate || 0;
  state.sportsRemaining = payload.sportsRemaining || 0;
};
export const handleFulfilledAddProduct = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.productsInDiary.push(payload);
};
export const handleFulfilledDeleteProduct = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  const index = state.diaryProducts.findIndex(
    product => product._id === payload._id
  );
  if (index !== -1) {
    state.productsInDiary.splice(index, 1);
  }
};

export const handleFulfilledAddExercises = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.exercisesInDiary.push(payload);
};

export const handleFulfilledDeleteExercises = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  const index = state.diaryExercises.findIndex(
    exercises => exercises._id === payload._id
  );
  if (index !== -1) {
    state.exercisesInDiary.splice(index, 1);
  }
};
