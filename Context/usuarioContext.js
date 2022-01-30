import React, { useState, useEffect } from 'react';


const UsuarioContext = React.createContext();

export function UsuarioProvider(props) {
    const [searchUser, setSearchUser] = useState('');
    const [searchPlatform, setSearchPlatform] = useState('psn');
    const [favUser, setFavUser] = useState('');
    const [favPlatform, setFavPlatform] = useState('');
  

    const searchPlayer = (platform,userId, functionState) => { //Busca el litado de usuarios con auto completado segun el nombre ingresado
      try{
        if (userId=='') {
          
        }else{
          fetch(`https://codwz.000webhostapp.com/gamicsBack/search.php/?platform=${platform}&query=${userId}`, { method: 'GET' }).then((res) => res.json()).then((data) => { functionState(data) })
        }
      }catch{
        
      };
    };
    const playerStats = (platform, userId, setfunctionState) => { //Busca los stats de un usuario
      let dataTime = getWeekTime() 
      let user;
      if (platform !="uno" || platform !="battle") {
        user = userId;
      }else{
        user = parseUserAlmo(userId);
      };
      
      fetch(`https://codwz.000webhostapp.com/gamicsBack/UserData.php?platform=${platform}&user=${user}&periods[]=${dataTime[0]}&periods[]=${dataTime[1]}&periods[]=${dataTime[2]}&periods[]=${dataTime[3]}&periods[]=${dataTime[4]}&periods[]=${dataTime[5]}&periods[]=${dataTime[6]}`, { method: 'GET' }).then((res) => res.json()).then((data) => { setfunctionState(data) })
    }

    const parseUserAlmo = (user) => {// parsea el usuario y cambia el # por %23
      let name = user.split('#')
      return name[0] + "%23" + name[1]
    }
  
    const getWeekTime = () =>{//Obtiene la fecha de la semana en sistema unix
      let date = new Date();
      let dateArray = [];
      date.setHours(23,59,59,0)
      date = date.getTime();
      for (let index = 0; index < 7; index++) {
        dateArray.push(date);
        date = date - 86400000;
      }
      
      return dateArray;
    }

 

  const value = React.useMemo(() => {
    return ({
        searchUser,
        setSearchUser,
        searchPlatform,
        setSearchPlatform,
        favUser,
        setFavUser,
        favPlatform,
        setFavPlatform,
        searchPlayer,
        playerStats
    })
  }, [searchPlatform, searchUser])

  return <UsuarioContext.Provider value={value} {...props} />



}
export function useUsuario(params) {
  const context = React.useContext(UsuarioContext)
  if (!context) {
    throw new Error('UseUsuario debe de estar dentro del proveedor UsuarioContext')
  }
  return context;
}
