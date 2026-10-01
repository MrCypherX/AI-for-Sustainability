/**
 * Validation rules for NourishLoop entities
 */

export function validateListingInput(data) {
  const errors = {};

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.name = 'Food item name is required';
  }

  if (!data.meals || isNaN(Number(data.meals)) || Number(data.meals) <= 0) {
    errors.meals = 'Valid meal count must be greater than zero';
  }

  if (!data.safeUntil || typeof data.safeUntil !== 'string') {
    errors.safeUntil = 'Safe consumption deadline is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function validateForecastInput(data) {
  const errors = {};

  if (!data.attendance || isNaN(Number(data.attendance)) || Number(data.attendance) < 0) {
    errors.attendance = 'Valid expected attendance count is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
