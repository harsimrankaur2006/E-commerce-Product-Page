var data = [
    // phones
    {name:"iPhone", price:100000, cat:"phone", img:"iphone.webp"},
    {name:"Samsung", price:7000, cat:"phone", img:"samsung.jpg"},
    {name:"Realme", price:3000, cat:"phone", img:"realme.png"},
    {name:"OnePlus", price:5000, cat:"phone", img:"Oneplus-nord-3.jpg"},
    {name:"Pixel", price:8500, cat:"phone", img:"pixel.webp"},

    // laptops
    {name:"HP Laptop", price:150000, cat:"laptop", img:"HP Laptop.jpg"},
    {name:"Dell Laptop", price:110000, cat:"laptop", img:"Dell Laptop.png"},
    {name:"Lenovo Laptop", price:95000, cat:"laptop", img:"Lenovo Laptop.webp"},
    {name:"Asus Laptop", price:120000, cat:"laptop", img:"Asus Laptop.jpg"},
    {name:"Acer Laptop", price:108000, cat:"laptop", img:"Acer Laptop.webp"},

    // watches
    {name:"Boat Watch", price:1800, cat:"watch", img:"Boat Watch.jpg"},
    {name:"Noise Watch", price:1000, cat:"watch", img:"Noise Watch.webp"},
    {name:"Titan Watch", price:2000, cat:"watch", img:"Titan Watch.webp "},
    {name:"Fitbit", price:1500, cat:"watch", img:"Fitbit.jpg"},
    {name:"Apple Watch", price:4000, cat:"watch", img:"Apple Watch.jpg"},

    // others
    {name:"Speaker", price:900, cat:"other", img:"Speaker.jpg"},
    {name:"Mouse", price:250, cat:"other", img:"Mouse.webp"},
    {name:"Keyboard", price:450, cat:"other", img:"Keyboard.jpg"},
    {name:"Charger", price:200, cat:"other", img:"Charger.jpg"},
    {name:"Headphone", price:1200, cat:"other", img:"Headphone.jpg"}
];

var list = document.getElementById("list");
// show items
function show(arr) {
    list.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var p = arr[i];
        var d = document.createElement("div");
        d.className = "item";
        d.innerHTML =
            "<img src='" + p.img + "'><br>" +
            "<b>" + p.name + "</b><br>" +
            "₹ " + p.price;
        list.appendChild(d);
    }
}
// update list
function update() {
    var newArr = [];
    var cat = document.getElementById("catBox").value;
    var sort = document.getElementById("sortBox").value;
    // filter
    for (var i = 0; i < data.length; i++) {
        if (cat == "all" || data[i].cat == cat) {
            newArr.push(data[i]);
        }
    }
    // sort
    if (sort == "low") {
        newArr.sort(function(a, b) {
            return a.price - b.price;
        });
    }
    if (sort == "high") {
        newArr.sort(function(a, b) {
            return b.price - a.price;
        });
    }
    if (sort == "name") {
        newArr.sort(function(a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
    }
    show(newArr);
}
// first load
show(data);