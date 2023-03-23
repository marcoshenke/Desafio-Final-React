const poundsConverter = (pounds) => {
  if (!pounds) {
    return ''
  }
    let kilos = pounds / 2.205
  let converterFloatKilos = kilos.toFixed(2)
  return converterFloatKilos
  
}

export default poundsConverter
