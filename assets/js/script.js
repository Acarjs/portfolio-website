const navLinks = document.querySelectorAll('nav ul li a')

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    const activeNavLink = document.querySelector('.active')
    activeNavLink.classList.remove('active')
    navLink.classList.add('active')

    const activeSection = document.querySelector('main > section.active')
    activeSection.classList.remove('active')

    document
      .querySelector(`main > section${navLink.getAttribute('href')}`)
      .classList.add('active')
  })

  console.log(navLink.getAttribute('href'))
})
