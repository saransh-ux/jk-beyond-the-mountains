import { mediaAssets } from './media';

export const siteMetadata = {
  title: "J&K — Beyond the Mountains",
  tagline: "One Land. Many Stories.",
  purpose: "A personal, non-commercial digital cultural archive created to represent and preserve the identity, culture, traditions, heritage, people, stories, languages, food and memories of Jammu & Kashmir.",
  philosophy: "Beyond the mountains lies more than beautiful landscapes. There are people, languages, traditions, memories and generations of stories."
};

export const historyTimeline = [
  {
    year: "1846",
    title: "The Dogra Era Begins",
    ruler: "Maharaja Gulab Singh",
    period: "1846 – 1857",
    image: mediaAssets.rulers.gulabSingh,
    description: "Following the Treaty of Amritsar in 1846, Maharaja Gulab Singh consolidated distinct regions into the princely state of Jammu and Kashmir. Known for administrative order and military acumen, his reign marked the beginning of a unified state governance structure."
  },
  {
    year: "1857",
    title: "Patronage & Administration",
    ruler: "Maharaja Ranbir Singh",
    period: "1857 – 1885",
    image: mediaAssets.rulers.ranbirSingh,
    description: "A scholar and patron of arts, Maharaja Ranbir Singh established legal codification (Ranbir Penal Code), expanded educational initiatives, supported oriental learning, and improved communication routes connecting Jammu and Kashmir."
  },
  {
    year: "1885",
    title: "Modern Infrastructure",
    ruler: "Maharaja Pratap Singh",
    period: "1885 – 1925",
    image: mediaAssets.rulers.pratapSingh,
    description: "His reign saw major modern developments including the construction of the Jhelum Valley Road, the Banihal Cart Road, expansion of silk industry, introduction of western education, and initial hydro-electric power projects."
  },
  {
    year: "1925",
    title: "Social Reforms & Transition",
    ruler: "Maharaja Hari Singh",
    period: "1925 – 1947",
    image: mediaAssets.rulers.hariSingh,
    description: "A ruler who enacted progressive social legislation, making primary education compulsory, enacting laws against child marriage, opening state temples to all citizens regardless of caste, and signing the Instrument of Accession in 1947."
  },
  {
    year: "1947",
    title: "A New Chapter",
    ruler: "People & Memory",
    period: "1947 Onward",
    image: mediaAssets.rulers.newChapter,
    description: "The democratic transition shifted the state's path. While political eras changed, the enduring heartbeat of Jammu & Kashmir remained rooted in its communities, oral traditions, and shared cultural heritage."
  }
];

export const exploreCategories = [
  {
    id: "culture",
    number: "01",
    title: "CULTURE",
    tagline: "The communities, identities and ways of life that shape our land.",
    description: "Culture in Jammu & Kashmir is not singular—it is a tapestry of Dogra, Kashmiri, Pahari, Gujjar, Bakarwal, and Ladakhi roots. From traditional courtyard rituals to seasonal festivities, it forms our living core.",
    image: mediaAssets.categories.culture,
    details: "Explore the architectural styles of wood-and-mud traditional homes, communal gatherings, and seasonal celebrations that have defined local life for centuries."
  },
  {
    id: "traditions",
    number: "02",
    title: "TRADITIONS",
    tagline: "Practices passed from one generation to another.",
    description: "The craftsmanship of Pashmina spinning, Kani shawl weaving, paper-mâché, woodcarving, and Dogri metal craft are more than skills—they are family heirlooms passed through quiet practice.",
    image: mediaAssets.categories.traditions,
    details: "Discover how master artisans preserve techniques refined over hundreds of years, using natural dyes, hand looms, and traditional hand tools."
  },
  {
    id: "people",
    number: "03",
    title: "PEOPLE",
    tagline: "The people who carry culture forward every day.",
    description: "Behind every song, dish, and carpet is a human hand and a living voice. Our archive records the everyday custodians of J&K's identity.",
    image: mediaAssets.categories.people,
    details: "Read intimate portraits of elders, young revivalists, seasonal pastoralists, and local craftsmen keeping memory alive."
  },
  {
    id: "food",
    number: "04",
    title: "FOOD",
    tagline: "More than recipes. Food connected to memory, family and home.",
    description: "Food in Jammu & Kashmir is tied to geography and season. From Dogra Kaladi cooked on iron griddles to slow-simmered Kashmiri Kahwa brewed in copper Samovars, every meal holds a story.",
    image: mediaAssets.categories.food,
    details: "Learn about seasonal fermentation, wild herb foraging, traditional woodfire cooking, and the cultural etiquette of communal feasts."
  },
  {
    id: "languages",
    number: "05",
    title: "LANGUAGES",
    tagline: "Words, voices and dialects that tell our stories.",
    description: "Dogri, Kashmiri, Gojri, Pahari, Ladakhi, and Shina hold expressions that cannot be translated into any other tongue. They encapsulate our relationship with mountains, rain, and kinship.",
    image: mediaAssets.categories.languages,
    details: "Listen to spoken pronunciations, explore classical script roots, and archive rare idioms before they disappear from daily conversation."
  },
  {
    id: "stories",
    number: "06",
    title: "STORIES",
    tagline: "Folklore, memories and stories passed through generations.",
    description: "Tales told around winter hearths, ballads sung by folk bards (Bhaakhs and Ladishahs), and personal memories recorded before they fade from living memory.",
    image: mediaAssets.categories.stories,
    details: "Delve into ancient folklore, seasonal myths, river songs, and firsthand personal recollections of historical moments."
  },
  {
    id: "places",
    number: "07",
    title: "PLACES",
    tagline: "Places that hold history, meaning and memory.",
    description: "Ancient stone shrines in Jammu's hills, quiet spring heads (Naags) in Kashmir, fortresses overlooking river bends, and mountain passes traveled for centuries.",
    image: mediaAssets.categories.places,
    details: "Map out historical landmarks, sacred groves, ancient caravan stops, and heritage neighborhoods preserved in architectural stone and wood."
  }
];

