const poundsConverter = (pounds) => {
  if (!pounds) {
    return ''
  }
  let converterPounds = parseFloat(pounds)
  return converterPounds/2.205
  
}

export default poundsConverter
