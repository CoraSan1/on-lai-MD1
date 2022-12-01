class Product {
    constructor(id, name, img, price) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
    }
}

let product1 = new Product(1, "định", "https://vcdn1-dulich.vnecdn.net/2022/09/14/4-1663171508.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=S06yaNXNAEw5yuUNPbsJYA", 65);
let products = [product1];

function show() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `<tr>
                    <td>${products[i].id}</td>
                    <td>${products[i].name}</td>
                    <td><img src="${products[i].img}" width="250" height="150"></td>
                    <td>${products[i].price}</td>
                    <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal1" onclick="editA(${products[i].id})">edit</button></td>
                    <td><button type="button" onclick="deleteProduct()" class="btn btn-danger" >Delete</button></td>
                </tr>`
    }
    document.getElementById("show").innerHTML = str;

}

show()

function deleteProduct(id) {
    products.splice(id, 1);
    show()
}

function create(){
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let img = document.getElementById("img").value;
    let price = document.getElementById("price").value;
    products.push(new Product(id,name,img,price));
    show();
}

function editA(id){
    for (let i = 0; i < products.length; i++){
        if (products[i].id == id){
            document.getElementById("id1").value = products[i].id;
            document.getElementById("name1").value = products[i].name;
            document.getElementById("img1").value = products[i].img;
            document.getElementById("price1").value = products[i].price;
        }
    }
}
function edit(){
    let id = document.getElementById("id1").value;
    let name = document.getElementById("name1").value;
    let img = document.getElementById("img1").value;
    let price = document.getElementById("price1").value;

    for (let i = 0; i < products.length; i++){
        if (products[i].id == id){
            products[i] = new Product(id,name,img,price);
        }
    }
    show();
}

