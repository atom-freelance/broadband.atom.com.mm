# Nuxt 3 Minimal Starter

## Design Files

- [Website Design](https://www.figma.com/file/ZOOFyH5hkciczLza5xHHHZ/ATOM?type=design&t=uncwXKeWrAnmSmuO-6)
- [Design System](https://www.figma.com/file/MsOv9MSDKNgEuuozAUmQ68/ATOM-Design-System?type=design&t=uncwXKeWrAnmSmuO-6)

---

## Tech Stack

- [Nuxt3](https://nuxt.com)
  - VueJS meta framework
  - NOTE: Nuxt3 auto imports all the `components` and `exports` as long as you follow their convention.
- [TailwindCss](https://nuxt.com/modules/tailwindcss)
  - Utilities based CSS library
- [DaisyUI](https://daisyui.com/)
  - Tailwind base CSS UI library
  - Most components are from Daisy while some components are custom components.
- [VueUse](https://nuxt.com/modules/vueuse)
  - Official VueJS utilities composable hooks
- [NuxtI18n](https://nuxt.com/modules/i18n)
  - Localization
- [SwiperJS](https://swiperjs.com/vue)
  - Carousel Library
- [Flag Icons](https://www.npmjs.com/package/flag-icons)
  - Countries Flag Icons CSS library

---

## Project Folders Brief

If you want to know more about Nuxt3 folder structure please read about it [nuxt>docs>guid>directory_structure](https://nuxt.com/docs/guide).

- `utils` folder have all the constants and some helper functions.
- `composables` folder have some reusable hooks.
- `components` folder have common components and page specific components.
- `i18n` folder have localizations.
- `layouts` folder have global layouts.
- `public` folder have static assets.
- `pages` folder have page specific codes.

---

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

---

## Development Server

Start the development server on `http://localhost:4000`:

```bash
npm run dev
```

---

## Production (Static Site)

Build the application for production:

```bash
npm run generate
```

Preview production build:

```bash
npm run preview
```

You can deploy by uploading `dist` folder to hosting services. (eg. `AWS S3`)

---

## Production (Server Side Rendering)

Build the application for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
