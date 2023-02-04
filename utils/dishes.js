import Test from "public/restaurants/bachour.jpg";
import RocaQuesoBrie1 from "public/dishes/roca/quesobrie1.jpg";
import RocaQuesoBrie2 from "public/dishes/roca/quesobrie2.jpg";
import RocaQuesoBrie3 from "public/dishes/roca/quesobrie3.jpg";
import RocaQuesoBrie4 from "public/dishes/roca/quesobrie4.jpg";
import RocaGravlax1 from "public/dishes/roca/gravlax1.jpg";
import RocaGravlax2 from "public/dishes/roca/gravlax2.jpg";
import RocaGravlax3 from "public/dishes/roca/gravlax3.jpg";
import RocaGravlax4 from "public/dishes/roca/gravlax4.jpg";
import RocaOstiones1 from "public/dishes/roca/ostionesrockefeller1.jpg";
import RocaOstiones2 from "public/dishes/roca/ostionesrockefeller2.jpg";
import RocaOstiones3 from "public/dishes/roca/ostionesrockefeller3.jpg";
import RocaOstiones4 from "public/dishes/roca/ostionesrockefeller4.jpg";
import Coliflor1 from "public/dishes/roca/coliflor1.jpg";
import Coliflor2 from "public/dishes/roca/coliflor2.jpg";
import Wonton1 from "public/dishes/roca/wonton1.jpg";
import Wonton2 from "public/dishes/roca/wonton2.jpg";

export const getMenu = (id) => {
  return dishes.filter((item) => item.restaurantId === id);
};

const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export const getMenuCategories = (id) => {
  const helper = [];
  const dishes = getMenu(id);

  dishes.forEach((dish) => {
    const isNew = helper.find((item) => item.category === dish.category);

    if (!isNew) {
      return helper.push(dish);
    }
  });

  return helper;
};

export const filterMenu = (id, category) => {
  const dishes = getMenu(id);
  const dishesToShow = dishes.filter((dish) => dish.category === category);
  return dishesToShow;
};

export const getDish = (id) => {
  return dishes.find((item) => item.id === id);
};

export const dishes = [
  // Roca
  {
    name: "Queso brie empanizado",
    id: "rocaquesobrie",
    restaurantId: "roca",
    description:
      "Dados de queso brie empanizado con panko acompañado de mermelada rústica de tomates cherry",
    callories: 200,
    price: 260,
    category: "Entradas",
    imageUrl: RocaQuesoBrie1,
    images: [
      RocaQuesoBrie1,
      RocaQuesoBrie2,
      RocaQuesoBrie3,
      RocaQuesoBrie3,
      RocaQuesoBrie4,
    ],
    likes: 5,
    comments: 2,
  },
  {
    name: "Gravlax de salmón noruego",
    id: "rocagravlaxsalmon",
    restaurantId: "roca",
    description:
      "Curado 24hrs, montado sobre pan de pepitas y cacahuate con jocoque y arúgula",
    callories: 200,
    price: 240,
    category: "Entradas2",
    imageUrl: RocaGravlax1,
    images: [RocaGravlax1, RocaGravlax2, RocaGravlax3, RocaGravlax4],
    likes: 5,
    comments: 0,
  },
  {
    name: "Ostiones Rockefeller (4 pzas)",
    id: "rocaostiones",
    restaurantId: "roca",
    description: "Ostiones jumbo vivos de ensenada al estilo Rockefeller",
    callories: 200,
    price: 360,
    category: "Entradas3",
    imageUrl: RocaOstiones1,
    images: [RocaOstiones1, RocaOstiones2, RocaOstiones3, RocaOstiones4],
    likes: 5,
    comments: 2,
  },
  {
    name: "Coliflor rostizada",
    id: "rocacoliflor",
    restaurantId: "roca",
    description:
      "Coliflor local rostizada y gratinada con queso muenster, rellena de queso chester y bañada en salsa de pimientos baby",
    callories: 200,
    price: 250,
    category: "Entradas4",
    imageUrl: Coliflor1,
    images: [Coliflor1, Coliflor2],
    likes: 5,
    comments: 2,
  },
  {
    name: "Kibi de cordero con labne trufado y zatar",
    id: "rocakibicordero",
    restaurantId: "roca",
    description:
      "Horneado con aceite de oliva, acompañado de labne trufado y zatar",
    callories: 200,
    price: 210,
    category: "Entradas5",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 0,
  },
  {
    name: "Queso fundido natural",
    id: "rocaquesofundido",
    restaurantId: "roca",
    description: "Queso de la casa con tortillas artesanales de harina",
    callories: 200,
    price: 150,
    category: "Entradas6",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Wonton de cerdo",
    id: "rocawonton",
    restaurantId: "roca",
    description:
      "Fritos y rellenos de carne de cerdo especiada servidos con una mermelada picante de piña ahumada con labne",
    callories: 200,
    price: 220,
    category: "Entradas7",
    imageUrl: Wonton1,
    images: [Wonton1, Wonton2],
    likes: 5,
    comments: 2,
  },
  {
    name: "Tartar de res",
    id: "rocatartar",
    restaurantId: "roca",
    description:
      "Centro de ribeye picado finamente junto con alcaparras, pepinillos y cebolla morada, aderezado con mayonesa de la casa, parmigiano reggiano y arúgula",
    callories: 200,
    price: 350,
    category: "Entradas8",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
];
