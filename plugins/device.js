if (process.browser) {
  let windowWidth = window.screen.width
  let { href, pathname } = window.location
  let mobilePath = 'mobile'
  if (windowWidth <= 750 && !pathname.includes(mobilePath)) {
    let link =  `${href}${mobilePath}`;
    window.location.href =link
  } else if (windowWidth >= 750 && pathname.includes(mobilePath)) {
    window.isMobile = false;
    let link = `${href}/${pathname.replace(
      '/' + mobilePath + '/',
      ''
    )}`
    window.location.href = link
  }
}
