let dataArray=[];
$(document).ready(() => {
  
  httpHook('/get/кольцо', 'GET')
 .then(data => {
  dataArray=data
  console.log(data)
  for (let bracer of data){
    $(".box-item").append(makeForm(bracer));
  }})
})



const makeForm=(data)=>{
  // let status;
  // if (data.bracer < 10) {
  //   status = "bracelets";
  // }

  
  return ` <li class="items-element">
 
  <span class="items-element__name">${data.number}</span>

  <img class="items-element__img" src="${data.img}" />
  <span class="cena">    скидка -30%  до 1 мая 2021</span>

  <span class="items-element__price">
  ${data.price} бел.руб</span>

  <span class="items-element__weight">
  Вес:
  ${data.weight}
  гр
  </span>

  <span class="items-element__material">

       Материал: 
  ${data.material}</span>
 </li>`;
 
  


};
  