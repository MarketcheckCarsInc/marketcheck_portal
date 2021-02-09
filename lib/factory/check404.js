const imageURLExist = (url) => {
  let img = new Image()
  /* img.onload = () => {
    console.log('Done!')
  } */
  img.src = url
  return img.height > 0
}

export default imageURLExist
