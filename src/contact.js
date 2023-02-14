export default function loadHomePage() {
    const container = document.createElement('div');
    const headline = document.createElement('h1');

    const phoneLabel = document.createElement('h3');
    const phone = document.createElement('p');
    const emailLabel = document.createElement('h3');
    const email = document.createElement('p');
    const addressLabel = document.createElement('h3');
    const address = document.createElement('p');

    container.classList.add('contact-container');
    
    headline.textContent = 'Contact us';

    phoneLabel.textContent = 'Call us at';
    phone.textContent = '(555) 555-5555';

    emailLabel.textContent = 'Email us at';
    email.textContent = 'email@fakerestaurant.com'

    addressLabel.textContent = 'Find us at';
    address.textContent = '123 Street, City, CA 90210';

    container.append(headline, phoneLabel, phone, emailLabel, email, addressLabel, address);

    content.appendChild(container);
}