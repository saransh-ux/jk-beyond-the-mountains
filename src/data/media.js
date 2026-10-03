/**
 * Centralized Media Assets Registry
 * 
 * DESIGN & AUTHENTICITY NOTE:
 * All media URLs here use high-resolution, authentic landscape, craft, and documentary
 * photography. Each asset includes replacement notes so local curators can swap 
 * placeholder URLs with community archives, high-res documentary stills, or video files.
 */

export const mediaAssets = {
  // Hero background: Panoramic view of snow-capped mountains and tranquil waters
  heroBg: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=75&w=1200&auto=format&fit=crop", // Kashmir mountain reflection (optimized for high-DPI desktop & cache sharing)
  heroBgMobile: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=75&w=800&auto=format&fit=crop", // Mobile-optimized resolution
  heroPoster: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=75&w=1200&auto=format&fit=crop", // Closing background texture

  // Introduction section image
  introImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=75&w=800&auto=format&fit=crop", // Valley mist and pine forest (optimized card dimensions)

  // Jammu visual story
  jammuMain: "/images/bahu fort-jammu.jpg", // Bahu Fort / Tawi landscape mood
  jammuSecondary: "/images/dogra architecture-jammu.jpg", // Heritage archways and Dogra architecture

  // Kashmir visual story - unified with heroBg to leverage browser HTTP cache
  kashmirMain: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=75&w=1200&auto=format&fit=crop", // Dal Lake Shikara (shares cache with heroBg)
  kashmirSecondary: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop", // Pine mountain forest
  kaniShawls: "/images/kani shawls-kashmir.webp", // Kani Shawls craftsmanship

  // Sacred J&K
  baweWaliMata: "/images/bawe wali maa-jammu.jpg", // Bahu Fort stone walls & Bawe Wali Mata shrine
  vaishnoDevi: "/images/vaishno devi.jpg", // Holy cave shrine of Shri Mata Vaishno Devi in Trikuta Mountains
  shankaracharyaTemple: "/images/Shri Shankaracharya Temple.jpg", // Hilltop ancient stone temple on Gopadri Hill overlooking Srinagar
  hazratbalShrine: "/images/Hazratbal Shrine.jpg", // White marble shrine on western bank of Dal Lake with snow-capped peaks


  // Timeline Rulers Stills / Archival Placeholders
  rulers: {
    gulabSingh: "/images/maharaja gulab singh.jpg",
    ranbirSingh: "/images/maharaja ranbir singh.jpg",
    pratapSingh: "/images/maharaja pratap singh.jpg",
    hariSingh: "/images/maharaja hari singh.jpg",
    newChapter: "/images/people and memory.jpg"
  },

  // Categories 01-07
  categories: {
    culture: "/images/culture.jpg",
    traditions: "/images/tradition.jpg",
    people: "/images/people.jpg",
    food: "/images/food.jpg",
    languages: "/images/languages.jpg",
    stories: "/images/stories.jpg",
    places: "/images/places.jpg"
  },

  // People Profiles & Cultural Luminaries
  peopleProfiles: {
    "ghulam-nabi-dar": "/images/ghulam_nabi_dar.webp",
    "ghulam-rasool-khan": "/images/ghulam_rasool_khan.webp",
    "sopori-lineage": "/images/sopori_santoor_legacy.webp",
    "romalo-ram": "/images/romalo_ram_dogri.webp",
    "rehman-rahi": "/images/rehman_rahi_poet.webp",
    "mehjoor": "/images/mehjoor_poet_kashmir.webp"
  },

  // Food & Memory
  foodDishes: {
    kaladi: "/images/kaladi cheese-jammu.webp", // Traditional pan-fried cheese
    kahwa: "/images/kashmiri-kahwa.webp", // Saffron & cardamom tea in copper samovar
    ambal: "/images/dogri-ambal.webp", // Authentic Dogri sweet-sour pumpkin & Dham feast
    ristaGustaba: "/images/rista-gustaba.webp" // Royal Kashmiri Wazwan course (Rista & Gustaba)
  },

  // Documentary Video Thumbnails
  videos: [
    {
      id: "vid-1",
      title: "Morning Light on Dal Lake",
      subtitle: "A silent journey across frozen waters before sunrise.",
      duration: "04:12",
      thumbnail: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-misty-mountain-range-and-forest-41544-large.mp4"
    },
    {
      id: "vid-2",
      title: "The Rhythms of Tawi River",
      subtitle: "Everyday life, morning rituals, and reflections along Jammu's lifeline.",
      duration: "05:45",
      thumbnail: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-river-flowing-through-a-mountain-valley-41547-large.mp4"
    },
    {
      id: "vid-3",
      title: "Hands That Remember: Papier-Mâché Artisans",
      subtitle: "Master craftsmen detailing intricate floral motifs in Old Srinagar.",
      duration: "06:20",
      thumbnail: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-working-on-a-pottery-wheel-41485-large.mp4"
    },
    {
      id: "vid-4",
      title: "The Dogra Kitchen: Stories Around Fire",
      subtitle: "Preparing traditional Kaladi cheese over woodfire in Udhampur.",
      duration: "03:50",
      thumbnail: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-steam-rising-from-a-hot-cup-of-tea-41551-large.mp4"
    }
  ]
};
