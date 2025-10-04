GroovinFly Logo Kit
====================

This package includes all the optimized GroovinFly logo assets for use in the Next.js site and social media.

File placement for Next.js (/public folder)
--------------------------------------------

Favicons & App Icons (root of /public):
- favicon-16.png
- favicon-32.png
- icon-192.png
- icon-512.png
- apple-touch-icon-180.png   --> Rename to apple-touch-icon.png

Social sharing (root of /public):
- social-share-1200x630.png  --> Rename to social-share.png
   Used by OpenGraph/Twitter metadata for previews (1200x630).

Logos (optional, place under /public/brand/ for organization):
- gf-logo-1024.png
- gf-logo-512.png
- gf-logo-256.png
- gf-logo-128.png
- gf-logo-64.png
- gf-logo-32.png
- gf-logo-1024.webp
- gf-logo-512.webp
- gf-logo-256.webp

Usage Notes
-----------
- Use WebP versions on the site where supported for performance; PNG versions are fallback-safe.
- Favicons and app icons are referenced automatically by Next.js metadata config in app/layout.tsx.
- The social-share.png is already referenced in your generateMetadata() block.
- /brand/ logos can be imported into components or used in marketing pages and merch mockups.

Best Practices
--------------
- Prefer the transparent PNG/WebP logos on colored backgrounds.
- Use the social-share image for OpenGraph (FB/LinkedIn/Twitter previews).
- Keep all logo variants under version control so the design team and dev team are aligned.
