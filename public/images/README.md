# Media & Photography Replacement Guide

This folder holds authentic local photography and video files for **J&K — Beyond the Mountains**.

## How to Add Your Local Photos:

1. Copy your photos into this folder (`public/images/`).
   - Example file names:
     - `hero-bg.jpg`
     - `intro-valley.jpg`
     - `bahu-fort.jpg`
     - `dal-lake.jpg`
     - `shankaracharya.jpg`
     - `hazratbal.jpg`
     - `vaishno-devi.jpg`
     - `kaladi.jpg`

2. Open [`src/data/media.js`](file:///c:/Users/HP/Desktop/J&K-Beyond%20the%20mountains/src/data/media.js).

3. Replace the placeholder URL with your local image path (starting with `/images/`):

```js
export const mediaAssets = {
  heroBg: "/images/hero-bg.jpg",
  introImage: "/images/intro-valley.jpg",

  jammuMain: "/images/bahu-fort.jpg",
  kashmirMain: "/images/dal-lake.jpg",

  baweWaliMata: "/images/bahu-fort.jpg",
  vaishnoDevi: "/images/vaishno-devi.jpg",
  shankaracharyaTemple: "/images/shankaracharya.jpg",
  hazratbalShrine: "/images/hazratbal.jpg",
  // ...
};
```

4. Save the file. Vite will automatically reload the webpage with your real photographs!
