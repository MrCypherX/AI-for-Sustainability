import { db } from '../models/mockDb.js';
import { ImpactService } from '../services/impactService.js';

export class ImpactController {
  static getMetrics(req, res) {
    try {
      res.json({ success: true, data: db.metrics });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static getDetailedReport(req, res) {
    try {
      const report = ImpactService.generateReport(db.metrics);
      res.json({ success: true, data: report });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static getLiveActivity(req, res) {
    try {
      res.json({ success: true, data: db.liveActivity });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static getNotifications(req, res) {
    try {
      res.json({ success: true, data: db.notifications });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
