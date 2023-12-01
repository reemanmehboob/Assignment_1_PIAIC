var shopping_items = ['beverage', 'footwear', 'crockery', 'cloth'];
var beverage = ['milk', 'tea', 'coffee beans'];
var footwear = ['shoes', 'socks'];
var clothing = ['blacksuit', 'kurta', 'trouser', 'shirt'];
if (beverage[0] == 'milk' && beverage[1] == 'tea' && beverage[2] == 'coffee beans') {
    console.log('all the beverage products are available. you can buy coffee');
}
if (footwear[0] == 'shoes' && footwear[1] == 'socks') {
    console.log('footwear are availbale');
}
if (clothing[0] == 'blacksuit' || clothing[1] == 'kurta') {
    console.log('buy cloths');
}
else {
    console.log("don't buy anything");
}
export {};
