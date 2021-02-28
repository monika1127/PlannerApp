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
