let items = [];
let filtered = [];

const getIp = () => {
  return fetch('https://www.cloudflare.com/cdn-cgi/trace')
    .then((res) => res.text())
    .then((data) => {
      let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
      return data.match(ipRegex)[0];
      i;
    });
};

const drawItems = () => {
  $('.box-item').empty();

  const toDraw = !!filtered.length ? filtered : items;

  toDraw.map((item) => {
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
          <br>
          <br>
          <button class="add-to-cart-button" id="add">${
            isInCart(item) ? 'Уже в корзине' : 'Добавить в корзину'
          }</button>
        </div>
      </div>
    `);

    $('.box-item').append(node);

    node.find('#add').click(() => addToCart(item));

    return { ...item, node };
  });
};

const addToCart = (item) => {
  if (!localStorage.getItem('cart'))
    localStorage.setItem('cart', JSON.stringify([item]));
  localStorage.setItem(
    'cart',
    JSON.stringify([
      ...JSON.parse(localStorage.getItem('cart')).filter(
        (cartItem) => item._id !== cartItem._id
      ),
      item,
    ])
  );

  drawItems();
};

const isInCart = (item) => {
  return !!JSON.parse(localStorage.getItem('cart'))?.find(
    (cartItem) => item._id === cartItem._id
  );
};

const sortByPrice = () => {
  items = items.sort((a, b) => {
    if (Number(a.price) < Number(b.price)) return 1;
    else return -1;
  });

  drawItems();
};

const filterByMaterial = (material) => {
  !!filtered.length
    ? (filtered = [])
    : (filtered = items.filter((item) => item.material === material));

  drawItems();
};

$(document).ready(async () => {
  items = await httpHook('', 'GET');

  const type = new URLSearchParams(window.location.search).get('type');

  if (type) items = items.filter((item) => item.type === type);

  drawItems();

  $('#price').click(sortByPrice);
  $('#material').click(() => filterByMaterial('платина'));

  getIp().then((ip) => console.log(ip));
});