export const regionStories = {
  jammu: {
    title: "JAMMU",
    subtitle: "Land of Heritage, Faith, and River Rhythms",
    text: "Jammu is a land of heritage, faith, mountains and generations of stories. From the traditions of the Dogra community to the rhythms of everyday life along the Tawi River, its identity lives in its people, fortress legends, and warm hospitality.",
    highlights: [
      "Dogra architecture & heritage fortress trails",
      "The sacred banks and history of the Tawi River",
      "Traditional Pahari & Dogri folk music (Bhaakh)",
      "Culinary heritage of Kaladi, Ambal & Rajma"
    ],
    image: mediaAssets.jammuMain,
    secondaryImage: mediaAssets.jammuSecondary
  },
  kashmir: {
    title: "KASHMIR",
    subtitle: "A Living Culture Beyond the Horizon",
    text: "Kashmir is more than the beauty seen in photographs. It is a living culture shaped by generations of people, rich literary traditions, intricate master craftsmanship, and timeless hospitality around the copper Samovar.",
    highlights: [
      "Historical water heritage of Dal Lake & Jhelum canals",
      "Master crafts: Kani Weaving, Papier-Mâché & Khatamband",
      "Classical Sufiyana Kalam & Ladishah oral satire",
      "Wazwan traditions & winter preservation techniques"
    ],
    image: mediaAssets.kashmirMain,
    secondaryImage: mediaAssets.kashmirSecondary
  }
};

