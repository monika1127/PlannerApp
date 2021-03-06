import { dateFull } from '../../data/dateFunctions';

export const habitsSelector = (state) => state.habits;

export const habitSelector = (habitId) => (state) =>
  state.habits.habits.find((habit) => habit._id === habitId);

export const habitsListSelector = (day) => (state) => {
  const habitsList = state.habits.habits.filter(
    (habit) =>
      // 1.habit creation date before selected day
      Date.parse(habit.dateCreated) <= Date.parse(day) &&
      // 2. habitat week day matches selected day
      habit.weeklyFrequency[day.getDay()] &&
      // 3. is habitat still active? (not listed in hebits history)
      ((habit.history && !habit.history[dateFull(day)]) || undefined),
  );
  console.log(state);
  return habitsList ? habitsList : [];
};

export const qtyOfPlannedHabitsSelector = (state, day) => {
  const habitsList = state.habits.habits.filter(
    (habit) =>
      // 1.habit creation date before selected day
      Date.parse(habit.dateCreated) <= Date.parse(day) &&
      // 2. habitat week day matches selected day
      habit.weeklyFrequency[day.getDay()],
  );
  return habitsList ? habitsList.length : 0;
};

export const qtyOfDoneHabitsSelector = (state, day) => {
  const habitsList = state.habits.habits.filter(
    (habit) =>
      // 1.habit creation date before selected day
      Date.parse(habit.dateCreated) <= Date.parse(day) &&
      // 2. habitat week day matches selected day
      habit.weeklyFrequency[day.getDay()] &&
      // 3. is habitat still active? (not listed in hebits history)
      habit.history[dateFull(day)],
  );
  return habitsList ? habitsList.length : 0;
};
