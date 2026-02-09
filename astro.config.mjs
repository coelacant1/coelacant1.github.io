// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://coelacant1.github.io',
  integrations: [
    starlight({
      title: "Coela Can't! Docs",
      favicon: '/favicon.svg',
      customCss: ['./src/styles/starlight-custom.css'],
      // Disable light mode - dark only
      components: {
        ThemeSelect: './src/components/EmptyThemeSelect.astro',
        Header: './src/components/StarlightHeader.astro',
      },
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/YwaWnhJ' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/coelacant1' },
        { icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/coelacant1.bsky.social' },
      ],
      sidebar: [
        {
          label: '← Back to Main Site',
          link: '/',
          attrs: { class: 'home-link' },
        },
        {
          label: 'Getting Started',
          items: [
            { label: 'Welcome', slug: 'welcome' },
          ],
        },
        {
          label: 'Protocontroller',
          collapsed: true,
          items: [
            {
              label: 'V1.1',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'guides/protocontroller-v1' },
                { label: 'Information', slug: 'guides/protocontroller-v1/information' },
                { label: 'Schematic', slug: 'guides/protocontroller-v1/schematic' },
                { label: 'Board Layout', slug: 'guides/protocontroller-v1/board-layout' },
                { label: 'Wiring', slug: 'guides/protocontroller-v1/wiring' },
              ],
            },
            {
              label: 'V2',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'guides/protocontroller-v2' },
                { label: 'Information', slug: 'guides/protocontroller-v2/information' },
                { label: 'Schematic', slug: 'guides/protocontroller-v2/schematic' },
                { label: 'Board Layout', slug: 'guides/protocontroller-v2/board-layout' },
                { label: 'Wiring', slug: 'guides/protocontroller-v2/wiring' },
              ],
            },
          ],
        },
        {
          label: 'Kits',
          collapsed: true,
          items: [
            {
              label: 'HUB75 Kit',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'guides/hub75' },
                { label: 'Wiring', slug: 'guides/hub75/wiring' },
                { label: 'LED Panels', slug: 'guides/hub75/led-panels' },
                { label: 'SmartLED Shield', slug: 'guides/hub75/smartled-shield' },
                { label: 'Sensors', slug: 'guides/hub75/sensors' },
              ],
            },
            {
              label: 'WS35 Kit',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'guides/ws35' },
                { label: 'Wiring', slug: 'guides/ws35/wiring' },
                { label: 'LED Panels', slug: 'guides/ws35/led-panels' },
                { label: 'Sensors', slug: 'guides/ws35/sensors' },
              ],
            },
          ],
        },
        {
          label: 'Software',
          items: [
            { label: 'Overview', slug: 'software/overview' },
            {
              label: 'ProtoTracer',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'software/prototracer' },
                { label: 'Getting Started', slug: 'software/prototracer/getting-started' },
                { label: 'Compiling & Uploading', slug: 'software/prototracer/compiling' },
                { label: 'Voice Calibration', slug: 'software/prototracer/voice-calibration' },
                { label: 'Firmware Uploader', slug: 'software/prototracer/firmware-uploader' },
                { label: 'Customization', slug: 'software/prototracer/customization' },
              ],
            },
            { label: 'PTX Engine (WIP)', slug: 'software/ptx-engine' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Protogen Electronics', slug: 'resources/electronics' },
            { label: 'ProtoTracer Helpers', slug: 'resources/prototracer-helpers' },
            { label: '3D Print Files', slug: 'resources/3d-prints' },
          ],
        },
        {
          label: 'Files & Downloads',
          autogenerate: { directory: 'files' },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});