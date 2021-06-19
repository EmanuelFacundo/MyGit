export const windowWidth = document.documentElement.clientWidth
export const windowHeight = document.documentElement.clientHeight

export function fontSize(size) {
  if (windowWidth < 360) {
    return `${(size / windowWidth) * 40}vw`
  }
  if (windowWidth < 768) {
    return `${(size / windowWidth) * 50}vw`
  }
  
  return `${(size / windowWidth) * 100}vw`
}

export function padding() {
  if(windowWidth < 360) {
    return 4
  }
  if(windowWidth < 768) {
    return 6
  }

  return 2
}