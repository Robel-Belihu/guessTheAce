let cardObject = [
  { id: 1, path: "/images/card-ace.jpg" },
  { id: 2, path: "/images/card-jack.webp" },
  { id: 3, path: "/images/card-king.jpg" },
  { id: 4, path: "/images/card-queen.jpg" },
];

<div class="card">
  <div class="card-inner">
    <div class="card-front">
      <img class="card-img" src="../images/card-ace.jpg" alt="" />
    </div>
    <div class="card-back">
      <img class="card-img" src="../images/card-back.jpg" alt="" />
    </div>
  </div>
</div>;

const createCard = (cardItem) => {
  const cardElement = document.createElement("div");
  const cardInner = document.createElement("div");
  const cardFront = document.createElement("");
  const cardBack = document.createElement("div");

  //create the images (front and back)

  const imgFront = document.createElement("img");
  const imgBack = document.createElement("img");

  //add class and id for the card elements

  addClass(cardElement, "card");
  addId(cardElement, cardItem.id);

  //add class to the inner cards

  addClass(cardInner, "card-inner");

  //add class to the front cards

  addClass(cardFront, "card-front");

  //add class to the back cards

  addClass(cardBack, "card-back");
};

const createElement = (elementType) => {
  return document.createElement(elementType);
};

const addClass = (element, className) => {
  element.classList.add(className);
};

const addId = (element, id) => {
  element.id = id;
};
