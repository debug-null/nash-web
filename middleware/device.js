import { deviceType, isMobile, isIOS } from '~/utils/deviceType.js'
export default function (context) {
  const isServer = process.server;
  if (isServer) {
    console.log(
      '🚀 ~ file: device.js ~ line 6 ~ function ~ isServer===服务端',
      isServer
    )
    context.userAgent = context.req && context.req.headers['user-agent']
  } else {
    console.log(
      '🚀 ~ file: device.js ~ line 6 ~ function ~ isServer===浏览器',
      isServer
    )
    context.userAgent = navigator.userAgent
  }

  context.isMobile = isMobile(context.userAgent)
  console.log("🚀 ~ file: device.js ~ line 21 ~  context.isMobile ",  context.isMobile )
  let mobileOrigin = 'mobile';
  let fullPath = context.route.fullPath;

  if (context.isMobile && !fullPath.includes(mobileOrigin)) {
    context.redirect(301, `${mobileOrigin}${fullPath}`)
    // context.location.replace(`${mobileOrigin}${context.route.fullPath}`);
    return
  }
}
