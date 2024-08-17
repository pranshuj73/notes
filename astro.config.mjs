import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Notes',
    social: {
      github: 'https://github.com/pranshuj73/notes'
    },
    sidebar: [
			{
				label: '[home] Home',
				link: '/'
			},
			{
				label: '[frontend] Frontend',
				autogenerate: { directory: 'frontend', collapsed: true }
			},
			{
				label: '[backend] Backend',
				autogenerate: { directory: 'backend', collapsed: true }
			},
			{
				label: '[devops] Devops',
				autogenerate: { directory: 'devops', collapsed: true }
			}
		],
		components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
    },
    customCss: [
			'@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
			'./src/styles/tailwind.css',
			'./src/styles/global.css',
		],
		expressiveCode: {
      themes: ['github-dark']
    },
		pagination: false,
    lastUpdated: true,

  }),
	tailwind({
		// Disable the default base styles:
		applyBaseStyles: false,
	}),
	]
});