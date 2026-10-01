/**
 * NourishLoop AI Multi-Criteria Matching Engine
 * Ranks potential NGO recipients based on distance, capacity, dietary preference & urgency
 */

export class MatchingService {
  /**
   * Scores and sorts organizations for a given surplus donation
   */
  static rankMatches(organizations, listing) {
    const listMeals = listing?.meals || 35;
    const listDietary = listing?.dietary || 'Vegetarian';

    return organizations.map(org => {
      let score = 70;

      // 1. Distance penalty (closer is better: -4 points per km)
      score -= Math.min(25, org.distanceKm * 4);

      // 2. Capacity match (+15 if capacity can take all meals)
      if (org.canAcceptMeals >= listMeals) {
        score += 15;
      } else {
        score += Math.round((org.canAcceptMeals / listMeals) * 10);
      }

      // 3. Dietary alignment (+10 points)
      if (org.foodPreference === 'All types' || org.foodPreference.includes(listDietary)) {
        score += 10;
      }

      // 4. Urgency need bonus (+15 for critical, +8 for high)
      if (org.currentNeed === 'Critical' || org.urgency === 'urgent') {
        score += 15;
      } else if (org.currentNeed === 'High') {
        score += 8;
      }

      // Clamp between 60 and 99
      const finalScore = Math.min(99, Math.max(60, Math.round(score)));

      return {
        ...org,
        calculatedScore: finalScore,
        matchScore: finalScore
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
  }
}
