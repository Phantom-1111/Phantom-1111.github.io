const products = 
[
    {name:"Laptop" , price : 50000, description :"A high end laptop perfect for gaming", image:"https://picsum.photos/536/357" },
    {name:"Mobile" , price : 20000, description :"A high end mobile perfect for gaming", image: "https://picsum.photos/536/355"},
    {name:"HeadSet" , price : 5000, description :"A high end headset perfect for gaming", image: "https://picsum.photos/536/356"},
    {name:"Microsoft 365" , price : 1500, description :"most important for collage students", image: "https://picsum.photos/536/357"}
    

];

function showProducts()
{
    let str = ``
    products.map(e=>{
        str = str + `
    <div class="product-card">
        <img src="${e.image}" alt="${e.name}"/>
        <h3>${e.name}</h3>
        <p class="price">₹${e.price}</p>
        <p class="description">${e.description}</p>
        <button class="add-to-cart-btn">Add to Cart</button>
    </div>
        `
    })
    root.innerHTML = str;
}