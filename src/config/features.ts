/**
 * Site feature toggles.
 *
 * Flip a value to `false` to hide a feature across the site:
 *  - it disappears from the navigation menus (SiteHeader / StarlightHeader)
 *  - its homepage quick-nav card is hidden
 *  - the corresponding page renders a "Coming soon" placeholder instead of its
 *    real content
 *  - inline links to it (e.g. on the About page) collapse to plain text
 *
 * Add new flags here as new togglable sections are introduced.
 */
export const features = {
  art: false,
  commissions: false,
  shaderBackground: false,
  patreon: false,
  telegramArt: false,
} as const;

export type FeatureKey = keyof typeof features;

export function isEnabled(key: FeatureKey): boolean {
  return features[key];
}
