/**
 * Databricks Official Corporate Color Palette
 * 
 * Based on official Databricks brand guidelines:
 * - Innovation Orange, Dark Navy, Warm Gray, and True White are the primary corporate colors
 * - Navy, gray, and white are recommended for large background use
 * - Innovation Orange is used for bright, vibrant accents and pops of color
 * 
 * Use these colors consistently across all applications and visualizations.
 */

// Convert hex to HSL for CSS custom properties
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Official Databricks Corporate Colors
export const DATABRICKS_COLORS = {
  // Primary Corporate Colors (Official Brand Guidelines)
  corporate: {
    innovationOrange: '#FF5F46',  // Primary accent color - for bright, vibrant accents
    darkNavy: '#1B3139',          // Primary dark color - for backgrounds and text
    warmGray: '#A0ACBE',          // Primary neutral - for backgrounds and secondary text
    trueWhite: '#FFFFFF',         // Primary light - for backgrounds and contrast
  },

  // Extended Brand Palette (Supporting Colors)
  extended: {
    // Teal family
    teal: '#618794',
    tealDark: '#143D4A',
    tealLight: '#70C4AB',
    
    // Orange family (variations of Innovation Orange)
    orangeLight: '#FF9E94',
    orangeDark: '#BD2B26',
    
    // Yellow family
    yellow: '#FCBA33',
    yellowLight: '#FFCC66',
    yellowDark: '#BD802B',
    
    // Green family
    green: '#42BA91',
    greenLight: '#9ED6C4',
    greenDark: '#00875C',
    
    // Burgundy/Red family
    burgundy: '#AB4057',
    burgundyLight: '#BF7080',
    burgundyDark: '#4A121A',
    
    // Additional neutrals
    grayMedium: '#C4CCD6',
    slateDark: '#1B5162',
    
    // Extended palette colors
    coral: '#FF9E94',
    pink: '#FABFBA',
    peach: '#FFDB96',
    mint: '#70C4AB',
    sage: '#9ED6C4',
    rose: '#BF7080',
    mauve: '#D69EA8',
    crimson: '#801C17',
    brown: '#7D5319',
    forest: '#095A35',
    wine: '#4A121A',
    scarlet: '#FF3621',
    gold: '#FFAB00',
    emerald: '#00875C',
    jade: '#00A972',
    maroon: '#730D21',
    ruby: '#98102A',
  }
};

// Semantic Color Mapping (Based on Official Brand Guidelines)
export const SEMANTIC_COLORS = {
  // Primary Brand Colors
  primary: DATABRICKS_COLORS.corporate.innovationOrange,  // Innovation Orange for primary actions
  secondary: DATABRICKS_COLORS.corporate.warmGray,        // Warm Gray for secondary elements
  accent: DATABRICKS_COLORS.corporate.innovationOrange,   // Innovation Orange for accents
  
  // Background Colors (Navy, Gray, White for large backgrounds)
  background: DATABRICKS_COLORS.corporate.trueWhite,      // True White for main backgrounds
  backgroundDark: DATABRICKS_COLORS.corporate.darkNavy,   // Dark Navy for dark backgrounds
  backgroundNeutral: DATABRICKS_COLORS.corporate.warmGray, // Warm Gray for neutral backgrounds
  surface: '#F8F9FA',                                     // Light surface color
  
  // Text Colors
  textPrimary: DATABRICKS_COLORS.corporate.darkNavy,      // Dark Navy for primary text
  textSecondary: DATABRICKS_COLORS.corporate.warmGray,    // Warm Gray for secondary text
  textOnDark: DATABRICKS_COLORS.corporate.trueWhite,      // True White on dark backgrounds
  textOnLight: DATABRICKS_COLORS.corporate.darkNavy,      // Dark Navy on light backgrounds
  textAccent: DATABRICKS_COLORS.corporate.innovationOrange, // Innovation Orange for accent text
  
  // Status Colors (using extended palette for semantic meaning)
  success: DATABRICKS_COLORS.extended.green,              // Green for success states
  warning: DATABRICKS_COLORS.extended.yellow,             // Yellow for warning states
  error: DATABRICKS_COLORS.corporate.innovationOrange,    // Innovation Orange for errors
  info: DATABRICKS_COLORS.extended.teal,                  // Teal for informational states
};

