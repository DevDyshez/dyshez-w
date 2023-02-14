import Promo1 from "public/promo1.jpg";

export const getPromo = (id) => {
  return promos.find((item) => item.id === id);
};

export const promos = [
  {
    name: "Promoción Test 1",
    id: "test1",
    imageUrl: [Promo1],
    vigency: "Hasta agotar existencias",
    firstParagraph:
      "En la compra de una bebida grande obtén una segunda bebida participante de cortesía. ",
    secondParagraph:
      "Las Bebidas que participan son las preparadas en la Barra de Espresso (calientes y heladas): Latte, Latte Macchiato, Cappuccino, Espresso americano, Caramel Macchiato, Flat White, Café Mocha, Café Mocha Blanco, Mocha Shaken Espresso Helado, Avellana Shaken Espresso Helado y Cold Brew.",
  },
  {
    name: "Promoción Test 2",
    id: "test1",
    imageUrl: [Promo1],
    vigency: "Hasta agotar existencias",
    firstParagraph:
      "En la compra de una bebida grande obtén una segunda bebida participante de cortesía. ",
    secondParagraph:
      "Las Bebidas que participan son las preparadas en la Barra de Espresso (calientes y heladas): Latte, Latte Macchiato, Cappuccino, Espresso americano, Caramel Macchiato, Flat White, Café Mocha, Café Mocha Blanco, Mocha Shaken Espresso Helado, Avellana Shaken Espresso Helado y Cold Brew.",
  },
  {
    name: "Promoción Test 3",
    id: "test1",
    imageUrl: [Promo1],
    vigency: "Hasta agotar existencias",
    firstParagraph:
      "En la compra de una bebida grande obtén una segunda bebida participante de cortesía. ",
    secondParagraph:
      "Las Bebidas que participan son las preparadas en la Barra de Espresso (calientes y heladas): Latte, Latte Macchiato, Cappuccino, Espresso americano, Caramel Macchiato, Flat White, Café Mocha, Café Mocha Blanco, Mocha Shaken Espresso Helado, Avellana Shaken Espresso Helado y Cold Brew.",
  },
];
