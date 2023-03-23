const feetConverter = (num) => {
  if (!num) {
    return ''
  }
  let converterNum = parseFloat(num)
  return converterNum/3.281
  
}

export default feetConverter