// Chart Color Palettes (Prioritizing Official Brand Colors)
export const CHART_COLORS = {
  // Primary chart palette (starts with official corporate colors)
  primary: [
    DATABRICKS_COLORS.corporate.innovationOrange,  // Innovation Orange first
    DATABRICKS_COLORS.corporate.darkNavy,          // Dark Navy second
    DATABRICKS_COLORS.extended.teal,               // Teal third
    DATABRICKS_COLORS.extended.green,              // Green fourth
    DATABRICKS_COLORS.extended.yellow,             // Yellow fifth
  ],
  
  // Extended palette for complex visualizations
  extended: [
    DATABRICKS_COLORS.corporate.innovationOrange,  // Start with corporate colors
    DATABRICKS_COLORS.corporate.darkNavy,
    DATABRICKS_COLORS.extended.teal,
    DATABRICKS_COLORS.extended.green,
    DATABRICKS_COLORS.extended.yellow,
    DATABRICKS_COLORS.extended.burgundy,
    DATABRICKS_COLORS.extended.mint,
    DATABRICKS_COLORS.extended.coral,
    DATABRICKS_COLORS.extended.peach,
    DATABRICKS_COLORS.extended.sage,
    DATABRICKS_COLORS.extended.rose,
    DATABRICKS_COLORS.extended.gold,
  ],
  
  // Sequential palette (for heatmaps, gradients) - Innovation Orange based
  sequential: {
    orange: [
      '#FFF5F3',                                   // Lightest
      '#FFE5E0',
      '#FFBFB3',
      DATABRICKS_COLORS.extended.orangeLight,      // #FF9E94
      DATABRICKS_COLORS.corporate.innovationOrange, // #FF5F46
      DATABRICKS_COLORS.extended.orangeDark,       // #BD2B26
      '#8A1F1A',
      '#571413',                                   // Darkest
    ],
    navy: [
      '#F0F1F2',                                   // Lightest
      '#D4D7DA',
      '#A8AEB4',
      DATABRICKS_COLORS.corporate.warmGray,        // #A0ACBE
      '#6B7A87',
      '#4A5A67',
      DATABRICKS_COLORS.corporate.darkNavy,        // #1B3139
      '#0F1D22',                                   // Darkest
    ],
  },
  
  // Diverging palette (for showing positive/negative values)
  diverging: [
    DATABRICKS_COLORS.extended.orangeDark,         // Negative extreme
    DATABRICKS_COLORS.corporate.innovationOrange,  // Negative
    DATABRICKS_COLORS.extended.orangeLight,        // Negative light
    DATABRICKS_COLORS.corporate.trueWhite,         // Neutral
    DATABRICKS_COLORS.extended.tealLight,          // Positive light
    DATABRICKS_COLORS.extended.teal,               // Positive
    DATABRICKS_COLORS.extended.tealDark,           // Positive extreme
  ],
};

// Tailwind CSS Configuration (Prioritizing Official Brand Colors)
export const TAILWIND_COLORS = {
  // Convert Databricks colors to Tailwind format
  databricks: {
    // Official Corporate Colors
    'innovation-orange': DATABRICKS_COLORS.corporate.innovationOrange,
    'dark-navy': DATABRICKS_COLORS.corporate.darkNavy,
    'warm-gray': DATABRICKS_COLORS.corporate.warmGray,
    'true-white': DATABRICKS_COLORS.corporate.trueWhite,
    
    // Extended Brand Colors
    'teal': DATABRICKS_COLORS.extended.teal,
    'teal-dark': DATABRICKS_COLORS.extended.tealDark,
    'teal-light': DATABRICKS_COLORS.extended.tealLight,
    'orange-light': DATABRICKS_COLORS.extended.orangeLight,
    'orange-dark': DATABRICKS_COLORS.extended.orangeDark,
    'yellow': DATABRICKS_COLORS.extended.yellow,
    'yellow-light': DATABRICKS_COLORS.extended.yellowLight,
    'yellow-dark': DATABRICKS_COLORS.extended.yellowDark,
    'green': DATABRICKS_COLORS.extended.green,
    'green-light': DATABRICKS_COLORS.extended.greenLight,
    'green-dark': DATABRICKS_COLORS.extended.greenDark,
    'burgundy': DATABRICKS_COLORS.extended.burgundy,
    'burgundy-light': DATABRICKS_COLORS.extended.burgundyLight,
    'burgundy-dark': DATABRICKS_COLORS.extended.burgundyDark,
    
    // Additional neutrals
    'gray-medium': DATABRICKS_COLORS.extended.grayMedium,
    'slate-dark': DATABRICKS_COLORS.extended.slateDark,
    
    // Semantic colors (using official brand guidelines)
    'primary': DATABRICKS_COLORS.corporate.innovationOrange,
    'secondary': DATABRICKS_COLORS.corporate.warmGray,
    'accent': DATABRICKS_COLORS.corporate.innovationOrange,
    'success': DATABRICKS_COLORS.extended.green,
    'warning': DATABRICKS_COLORS.extended.yellow,
    'error': DATABRICKS_COLORS.corporate.innovationOrange,
    'info': DATABRICKS_COLORS.extended.teal,
  }
};

// CSS Custom Properties (HSL format for better manipulation)
export const CSS_VARIABLES = Object.entries(DATABRICKS_COLORS).reduce((acc, [category, colors]) => {
  Object.entries(colors).forEach(([name, hex]) => {
    const hsl = hexToHsl(hex);
    acc[`--databricks-${category}-${name}`] = `${hsl.h} ${hsl.s}% ${hsl.l}%`;
    acc[`--databricks-${category}-${name}-hex`] = hex;
  });
  return acc;
}, {});

// Add semantic colors
Object.entries(SEMANTIC_COLORS).forEach(([name, hex]) => {
  const hsl = hexToHsl(hex);
  CSS_VARIABLES[`--databricks-${name}`] = `${hsl.h} ${hsl.s}% ${hsl.l}%`;
  CSS_VARIABLES[`--databricks-${name}-hex`] = hex;
});

export default DATABRICKS_COLORS;
