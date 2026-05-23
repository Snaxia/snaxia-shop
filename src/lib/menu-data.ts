import carrot from "@/assets/cat-carrot.jpg";
import lassi from "@/assets/cat-lassi.jpg";
import icecream from "@/assets/cat-icecream.jpg";
import mint from "@/assets/cat-mint.jpg";
import shakeice from "@/assets/cat-shakeice.jpg";
import kerala from "@/assets/cat-kerala.png";
import milkshake from "@/assets/cat-milkshake.jpg";
import juice from "@/assets/cat-juice.jpg";
import mojito from "@/assets/cat-mojito.jpg";
import classicShake from "@/assets/cat-classic-shake.png";
import wholesomeShake from "@/assets/cat-wholesome-shake.png";
import deepFry from "@/assets/cat-deep-fry.png";
import momos from "@/assets/cat-momos.png";
import dates from "@/assets/cat-dates.png";
import classicCombos from "@/assets/cat-classic-combos.jpg";
import detox from "@/assets/cat-detox.jpg";
import houseExclusives from "@/assets/cat-house-exclusives.png";
import fizzSips from "@/assets/cat-fizz-sips.png";
import healthMalt from "@/assets/cat-health-malt.png";
import shawarma from "@/assets/cat-shawarma.png";
import burgersImage from "@/assets/cat-burgers.png";
import wholesomeShakeNew from "@/assets/wholesome_shake_new.png";
import classicCombosNew from "@/assets/classic_combos_new.png";
import fizzSipsNew from "@/assets/fizz_sips_screenshot.png";
import coffeeNew from "@/assets/coffee_new.png";
import burgerNew from "@/assets/burger_new.png";

