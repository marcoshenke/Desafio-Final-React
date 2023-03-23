const positionConverter = (position) => {
  switch (position) {
    case 'G':
      return 'Amador';    
    case 'F':
      return 'Ala'; 
    case 'C':
      return 'Pivô';
    case 'F-C || C-F':
      return 'Ala-Pivô';
    case 'G-F || F-G':
      return 'Ala-amador'   
    default:
      return ''    
  }
}

export default positionConverter