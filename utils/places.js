import RocaLogo from "../public/restaurants/roca.jpg";
import BostonsLogo from "../public/restaurants/bostons.jpg";
import CatrinLogo from "../public/restaurants/catrin.png";

export const getPlaces = () => {
  return places.filter((item) => item.type === "Restaurante");
};

export const getPlace = (id) => {
  return places.find((item) => item.id === id);
};

export const places = [
  
  {
    name: "Roca Steakhouse",
    type: "Restaurante",
    id: "roca",
    logoUrl: RocaLogo,
    schedule: "13:00 - 23:30",
    description:
      "Con una original combinación entre clásico y lo contemporáneo, ROCA Steakhouse es un inigualable restaurante gourmet en Mérida, Yucatán, ideal para los amantes de los cortes de carne prime.",
    address:
      "Av. Andrés García Lavin, Montebello, Luxury Place, Local-5, Mérida, Mexico",
    phone: "9999-99-99-99",
    url: "https://www.rocasteakhouse.com/",
    isActive: true,
    isCopy: false,
  },
  
  {
    name: "Bostons",
    type: "Restaurante",
    id: "bostons",
    logoUrl: BostonsLogo,
    schedule: "13:00 - 23:30",
    description:
      "Con una original combinación entre clásico y lo contemporáneo, ROCA Steakhouse es un inigualable restaurante gourmet en Mérida, Yucatán, ideal para los amantes de los cortes de carne prime.",
    address:
      "Av. Andrés García Lavin, Montebello, Luxury Place, Local-5, Mérida, Mexico",
    phone: "9999-99-99-99",
    url: "https://www.rocasteakhouse.com/",
    isActive: true,
    isCopy: false,
  },
  
  {
    name: "Catrín",
    type: "Restaurante",
    id: "catrin",
    logoUrl: CatrinLogo,
    schedule: "13:00 - 3:00",
    description:
      "CATRIN 47 es una cocina / cantina muy mexicana, situada en pleno siglo XXI con interpretaciones actuales de los platillos más emblemáticos del país y una mixología que desafía hasta el más intrépido de sus visitantes.",
    address:
      "Calle 47 #463B, entre 54 y 52, Colonia Centro, Mérida, Mexico",
    phone: "9995181725",
    url: "https://www.catrin47.com/",
    isActive: true,
    isCopy: false,
  },
];
