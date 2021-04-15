// const httpHook = require("./hooks/http.hook")
let bracer =[];
let dataArray=[];
$(document).ready(() => {
  httpHook('/bracers', 'GET')
  .then(data => {
  dataArray=data
  for (let bracer of data){
    $(".box-item").append(makeForm(bracer));
  }})
})
const makeForm=(data)=>{


  return `<div class="item-block">
  <div class="first-info>
    <div class="item-block__number">${data.number}</div> 
  </div>
  <div class="second-info">
    <div class="item-block__price">${data.price}</div>
    <div class="item-block__weight">${data.weight}</div>
    <div class="item-block__material">${data.material}</div>
  </div>
 </div>`;
  


};
  