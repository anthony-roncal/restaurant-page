export default function loadHomePage() {

  const container = document.createElement('div');
  const headline = document.createElement('h1');

  const appetizerHeader = document.createElement('h2');
  const appetizerContainer = document.createElement('div');
  const appetizerName = document.createElement('p');
  const appetizerDescription = document.createElement('p');
  const appetizerPrice = document.createElement('p');

  const entreeHeader = document.createElement('h2');
  const entreeContainer = document.createElement('div');
  const entreeName = document.createElement('p');
  const entreeDescription = document.createElement('p');
  const entreePrice = document.createElement('p');

  const dessertHeader = document.createElement('h2');
  const dessertContainer = document.createElement('div');
  const dessertName = document.createElement('p');
  const dessertDescription = document.createElement('p');
  const dessertPrice = document.createElement('p');

  container.classList.add('menu-container');

  headline.textContent = 'Menu';

  appetizerHeader.textContent = 'Appetizers';
  appetizerName.textContent = 'Lorem ipsum';
  appetizerDescription.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  appetizerPrice.textContent = '$15';

  entreeHeader.textContent = 'Entrees';
  entreeName.textContent = 'Lorem ipsum';
  entreeDescription.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  entreePrice.textContent = '$40';

  dessertHeader.textContent = 'Dessert';
  dessertName.textContent = 'Lorem ipsum';
  dessertDescription.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  dessertPrice.textContent = '$15';
  
  container.appendChild(headline);
  
  container.appendChild(appetizerHeader);
  appetizerContainer.append(appetizerName, appetizerPrice, appetizerDescription);
  appetizerContainer.classList.add('menu-item');
  container.appendChild(appetizerContainer);
  container.appendChild(appetizerContainer.cloneNode(true));
  container.appendChild(appetizerContainer.cloneNode(true));
  
  container.appendChild(entreeHeader);
  entreeContainer.append(entreeName, entreePrice, entreeDescription);
  entreeContainer.classList.add('menu-item');
  container.appendChild(entreeContainer);
  container.appendChild(entreeContainer.cloneNode(true));
  container.appendChild(entreeContainer.cloneNode(true));
  
  container.appendChild(dessertHeader);
  dessertContainer.append(dessertName, dessertPrice, dessertDescription);
  dessertContainer.classList.add('menu-item');
  container.appendChild(dessertContainer);
  container.appendChild(dessertContainer.cloneNode(true));
  container.appendChild(dessertContainer.cloneNode(true));

  content.appendChild(container);
 }