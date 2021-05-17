if (process.browser) {
  let windowWidth = window.screen.width
  let { origin, pathname } = window.location
  let basePath = 'gw'
  let mobilePath = 'mobile'
  if (windowWidth <= 750 && !pathname.includes(mobilePath)) {
    let mobileLink = `${origin}${basePath ? '/' + basePath : ''}/${mobilePath}`
    window.location.href = mobileLink
  } else if (windowWidth >= 750 && pathname.includes(mobilePath)) {
    window.isMobile = false
    let webLink = `${origin}/${basePath ? '/' + basePath : ''}`
    window.location.href = webLink
  }
}
