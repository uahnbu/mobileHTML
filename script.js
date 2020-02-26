const q = document.querySelector.bind(document);
const qs = document.querySelectorAll.bind(document);
const s = id => q(`#screen_${id}`);

q('#welcome-button').onclick = () => {
  s('welcome').classList.add('move-out');
  s('signup').classList.add('move-in');
};

q('#signup-button').onclick = () => {
  if (
    q('#signup-input1').value
    && q('#signup-input2').value
    && q('#signup-input3').value
    && q('#signup-input4').checked
  ) {
    s('signup').classList.remove('move-in');
    s('signup').classList.add('move-out');
    s('dashboard').classList.add('move-in');
    q('#dashboard-text1').innerHTML = q('#signup-input1').value;
    q('#dashboard-text2').innerHTML = geolocation;
  } else {alert('Please fill all the fields'); }
}