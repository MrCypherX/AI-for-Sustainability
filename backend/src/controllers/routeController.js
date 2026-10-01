import { db } from '../models/mockDb.js';

export class RouteController {
  static getActiveRoute(req, res) {
    try {
      res.json({ success: true, data: db.activeRoute });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static updateRouteStep(req, res) {
    try {
      const { stepNumber } = req.body;
      const stepNum = Number(stepNumber);
      if (!stepNum || stepNum < 1 || stepNum > 4) {
        return res.status(400).json({ success: false, error: 'Step number must be between 1 and 4' });
      }

      const updatedRoute = db.advanceRouteStep(stepNum);
      res.json({ 
        success: true, 
        message: `Route updated to Step ${stepNum}`, 
        data: updatedRoute,
        metrics: db.metrics
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
