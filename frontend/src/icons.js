// NourishAI Rounded Line Icons System (SVG)
// Designed with stroke-linecap="round", stroke-linejoin="round", and stroke-width="1.8"

export const icons = {
  // NourishAI Logo Icon (Leaf cradling a food bowl)
  logo: (size = 32, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" class="${className}" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="10" fill="#153E2B"/>
      <!-- Food Bowl Base -->
      <path d="M10 21C10 25.4183 13.5817 29 18 29C22.4183 29 26 25.4183 26 21H10Z" fill="#10B981" fill-opacity="0.25" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 21H28" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
      <!-- Sprouting Organic Leaf -->
      <path d="M18 19C18 14 21 9 26 9C26 14 22 17 18 19Z" fill="#34D399" stroke="#E6FDF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 19C18 15 15 11 10 11C10 15 14 18 18 19Z" fill="#F97316" fill-opacity="0.85" stroke="#FFEDD5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 19V11" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `,

  // Meals / Food Bowl
  meal: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 13c0 4.418 3.582 8 8 8h2c4.418 0 8-3.582 8-8H3z"/>
      <path d="M2 13h20"/>
      <path d="M12 4v4"/>
      <path d="M7 6c.5 1 1 2 1 3"/>
      <path d="M17 6c-.5 1-1 2-1 3"/>
    </svg>
  `,

  // Food Waste Avoided / Leaf / Recycle
  leaf: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 20A7 7 0 0 1 4 13a8 8 0 0 1 8-8 7 7 0 0 1 7 7 8 8 0 0 1-8 8z"/>
      <path d="M11 20V9"/>
      <path d="M11 14l4-3"/>
    </svg>
  `,

  // Recycle
  recycle: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/>
      <path d="M11 19h8.2a1.8 1.8 0 0 0 1.55-.9 1.8 1.8 0 0 0 0-1.8L17.5 11"/>
      <path d="M11 4.5h2a1.8 1.8 0 0 1 1.55.9l4.5 7.6"/>
      <path d="m5 16-2 3 3.5.5"/>
      <path d="m14 16 3 3-1 3"/>
      <path d="M9 7 7 4l-1 3"/>
    </svg>
  `,

  // People / Users supported
  users: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  `,

  // Money saved / Wallet / Rupee
  wallet: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="15" x="2" y="5" rx="3"/>
      <path d="M2 10h20"/>
      <circle cx="17" cy="14" r="1.5" fill="currentColor"/>
    </svg>
  `,

  // CO2 / Environmental
  co2: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 15H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/>
      <path d="M12 7a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0V9a2 2 0 0 1 2-2z"/>
      <path d="M18 13a1.5 1.5 0 0 1 3 0c0 1-1.5 2-1.5 2H21"/>
    </svg>
  `,

  // Clock / Time
  clock: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  `,

  // Location / Pin
  location: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z"/>
      <circle cx="12" cy="11" r="2.5"/>
    </svg>
  `,

  // AI / Sparkle
  ai: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/>
      <path d="M5 3v4"/>
      <path d="M3 5h4"/>
      <path d="M19 17v4"/>
      <path d="M17 19h4"/>
    </svg>
  `,

  // Navigation Items
  overview: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="7" height="9" rx="2"/>
      <rect x="14" y="3" width="7" height="5" rx="2"/>
      <rect x="14" y="12" width="7" height="9" rx="2"/>
      <rect x="3" y="16" width="7" height="5" rx="2"/>
    </svg>
  `,

  prediction: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 3v18h18"/>
      <path d="m19 9-5 5-4-4-5 5"/>
      <circle cx="19" cy="9" r="2" fill="currentColor"/>
    </svg>
  `,

  surplus: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <path d="M12 22V12"/>
    </svg>
  `,

  matches: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="6" r="3"/>
      <path d="M15.4 8.6 8.6 15.4"/>
      <path d="M10 5h6v6"/>
    </svg>
  `,

  routes: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="19" r="3"/>
      <circle cx="18" cy="5" r="3"/>
      <path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H12"/>
    </svg>
  `,

  reports: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  `,

  settings: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  `,

  // UI Utilities
  search: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  `,

  bell: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  `,

  help: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  `,

  plus: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,

  check: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  `,

  close: (size = 20, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `,

  chevronRight: (size = 18, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  `,

  trendUp: (size = 16, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  `,

  trendDown: (size = 16, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
      <polyline points="17 18 23 18 23 12"/>
    </svg>
  `,

  sparkle: (size = 16, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/>
    </svg>
  `,

  download: (size = 18, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  `,

  share: (size = 18, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  `,

  filter: (size = 18, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  `,

  phone: (size = 18, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  `,

  navigation: (size = 18, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
    </svg>
  `,

  send: (size = 18, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  `,

  star: (size = 14, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1" class="${className}">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  info: (size = 18, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  `,

  alert: (size = 18, className = "") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="${className}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  `
};
