/**
 * NourishLoop User and Organization Roles
 */

export const USER_ROLES = {
  DONOR: 'donor',
  NGO: 'ngo',
  VOLUNTEER: 'volunteer',
  ADMIN: 'admin'
};

export const DONOR_TYPES = {
  RESTAURANT: 'Restaurant',
  CAFETERIA: 'Cafeteria',
  HOTEL: 'Hotel',
  HOSTEL: 'Hostel',
  HOUSEHOLD: 'Household',
  EVENT_ORGANIZER: 'Event Organizer'
};

export const RECIPIENT_TYPES = {
  COMMUNITY_KITCHEN: 'Community Kitchen',
  HOMELESS_SHELTER: 'Homeless Shelter',
  CHILDRENS_HOME: 'Children Welfare Home',
  FOOD_RESCUE_NETWORK: 'Food Rescue Volunteer Network',
  FOOD_BANK: 'Food Bank'
};

export const ROLE_LABELS = {
  [USER_ROLES.DONOR]: 'Food Donor',
  [USER_ROLES.NGO]: 'NGO / Community Kitchen',
  [USER_ROLES.VOLUNTEER]: 'Rescue Volunteer',
  [USER_ROLES.ADMIN]: 'Platform Admin'
};
