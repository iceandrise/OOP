let items = [];
let filtered = [];

const drawItems = () => {
  $('.box-item').empty();

  !!items?.length
    ? items.map((item) => {
        const node = $(`
      <div class="items-element-wrapper">
        <div class="items-element">
          <span class="items-element__name">${item.number}</span>
          <img class="items-element__img" src="${item.img}" />
          <span class="cena">    скидка -30%  до 1 мая 2021</span>
          <br>
          <span class="items-element__price">
            ${item.price} бел.руб
          </span>
          <br>
          <span class="items-element__weight">
            Вес: ${item.weight} гр
          </span>
          <br>
          <span class="items-element__material">
            Материал: ${item.material}
          </span>
        </div>
      </div>
    `);

        $('.box-item').append(node);

        return { ...item, node };
      })
    : $('.box-item').append('В корзине нет товаров');
};

const submitPromo = async () => {
  const token = $('#promo').val();
  try {
    const discount = await httpHook('/discount', 'POST', JSON.stringify({ token }));
    alert('Промокод применен!');
    items = items.map(item => ({ ...item, price: item.price - (item.price * Number(discount)) }));
    drawItems();
  }
  catch(e) {
    alert(e.responseJSON.message)
  }
}

$(document).ready(async () => {
  items = JSON.parse(localStorage.getItem('cart'));
  drawItems();

  $('#clear_cart').click(() => {
    localStorage.removeItem('cart');
    items = [];
    drawItems();
  });

  $('#submit_promo').click(submitPromo);

  $('#secret').click(() => alert('secret!'));
});
