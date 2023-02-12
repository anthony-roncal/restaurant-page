export default function loadMenuPage() {
    const content = document.getElementById('content');
    const image = document.createElement('img');
    const headline = document.createElement('p');
    const copy = document.createElement('p');
  
    image.src = "../images/donuts.jpg";
    headline.innerHTML = 'Menu';
    copy.innerHTML = 'This is the menu';
  
    content.appendChild(image);
    content.appendChild(headline);
    content.appendChild(copy);
  
    document.body.appendChild(content);
  }