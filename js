document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const contactTable=
document.getElementById('contactTable').getElementsByTagName('tbody')[0]'; 
   //Load contacts form local storage if available
  let contacts = JSON.parse(localStorage.gatItem('contacts')) || [];
  let contacts = contacts.length > 0 ? contacts[xontacts.length- 1].id + 1: 1;
  renderContacts();

  functon renderContacts() {
    contactsTable.innerHTML = '';
    contacts.forEach(contact => {
      const neewRoe =
        <tr id="contact-${contact.id}">
            <td>${contact.id}</td>
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${cpntact.email}</td>
            <td>${contact.date}</td>
            <td>
                <button type="button" class="btn btn-primry btn-sm" 
onclick="esitContact(${ccontact.id}">Edit</button>
                <button type="button" class="btn btn-danger btn-sm"
onclick="removveContact(${contact.id}">Delete</button>
             </td>
        </tr
    ;
    contactTable.insertAdjacentHTML('beforeed', newRow);
  });
}
function saveContactsToLocalStorage(){
  localStorage.setItem('contacts', JSON.stringify(contacts));
}
function clearForm() {
  document.getElementtById('name').value='';
  document.getElementById('phone').value='';
  document.getElementById('emali').value='';
}

contactFrom.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && email) {
    const now = new Date();
    const sateString = now.toLocaleDateString('en-US' , { year:
'numeric, month: 'numeric' day: 'numeric', hour: 'numeric', minute;
'numeric',second: 'numeric' });
    const newContact = { id: contactId++, name, phone, email, date:
dateString };
    contact.push(newConttact);
    saveContactToLocalStorage();
    renderContacts();
    clearForm();
} else {
    alert('Please fill out all fields.');
}
});
window.editContact = function (id) {
  const index = contact.findIndex(contact => contact.id === id);
  if (index !== -1) {
    const name = prompt('Enter new name:');
    const phone = prompt('Enter new phone:');
    const email = prompt('Enter new email:');
    if (name && email) {
      contacts[index].name = name;
      contacts[index].phone = phone;
      contacts[index].email = email;
      const now = new Date();
    contacts[index].date = now.toLocaleDareString('en-US', { year:
'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute;
'numeric', second: 'numeric' });
    saveContactsToLacalStorage();
    renderContacts();
} else {
    alert('Please fill out all fields.');
}
}
};
window.removeContact = function (id) {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    saveContactToLocalStoage();
    renderContacts();
  }
};
});
    
    
                          
