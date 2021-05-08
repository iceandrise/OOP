let dataArray=[];
$(document).ready(() => {
  
  httpHook('/get/серьги', 'GET')
 .then(data => {
  dataArray=data
  console.log(data)
  for (let bracer of data){
    $(".box-item").append(makeForm(bracer));
  }})
})

$("#price").click(function () {
  $(".box-item").empty();
  sort_by_price();
});

const sort_by_price = () => {  
   dataArray = dataArray.sort((a, b) => {
    if( Number(a.price) < Number(b.price)) {
    return 1
    } else if (Number(a.price) > Number(b.price)) {
    return -1
    } else {
    return 0
    }
   });
  
  for (let i in dataArray) {
  $(".box-item").append(makeForm(dataArray[i]));
  }
};

$("#material").click(function () {
  $(".box-item").empty();
  sort_by_material();
});

const sort_by_material = () => {  
   dataArray = dataArray.sort((a) => {
    if( a.material =="платина") {
    return -1
    } else{
      return 0
    }
   });
  
  for (let i in dataArray) {
  $(".box-item").append(makeForm(dataArray[i]));
  }
};


const makeForm=(data)=>{
  let status;
  if (data.material =="платина") {
    status == "платина";
  }

  
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
  