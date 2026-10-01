/**
 * NourishLoop AI Demand & Surplus Forecasting Service
 * Simulates machine learning model for cafeteria/restaurant food prep optimization
 */

export class AiPredictionService {
  /**
   * Forecasts preparation recommendation based on attendance and weather inputs
   */
  static forecast({ attendance = 420, weather = 'rain', dayOfWeek = 'weekday' }) {
    const baselinePrep = 440;
    const att = Number(attendance) || 420;

    // Weather impact coefficient
    let weatherPenalty = 0;
    let weatherSummary = 'Clear weather';
    if (weather.toLowerCase().includes('rain')) {
      weatherPenalty = 15;
      weatherSummary = 'Rainfall expected in afternoon (-15 footfall)';
    } else if (weather.toLowerCase().includes('storm')) {
      weatherPenalty = 30;
      weatherSummary = 'Severe weather alert (-30 footfall)';
    }

    // Recommended meals
    const recommendedMeals = Math.max(50, Math.round(att * 0.92 - weatherPenalty));
    const mealsReduction = baselinePrep - recommendedMeals;
    const estimatedWasteKg = Math.round(mealsReduction * 0.33);
    const estimatedSaving = mealsReduction * 80; // ₹80 per meal saved
    const confidence = Math.min(98, Math.max(82, Math.round(92 - Math.abs(420 - att) * 0.05)));

    return {
      title: mealsReduction > 0 
        ? `Prepare ${mealsReduction} fewer meals tomorrow`
        : `Prepare ${Math.abs(mealsReduction)} additional meals tomorrow`,
      description: `Expected attendance of ${att} with ${weatherSummary}. Calibrating preparation will prevent approximately ${estimatedWasteKg} kg of surplus food waste.`,
      confidence,
      estimatedSaving,
      estimatedWasteKg,
      recommendedMeals,
      expectedCustomers: att,
      previousAverage: baselinePrep,
      weatherCondition: weatherSummary,
      generatedAt: new Date().toISOString()
    };
  }
}
