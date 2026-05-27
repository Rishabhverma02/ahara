import type { ProductSize, NutritionRow } from "./products";

export type ProductDetail = {
  sizes: ProductSize[];
  cleanLabelPromises: string[];
  estimatedDelivery: string;
  ingredientStory: { title: string; paragraphs: string[] };
  tasteTexture: string;
  howToConsume: string;
  nutritionFacts: NutritionRow[];
};

/* ─── Shared defaults ───────────────────────────────────────── */
const MAKHANA_SIZES: ProductSize[] = [
  { label: "60g", price: 199 },
  { label: "120g", price: 349 },
  { label: "250g", price: 599 },
];

const SATTU_SIZES: ProductSize[] = [
  { label: "200g", price: 279 },
  { label: "500g", price: 549 },
  { label: "1kg", price: 999 },
];

const COOKIE_SIZES: ProductSize[] = [
  { label: "100g", price: 249 },
  { label: "250g", price: 499 },
];

const CLEAN_LABEL: string[] = [
  "No Preservatives",
  "No Artificial Color",
  "No Refined Junk",
];

const MAKHANA_NUTRITION: NutritionRow[] = [
  { label: "Energy", value: "420 kcal" },
  { label: "Protein", value: "14g" },
  { label: "Carbohydrates", value: "65g" },
  { label: "Fat", value: "2.1g" },
  { label: "Fibre", value: "7g" },
  { label: "Calcium", value: "60mg" },
];

const SATTU_NUTRITION: NutritionRow[] = [
  { label: "Energy", value: "390 kcal" },
  { label: "Protein", value: "20g" },
  { label: "Carbohydrates", value: "58g" },
  { label: "Fat", value: "6g" },
  { label: "Fibre", value: "4g" },
  { label: "Iron", value: "4.5mg" },
];

const COOKIE_NUTRITION: NutritionRow[] = [
  { label: "Energy", value: "450 kcal" },
  { label: "Protein", value: "8g" },
  { label: "Carbohydrates", value: "62g" },
  { label: "Fat", value: "18g" },
  { label: "Fibre", value: "5g" },
  { label: "Sugar", value: "12g" },
];

