
const elForm = document.querySelector(".contact-form");
const elContactName = elForm.querySelector(".input-name");
const elContactTitle = elForm.querySelector(".input-detalist");
const elContactPhone = elForm.querySelector(".input-phone");
const elContactTemplate = document.querySelector(".contact-temp").content;
const elList = document.querySelector(".js-list")
let contactArr = [];

function renderContact(contactArray) {
  elList.innerHTML = ""
  const contactFragment = document.createDocumentFragment();
  contactArray.forEach((item, index) => {
    const elClone = elContactTemplate.cloneNode(true);
    elClone.querySelector(".contact-id").textContent = index + 1;
    elClone.querySelector(".contact-title").textContent = item.name;
    elClone.querySelector(".contact-link").textContent = `+998${item.user_numer}`;
    elClone.querySelector(".contact-link").href = `tel:+998${item.user_numer}`;
    elClone.querySelector(".contact-btn").dataset.contactId = index;
    contactFragment.appendChild(elClone)
  });
  elList.appendChild(contactFragment)
}

function deleteContact() {
  elList.addEventListener("click", (evt) => {
    if (evt.target.matches(".contact-btn")) {
      const deleteId = Number(evt.target.dataset.contactId)
      // console.log(deleteId);

      contactArr.splice(deleteId, 1);
      renderContact(contactArr)
    }
  })
}
deleteContact()

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const contactName = elContactName.value.trim();
  const contactPhone = elContactPhone.value;

  const contactObj = {
    name: contactName,
    user_numer: contactPhone
  };
  contactArr.push(contactObj);
  renderContact(contactArr)
})

