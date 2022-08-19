// En esta sección se importan las imágenes de los productos
import bad1 from '../assets/images/products/bad1.jpeg';
import bad2 from '../assets/images/products/bad2.jpeg';
import bad3 from '../assets/images/products/bad3.jpeg';
import ama from '../assets/images/products/ama1.jpeg';
import ama2 from '../assets/images/products/ama2.jpeg';
import ama3 from '../assets/images/products/ama3.jpeg';
import az from '../assets/images/products/azu1.jpeg';
import az2 from '../assets/images/products/azu2.jpeg';
import az3 from '../assets/images/products/azu3.jpeg';
import ba from '../assets/images/products/bal1.jpeg';
import ba2 from '../assets/images/products/bal2.jpeg';
import ba3 from '../assets/images/products/bal3.jpeg';
import gap from '../assets/images/products/gap1.jpeg';
import gap2 from '../assets/images/products/gap2.jpeg';
import gap3 from '../assets/images/products/gap3.jpeg';
import jes from '../assets/images/products/jes1.jpeg';
import jes2 from '../assets/images/products/jes2.jpeg';
import jes3 from '../assets/images/products/jes3.jpeg';
import mad1 from '../assets/images/products/mad1.jpeg';
import mad2 from '../assets/images/products/mad2.jpeg';
import mad3 from '../assets/images/products/mad3.jpeg';
import balr from '../assets/images/products/balr.jpeg';
import balr2 from '../assets/images/products/balr2.jpeg';
import balr3 from '../assets/images/products/balr3.jpeg';
import bull from '../assets/images/products/bulls.jpeg';
import bull2 from '../assets/images/products/bulls2.jpeg';
import bull3 from '../assets/images/products/bulls3.jpeg';
import cal from '../assets/images/products/cal.jpeg';
import cal2 from '../assets/images/products/cal2.jpeg';
import cal3 from '../assets/images/products/cal3.jpeg';
import nik from '../assets/images/products/nik.jpeg';
import nik2 from '../assets/images/products/nik2.jpeg';
import nik3 from '../assets/images/products/nik3.jpeg';
import pullb from '../assets/images/products/pull.jpeg';
import pullb2 from '../assets/images/products/pull2.jpeg';
import pullb3 from '../assets/images/products/pull3.jpeg';
import spi from '../assets/images/products/spd1.jpeg';
import spi2 from '../assets/images/products/spd2.jpeg';
import spi3 from '../assets/images/products/spd3.jpeg';


import C1 from '../assets/images/products/C1.jpg';
import C2 from '../assets/images/products/C2.jpeg';
import C3 from '../assets/images/products/C3.jpeg';
import C5 from '../assets/images/products/C5.jpeg';
import C6 from '../assets/images/products/C6.jpeg';
import C7 from '../assets/images/products/C7.jpeg';
import C8 from '../assets/images/products/C8.jpeg';
import C9 from '../assets/images/products/C9.jpeg';
import C10 from '../assets/images/products/C10.jpeg';
import C11 from '../assets/images/products/C11.jpeg';


import C12 from '../assets/images/products/C12.jpeg';
import C13 from '../assets/images/products/C13.jpeg';
import C14 from '../assets/images/products/C14.jpeg';
import C15 from '../assets/images/products/C15.jpeg';
import C16 from '../assets/images/products/C16.jpeg';
import C17 from '../assets/images/products/C17.jpeg';
import C18 from '../assets/images/products/C18.jpeg';
import C19 from '../assets/images/products/C19.jpeg';
import C20 from '../assets/images/products/C20.jpeg';
import C21 from '../assets/images/products/C21.jpeg';





/**
 * @description Este es el estado global de la tienda
 * @instructions La forma que debe tener la información de cada producto es la siguiente:
 * {
      id: createUniqueID()01,
      name: 'Sudadera New York',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [hoddie, hoddie, nw2],
      tallas: {
        S: {
          stock: 15,
          cantidad: 0
        },
        M: {
          stock: 15,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
 */

const createUniqueID = () => Math.random().toString(36).substr(2, 9);

export const productsData = {
  currentCategory: 'all',
  cart: [],
  products: [
    {
      id: createUniqueID(),
      name: 'Hoodie Bad Bunny',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [bad1, bad2, bad3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Balenciaga Rojo y Blanco ',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [balr, balr2, balr3],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Bulls 23',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [bull, bull2, bull3],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Calvin Klein',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [cal, cal2, cal3],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Nike',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [nik, nik2, nik3],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Pull and Bear',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [pullb, pullb2, pullb3],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 1,
          cantidad: 0,
        },
      },
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE',
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [ama, ama2, ama3],
      price: 20,
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      price: 20,
      name: 'HOODIE AZUL',
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [az, az2, az3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE BALENCIAGA',
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [ba, ba2, ba3],
      price: 20,
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },

    {
      id: createUniqueID(),
      name: 'HOODIE GAP',
      description:
        'Hoodie talla americana ,92% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [gap, gap2, gap3],
      price: 20,
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE JESUS ',
      description:
        'Hoodie talla americana ,92% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [jes, jes2, jes3],
      price: 20,
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE SPIDER-MAN',
      price: 20,
      description:
        'Hoodie talla americana ,92% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [spi, spi2, spi3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE MANDARINA',
      price: 20,
      description:
        'Hoodie talla americana ,92% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [mad1, mad2, mad3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },

    //camisetas//
    {
      id: createUniqueID(),
      name: 'Camiseta Just do it',
      price: 8,
      description:
      '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C1],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Just do it',
      price: 8,
      description:
      '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C2],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Blanca',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
  
    {
      id: createUniqueID(),
      name: 'Camiseta Adidas',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C5],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Boos',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C6],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C7],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta ',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C8],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Just do it',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C9],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Puma',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C10],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Just do it',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C11],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Jordan',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C12],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Jordan',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C13],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Ralph Lauren',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C14],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta ',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C15],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Calvin Klein',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C16],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Jordan Azul',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C17],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Reebok Negra',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C18],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Adidas',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C19],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta American Eagle',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C20],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
    {
      id: createUniqueID(),
      name: 'Camiseta Abercrombie & Fitch ',
      price: 8,
      description:
        '💥 Nueva camiseta, ✅En tallas S-M-L, 🏭Fabricada en algodón de excelente calidad, super resistente y cómoda, 🚛Envíos a todo el Ecuador',
      images: [C21],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
  ],
};
