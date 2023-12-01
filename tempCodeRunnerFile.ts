var shopping_items: string[]= ['beverage', 'footwear', 'crockery','cloth']
var beverage: string[]=['milk','tea','coffee beans']
var footwear: string[]=['shoes','socks']
var clothing:string[]=['blacksuit','kurta','trouser','shirt']
if(beverage[0]=='milk' && beverage[1]=='tea' && beverage[2]=='coffee beans'){
    console.log('all the beverage products are available. you can buy coffee')
}
if(footwear[0]=='shoes' && footwear[1]=='socks') {
    console.log('footwear are availbale')   
}
if(clothing[0]=='blacksuit' || clothing[1]=='kurta' ){
    console.log('buy cloths')
}
else{
    console.log("don't buy anything")
}