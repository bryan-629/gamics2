export const getName = (name) => {
    
    if (name.includes('#')) {
      let userName = name.split('#')[0];

      return userName;
    };
    return name;
}; 

export const getNameWithOut23 = (name) => { 
    
  if (name.includes('%23')) {
    let userName = name.split('%23')[0];
        console.log('include')
    return userName;
  };
  
  console.log('no include')
  return name;
}; 

export const getNameId = (name) => {
    if (name.includes('#')) {
        let userName = name.split('#')[1];
        return '#'+userName;
      };
      return name;
};