export const sacredHeritage = {
  baweWaliMata: {
    id: "bawe-wali-mata",
    title: "Bawe Wali Mata",
    subtitle: "The Guardian Fort Overlooking the Tawi",
    quote: "More than a place of worship, it is a part of Jammu's memory.",
    description: "Located within the historic Bahu Fort built by Raja Bahu Lochan, the shrine of Kali (popularly Bawe Wali Mata) stands high above the Tawi River. For centuries, residents of Jammu have climbed these stone steps during Tuesdays, Sundays, and Navratris—not merely for ritual, but as an enduring pilgrimage of community connection.",
    culturalSignificance: "The temple complex connects ancient Dogra history with daily urban life. Families gather in the surrounding gardens (Bagh-e-Bahu) sharing home-cooked meals, reinforcing bonds across generations.",
    image: mediaAssets.baweWaliMata
  },
  vaishnoDevi: {
    id: "vaishno-devi",
    title: "Shri Mata Vaishno Devi",
    subtitle: "More Than a Journey",
    quote: "A path walked with devotion, where every step carries a quiet prayer.",
    description: "Nestled in the folds of the Trikuta Mountains in Katra, the holy cave shrine of Shri Mata Vaishno Devi represents one of the most revered spiritual journeys in the sub-continent. For generations, pilgrims from every walk of life have traversed the mountain trail, driven by deep faith and perseverance.",
    culturalSignificance: "The pilgrimage path is a shared human corridor. Local porters, pony drivers, temple priests, and pilgrims form a symbiotic community built on mutual respect and shared devotion across decades.",
    image: mediaAssets.vaishnoDevi
  },
  shankaracharyaTemple: {
    id: "shankaracharya-temple",
    title: "Shri Shankaracharya Temple",
    subtitle: "Ancient Hilltop Sanctuary Overlooking Srinagar",
    quote: "Standing high above Dal Lake, an enduring beacon of ancient spiritual thought.",
    description: "Perched atop Gopadri Hill (Shankaracharya Hill) at 1,100 feet above the valley floor in Srinagar, the stone shrine dedicated to Lord Shiva dates back over two millennia. Associated with the philosopher Adi Shankara who visited Kashmir in the 9th century, the temple offers panoramic views across Dal Lake and the snow peaks.",
    culturalSignificance: "Surmounting 243 stone steps, the shrine represents Kashmir's ancient Shaivite intellectual tradition and peaceful interfaith coexistence overlooking the city.",
    image: mediaAssets.shankaracharyaTemple
  },
  hazratbalShrine: {
    id: "hazratbal-shrine",
    title: "Hazratbal Shrine",
    subtitle: "The White Marble Sanctuary on Dal Lake",
    quote: "A quiet sanctuary of peace whose white dome reflects in the waters of Dal Lake.",
    description: "Situated on the western bank of Dal Lake in Srinagar, the Hazratbal Shrine (Dargah Sharif) is widely revered as Kashmir's holiest Muslim shrine. It houses the sacred relic Moi-e-Muqqadas (hair of Prophet Muhammad). The pristine white marble architecture surrounded by chinars creates an atmosphere of deep tranquility.",
    culturalSignificance: "Hazratbal serves as a spiritual anchor for the valley. During religious occasions and Friday prayers, thousands assemble along the tranquil lakefront in deep devotion.",
    image: mediaAssets.hazratbalShrine
  },
  futureSites: [
    {
      title: "Ancient Shrines & Mosques",
      description: "Historic places of spiritual refuge such as Shahdara Sharief in Rajouri, Khanqah-e-Moulah in Srinagar, and Jamia Masjid.",
      type: "Spiritual Heritage"
    },
    {
      title: "Gurudwaras & Monasteries",
      description: "Sacred spaces including Chatti Padshahi in Srinagar, Nangali Sahib in Poonch, and mountain gompas preserving sacred art.",
      type: "Cultural Diversity"
    },
    {
      title: "Sacred Springs & Naags",
      description: "Revered natural water springs like Verinag, Martand, and Sukrala Mata that have held spiritual significance across centuries.",
      type: "Natural Heritage"
    }
  ]
};

