let product =[{
        
        id: '0',
        image: "./images/mobile.jpg",
        title: 'shoe',
        price: 300,
        catagory: 'sports'
    },
   {
        id: '1',
        title: 'bag',
        price: 200,
        catagory: 'sports'},
   
    {
        id: '2',
        title: 'Tie',
        price: 500,
        catagory: 'wear'},

    { 
        id: '3',
        title: 'shirt',
        price: 1000,
        catagory: 'cloths'}
]

let data=''
for(let pro in product){
    const sinPro = product[pro]

    data+=`<div class="text-center"><div class="border-2"> <img src="./images/mobile.jpg"> 
    <div class="text-xl font-bold"> Id:${sinPro.id}</div>
    <div class="text-xl font-bold"> Name:${sinPro.title}</div>
    <div class="text-sm"> Price:$${sinPro.price}</div>
    <div class="text-sm"> catagory:${sinPro.catagory}</div></div></div>`

    console.log(data)
}
document.getElementById('pbox').innerHTML=data;

   
   
