/**
 * NourishLoop Smart Routing & Dispatch Optimization Service
 */

export class RouteOptimizationService {
  /**
   * Calculates estimated transit time and carbon savings
   */
  static estimateTransit(distanceKm, trafficCondition = 'normal') {
    const baseSpeedKmH = trafficCondition === 'heavy' ? 15 : 24;
    const travelTimeMin = Math.round((distanceKm / baseSpeedKmH) * 60) + 3; // +3 min buffer
    const electricEvCo2SavedGrams = Math.round(distanceKm * 120); // 120g CO2 saved vs petrol van

    return {
      travelTimeMin,
      electricEvCo2SavedGrams,
      optimalMode: 'Electric 2-Wheeler / Insulated thermal carrier'
    };
  }
}
