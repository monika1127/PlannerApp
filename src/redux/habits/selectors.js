import {dateFull} from '../../data/dateFunctions'

export const habitsSelector = (state) => state.habits;

export const habitsListSelector = (state, day) => {
  const habitsList =
  state.habits.habits.filter(
    (habit) =>
      // 1.habit creation date before selected day
      Date.parse(habit.dateCreated) <= Date.parse(day) &&
      // 2. habitat week day matches selected day
      habit.weeklyFrequency[day.getDay()] &&
      // 3. is habitat still active? (not listed in hebits history)
      (habit.history && !habit.history[dateFull(day)] || undefined),
      )
  return habitsList ? habitsList : []
}
