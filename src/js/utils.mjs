// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// get parameters from query
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const parameter = urlParams.get(param);
  return parameter;
}

export function renderListWithTemplate(
  templateFn, parentElement, list,
  position = 'afterbegin', clear = true) {
    if(clear) {
      parentElement.innerHTML = "";
    }
    const card = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, card.join(""));                                  
}

export async function renderWithTemplate(
  templateFn, parentElement, data,
  position = 'afterbegin', callback = false, clear = true) {
    if(clear) {
      parentElement.innerHTML = "";
    }
    const htmlString = await templateFn(data);
    parentElement.insertAdjacentHTML(position, htmlString);
    if(callback) {
      callback(data);
    }   
}

export function loadTemplate(path){
  return async function (){
    const response = await fetch(path);
    if(response.ok){
      const html = response.text();
      return html;
    }
   }
  }

export function loadHeaderFooter() {
  const headerHTML = loadTemplate("/partials/header.html");
  const footerHTML = loadTemplate("/partials/footer.html");
  let header = document.getElementById("main-header");
  let footer = document.getElementById("main-footer");
  renderWithTemplate(headerHTML, header);
  renderWithTemplate(footerHTML, footer);
}