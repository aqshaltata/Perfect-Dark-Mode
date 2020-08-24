//Dark mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
var date = new Date();

// Jika jam di perangkat pengguna lebih dari jam 6 sore dan kurang dari jam 6 pagi (MALAM)
if(date.getHours() > 18 || date.getHours() < 6){
	toggleSwitch.checked = true;
	document.documentElement.setAttribute('data-theme', 'dark');
	localStorage.setItem('theme', 'dark');
}
// Sebaliknya
else{
	toggleSwitch.checked = false;
	document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem('theme', 'light');
}
// Jika Pengguna pernah mengunjungi website / blog anda
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    }
    else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    }
  location.reload();
  return false;
}
toggleSwitch.addEventListener('change', switchTheme, false);