export const peopleProfiles = [
  {
    id: "ghulam-nabi-dar",
    category: "Traditional Craft & Visual Arts",
    name: "Ghulam Nabi Dar (Padma Shri 2024)",
    location: "Srinagar, Kashmir",
    craft: "Master Walnut Woodcarving",
    preview: "A legendary master craftsman from Srinagar. He has spent over six decades preserving the exquisite art of Kashmiri walnut woodcarving, bringing the region's nature and flora to life through wood.",
    story: "Conferred with the prestigious Padma Shri in 2024, Ghulam Nabi Dar is a legendary master artisan from Srinagar who has devoted over sixty years to perfecting the art of Kashmiri walnut woodcarving. Born into modest circumstances, he persevered through decades of discipline to master intricate relief carving, jali fretwork, and lifelike depictions of indigenous flora and fauna. Without using automated machinery, every leaf, flower, and bird motif emerges from seasoned walnut wood purely through his hand-guided chisels."
  },
  {
    id: "ghulam-rasool-khan",
    category: "Traditional Craft & Visual Arts",
    name: "Haji Ghulam Rasool Khan (Padma Shri)",
    location: "Kashmir Valley",
    craft: "Jamawar Patchwork & Kani Shawl Weaving",
    preview: "A world-renowned artisan who single-handedly revived the 700-year-old Jamawar patchwork technique and advanced modern Kani shawl weaving.",
    story: "Honored with the Padma Shri, Haji Ghulam Rasool Khan is internationally celebrated for revitalizing Kashmir's centuries-old textile traditions. When the ancient 700-year-old Jamawar needlework and patchwork technique had nearly disappeared into obscurity, his meticulous archival research and supreme dexterity brought it back from extinction. Over decades, he has trained hundreds of young artisans and advanced modern Kani weaving to world acclaim."
  },
  {
    id: "sopori-lineage",
    category: "Music & Performing Arts",
    name: "Pt. Bhajan Sopori & Pt. Shamboo Nath Sopori",
    location: "Srinagar / Jammu",
    craft: "Classical Santoor & Sufiana Gharana",
    preview: "Representing a massive legacy in music, this family lineage is credited with bringing the hundred-stringed Santoor to the masses and structuring classical music in J&K.",
    story: "Hailing from the storied Sufiana Gharana of Kashmir, the Sopori family lineage holds a foundational place in Indian music. Pandit Shamboo Nath Sopori, hailed as the 'Master Musician of J&K', structured classical music education and preserved ancient musical systems. His son, Pandit Bhajan Sopori—widely revered as the 'Saint of the Santoor'—revolutionized the hundred-stringed Santoor, elevating it from folk accompaniment into a premier classical concert instrument across the globe."
  },
  {
    id: "romalo-ram",
    category: "Music & Performing Arts",
    name: "Romalo Ram",
    location: "Jammu Region (Duggar)",
    craft: "Dogri Folk Music & Ritual Dances",
    preview: "A prominent modern folklore revivalist from the Jammu region who travels extensively to perform and protect Dogri folk music and ancestral ritual dances.",
    story: "A stalwart cultural custodian from the Duggar heartland of Jammu, Romalo Ram has dedicated his life to protecting, performing, and passing down Dogri folk culture. Renowned for performing Geetru, Bhaakh, and ancestral ritual dances, he leads troupes across remote villages and national cultural stages, ensuring that the oral poetry, rhythmic beats, and regional heritage of Jammu continue to thrive in the hearts of younger generations."
  },
  {
    id: "rehman-rahi",
    category: "Literature & Language",
    name: "Rehman Rahi",
    location: "Srinagar, Kashmir",
    craft: "Modern Kashmiri Poetry & Philosophy",
    preview: "A monumental modern Kashmiri poet and scholar who became the first writer from J&K to receive the Jnanpith Award, preserving the philosophical richness of the Kashmiri language.",
    story: "Professor Rehman Rahi stands as a titan in modern Indian literature and the first writer from Jammu & Kashmir to receive India's highest literary honour, the Jnanpith Award (for 'Siyah Rood Jaren Manz'). His expansive body of work transformed the contours of Kashmiri poetry, infusing it with philosophical rigor, existential nuance, and deep cultural memory while mentoring countless writers and scholars."
  },
  {
    id: "mehjoor",
    category: "Literature & Language",
    name: "Mehjoor (Gulam Ahmad)",
    location: "Pulwama / Kashmir",
    craft: "Shair-e-Kashmir & Cultural Renaissance",
    preview: "Remembered as the Shair-e-Kashmir (Poet of Kashmir). His early 20th-century poetry completely revolutionized Kashmiri literature by blending traditional landscape imagery with themes of communal harmony.",
    story: "Peerzada Ghulam Ahmad, celebrated throughout history as 'Mehjoor' or 'Shair-e-Kashmir' (The Poet of Kashmir), revolutionized Kashmiri literature in the early 20th century. By writing in the musical vernacular of everyday farmers, boatmen, and artisans, his verses celebrated the natural splendors of the valley while championing communal harmony, social brotherhood, and cultural awakening. Rabindranath Tagore famously hailed him as the true lyrical soul of Kashmir."
  }
];

export const beforeForgottenItems = [
  { title: "Forgotten Words", desc: "Rare Dogri, Kashmiri & Gojri terms for seasonal rain, snow crusts, and family ties." },
  { title: "Traditional Songs", desc: "Pastoral migration melodies, wedding songs (Wanwun & Suhag), and river ballads." },
  { title: "Old Photographs", desc: "Black-and-white family portraits, historic bazaars, and early 20th-century life." },
  { title: "Family Recipes", desc: "Heirloom cooking methods using earthenware pots, sun-dried vegetables (Hogaai), and wild herbs." },
  { title: "Local Customs", desc: "Seasonal harvest rituals, neighborhood greetings, and traditional house-building practices." },
  { title: "Folk Stories", desc: "Moral fables, legendary heroes, and oral histories recorded directly from village elders." }
];

