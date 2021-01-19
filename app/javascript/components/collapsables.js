

const initCollapsables = () => {
  const collapsables = document.querySelectorAll('.collapsable');
  console.log(collapsables)

  for (let index = 0; index < collapsables.length; index++) {
    const collapsable = collapsables[index];

    const button = collapsable.querySelector('button')
    const icon = collapsable.querySelector('span.icon > i')
    console.log(icon)

    button.addEventListener('click', () => {
      collapsable.classList.toggle('show')
      
        if (icon.classList.contains('fa-chevron-down')) {
          icon.classList.remove('fa-chevron-down')
          icon.classList.add('fa-chevron-up')
        } else {
          icon.classList.remove('fa-chevron-up')
          icon.classList.add('fa-chevron-down')
        }
      
    })
  }

}

export { initCollapsables };

