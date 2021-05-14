/**
 *
 * @param {*} UA ,就是userAgent
 * @returns  type: 设备类型
 *           env: 访问环境(微信/微博/qq)
 *           masklayer: 就是给外部拿到判断是否显示遮罩层的,一些特殊环境要引导用户到外部去打开访问
 */

export function isWechat (UA) {
  return /MicroMessenger/i.test(UA)
}

export function isWeibo (UA) {
  return /Weibo/i.test(UA)
}

export function isQQ (UA) {
  return /QQ/i.test(UA)
}

export function isMobile (UA) {
  return /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA)
}

export function isIOS (UA) {
  return /iPhone|iPad|iPod/i.test(UA)
}

export function isAndroid (UA) {
  return /Android/i.test(UA)
}

export function deviceType (UA) {
  if (isMobile(UA)) {
    if (isIOS(UA)) {
      if (isWechat(UA)) {
        return {
          type: 'ios',
          env: 'wechat'
        }
      }
      if (isWeibo(UA)) {
        return {
          type: 'ios',
          env: 'weibo'
        }
      }
      if (isQQ(UA)) {
        return {
          type: 'ios',
          env: 'qq'
        }
      }
      return {
        type: 'ios'
      }
    }
    if (isAndroid(UA)) {
      if (isWechat(UA)) {
        return {
          type: 'android',
          env: 'wechat'
        }
      }
      if (isWeibo(UA)) {
        return {
          type: 'android',
          env: 'weibo'
        }
      }
      if (isQQ(UA)) {
        return {
          type: 'android',
          env: 'qq'
        }
      }
      return {
        type: 'android'
      }
    }
    return {
      type: 'mobile'
    }
  } else {
    return {
      type: 'web'
    }
  }
}
