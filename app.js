const wrapper = document.querySelector(".sliderWrapper")
// console.log("wrapper")

const menuItems = document.querySelectorAll(".menuItem1");

// products img and colors
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Jordan",
      price: 169,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 119,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 109,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct = products[0];
// query each item
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// color boxes and sizes
menuItems.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translate(${-100 * index}vw)`

        choosenProduct = products[index]

        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "R$ " 
        + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColor.forEach((color, index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})

currentProductColor.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
}
)

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "transparent"
            size.style.color = "black"
        });
        size.style.backgroundColor = "black"
        size.style.color = "white"
    }
    )
}
)
// open container payment and close
const productButton = document.querySelector(".productbutton");
const payment = document.querySelector(".paymentDetails");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display = "flex"
});

close.addEventListener("click",()=>{
  payment.style.display = "none"
});
// open and close container PIX

const pix = document.querySelector("#pix");
const card = document.querySelector(".cd");
const card1 = document.querySelector(".cd1");
const cardContainer = document.querySelector(".cardcontainer");
const pixContainer = document.querySelector(".pixcontainer")

pix.addEventListener("click", ()=>{
  pixContainer.style.display = "flex"
  cardContainer.style.display = "none"
})

card.addEventListener("click", ()=>{
  cardContainer.style.display = "flex"
  pixContainer.style.display = "none"
})
card1.addEventListener("click", ()=>{
  cardContainer.style.display = "flex"
  pixContainer.style.display = "none"
})