export type MenuItem = { name: string; price: number; tag?: "Popular" | "Bestseller" | "New" | "Recommended" | "Premium" };
export type MenuCategory = {
  id: string;
  category: string;
  description: string;
  image: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "fresh-pressed",
    category: "Fresh Pressed",
    description: "Cold-pressed and freshly squeezed — nothing artificial, ever.",
    image: juice,
    items: [
      { name: "Fresh Lime", price: 30 },
      { name: "Ginger Lime", price: 35 },
      { name: "Mint Lime", price: 35, tag: "Popular" },
      { name: "Masala Lime", price: 35 },
      { name: "Orange", price: 65, tag: "Bestseller" },
      { name: "Pineapple", price: 55 },
      { name: "Watermelon", price: 45 },
      { name: "Papaya", price: 50 },
      { name: "Nellikka", price: 55 },
      { name: "Carrot", price: 65 },
      { name: "Sweet Lime", price: 55 },
      { name: "Grape", price: 55 },
      { name: "Beetroot", price: 50 },
      { name: "Musk Melon", price: 50 },
    ],
  },
  {
    id: "mojitos-mint-mixers",
    category: "Mojitos & Mint Mixers",
    description: "Sparkling mojitos and refreshing mint coolers to beat the heat.",
    image: mojito,
    items: [
      { name: "Mint Mojito", price: 75, tag: "Bestseller" },
      { name: "Blue Curaco", price: 75, tag: "Popular" },
      { name: "Watermelon Mojito", price: 75 },
      { name: "Green Apple Mojito", price: 75, tag: "New" },
      { name: "Pineapple Mint", price: 60 },
      { name: "Pomo Mint", price: 65 },
      { name: "Sweet Lime Mint", price: 65, tag: "Recommended" },
      { name: "Orange Mint", price: 70 },
      { name: "Carrot Mint", price: 70 },
      { name: "Amla Mint", price: 65 },
    ],
  },
  {
    id: "kerala-originals",
    category: "Kerala Originals",
    description: "Wholesome Kerala-style classics, served pure and chilled.",
    image: kerala,
    items: [
      { name: "Avil Milk", price: 70, tag: "Popular" },
      { name: "SP Avil Milk", price: 90, tag: "Bestseller" },
    ],
  },
  {
    id: "lassi-love",
    category: "Lassi Love",
    description: "Creamy yogurt-based drinks, churned thick and chilled to perfection.",
    image: lassi,
    items: [
      { name: "Sweet Lassi", price: 55 },
      { name: "Mango Lassi", price: 75, tag: "Bestseller" },
      { name: "Carrot Lassi", price: 65 },
      { name: "Choco Lassi", price: 65 },
      { name: "Pista Lassi", price: 65 },
      { name: "Honey Lassi", price: 65, tag: "New" },
      { name: "Banana Lassi", price: 65 },
      { name: "Chikku Lassi", price: 65 },
      { name: "Strawberry Lassi", price: 75 },
    ],
  },
  {
    id: "royal-faloodas",
    category: "Royal Faloodas",
    description: "The ultimate dessert in a glass — rich, layered, and royal.",
    image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Mini Falooda", price: 95 },
      { name: "Royal Falooda", price: 150, tag: "Bestseller" },
      { name: "Butterscotch Falooda", price: 150 },
      { name: "Mango Falooda", price: 150 },
      { name: "Dry Fruit Falooda", price: 190, tag: "Premium" },
    ],
  },
  {
    id: "icecream-shakes",
    category: "Icecream Shakes",
    description: "Indulgent scoops blended into thick, dreamy shakes.",
    image: icecream,
    items: [
      { name: "Vanilla", price: 85 },
      { name: "Strawberry", price: 85, tag: "Popular" },
      { name: "Chocolate", price: 85, tag: "Bestseller" },
      { name: "Butterscotch", price: 85 },
      { name: "Pista", price: 85 },
      { name: "Black Current", price: 85 },
      { name: "Mango", price: 85 },
    ],
  },
  {
    id: "classic-shakes-icecream",
    category: "Classic Shakes with Icecream",
    description: "Rich fruit and nut shakes loaded with a generous scoop of ice cream.",
    image: classicShake,
    items: [
      { name: "Choco Chikku", price: 90, tag: "Popular" },
      { name: "Apple Magic", price: 90 },
      { name: "Mango Magic", price: 90, tag: "Bestseller" },
      { name: "Banana Wonder", price: 90},
      { name: "Fig with Ice Cream", price: 90 },
      { name: "Dates with Ice Cream", price: 90 },
      { name: "Avocado with Ice Cream", price: 90, tag: "New" },
      { name: "Guava with Ice Cream", price: 90 },
      { name: "Oreo with Ice Cream", price: 90 },
    ],
  },
  {
    id: "wholesome-shakes",
    category: "Wholesome Shakes",
    description: "A massive lineup of fruity milkshakes — there's one for every mood.",
    image: wholesomeShakeNew,
    items: [
      { name: "Pomo Shake", price: 60 },
      { name: "Chikku Shake", price: 60 },
      { name: "Carrot Shake", price: 70 },
      { name: "Apple Shake", price: 70 },
      { name: "Mango Shake", price: 70, tag: "Bestseller" },
      { name: "Butter Fruit", price: 85 },
      { name: "Muskmelon", price: 55 },
      { name: "Papaya", price: 55 },
      { name: "Strawberry", price: 80, tag: "Popular" },
      { name: "Kiwi", price: 80 },
      { name: "Dates", price: 80 },
      { name: "Banana", price: 55 },
      { name: "Red Banana", price: 60 },
      { name: "Guava", price: 55 },
      { name: "Dragon Fruit", price: 80, tag: "New" },
      { name: "Custard Apple", price: 80 },
      { name: "Badam Milk", price: 45 },
      { name: "Rose Milk", price: 45 },
      { name: "Jack Fruit", price: 80 },
      { name: "Passion Fruit", price: 80 },
      { name: "Cocktail", price: 85, tag: "Recommended" },
      { name: "Peanut Shake", price: 80 },
      { name: "Red Dragon", price: 80 },
      { name: "Tender Coconut", price: 85, tag: "Popular" },
    ],
  },
  {
    id: "date-tastic-blends",
    category: "Date-tastic Blends",
    description: "Naturally sweet and highly nutritious date-infused thick blends.",
    image: dates,
    items: [
      { name: "Dates Shake", price: 95 },
      { name: "Dates Mango", price: 95 },
      { name: "Dates Banana", price: 95 },
      { name: "Dates Chikku", price: 95 },
      { name: "Dates Apple", price: 95 },
      { name: "Dates Fig", price: 95 },
      { name: "Dates Honey", price: 95 },
      { name: "Dates Cherry", price: 95 },
      { name: "Dates Pomo", price: 95 },
      { name: "Dates Peanut", price: 95 },
      { name: "Dates Tender", price: 95 },
    ],
  },
  {
    id: "classic-combos",
    category: "Classic Combos",
    description: "Timeless fruit pairings that always hit the right spot.",
    image: classicCombosNew,
    items: [
      { name: "Choco Banana", price: 80 },
      { name: "Mango Banana", price: 85 },
      { name: "Sharja Shake", price: 85, tag: "Bestseller" },
      { name: "Banana Shake", price: 80 },
      { name: "Mango Shake", price: 85 },
      { name: "Apple Banana", price: 80 },
      { name: "Apple Cherry", price: 85 },
      { name: "Strawberry Banana", price: 85 },
    ],
  },
  {
    id: "carrot-fusion",
    category: "Carrot Fusion",
    description: "Crisp carrot blends mixed with seasonal fruits — packed with vitamins.",
    image: carrot,
    items: [
      { name: "Carrot Apple", price: 75, tag: "Popular" },
      { name: "Carrot Amla", price: 75 },
      { name: "Carrot Papaya", price: 75 },
      { name: "Carrot Orange", price: 75, tag: "Recommended" },
      { name: "Carrot Mint", price: 75 },
      { name: "Carrot Ginger", price: 75 },
      { name: "Carrot Beetroot", price: 75 },
    ],
  },
  {
    id: "detox-wellness",
    category: "Detox & Wellness",
    description: "Healthy, purifying blends to rejuvenate your body and mind.",
    image: detox,
    items: [
      { name: "A.B.C. Special", price: 75, tag: "Bestseller" },
      { name: "Green Panther", price: 85 },
      { name: "Weight Loss", price: 85 },
      { name: "Sparkle Best", price: 85 },
      { name: "Citras Mixer", price: 85 },
      { name: "Sunshine", price: 85 },
    ],
  },
  {
    id: "specialty-shakes",
    category: "Specialty Shakes",
    description: "Unique, fun, and loaded combinations that you'll keep coming back for.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Oreo Shake", price: 65, tag: "Popular" },
      { name: "Dairy Milk Shake", price: 65 },
      { name: "Five Star Shake", price: 65 },
      { name: "Mango Jack Fruit", price: 85 },
      { name: "Jack Fruit Banana", price: 85 },
      { name: "Apple Mango", price: 85 },
      { name: "Oreo Mango", price: 85 },
      { name: "Oreo Banana", price: 85 },
      { name: "Oreo Apple", price: 85 },
      { name: "Oreo Dates", price: 85 },
      { name: "Cold Boost", price: 65 },
      { name: "Cold Coffee", price: 65, tag: "Bestseller" },
      { name: "Cold Horlicks", price: 65 },
      { name: "Ice Tea", price: 95 },
      { name: "Dry Fig Shake", price: 95 },
      { name: "Dry Fruit Shake", price: 110 },
    ],
  },
  {
    id: "house-exclusives",
    category: "House Exclusives",
    description: "Premium signature blends exclusive to Snaxia Sips.",
    image: houseExclusives,
    items: [
      { name: "Snaxia Shake", price: 100, tag: "Bestseller" },
      { name: "3 Roses Shake", price: 120 },
      { name: "Cobra Shake", price: 140 },
      { name: "Lip Sip", price: 120 },
      { name: "Red Angel", price: 120 },
      { name: "Avocado Bliss", price: 130, tag: "Popular" },
    ],
  },
  {
    id: "fizz-sips",
    category: "Fizz & Sips",
    description: "Traditional coolers and fizzy sodas for a quick refreshment.",
    image: fizzSipsNew,
    items: [
      { name: "Lime Soda", price: 35 },
      { name: "Lime Soda Sweet", price: 35 },
      { name: "Masala Lime Soda", price: 40 },
      { name: "Nannari Soda Sarbath", price: 45, tag: "Popular" },
      { name: "Nannari Sarbath", price: 35 },
      { name: "Kulukki Sarbath", price: 45, tag: "Bestseller" },
      { name: "Milk Sarbath", price: 45 },
    ],
  },
  {
    id: "tea",
    category: "Tea",
    description: "Authentic, freshly brewed Indian teas to start your day right.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Ginger Dum Tea", price: 20, tag: "Popular" },
      { name: "Black Tea", price: 15 },
      { name: "Lemon Tea", price: 25 },
      { name: "Honey Lemon Tea", price: 30, tag: "Recommended" },
    ],
  },
  {
    id: "coffee",
    category: "Coffee",
    description: "Classic café brews and traditional filter coffee.",
    image: coffeeNew,
    items: [
      { name: "Coffee", price: 20, tag: "Bestseller" },
      { name: "Sukku Coffee", price: 25 },
    ],
  },
  {
    id: "health-malt-beverages",
    category: "Health & Malt Beverages",
    description: "Nourishing traditional malt drinks for a wholesome boost.",
    image: healthMalt,
    items: [
      { name: "Boost", price: 25 },
      { name: "Horlicks", price: 25 },
      { name: "Raagi Malt", price: 25, tag: "Recommended" },
      { name: "Badam Milk", price: 25, tag: "Popular" },
    ],
  },
  {
    id: "deep-fry",
    category: "Deep Fry",
    description: "Crispy, golden café bites to satisfy your savory cravings.",
    image: deepFry,
    items: [
      { name: "Veg Roll (3 pcs)", price: 75 },
      { name: "Paneer Roll (3 pcs)", price: 80, tag: "Popular" },
      { name: "Chicken Roll (3 pcs)", price: 90, tag: "Bestseller" },
      { name: "French Fries", price: 70 },
      { name: "Masala French Fries", price: 80 },
      { name: "Smileys (6 pcs)", price: 80 },
      { name: "Chicken Nuggets (6 pcs)", price: 90 },
      { name: "Chicken Cheese Ball (6 pcs)", price: 90, tag: "Recommended" },
      { name: "Veg Cheese Ball (6 pcs)", price: 70 },
    ],
  },
  {
    id: "momos-mania",
    category: "Momos Mania",
    description: "Steaming hot authentic momos served with spicy dip.",
    image: momos,
    items: [
      { name: "Veg Momos 4pcs", price: 60 },
      { name: "Veg Momos 8pcs", price: 110 },
      { name: "Paneer Momos 4pcs", price: 70 },
      { name: "Paneer Momos 8pcs", price: 130, tag: "Popular" },
      { name: "Chicken Momos 4pcs", price: 70 },
      { name: "Chicken Momos 8pcs", price: 140, tag: "Bestseller" },
    ],
  },
  {
    id: "egg-bread-corner",
    category: "Egg & Bread Corner",
    description: "Classic and tasty egg varieties and quick bites.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Omelet", price: 35 },
      { name: "Bread Omelet", price: 50, tag: "Popular" },
      { name: "Bread Omelet Cheese", price: 65 },
      { name: "Chicken Bread Omelet", price: 75, tag: "Bestseller" },
      { name: "Chicken Cheese Bread Omelet", price: 85 },
      { name: "Mushroom Bread Omelet", price: 75 },
      { name: "Mushroom Cheese Bread Omelet", price: 85 },
    ],
  },
  {
    id: "shawarma-specials",
    category: "Shawarma Specials",
    description: "Loaded and filling street-style shawarmas packed with flavor.",
    image: shawarma,
    items: [
      { name: "Classic", price: 100 },
      { name: "Mexican", price: 110, tag: "Popular" },
      { name: "Peri Peri", price: 110 },
      { name: "Shawarma Plate", price: 130 },
      { name: "Mexican Plate", price: 140 },
      { name: "Peri Peri Plate", price: 140, tag: "Recommended" },
      { name: "Special Whole Meat", price: 140, tag: "Bestseller" },
      { name: "Plate Whole Meat", price: 170, tag: "Premium" },
    ],
  },
  {
    id: "sandwiches",
    category: "Sandwiches",
    description: "Grilled and toasted sandwiches perfect for a quick snack.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Veg Sandwich", price: 60 },
      { name: "Chilly Sandwich", price: 60 },
      { name: "Paneer Sandwich", price: 75 },
      { name: "Mushroom Sandwich", price: 80 },
      { name: "Corn Sandwich", price: 75 },
      { name: "Egg Sandwich", price: 75 },
      { name: "Chicken Sandwich", price: 90, tag: "Bestseller" },
      { name: "Peanut Sandwich", price: 80 },
      { name: "Jam Sandwich", price: 70 },
    ],
  },
  {
    id: "maggi-bowls",
    category: "Maggi Bowls",
    description: "Hot and comforting noodle bowls loaded with goodness.",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Veg Noodles", price: 60 },
      { name: "Egg Noodles", price: 70, tag: "Popular" },
      { name: "Chicken Noodles", price: 90, tag: "Bestseller" },
      { name: "Chicken Nuggets Noodles", price: 90 },
      { name: "Mushroom Noodles", price: 80 },
      { name: "Corn Noodles", price: 70 },
      { name: "Peri Peri Maggi", price: 70, tag: "Recommended" },
      { name: "Cheese Maggi", price: 80 },
    ],
  },
  {
    id: "burgers",
    category: "Burgers",
    description: "Juicy, cheesy burgers served fresh and hot.",
    image: burgerNew,
    items: [
      { name: "Veg Cheese Burger", price: 80 },
      { name: "Egg Cheese Burger", price: 90 },
      { name: "Paneer Cheese Burger", price: 100, tag: "Popular" },
      { name: "Chicken Cheese Burger", price: 110, tag: "Bestseller" },
    ],
  },
];

