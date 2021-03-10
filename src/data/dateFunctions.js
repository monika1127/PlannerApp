export const dateFullLong = (date) =>
  date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const dateFull = (date) => date.toLocaleDateString('en-CA');

export const dateDDMM = (date) =>
  date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  });

export const weekDayLong = (date) =>
  date.toLocaleDateString('en-GB', {
    weekday: 'long',
  });

export const weekDayShort = (date) =>
  date.toLocaleDateString('en-GB', {
    weekday: 'short',
  });

export const week = [
  { id: 1, name: 'Mon' },
  { id: 2, name: 'Tue' },
  { id: 3, name: 'Wed' },
  { id: 4, name: 'Thu' },
  { id: 5, name: 'Fri' },
  { id: 6, name: 'Sat' },
  { id: 0, name: 'Sun' },
];
