const family = document.getElementById('family');
const name = document.getElementById('name');
const fullName = document.getElementById('full_name');

window.addEventListener('keyup',()=>{
  const familyValue = family.value;
  const nameValue = name.value;

  fullName.innerHTML = `${familyValue} ${nameValue}`;
})