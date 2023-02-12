export default function loadHomePage() {
  const content = document.getElementById('content');
  const image = document.createElement('img');
  const headline = document.createElement('p');
  const copy = document.createElement('p');

  image.src = "../images/donuts.jpg";
  headline.innerHTML = 'Headline';
  copy.innerHTML = 'Copy goes here';

  content.appendChild(image);
  content.appendChild(headline);
  content.appendChild(copy);

  document.body.appendChild(content);
}