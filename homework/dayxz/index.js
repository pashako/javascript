"use strict"
const gallery = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];
  const galleryList = document.querySelector(".js-gallery");

  const galleryItems = gallery.reduce(
 (acc,el) => acc + `<li class = "gallery__item"><img class = "gallery__image" data-source=${el.original} src =${el.preview} alt = ${el.description}/></li>`,
  ""
  );

  galleryList.innerHTML = galleryItems;
  const lightbox = document.querySelector(".js-lightbox");
  const body = document.body;
  
  function eventHandler(e) {
    if (e.target.nodeName === "IMG"&& e.target.classList.contains("gallery__image")) {
      lightbox.children[1].firstElementChild.setAttribute(
        "src",
        e.target.dataset.source
      );
      lightbox.classList.add("is-open");
      console.log(lightbox.children[1].firstElementChild);
    }else if (e.target === lightbox.lastElementChild){
        lightbox.classList.remove("is-open")
        lightbox.children[1].firstElementChild.removeAttribute("src")
    }
    
    console.log(e.target);
  }
  window.addEventListener("keydown", e=>{
      if (e.code === "Escape"){
          lightbox.classList.remove("is-open");
          lightbox.children[1].firstElementChild.removeAttribute("src");
      }
  });

  body.addEventListener("click", eventHandler);