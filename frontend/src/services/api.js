/**
 * NourishLoop Frontend API Client
 * Connects to the Express backend with automatic fallback to local state if offline
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

class ApiService {
  constructor() {
    this.isBackendAvailable = false;
    this.checkHealth();
  }

  async checkHealth() {
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      if (res.ok) {
        this.isBackendAvailable = true;
        console.log('[API] Backend online at', API_BASE_URL);
      }
    } catch {
      this.isBackendAvailable = false;
      console.log('[API] Backend offline or proxying. Using resilient local fallback.');
    }
    return this.isBackendAvailable;
  }

  // --- Auth & Role Switching ---
  async getCurrentUser() {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/user`);
      if (!res.ok) throw new Error('Failed to fetch user');
      const json = await res.json();
      return json.data;
    } catch (e) {
      return null;
    }
  }

  async switchRole(role) {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/switch-role`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role })
      });
      if (!res.ok) throw new Error('Role switch failed');
      const json = await res.json();
      return json.data;
    } catch (e) {
      return null;
    }
  }

  // --- AI Predictions ---
  async getPrediction() {
    try {
      const res = await fetch(`${API_BASE_URL}/predictions/current`);
      if (!res.ok) throw new Error('Failed to get prediction');
      const json = await res.json();
      return json.data;
    } catch (e) {
      return null;
    }
  }

  async runSimulation(params) {
    try {
      const res = await fetch(`${API_BASE_URL}/predictions/simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      });
      if (!res.ok) throw new Error('Simulation failed');
      const json = await res.json();
      return json.data;
    } catch (e) {
      return null;
    }
  }

  async applyPrediction() {
    try {
      const res = await fetch(`${API_BASE_URL}/predictions/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!res.ok) throw new Error('Apply failed');
      return await res.json();
    } catch (e) {
      return null;
    }
  }

  // --- Surplus Listings ---
  async getListings(status = 'all') {
    try {
      const res = await fetch(`${API_BASE_URL}/surplus?status=${status}`);
      if (!res.ok) throw new Error('Failed to fetch surplus');
      const json = await res.json();
      return json.data;
    } catch (e) {
      return null;
    }
  }

  async createListing(listingData) {
    try {
      const res = await fetch(`${API_BASE_URL}/surplus`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(listingData)
      });
      if (!res.ok) throw new Error('Create listing failed');
      const json = await res.json();
      return json.data;
    } catch (e) {
      return null;
    }
  }

  // --- Matches ---
  async getMatches(listingId = null) {
    try {
      const url = listingId ? `${API_BASE_URL}/matches?listingId=${listingId}` : `${API_BASE_URL}/matches`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch matches');
      const json = await res.json();
      return json.data;
    } catch (e) {
      return null;
    }
  }

  async acceptMatch(orgId) {
    try {
      const res = await fetch(`${API_BASE_URL}/matches/accept`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orgId })
      });
      if (!res.ok) throw new Error('Accept match failed');
      return await res.json();
    } catch (e) {
      return null;
    }
  }

  // --- Routes & Courier ---
  async getActiveRoute() {
    try {
      const res = await fetch(`${API_BASE_URL}/routes/active`);
      if (!res.ok) throw new Error('Failed to fetch route');
      const json = await res.json();
      return json.data;
    } catch (e) {
      return null;
    }
  }

  async updateRouteStep(stepNumber) {
    try {
      const res = await fetch(`${API_BASE_URL}/routes/step`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stepNumber })
      });
      if (!res.ok) throw new Error('Update route step failed');
      return await res.json();
    } catch (e) {
      return null;
    }
  }

  // --- Impact & Analytics ---
  async getImpactMetrics() {
    try {
      const res = await fetch(`${API_BASE_URL}/impact/metrics`);
      if (!res.ok) throw new Error('Failed to fetch metrics');
      const json = await res.json();
      return json.data;
    } catch (e) {
      return null;
    }
  }

  async getImpactReport() {
    try {
      const res = await fetch(`${API_BASE_URL}/impact/report`);
      if (!res.ok) throw new Error('Failed to fetch report');
      const json = await res.json();
      return json.data;
    } catch (e) {
      return null;
    }
  }
}

export const api = new ApiService();
