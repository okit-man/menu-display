
const meunItems = [
    {
        id: 1,
        menuHeading: "eba",
        category: "lunch",
        price: 10.99,
        img: "./Eba.jpeg",
        menuText: `Eba is a starch ball that’s often served as a side dish for soup. Also called garri, eba is made from refined cassava flour and water. It’s often served with a variety of soups, such as egusi soup, okra soup, and vegetable soup.`,
        
    },
    {
        id: 2,
        menuHeading: "suya",
        category: "dinner",
        price: 5.99,
        img: "./Suya.jpeg",
        menuText:`Suya is a savory protein dish. It’s typically made with seasoned beef or chicken that’s grilled on a skewer. “Suya” is the name of the seasoning mix used to coat the meat.`,
    },
    {
        id: 3,
        menuHeading: "Fried plantains",
        category: "breakfast",
        price: 8.99,
        img: "./Fried-plantains.jpeg",
        menuText: `Also called dodo, sweet fried plantains are a popular side dish and appetizer in Nigerian cuisine. All you need are plantains, frying oil, and salt for seasoning.  Nigerians typically pair fried plantains with a rich dipping sauce.`,
    },
    {
        id: 4,
        menuHeading: "fufu",
        category: "lunch",
        price: 10.99,
        img: "./fufu.jpeg",
        menuText: "Fufu is a starch ball that you make by boiling plants like rice, cassava, or plantains. You grind the starches into a paste, form them, and then boil them to make fufu. For those who aren’t familiar.",
    },
    {
        id: 5,
        menuHeading: "Jollof rice",
        category: "breakfast",
        price: 15.99,
        img: "./jollof-rice.jpeg",
        menuText: `Jollof rice is made from a base of rice, tomato, and broth that’s cooked down with bell peppers, habaneros (also called scotch bonnet peppers), curry, thyme, and bay leaves. Nigerians typically serve jollof rice as a side dish with chicken and fried plantains..`,
    },
    {
        id: 6,
        menuHeading: "Efo riro",
        category: "breakfast",
        price: 9.99,
        img: "./efo.jpg",
        menuText: `means “vegetable soup,” which many Nigerian families make as a spinach stew. Originally a traditional Yoruba dish, efo riro often includes pumpkin leaves, tomatoes, onions, and proteins like dry fish or crayfish.`,
    },
     {
        id: 7,
        menuHeading: "Pepper Soup",
        category: "dinner",
        price: 20.99,
        img: "./pepersoup.jpg",
        menuText: `It’s usually prepared with meats like goat, chicken, or fish, and the soup is served piping hot, often as a remedy for colds or simply as comfort food.Pepper soup is traditionally served at Nigerian gatherings, celebrations, and wakes.`,
    },
     {
        id: 8,
        menuHeading: "pizza",
        category: "dinner",
        price: 12.99,
        img: "./pizza.jpg",
        menuText: `A popular Italian dish made with a thin crust, tomato sauce, and cheese. Toppings can include pepperoni, mushrooms, olives, and more.`,
    },
     {
        id: 9,
        menuHeading: "Puff Puff",
        category: "lunch",
        price: 2.99,
        img: "./puffpuff.jpg",
        menuText: `Puff puff is a popular snack in Nigeria, often sold by street vendors. It’s made from a simple batter of flour, sugar, yeast, and water, then deep-fried until golden brown.These sweet, doughy balls are a staple at parties, celebrations, and street markets, making them a beloved snack for Nigerians of all ages.`,
    },
     {
        id: 10,
        menuHeading: "Ewedu soup",
        category: "dinner",
        price: 9.99,
        img: "./okoro.jpeg",
        menuText: `Ewedu soup is a dish that comes from the Yoruba people of Nigeria. This vibrant green soup is made from jute leaves, which give it a thick and slimy mouthfeel, not unlike okra soup. br> Ewedu often includes egusi, crayfish, and locust beans. Consider pairing it with amala.`,
    },
      {
        id: 11,
        menuHeading: "akara",
        category: "breakfast",
        price: 1.99,
        img: "./akara.jpg",
        menuText: `Made from blended black-eyed peas, onions, and spices, akara is deep-fried to create crispy-on-the-outside, soft-on-the-inside fritters. It’s commonly eaten for breakfast, paired with pap or agege bread.`,
    },
]

const senctionCenter = document.querySelector('.senction-center');

window.addEventListener('DOMContentLoaded', function() {
    // console.log('show amd seen');
    let displaymenu = meunItems.map(function(arrey) {
        // console.log(arrey);
        
        return`
         <article class="menu-item">
            <img src= ${arrey.img} alt=${arrey.menuHeading} class="photo">
                <div class="menu-info">
                    <header>
                        <h4 class="menu-heading">${arrey.menuHeading}</h4>
                        <h4 class="price">$${arrey.price}</h4>
                    </header>
                    <p class="menu-text">${arrey.menuText}</p>
                </div>
            </article>`
        
    });
    displaymenu = displaymenu.join('')
    // console.log(displaymenu);
    senctionCenter.innerHTML = displaymenu
    
})