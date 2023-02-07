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
import Wonton3 from "public/dishes/roca/wonton3.jpg";
import PulpoYuc1 from "public/dishes/roca/pulpoyuc1.png";
import PechugaPollo1 from "public/dishes/roca/pechugapolloorganica1.jpg";
import PechugaPollo2 from "public/dishes/roca/pechugapolloorganica2.jpg";
import PechugaPollo3 from "public/dishes/roca/pechugapolloorganica3.jpg";
import SalmonPistache1 from "public/dishes/roca/salmonpistache1.jpg";
import SalmonPistache2 from "public/dishes/roca/salmonpistache2.jpg";
import SalmonPistache3 from "public/dishes/roca/salmonpistache3.jpg";
import SalmonPistache4 from "public/dishes/roca/salmonpistache4.jpg";
import SurfAndTurf1 from "public/dishes/roca/surfandturf1.jpg";
import SurfAndTurf2 from "public/dishes/roca/surfandturf2.jpg";
import SurfAndTurf3 from "public/dishes/roca/surfandturf3.jpg";
import SurfAndTurf4 from "public/dishes/roca/surfandturf4.jpg";
import SurfAndTurf5 from "public/dishes/roca/surfandturf5.jpg";
import CaldoRoca1 from "public/dishes/roca/caldoroca1.png";
import EnsaladaCesar1 from "public/dishes/roca/ensaladacesar1.jpg";
import RisottoNegro1 from "public/dishes/roca/risottonegro1.png";
import RisottoNegro2 from "public/dishes/roca/risottonegro2.png";
import RisottoNegro3 from "public/dishes/roca/risottonegro3.png";
import RibEye1 from "public/dishes/roca/ribeye1.jpg";
import RibEye2 from "public/dishes/roca/ribeye2.jpg";
import RibEye3 from "public/dishes/roca/ribeye3.jpg";
import RibEye4 from "public/dishes/roca/ribeye4.jpg";
import Cowboy1 from "public/dishes/roca/cowboy1.jpg";
import Cowboy2 from "public/dishes/roca/cowboy1.jpg";
import Cowboy3 from "public/dishes/roca/cowboy1.jpg";
import Cowboy4 from "public/dishes/roca/cowboy1.jpg";
import MacNCheese from "public/dishes/roca/macncheese1.jpg";

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
    category: "Entradas",
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
    category: "Entradas",
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
    category: "Entradas",
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
    category: "Entradas",
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
    category: "Entradas",
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
    category: "Entradas",
    imageUrl: Wonton1,
    images: [Wonton1, Wonton2, Wonton3],
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
    category: "Entradas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Tiradito de centro de rib eye",
    id: "rocatiradito",
    restaurantId: "roca",
    description:
      "Láminas de centro de ribeye prime marinadas en salsas negras acompañado de aguacate, brotes de rábano y cilantro junto a fritura de tortilla",
    callories: 200,
    price: 320,
    category: "Entradas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Guacamole",
    id: "rocaguacamole",
    restaurantId: "roca",
    description: "Guacamole tradicional",
    callories: 200,
    price: 150,
    category: "Entradas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Pulpo a la yucateca",
    id: "rocapulpo",
    restaurantId: "roca",
    description:
      "Pulpo maya al estilo pibil acompañado de tuétano, servido con costras de queso",
    callories: 200,
    price: 380,
    category: "Especialidades",
    imageUrl: PulpoYuc1,
    images: [PulpoYuc1],
    likes: 5,
    comments: 2,
  },
  {
    name: "Caramelos de centro de rib eye (3 pzas)",
    id: "rocacaramelos",
    restaurantId: "roca",
    description:
      "Centro de ribeye prime montados en tortillas de maiz azul con costras de queso y cebolla caramelizada",
    callories: 200,
    price: 380,
    category: "Especialidades",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Centro de rib eye flameado al estilo roca",
    id: "rocacentro",
    restaurantId: "roca",
    description:
      "Centro de rib eye relleno con una farsa de tuétano, champiñones, queso y cebolla. Platillo flameado con mezcal en mesa",
    callories: 200,
    price: 850,
    category: "Especialidades",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Hamburguesa de la casa",
    id: "rocahamburguesa",
    restaurantId: "roca",
    description:
      "Nuestra receta de carnes prime con pan brioche de la casa, mayonesa trufada, lechuga boston, cebolla morada y jitomate hidropónico",
    callories: 200,
    price: 370,
    category: "Especialidades",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Pechuga de pollo orgánica con zarzamora",
    id: "rocapechugaorganica",
    restaurantId: "roca",
    description:
      "Al sous vide, montada sobre puré de papa, glaseada en salsa de zarzamora y ejotes franceses envueltos en tocino",
    callories: 200,
    price: 280,
    category: "Especialidades",
    imageUrl: PechugaPollo1,
    images: [PechugaPollo1, PechugaPollo2, PechugaPollo3],
    likes: 5,
    comments: 2,
  },
  {
    name: "Salmón noruego con costra de pistache",
    id: "rocasalmonpistache",
    restaurantId: "roca",
    description:
      "Acompañado de puré de maiz y una salsa de naranja dulce con tequila",
    callories: 200,
    price: 380,
    category: "Especialidades",
    imageUrl: SalmonPistache1,
    images: [
      SalmonPistache1,
      SalmonPistache2,
      SalmonPistache3,
      SalmonPistache4,
    ],
    likes: 5,
    comments: 2,
  },
  {
    name: "Surf and turf",
    id: "rocasurf",
    restaurantId: "roca",
    description:
      "Camarones, callos de hacha y centro de ribeye, acompañados de una salsa de queso parmigiano reggiano",
    callories: 200,
    price: 850,
    category: "Especialidades",
    imageUrl: SurfAndTurf1,
    images: [
      SurfAndTurf1,
      SurfAndTurf2,
      SurfAndTurf3,
      SurfAndTurf4,
      SurfAndTurf5,
    ],
    likes: 5,
    comments: 2,
  },
  {
    name: "Caldo Roca",
    id: "rocacaldo",
    restaurantId: "roca",
    description:
      "A base de tres chiles, acompañado de suadero de filete prime, tocino, chorizo, chistorra y garbanzo",
    callories: 200,
    price: 300,
    category: "Ensaladas y Sopas",
    imageUrl: CaldoRoca1,
    images: [CaldoRoca1],
    likes: 5,
    comments: 2,
  },
  {
    name: "Ensalada de cítricos y frutos secos",
    id: "rocacitricos",
    restaurantId: "roca",
    description:
      "Mix de lechugas acompañadas de toronja, fresa, pera y frutos secos, aderezada con nuestra vinagreta de cítricos",
    callories: 200,
    price: 210,
    category: "Ensaladas y Sopas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Ensalada césar",
    id: "rocacesar",
    restaurantId: "roca",
    description:
      "La tradicional ensalada de lechuga orejona con una costra de parmigiano reggiano y crutones de focaccia",
    callories: 200,
    price: 240,
    category: "Ensaladas y Sopas",
    imageUrl: EnsaladaCesar1,
    images: [EnsaladaCesar1],
    likes: 5,
    comments: 2,
  },
  {
    name: "Ensalada de burrata",
    id: "rocaburrata",
    restaurantId: "roca",
    description:
      "Mix de lechugas con queso burrata, higos caramelizados y nuestra vinagreta de higo",
    callories: 200,
    price: 295,
    category: "Ensaladas y Sopas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Jugo de carne",
    id: "rocajugo",
    restaurantId: "roca",
    description: "Nuestra versión, elaborado con carne prime y tuétano",
    callories: 200,
    price: 270,
    category: "Ensaladas y Sopas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Sopa de cebolla",
    id: "rocasopa",
    restaurantId: "roca",
    description:
      "La clásica con una base de jugo de carne y cebolla blanca, terminada con un crutón gratinado con queso de la casa",
    callories: 200,
    price: 200,
    category: "Ensaladas y Sopas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Risotto negro",
    id: "rocarisottonegro",
    restaurantId: "roca",
    description:
      "Elaborado con tinta de calamar acompañado de camarones u10 y callo de hacha",
    callories: 200,
    price: 560,
    category: "Risottos y Pastas",
    imageUrl: RisottoNegro1,
    images: [RisottoNegro1, RisottoNegro2, RisottoNegro3],
    likes: 5,
    comments: 2,
  },
  {
    name: "Ravioles de ricotta y espinaca",
    id: "rocaravioles",
    restaurantId: "roca",
    description:
      "Rellenos de queso ricotta y espinaca bañados con salsa pomodoro trufada y láminas de reggiano parmigiano",
    callories: 200,
    price: 310,
    category: "Risottos y Pastas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Fetuccini en salsa de cacahuate y camarón",
    id: "rocafetuccinicacahuate",
    restaurantId: "roca",
    description:
      "Pasta artesanal salteada en salsa de cacahuate confitada con chile de árbol acompañado de camarones flameados en mezcal",
    callories: 200,
    price: 360,
    category: "Risottos y Pastas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Tagliatelle con foie gras trufada",
    id: "rocatagliatelle",
    restaurantId: "roca",
    description:
      "Pasta artesanal bañada en salsa de foie gras y trufa con láminas de queso reggiano parmigiano",
    callories: 200,
    price: 580,
    category: "Risottos y Pastas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Rocas fetuccini",
    id: "rocafetuccini",
    restaurantId: "roca",
    description:
      "Pasta artesanal en crema de tuétano y hongos con queso grana padano",
    callories: 200,
    price: 350,
    category: "Risottos y Pastas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Risotto de hongos",
    id: "rocarisotto",
    restaurantId: "roca",
    description:
      "Risotto trufado preparado con setas y hongos mixtos con queso parmegiano reggiano",
    callories: 200,
    price: 290,
    category: "Risottos y Pastas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Rib Eye",
    id: "rocaribeye",
    restaurantId: "roca",
    description: "Rib Eye",
    callories: 200,
    price: 560,
    category: "Cortes Prime",
    imageUrl: RibEye1,
    images: [RibEye1, RibEye2, RibEye3, RibEye4],
    likes: 5,
    comments: 2,
  },
  {
    name: "Barbacoa de costillar",
    id: "rocabarbacoa",
    restaurantId: "roca",
    description: "Costillar en barbacoa.",
    callories: 200,
    price: 560,
    category: "Cortes Prime",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Spinalis",
    id: "rocaspinalis",
    restaurantId: "roca",
    description: "Tapa de Rib Eye",
    callories: 200,
    price: 560,
    category: "Cortes Prime",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Centro de rib eye",
    id: "rocacentrore",
    restaurantId: "roca",
    description: "Centro de rib eye",
    callories: 200,
    price: 560,
    category: "Cortes Prime",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Cowboy",
    id: "rocacowboy",
    restaurantId: "roca",
    description: "Cowboy",
    callories: 200,
    price: 560,
    category: "Cortes Prime",
    imageUrl: Cowboy1,
    images: [Cowboy1, Cowboy2, Cowboy3, Cowboy4],
    likes: 5,
    comments: 2,
  },
  {
    name: "Filete",
    id: "rocafilete",
    restaurantId: "roca",
    description: "Filete",
    callories: 200,
    price: 560,
    category: "Cortes Prime",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "New York",
    id: "rocanewyork",
    restaurantId: "roca",
    description: "New York",
    callories: 200,
    price: 560,
    category: "Cortes Prime",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Mac n cheese con pork belly",
    id: "rocamac",
    restaurantId: "roca",
    description: "Mac n cheese con pork belly",
    callories: 200,
    price: 110,
    category: "Guarniciones",
    imageUrl: MacNCheese,
    images: [MacNCheese],
    likes: 5,
    comments: 2,
  },
  {
    name: "Puré de papa",
    id: "rocapure",
    restaurantId: "roca",
    description: "Puré de papa",
    callories: 200,
    price: 75,
    category: "Guarniciones",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Papas a la francesa",
    id: "rocapapas",
    restaurantId: "roca",
    description: "Papas a la francesa",
    callories: 200,
    price: 90,
    category: "Guarniciones",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Espinacas a la crema",
    id: "rocaespinacas",
    restaurantId: "roca",
    description: "Espinacas a la crema",
    callories: 200,
    price: 105,
    category: "Guarniciones",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Verduras asadas",
    id: "rocaverduras",
    restaurantId: "roca",
    description: "Verduras asadas",
    callories: 200,
    price: 80,
    category: "Guarniciones",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Cebolla asada",
    id: "rocacebolla",
    restaurantId: "roca",
    description: "Cebolla asada",
    callories: 200,
    price: 60,
    category: "Guarniciones",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Coca Cola",
    id: "rocacoca",
    restaurantId: "roca",
    description: "Coca Cola",
    callories: 200,
    price: 40,
    category: "Bebidas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
  {
    name: "Cerveza Montejo",
    id: "rocacerveza",
    restaurantId: "roca",
    description: "Cerveza Montejo",
    callories: 200,
    price: 60,
    category: "Bebidas",
    imageUrl: Test,
    images: [Test],
    likes: 5,
    comments: 2,
  },
];
