import { db } from '../models/mockDb.js';
import { AiPredictionService } from '../services/aiPredictionService.js';

export class PredictionController {
  static getPrediction(req, res) {
    try {
      res.json({ success: true, data: db.aiInsight });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static runSimulation(req, res) {
    try {
      const { attendance, weather, dayOfWeek } = req.body;
      const forecast = AiPredictionService.forecast({ attendance, weather, dayOfWeek });
      res.json({ success: true, data: forecast });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static applyRecommendation(req, res) {
    try {
      db.aiInsight.applied = true;
      db.metrics.moneySaved += 2400;
      db.metrics.wasteAvoidedKg += 9;
      res.json({ 
        success: true, 
        message: 'AI recommendation successfully calibrated for kitchen prep!',
        data: db.aiInsight,
        updatedMetrics: db.metrics
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
