const STORAGE_KEY = "feedback-form-state";
// об'єкт formData з полями які спочатку мають порожні рядки як значення
let formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
// оновлення при завантаженні
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
//відстеження через input
form.addEventListener("input", (event) => {
  const { name, value } = event.target;
// очист від пробілів  по краях
  formData[name] = value.trim();

  // записую у сховище
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// відправлення форми 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
  // перевірка чи обидва поля були заповнені
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  } 
  // виводимо у консоль об’єкт з даними
    console.log("Form Data:", formData);
    
 // очищаю сховище, об’єкт і форму
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset();
});