if (process.browser) {
  let windowWidth = window.screen.width
  let { origin, pathname } = window.location
  let mobilePath = 'mobile'
  if (windowWidth <= 750 && !pathname.includes(mobilePath)) {
    window.location.href = `${origin}/${mobilePath}/${
      pathname === '/' ? '' : pathname
    }`
  } else if (windowWidth >= 750 && pathname.includes(mobilePath)) {
    window.isMobile = false
    window.location.href = `${origin}/${pathname.replace(
      '/' + mobilePath + '/',
      ''
    )}`
  }
}
