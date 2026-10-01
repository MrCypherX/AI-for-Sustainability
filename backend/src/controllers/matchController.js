import { db } from '../models/mockDb.js';
import { MatchingService } from '../services/matchingService.js';

export class MatchController {
  static getMatches(req, res) {
    try {
      const { listingId } = req.query;
      const listing = listingId ? db.getListingById(listingId) : db.surplusListings[0];
      const rankedOrgs = MatchingService.rankMatches(db.organizations, listing);
      res.json({ success: true, count: rankedOrgs.length, data: rankedOrgs });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static acceptMatch(req, res) {
    try {
      const { orgId } = req.body;
      if (!orgId) {
        return res.status(400).json({ success: false, error: 'Organization ID is required' });
      }

      const result = db.acceptMatch(orgId);
      if (!result) {
        return res.status(404).json({ success: false, error: 'Organization not found' });
      }

      res.json({ 
        success: true, 
        message: `Match accepted with ${result.matchedOrg}. Volunteer dispatch activated.`, 
        data: db.activeRoute 
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
