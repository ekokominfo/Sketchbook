# Singapore Sketchbook

**[Live preview](https://ekokominfo.github.io/Sketchbook/)**

GitHub Actions automatically builds and deploys updates pushed to main.

Local React + Vite integration of `MengToSketchbookLandingPage` from the supplied ThreeUI source. The React host is lazy-loaded; the full HTML document is served separately in the original sandboxed iframe.

## Run

```sh
pnpm install
pnpm dev
pnpm verify
pnpm build
```

The configured typography and ink props are in `src/Scene.tsx`. The standalone document is `public/landing-pages/meng-to-sketchbook.html`.

## Source provenance

The fetched HTML and pasted HTML both have SHA-256 `518737cb cbd82508 13613bca 7c0bd069 59b91a84 d905de2b 0f5ec8c3 2a5f9fcc` (spaces for readability), different from the originally advertised `e0330548…`. The user authorized continuing with the available source. `reference/meng-to-sketchbook.remote.html` preserves that input unchanged. The served copy changes only remote image/font URLs to local asset paths; authored styling, content and interaction code remain intact.

All 17 assets match the supplied SHA-256 values. Five registered text files are retained unchanged at their original paths. The local component isolates the registered Sketchbook function from imports for unrelated scenes. `pnpm verify` checks the assets and registered files for drift and rejects remote render-asset URLs.

Original social and biography links with `href="#"` are preserved. The preview is published with GitHub Pages.
