ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.770233,37.636787],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "none",
      geolocationControlPosition: 'none',
      geolocationControlFloat: 'none',
      zoomControlSize: "none",
      zoomControlFloat: "none",
      zoomControlPosition: 'none'
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.770233,37.636787],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: 'img/svg/map.svg',
      iconImageSize: [12, 12],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}


// ADRESS

document.querySelector("#map").addEventListener("click", function () {
  document.querySelector(".contacts__adress").classList.add("active");
})
document.querySelector(".contacts__adress-btn").addEventListener("click", function () {
  document.querySelector(".contacts__adress").classList.remove("active");
})
