# Coela Can't! Website

My personal website built with [Astro](https://astro.build), [Starlight](https://starlight.astro.build), and [Tailwind CSS](https://tailwindcss.com).

**Live Site:** [coelacant1.github.io](https://coelacant1.github.io)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── InteractiveLogo.astro  # Animated dragon
│   ├── ShaderBackground.astro # WebGL hexagon shader
│   ├── SiteHeader.astro       # Main site navigation
│   ├── StarlightHeader.astro  # Docs navigation
│   └── ...
├── content/docs/      # Starlight documentation pages
├── layouts/           # Page layouts
├── pages/             # Main site pages
│   ├── index.astro    # Home/link tree
│   ├── art.astro      # Art gallery
│   ├── videos.astro   # Video gallery
│   ├── music.astro    # Music player
│   ├── commissions.astro
│   ├── protogens.astro
│   └── about.astro
└── styles/            # Global and custom styles
public/
├── images/
│   ├── art/           # Artwork images
│   ├── stickers/      # Sticker images
│   ├── animations/    # Animated GIFs
│   └── logo/          # Interactive logo assets
└── favicon.svg
```

## Adding Content
(Notes to self)

### Art Gallery
Add images to the appropriate folder in `public/images/`:
- `art/` - Full body/half body artwork (named `art-1.jpg`, `art-2.jpg`, etc.)
- `stickers/` - Sticker artwork
- `animations/` - Animated GIFs

Update the arrays in `src/pages/art.astro` with highest numbers first (newest at top).

### Videos
Update the `musicVideos` and `protogenVideos` arrays in `src/pages/videos.astro` with YouTube video IDs.

### Documentation
Add markdown files to `src/content/docs/` in the appropriate subdirectory:
- `guides/` - Protogen and hardware guides
- `software/` - Software documentation
- `resources/` - Helpful resources
- `files/` - Downloads

Update `astro.config.mjs` sidebar configuration to include new pages.

**Important notes:**
- For index pages using Starlight components (`CardGrid`, `LinkCard`), use `.mdx` extension
- Add a `slug` field in frontmatter matching the sidebar config (e.g., `slug: guides/protocontroller-v1`)
- Import components after frontmatter: `import { LinkCard, CardGrid } from '@astrojs/starlight/components';`

### Firmware Uploader
The WebHID firmware uploader is at `/firmware-uploader`. Source: `src/pages/firmware-uploader.astro`. Only works in Chrome/Edge (WebHID requirement).

## Customization Notes

### Icons
All SVG icons are in `src/components/Icon.astro` as inline SVG strings. To add a new icon:
1. Find an SVG icon (24x24 viewBox works best)
2. Add to the `icons` object with a key name
3. Use with `<Icon name="youricon" />`

### Interactive Logo
The animated dragon on the homepage:
- Component: `src/components/InteractiveLogo.astro`
- Assets: `public/images/logo/` (body, head, eyes, mouth frames)
- Tracks mouse movement and has random blinking/animations

### Shader Background
The hexagon WebGL shader:
- Component: `src/components/ShaderBackground.astro`
- Disable on specific pages by not including the component

### Starlight Overrides
Custom Starlight components in `astro.config.mjs`:
- `ThemeSelect` → `EmptyThemeSelect.astro` (forces dark mode only)
- `Header` → `StarlightHeader.astro` (custom header with home link)
- Custom CSS: `src/styles/starlight-custom.css`

### Image Organization
```
public/images/
├── art/          # Gallery artwork (art-1.jpg, art-2.jpg, etc.)
├── stickers/     # Sticker images
├── animations/   # Animated GIFs
├── logo/         # Interactive logo sprite assets
└── guides/       # Documentation images
    ├── hub75/    # HUB75 guide images (img-000.png, etc.)
    ├── ws35/     # WS35 guide images
    └── protocontroller-v2/
```

## Common Screw Ups

- **Sidebar slug errors**: Make sure the `slug` in frontmatter matches exactly what's in `astro.config.mjs`
- **Components in markdown**: Must use `.mdx` extension, not `.md`
- **Image paths in docs**: Use absolute paths from public (e.g., `/images/guides/hub75/img-000.png`)
- **Dev server cache**: If changes don't appear, try stopping dev server and deleting `.astro` folder

## Deployment

This site is configured for GitHub Pages. Push to the `main` branch and the site will automatically deploy via GitHub Actions.

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Starlight](https://starlight.astro.build) - Documentation theme
- [Tailwind CSS](https://tailwindcss.com) - Styling
- WebGL - Shader background effects
- GitHub Pages - Hosting

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