export const branches = [
  {
    name: "Snaxia - Anna Nagar",
    address:
      "Snaxia - Café & Juice, 266, 5th Ave, near Jessie Moses School, Z Block, Anna Nagar, Chennai, Tamil Nadu 600040",
    maps: "https://maps.app.goo.gl/JUJMkeq51YuaMXEt9?g_st=aw",
  },
  {
    name: "Snaxia - Anna Nagar West",
    address:
      "W53, N Main Rd, Anna Nagar West, Pandu Ranga Puram, extention, Anna Nagar, Chennai, Tamil Nadu 600101",
    maps: "https://maps.app.goo.gl/5N1QjJpgCi427TSW7?g_st=aw",
  },
];

export const reviews = [
  { name: "Aarav P.", rating: 5, text: "The Mango Lassi here is unreal — thick, creamy, and just sweet enough. My new go-to spot!" },
  { name: "Divya K.", rating: 5, text: "Loved the mojito and carrot combo. The vibe is fresh, the staff is sweet. 10/10!" },
  { name: "Rohan S.", rating: 4, text: "Massive milkshake menu. Tender Coconut shake is a must-try. Will be back." },
  { name: "Meera J.", rating: 5, text: "Best fresh juices in the city. Clean shop, friendly service, fair prices." },
];
