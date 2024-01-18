// export const selectDiaryProducts = state => state.diary.diaryProducts;
// export const selectDiaryExercises = state => state.diary.diaryExercises;
// export const selectDiaryIsLoading = state => state.diary.IsLoading;
// export const selectDiaryError = state => state.diary.error;

export const selectDiaryProducts = state => state.diary.productsInDiary;

export const selectDiaryExercises = state => state.diary.exercisesInDiary;

export const selectDiaryIsLoading = state => state.diary.isLoading;

export const selectDiaryError = state => state.diary.error;

export const selectCalories = state => state.diary.consumedCaloriesByDate;

export const selectsportsRemaining = state => state.diary.sportsRemaining;

export const selectBurnedCalories = state => state.diary.burnedCaloriesByDate;
