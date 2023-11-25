export default [
  {
    id: "1",
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our chicago stylefeta cheese." +
      "garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
    getImageSrc: () => require("../assets/greek salad.jpg"),
  },
  {
    id: "2",
    title: "Brucheta",
    description:
      "Our Brucheta is made from grilled bread that has been seared with garlic and seasoned with salt " +
      "and olive oil",
    price: "$12.99",
    getImageSrc: () => require("../assets/bruchetta.png"),
  },
  {
    id: "3",
    title: "Lemon Desert",
    description:
      "This comes straight from grandmas recipe book, every last ingrident has been sourced and is as" +
      "authentic as can be imagined",
    price: "$12.99",
    getImageSrc: () => require("../assets/lemon dessert.jpg"),
  },
]
