export type Product = {
  id: string;
  name: string;
  category: "Cakes" | "Pastries" | "Breads" | "Cookies" | "Beverages";
  price: number;
  description: string;
  tags: string[];
};

export const products: Product[] = [
  { id: "cake-truffle", name: "Chocolate Truffle Cake", category: "Cakes", price: 899, description: "Rich cocoa layers with glossy ganache finish.", tags: ["best-seller", "premium"] },
  { id: "cake-velvet", name: "Red Velvet Cake", category: "Cakes", price: 999, description: "Velvety crumb, cream cheese swirl, celebration-ready.", tags: ["classic"] },
  { id: "cake-fruit", name: "Fresh Fruit Cream Cake", category: "Cakes", price: 799, description: "Light cream, seasonal fruits, soft sponge.", tags: ["fresh"] },
  { id: "pastry-mango", name: "Mango Dome Pastry", category: "Pastries", price: 179, description: "Tropical glaze, mousse core, crisp base.", tags: ["seasonal"] },
  { id: "pastry-choco", name: "Chocolate Éclair", category: "Pastries", price: 159, description: "Choux pastry with silky chocolate filling.", tags: ["popular"] },
  { id: "bread-sourdough", name: "Artisan Sourdough Loaf", category: "Breads", price: 249, description: "Slow-fermented, crisp crust, airy interior.", tags: ["artisan"] },
  { id: "bread-garlic", name: "Garlic Breadsticks", category: "Breads", price: 199, description: "Buttery garlic finish with herb aroma.", tags: ["snack"] },
  { id: "cookie-chip", name: "Cocoa Chip Cookies (6)", category: "Cookies", price: 199, description: "Chewy center, premium chips, warm finish.", tags: ["kid-friendly"] },
  { id: "cookie-oats", name: "Oats & Honey Cookies (6)", category: "Cookies", price: 219, description: "Golden honey notes with hearty oats.", tags: ["wholesome"] },
  { id: "bev-coffee", name: "Café Latte", category: "Beverages", price: 149, description: "Smooth espresso with steamed milk.", tags: ["hot"] },
  { id: "bev-cocoa", name: "Hot Cocoa", category: "Beverages", price: 169, description: "Comforting cocoa with a creamy finish.", tags: ["hot"] }
];
