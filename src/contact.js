export default function loadContactPage() {
    const content = document.getElementById('content');
    const image = document.createElement('img');
    const headline = document.createElement('p');
    const copy = document.createElement('p');
  
    image.src = "../images/donuts.jpg";
    headline.innerHTML = 'Contact';
    copy.innerHTML = 'Contact us!';
  
    content.appendChild(image);
    content.appendChild(headline);
    content.appendChild(copy);
  
    document.body.appendChild(content);
  }