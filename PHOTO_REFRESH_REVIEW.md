# Chantae Sierra photo refresh — review branch

Status: **NOT DEPLOYED / images not yet committed**.

Approved selections:
- Homepage hero: contact-sheet photo #4 (original `001_photo-30.jpg`) -> `frontend/public/images/chantae/hero.jpg`
- Story: contact-sheet photo #17 -> `frontend/public/images/chantae/story.jpg`
- Portfolio: all other 18 images, ascending contact-sheet order -> `frontend/public/images/chantae/portfolio-01.jpg` through `portfolio-18.jpg`

Source code changes, after all assets are added:
- `frontend/src/components/Hero.jsx`: set `HERO_IMG` to `/images/chantae/hero.jpg`.
- `frontend/src/components/About.jsx`: set `ABOUT_IMG` to `/images/chantae/story.jpg`.
- `frontend/src/content.js`: replace four entries in `CONTENT.gallery` with 18 local paths.
- Do not edit `Gallery.jsx`, which already handles any gallery length.

The user-approved downloadable file `chantae_photo_update_REVIEW_ONLY.zip` includes all 20 images, a manifest, a preview, and `apply_chantae_photos.py` which makes those code changes after images are copied.

Before merging: upload all 20 images, run the script from repository root, verify an npm build, and inspect Vercel preview. Do **not** merge until completed; leaving main unchanged is deliberate.
