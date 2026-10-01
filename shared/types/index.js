/**
 * JSDoc Type Definitions for NourishLoop Platform
 */

/**
 * @typedef {Object} UserProfile
 * @property {string} id
 * @property {string} name
 * @property {string} role - 'donor' | 'ngo' | 'volunteer' | 'admin'
 * @property {string} organization
 * @property {string} avatar
 * @property {boolean} verified
 */

/**
 * @typedef {Object} SurplusListing
 * @property {string} id
 * @property {string} name
 * @property {string} category
 * @property {number} meals
 * @property {number} weightKg
 * @property {string} preparedTime
 * @property {string} safeUntil
 * @property {string} dietary
 * @property {string[]} allergens
 * @property {'available'|'matched'|'in_transit'|'completed'|'expired'} status
 * @property {string} image
 * @property {string} location
 * @property {string} notes
 * @property {string} [matchedOrg]
 */

/**
 * @typedef {Object} RecipientOrganization
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {number} distanceKm
 * @property {number} travelTimeMin
 * @property {number} canAcceptMeals
 * @property {string} pickupDeadline
 * @property {string} foodPreference
 * @property {string} currentNeed
 * @property {number} matchScore
 * @property {boolean} isBestMatch
 * @property {'urgent'|'normal'} urgency
 * @property {{x: number, y: number}} coordinates
 * @property {string} address
 * @property {string} contactPerson
 * @property {string} phone
 * @property {string} beneficiaries
 * @property {boolean} fssaiVerified
 * @property {number} rating
 */

/**
 * @typedef {Object} RouteStep
 * @property {string} label
 * @property {string} time
 * @property {'completed'|'current'|'upcoming'} status
 */

/**
 * @typedef {Object} ActiveRoute
 * @property {string} id
 * @property {string} listingName
 * @property {number} meals
 * @property {string} pickupLocation
 * @property {string} dropoffLocation
 * @property {number} distanceKm
 * @property {number} estimatedTimeMin
 * @property {string} pickupDeadline
 * @property {number} currentStep
 * @property {RouteStep[]} steps
 * @property {Object} volunteer
 */

export const TYPE_DEFINITIONS = true;
