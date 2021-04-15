// import $ from jquery;
// const {$} = require('jquery')
// import { BracerDto } from '../../server/dist/app/Dto/bracer.dto';

// $.ajax({
//   url : 'http://localhost:5000/bracers/',
//   method : 'POST',
//   data:number,
//   data:price,
//   data: weight,
//   data: material,
//   success:delete_,
//   success:add_,
//   dataType:BracerDto
// })

const httpHook = async (url, method='GET', body=null) => {
  url = 'http://localhost:5000' + url
  const out = await $.ajax({
    url,
    method,
    data : body
  })
  .then((data) => {
    return data
  })

  return out
}

// module.exports = httpHook

// $(document).ready(() => {
  // httpHook(`/bracers/`, 'POST', {weight: 1, material: 'metall', price: 40, number: 'sdgsdg'})
  // .then(data => console.log(data))
// })

// $(document).ready(() => {
  
// });
// $.get('http://localhost:5000/bracers/);
// $.ajax({
//   url : `http://localhost:5000/bracers/${id}`,
//   method:'GET',
//   //data:id,
//   // data:number,
//   // data:price,
//   // data: weight,
//   // data: material,
//   // success:delete_,
//   // success:add_,
//   //dataType:BracerDto,
//   success: function(data){
//     $("#content").html(data)
//   }
// })
// .done (data => console.log(data))