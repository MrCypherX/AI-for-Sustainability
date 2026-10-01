import { db } from '../models/mockDb.js';

export class SurplusController {
  static getListings(req, res) {
    try {
      const { status } = req.query;
      let listings = db.getAllListings();
      if (status && status !== 'all') {
        listings = listings.filter(l => l.status === status);
      }
      res.json({ success: true, count: listings.length, data: listings });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static getListingById(req, res) {
    try {
      const listing = db.getListingById(req.params.id);
      if (!listing) {
        return res.status(404).json({ success: false, error: 'Listing not found' });
      }
      res.json({ success: true, data: listing });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static createListing(req, res) {
    try {
      const { name, category, meals, weightKg, preparedTime, safeUntil, dietary, allergens, location, notes } = req.body;
      if (!name || !meals) {
        return res.status(400).json({ success: false, error: 'Name and meal count are required' });
      }

      const listing = db.addListing({
        name,
        category,
        meals,
        weightKg,
        preparedTime,
        safeUntil,
        dietary,
        allergens,
        location,
        notes
      });

      res.status(201).json({ success: true, message: 'Surplus donation listed successfully', data: listing });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static updateListingStatus(req, res) {
    try {
      const { status, matchedOrg } = req.body;
      const listing = db.getListingById(req.params.id);
      if (!listing) {
        return res.status(404).json({ success: false, error: 'Listing not found' });
      }

      if (status) listing.status = status;
      if (matchedOrg) listing.matchedOrg = matchedOrg;

      res.json({ success: true, data: listing });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
