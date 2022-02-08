export const getName = (name) => {
    
    if (name.includes('#')) {
      let userName = name.split('#')[0];
      return userName;
    };
    return name;
}; 

export const getNameId = (name) => {
    if (name.includes('#')) {
        let userName = name.split('#')[1];
        return '#'+userName;
      };
      return name;
};