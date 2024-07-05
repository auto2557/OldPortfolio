function Menu(e) {
  let list = document.querySelector('ul');
  if (e.name === 'menu') {
    e.name = "close";
    list.classList.add('top-[80px]');
    list.classList.add('opacity-100');
    
    var menuItems = document.querySelectorAll('ul li');
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        closeMenu();
      });
    });
  } else {
    e.name = "menu";
    list.classList.remove('top-[80px]');
    list.classList.remove('opacity-100');
  }
}

function clickTab(){
  let icon = document.getElementsByName("close");
  var iconArray = Array.from(icon);
  iconArray[0].name = "menu";
}

function closeMenu() {
  let list = document.querySelector('ul');
  let icon = document.querySelector('ion-icon[name="close"]');
  list.classList.remove('top-[80px]');
  list.classList.remove('opacity-100');
  if (icon) {
    icon.name = "menu";
  }
}