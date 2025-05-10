// 'use strict';
// // const order = {
// //   customer: {
// //     name: "Asal",
// //     contact: {
// //       phone: "998901112233",
// //       email: "",
// //     },
// //   },
// //   items: [
// //     { name: "Laptop", price: 1200 },
// //     { name: "Mouse", price: 25 },
// //   ],
// //   payment: null,
// //   shipping: {
// //     address: {
// //       city: "",
// //       street: "Yunusabad 5",
// //     },
// //     delivered: false,
// //   },
// // };

// // function buyurtma () {
// //     if (order.customer.contact.phone === "") {
// //         console.log("Phone not available.")
// //     } else {
// //         console.log(`Customer phone: ${order.customer.contact.phone}`);
// //     }

// //     if (order.customer.contact.email != "") {
// //         console.log(`Email: ${order.customer.contact.email}`);
// //     } else {
// //         console.log("No email provided");

// //     }

// //     order.payment ?? console.log("Payment pending");

// //     let narx = order.items.reduce((sum, item) => sum + item.price, 0)

// //     console.log(`Total: ${narx}$`);

// //     // if (order.shipping.address.city === "" && order.delivered) {
// //     //     console.log(" Delivery address missing deb chiqaring");
// //     // } else {
// //     //     console.log(`Shipping to: ${order.shipping.address.city}.`);
// //     //     console.log("Order has been delivered");
// //     // }

// // let a = 1;
// // let b = a;
// // b = 20
// // console.log(a);

// // }

// // buyurtma()

// // let a = 5;
// // let b = a;
// // b = 10;

// // let arr1 = [1, 2, 3];
// // let arr2 = arr1;
// // arr2.push(4);

// // console.log("a:", a);       // ?
// // console.log("b:", b);       // ?
// // console.log("arr1:", arr1); // ?
// // console.log("arr2:", arr2); // ?

// // const obj = {
// //   name: "Ali",
// //   greet: function () {
// //     setTimeout(function () {
// //       console.log("Hello,", this.name);
// //     }, 1000);
// //   }
// // };

// // obj.greet();

// // console.log("Start");

// // setTimeout(() => {
// //   console.log("Inside setTimeout");
// // }, 0);

// // Promise.resolve().then(() => {
// //   console.log("Inside Promise");
// // });

// // Style berish
// const button = document.getElementById('button');
// button.style.backgroundColor = 'black';
// button.style.color = 'white';
// button.style.setProperty('background-color', 'black');
// button.style.setProperty('color', 'white');

// // Aributelar
// const image = document.getElementById('image');
// const source = image.getAttribute('src');
// console.log(source);
// image.setAttribute('alt', 'A sample image');
// const alternativeText = image.getAttribute('alt');
// console.log(alternativeText);
// image.removeAttribute('alt');
// const altText = image.getAttribute('alt');
// console.log(altText);

// const button = document.getElementById('button');
// const type = button.dataset.type;
// console.log(type);
// button.dataset.parent = '12345';
// const parent = button.dataset.parent;
// console.log(parent);
// delete button.dataset.parent;
// const p = button.dataset.parent;
// console.log(p);

// const button = document.getElementById('button');
// button.classList.add('btn-success');
// button.classList.remove('btn-danger');
// button.classList.toggle('active');
// const hasClass = button.classList.contains('btn-success');
// console.log(hasClass);

// const element = document.querySelector("#element");
// const grandparent = document.querySelector("#grandparent");
// const parent = document.querySelector("#parent");
// const body = document.querySelector("body")

// // bubling hodisa
// body.addEventListener("click", function () {
//     alert("Body clicked")
// });

// grandparent.addEventListener("click", function (event) {
// alert("Grandparent clicked");
// });

// parent.addEventListener("click", function (event) {
// alert("Parent clicked");
// });

// element.addEventListener("click", function (event) {
// alert("Element clicked");
// });

// // capturing hodisa
// body.addEventListener("click", function () {
//     alert("Body clicked")
// } ,true);

// grandparent.addEventListener("click", function (event) {
// alert("Grandparent clicked");
// } ,true);

// parent.addEventListener("click", function (event) {
// alert("Parent clicked");
// } ,true);

// element.addEventListener("click", function (event) {
// alert("Element clicked");
// } ,true);

// sami
const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    seriesDB.count = +prompt("Nechta serial ko’rdingiz?", "");

    while (
      seriesDB.count == "" ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial ko’rdingiz?", "");
    }
  },
  setSeries: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt(`Oxirgi ko’rgan serialingiz ${i + 1}?`, "");
      const b = prompt(`Nechi baxo berasiz? ${i + 1}`, "");

      if (a !== null && b !== null && a !== "" && b !== "") {
        seriesDB.series[a] = b;
      } else {
        i--;
      }
    }
  },
  detectingLevel: function () {
    if (seriesDB.count < 5) {
      console.log("Kam serial ko'ripsiz");
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
      console.log("Siz classik tamoshabin ekansiz");
    } else if (seriesDB.count >= 10) {
      console.log("Siz serialchi zvezda ekansiz");
    }
  },
  visibleDB: function () {
    if (seriesDB.private) {
      seriesDB.private = false;
    } else {
      seriesDB.private = true;
    }
  },
  showDB: function () {
    if (!seriesDB.private) {
      console.log(seriesDB);
    } else {
      console.log("Ma'lumot mahfiy saqlanmoqda");
    }
  },
  writeGenres: function () {
    // for (let i = 0; i < 3; i++) {
    // 	const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}?`, '')
    // 	if (genre === '' || genre === null) {
    // 		i--
    // 	} else {
    // 		seriesDB.genres[i] = genre
    // 	}
    // }

    let genres = prompt(
      "Yaxshi ko'rgan janringizni vergul yordamida yozing!",
      ""
    );

    while (genres == "" || genres == null) {
      genres = prompt(
        "Yaxshi ko'rgan janringizni vergul yordamida yozing!",
        ""
      );
    }

    if (genres) {
      seriesDB.genres = genres.split(", ");
      seriesDB.genres.sort();
    }
  },
};
