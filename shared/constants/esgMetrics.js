/**
 * NourishLoop ESG & Sustainability Calculation Constants
 */

export const ESG_FACTORS = {
  // Average greenhouse gas emission avoided per kg of food saved from landfill (kg CO2e / kg food)
  CO2_PER_KG_FOOD: 2.5,

  // Average embedded water saved per kg of food (liters / kg)
  WATER_LITERS_PER_KG_FOOD: 5000,

  // Average weight in kg per meal portion
  AVG_KG_PER_MEAL: 0.33,

  // Monetary value saved per meal (INR ₹)
  AVG_VALUE_PER_MEAL_INR: 120,

  // Max score baseline
  MAX_SUSTAINABILITY_SCORE: 100
};

/**
 * Calculates impact metrics based on meals or weight
 */
export function calculateImpact(meals = 0, weightKg = 0) {
  const effectiveKg = weightKg > 0 ? weightKg : meals * ESG_FACTORS.AVG_KG_PER_MEAL;
  const effectiveMeals = meals > 0 ? meals : Math.round(weightKg / ESG_FACTORS.AVG_KG_PER_MEAL);

  return {
    mealsRescued: effectiveMeals,
    weightKg: Math.round(effectiveKg * 10) / 10,
    co2AvoidedKg: Math.round(effectiveKg * ESG_FACTORS.CO2_PER_KG_FOOD),
    waterSavedLiters: Math.round(effectiveKg * ESG_FACTORS.WATER_LITERS_PER_KG_FOOD),
    moneySaved: Math.round(effectiveMeals * ESG_FACTORS.AVG_VALUE_PER_MEAL_INR)
  };
}
