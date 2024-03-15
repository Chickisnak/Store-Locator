const myMap = L.map('map').setView([22.9074872, 79.07306671], 5);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder\'s gyan with ❤️';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(myMap);

var myIcon = L.icon({
  iconUrl: 'marker.png',
  iconSize: [30, 40]
});

storeList.map((shop) => {
  L.marker([shop.geometry.coordinates[1], shop.geometry.coordinates[0]], {
    icon: myIcon
  }).bindPopup(`<h3>${shop.properties.name}</h3>
  <p>${shop.properties.address}</p>
`).addTo(myMap);
})

const ul = document.getElementsByTagName("ul")[0];
storeList.map((shop) => {
  const li = document.createElement("li");
  li.addEventListener("click", () => flytoStore(shop))
  const inner_Text = `<div class="li-item">
                      <h4>${shop.properties.name}</h4>
                      <h6>${shop.properties.address}</h6>
                      <a href="tel:${shop.properties.phone}">${shop.properties.phone}</a></div>`;
  li.innerHTML = inner_Text;
  ul.appendChild(li);
});


function flytoStore(store) {
  const lat = store.geometry.coordinates[1];
  const lng = store.geometry.coordinates[0];
  myMap.flyTo([lat, lng], 14, {
    duration: 3
  });
}