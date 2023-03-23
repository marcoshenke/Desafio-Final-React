const feetConverter = (num) => {
  if (isNaN(num)) {
    return ''
  }
  let heightMeters = num / 3.281
  let heightMetersFixed = heightMeters.toFixed(2)
  return heightMetersFixed
  
}

export default feetConverter