export const dictionaryWords = [
  {
    id: "w-1",
    word: "Duggar",
    script: "डुग्गर",
    language: "Dogri / Regional",
    meaning: "The historic land of the Dogras, originating from 'Dwigarta' meaning the land of twin lakes (Mansar and Surinsar).",
    pronunciation: "Dug-gar",
    sampleSentence: "Duggar is known for its valiant history, rich folk music, and distinct Pahari culture."
  },
  {
    id: "w-2",
    word: "Sheer Chai / Nun Chai",
    script: "نون چائے",
    language: "Kashmiri / Gojri",
    meaning: "Traditional pink salted tea brewed with green tea leaves, baking soda, milk, and cardamom, served hot in samovars.",
    pronunciation: "Noon Ch-eye",
    sampleSentence: "Morning in a Kashmiri home begins with warm Nun Chai and fresh Tsot bread from the local Kandur."
  },
  {
    id: "w-3",
    word: "Kaladi",
    script: "कलाड़ी",
    language: "Dogri / Jammu",
    meaning: "A traditional dense, ripe cheese originating from Ramnagar and Udhampur, pan-fried in its own fat until golden crispy outside.",
    pronunciation: "Kuh-laa-dee",
    sampleSentence: "Kaladi is prized as an authentic Dogra delicacy, often served hot with mint chutney."
  },
  {
    id: "w-4",
    word: "Wazwan",
    script: "واظوان",
    language: "Kashmiri",
    meaning: "A multi-course meal in Kashmiri tradition, considered an art form prepared by master chefs known as Vastas.",
    pronunciation: "Vaz-waan",
    sampleSentence: "Wazwan represents hospitality and communal unity, served on large copper platters (Trami)."
  },
  {
    id: "w-5",
    word: "Bhaakh",
    script: "भाख",
    language: "Dogri",
    meaning: "A rare genre of rural Dogri folk singing performed in chorus without any musical instruments.",
    pronunciation: "Bhaa-kh",
    sampleSentence: "The soothing harmonies of Bhaakh echo across Jammu's countryside during harvest season."
  },
  {
    id: "w-6",
    word: "Kangri",
    script: "کانگڑؠ",
    language: "Kashmiri / Regional",
    meaning: "An earthenware pot encased in woven wicker, filled with hot embers, carried under the Pheran coat for warmth.",
    pronunciation: "Kaa-ng-ree",
    sampleSentence: "The Kangri has kept generations warm through the severe 40-day winter season known as Chillai Kalan."
  }
];

export const foodStories = [
  {
    id: "food-1",
    name: "Dogri Kaladi",
    origin: "Udhampur & Ramnagar, Jammu",
    season: "Year-round / Winter favorite",
    image: mediaAssets.foodDishes.kaladi,
    description: "Prepared from raw cow or buffalo milk, Kaladi is salted, dried, and pan-fried on flat iron griddles until it forms a crisp golden crust while remaining gooey inside.",
    memoryQuote: "The aroma of Kaladi searing over charcoal fire brings back winter evenings in Jammu."
  },
  {
    id: "food-2",
    name: "Traditional Kashmiri Kahwa",
    origin: "Kashmir Valley",
    season: "Winter & Celebrations",
    image: mediaAssets.foodDishes.kahwa,
    description: "Brewed with green tea leaves, whole green cardamom, cinnamon bark, saffron strands, and crushed almonds. Traditionally boiled in a copper Samovar.",
    memoryQuote: "Steaming Kahwa poured into small porcelain cups warms the hands and spirit."
  },
  {
    id: "food-3",
    name: "Dogri Ambal",
    origin: "Jammu Region",
    season: "Festive Occasions & Weddings",
    image: mediaAssets.foodDishes.ambal,
    description: "A signature sweet-and-sour pumpkin dish cooked with jaggery (gur) and tamarind (imli), served alongside Rajma rice during Dogra Dham feasts.",
    memoryQuote: "No traditional Dogra Dham is complete without the tangy richness of Ambal."
  },
  {
    id: "food-4",
    name: "Rista & Gustaba",
    origin: "Kashmiri Royal Cuisine",
    season: "Feasts & Weddings",
    image: mediaAssets.foodDishes.ristaGustaba,
    description: "Hand-pounded meat spheres simerred in rich saffron gravy (Rista) or smooth yogurt gravy with mint (Gustaba).",
    memoryQuote: "Pounded for hours on stone mortars, these dishes showcase the dedication of master Vastas."
  }
];

export const contributionCategories = [
  { id: "story", label: "Share a Story", icon: "BookOpen", desc: "A personal memory, family tradition, or folk tale." },
  { id: "photo", label: "Share a Photograph", icon: "Camera", desc: "Archival photos, old home images, or landscape documentation." },
  { id: "tradition", label: "Preserve a Tradition", icon: "Shield", desc: "Document a local ritual, craft, or seasonal custom." },
  { id: "recipe", label: "Share a Recipe", icon: "Utensils", desc: "Heirloom family recipes and traditional cooking methods." },
  { id: "memory", label: "Record a Memory", icon: "Mic", desc: "An oral recollection from an elder or community member." }
];