/* ─── Per-product detail overrides ──────────────────────────── */
export const PRODUCT_DETAILS: Record<number, ProductDetail> = {
  1: {
    sizes: MAKHANA_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Makhana (fox nuts) are hand-harvested from the pristine ponds of Bihar, where farmers have cultivated them for generations using traditional methods.",
        "We slow-roast each batch with real aged cheddar and a blend of Italian herbs — no artificial flavouring, ever.",
      ],
    },
    tasteTexture: "Crunchy and airy with a savoury cheese kick and subtle herbal notes. Light enough for guilt-free snacking, satisfying enough to replace chips.",
    howToConsume: "Enjoy straight from the pack as an anytime snack. Perfect with evening tea, as a movie-night munchie, or crushed over salads for extra crunch.",
    nutritionFacts: MAKHANA_NUTRITION,
  },
  2: {
    sizes: MAKHANA_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Our makhana is sourced from organic farms in Madhubani, Bihar and coated with premium Belgian dark chocolate.",
        "The chocolate is tempered at low temperatures to preserve its antioxidant content and rich flavour profile.",
      ],
    },
    tasteTexture: "Rich, bittersweet chocolate shell over a light, crunchy makhana core. A guilt-free dessert alternative.",
    howToConsume: "Best enjoyed chilled for a crunchy-chocolate experience. Makes a perfect after-dinner treat or desk snack.",
    nutritionFacts: MAKHANA_NUTRITION,
  },
  3: {
    sizes: MAKHANA_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Ceylon cinnamon from Sri Lanka meets hand-popped makhana from Bihar's ancient ponds.",
        "We use only true cinnamon (not cassia) for its delicate, warm sweetness and anti-inflammatory properties.",
      ],
    },
    tasteTexture: "Warm, aromatic cinnamon wraps around each crunchy makhana. Naturally sweet without added sugar.",
    howToConsume: "Perfect warm-weather snack with masala chai. Also wonderful crumbled over morning oats or yogurt bowls.",
    nutritionFacts: MAKHANA_NUTRITION,
  },
  4: {
    sizes: MAKHANA_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Our classic cream & onion makhana uses real dehydrated onion flakes and cream powder from grass-fed dairy.",
        "Each fox nut is slow-roasted to perfection, locking in flavour without frying — zero oil used.",
      ],
    },
    tasteTexture: "A familiar, crowd-pleasing flavour. Creamy, savoury, with a gentle onion bite. Addictively crunchy.",
    howToConsume: "An ideal party snack, lunchbox filler, or anytime craving crusher. Pairs beautifully with a cold drink.",
    nutritionFacts: MAKHANA_NUTRITION,
  },
  5: {
    sizes: MAKHANA_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Sun-dried lime zest from Rajasthani orchards gives this makhana its bright, citrusy punch.",
        "Finished with Himalayan pink rock salt for the perfect sweet-salty-sour balance.",
      ],
    },
    tasteTexture: "Zesty, tangy, and refreshingly light. The lime flavour is vibrant without being overpowering.",
    howToConsume: "Best enjoyed on a hot day. Throw them in your gym bag or keep a jar at your desk for a pick-me-up.",
    nutritionFacts: MAKHANA_NUTRITION,
  },
  6: {
    sizes: MAKHANA_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Pure, minimally processed makhana — just lotus seeds, air-popped and lightly salted.",
        "Sourced from sustainable farms in Darbhanga, Bihar. Nothing added, nothing taken away.",
      ],
    },
    tasteTexture: "Clean, naturally nutty, and perfectly crunchy. The purest expression of makhana.",
    howToConsume: "Snack on them plain, toss into trail mixes, or use as a base for your own seasonings at home.",
    nutritionFacts: MAKHANA_NUTRITION,
  },
  7: {
    sizes: MAKHANA_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Himalayan pink salt from ancient Khewra mines meets hand-harvested makhana.",
        "The mineral-rich salt enhances the natural flavour of lotus seeds without overpowering them.",
      ],
    },
    tasteTexture: "Subtle, clean, and elegantly salty. The pink salt adds a gentle mineral depth.",
    howToConsume: "A minimalist's snack. Perfect for calorie-conscious snacking, fasting days, or as a soup topping.",
    nutritionFacts: MAKHANA_NUTRITION,
  },
  8: {
    sizes: MAKHANA_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "A bold blend of Guntur red chillies, black pepper, and roasted cumin gives this makhana its fiery kick.",
        "We balance the heat with a hint of amchur (dried mango powder) for complexity.",
      ],
    },
    tasteTexture: "Bold, spicy, and deeply flavourful. The heat builds gradually — exciting but not overwhelming.",
    howToConsume: "Pair with a cold beverage for the ultimate spicy snack experience. Great for chaat lovers.",
    nutritionFacts: MAKHANA_NUTRITION,
  },
  9: {
    sizes: SATTU_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Sattu is the original Indian protein — cold-pressed roasted chana (Bengal gram) flour, used for centuries across Bihar and UP.",
        "Our sattu is stone-ground in small batches to preserve its natural nutrients and earthy flavour.",
      ],
    },
    tasteTexture: "Earthy, nutty, and deeply satisfying. Mixes into a smooth, slightly grainy shake with natural sweetness.",
    howToConsume: "Mix 2 scoops in 200ml cold water or milk. Shake well. Best consumed as a pre/post-workout drink or morning energiser.",
    nutritionFacts: SATTU_NUTRITION,
  },
  10: {
    sizes: SATTU_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Rich Dutch-process cocoa meets traditional stone-ground sattu for a protein shake that actually tastes like chocolate.",
        "No whey, no soy — just ancient grains and real cocoa.",
      ],
    },
    tasteTexture: "Rich, chocolatey, and creamy. Tastes like a dessert but packs 20g protein per serve.",
    howToConsume: "Blend with cold milk and a banana for the ultimate chocolate shake. Also delicious mixed into overnight oats.",
    nutritionFacts: SATTU_NUTRITION,
  },
  11: {
    sizes: SATTU_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Our upgraded chocolate formula features 30% more protein per serve with added ashwagandha for recovery.",
        "Same ancient sattu base, enhanced with modern sports nutrition science.",
      ],
    },
    tasteTexture: "Smoother and richer than our original. The ashwagandha adds an earthy depth to the chocolate.",
    howToConsume: "Mix 2 scoops with 250ml cold milk. Ideal post-workout. Can also be used in protein pancake batter.",
    nutritionFacts: SATTU_NUTRITION,
  },
  12: {
    sizes: SATTU_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Real Alphonso mango pulp from Ratnagiri blended with our signature cold-pressed sattu.",
        "The mango provides natural sweetness — no added sugar needed.",
      ],
    },
    tasteTexture: "Tropical, fruity, and refreshing. Like a mango lassi meets a protein shake.",
    howToConsume: "Best served ice-cold. Mix with cold milk or water, add ice cubes, and shake vigorously.",
    nutritionFacts: SATTU_NUTRITION,
  },
  13: {
    sizes: SATTU_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Inspired by the traditional Holi drink, our rose thandai sattu blends fennel, cardamom, saffron, and rose petals with protein-rich sattu.",
        "Every ingredient is sourced from trusted Indian spice farms.",
      ],
    },
    tasteTexture: "Aromatic, floral, and subtly spiced. A sophisticated, Mughal-inspired flavour experience.",
    howToConsume: "Mix with chilled milk for an authentic thandai experience. Wonderful as an evening drink or festival special.",
    nutritionFacts: SATTU_NUTRITION,
  },
  14: {
    sizes: COOKIE_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Bajra (pearl millet) has been a staple of Rajasthan for millennia — drought-resistant and packed with iron.",
        "We combine it with organic jaggery and cold-pressed coconut oil for a cookie that's truly wholesome.",
      ],
    },
    tasteTexture: "Crumbly, nutty, with a warm jaggery sweetness. Hearty and satisfying with every bite.",
    howToConsume: "Enjoy with morning tea or as an after-school snack. Pairs wonderfully with a glass of warm milk.",
    nutritionFacts: COOKIE_NUTRITION,
  },
  15: {
    sizes: COOKIE_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Dark chocolate chips from fair-trade cocoa farms, combined with whole grain jowar flour — no maida, ever.",
        "Sweetened with coconut sugar for a lower glycemic index.",
      ],
    },
    tasteTexture: "Rich chocolate chunks in a crispy, malty cookie. Indulgent yet surprisingly nutritious.",
    howToConsume: "Best enjoyed with cold milk or as a post-meal treat. Kids love them in lunchboxes.",
    nutritionFacts: COOKIE_NUTRITION,
  },
  16: {
    sizes: COOKIE_SIZES,
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Jowar (sorghum) is one of India's most ancient and nutritious millets — gluten-free and fibre-rich.",
        "We add Malabar cardamom and organic coconut sugar for a cookie inspired by Indian mithai.",
      ],
    },
    tasteTexture: "Delicate cardamom aroma with a light, sandy texture. Not too sweet — perfect balance.",
    howToConsume: "Pairs beautifully with masala chai or filter coffee. A refined teatime companion.",
    nutritionFacts: COOKIE_NUTRITION,
  },
  17: {
    sizes: [
      { label: "100g", price: 299 },
      { label: "200g", price: 549 },
    ],
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "Moringa — the 'drumstick tree' — is one of nature's most nutrient-dense plants, grown across South India.",
        "Our moringa bites combine dried moringa leaf powder with dates, nuts, and a touch of honey. No added sugar.",
      ],
    },
    tasteTexture: "Earthy, slightly bitter moringa balanced by natural date sweetness. Dense, chewy, and filling.",
    howToConsume: "One or two bites make a perfect pre-workout energy boost or mid-afternoon pick-me-up.",
    nutritionFacts: [
      { label: "Energy", value: "380 kcal" },
      { label: "Protein", value: "12g" },
      { label: "Carbohydrates", value: "52g" },
      { label: "Fat", value: "14g" },
      { label: "Fibre", value: "8g" },
      { label: "Iron", value: "6mg" },
    ],
  },
  18: {
    sizes: [
      { label: "150g", price: 349 },
      { label: "300g", price: 629 },
    ],
    cleanLabelPromises: CLEAN_LABEL,
    estimatedDelivery: "Estimated delivery in 3-5 days",
    ingredientStory: {
      title: "The Source",
      paragraphs: [
        "A curated trail mix featuring our best makhana flavours, roasted moringa bites, seeds, and dry fruits.",
        "Every ingredient is individually sourced and combined by hand in small batches.",
      ],
    },
    tasteTexture: "A celebration of textures — crunchy makhana, chewy moringa bites, and toasted seeds. Every handful is different.",
    howToConsume: "Keep a jar at your desk, in the car, or in your gym bag. The perfect grab-and-go superfood snack.",
    nutritionFacts: [
      { label: "Energy", value: "410 kcal" },
      { label: "Protein", value: "16g" },
      { label: "Carbohydrates", value: "48g" },
      { label: "Fat", value: "18g" },
      { label: "Fibre", value: "9g" },
      { label: "Calcium", value: "80mg" },
    ],
  },
};
