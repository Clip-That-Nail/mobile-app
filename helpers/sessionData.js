export const outcomes = {
  checked: [
    { key: 'not-selected', text: 'Select positive outcome' },
    { key: 'little-clip', text: 'Little clip' },
    { key: 'medium-clip', text: 'Medium clip' },
    { key: 'strong-clip', text: 'Strong clip' },
  ],
  bleeded: [
    { key: 'not-selected', text: 'Select bleeding outcome' },
    { key: 'little-bleed', text: 'Little bleed' },
    { key: 'medium-bleed', text: 'Medium bleed' },
    { key: 'strong-bleed', text: 'Strong bleed' },
  ],
  warning: [
    { key: 'not-selected', text: 'Select warning outcome' },
    { key: 'visible-quick', text: 'Visible quick' },
    { key: 'not-enough-nail', text: 'Not enough nail to clip' },
  ],
  disabled: [
    { key: 'skipped', text: 'SKIPPED' },
  ],
  unchecked: [
    { key: 'not-selected', text: 'Select default outcome' },
    { key: 'not-clipped', text: 'Not clipped' },
  ],
};

export const behaviours = [
  { key: 'not-selected', text: 'Select future behaviour' },
  { key: 'allow-to-cut', text: 'Allow to cut in next session' },
  { key: 'skip-1-session', text: 'Skip next session' },
  { key: 'skip-2-session', text: 'Skip next 2 sessions' },
  { key: 'skip-3-session', text: 'Skip next 3 sessions' },
];