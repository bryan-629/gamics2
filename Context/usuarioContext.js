import React, { useState, useEffect } from 'react';


const UsuarioContext = React.createContext();

export function UsuarioProvider(props) {
    const [searchUser, setSearchUser] = useState('');
    const [searchPlatform, setSearchPlatform] = useState('psn');
    const [favUser, setFavUser] = useState('');
    const [favPlatform, setFavPlatform] = useState('');



    const getPartidasUser = (platform,userId, setfunctionState) => {
      //console.log(`https://codwz.000webhostapp.com/gamicsBack/Partidas.php?platform=${platform}&user=${parseUserAlmo(userId)}`);
      fetch(`https://codwz.000webhostapp.com/gamicsBack/Partidas.php?platform=${platform}&user=${parseUserAlmo(userId)}`, { method: 'GET' }).then((res) => res.json()).then((data) => { setfunctionState(data) })
    }
    const searchPlayer = (platform,userId, functionState) => { //Busca el litado de usuarios con auto completado segun el nombre ingresado
      try{
        if (userId=='') {
        }else{
          
          //console.log(`https://codwz.000webhostapp.com/gamicsBack/search.php/?platform=${platform}&query=${parseUserAlmo(userId)}`);
          fetch(`https://codwz.000webhostapp.com/gamicsBack/search.php/?platform=${platform}&query=${parseUserAlmo(userId)}`, { method: 'GET' }).then((res) => res.json()).then((data) => { functionState(data) })
          
        }
      }catch{
        
      };
    };
    const playerStats = (platform, userId, setfunctionState) => { //Busca los stats de un usuario
      let dataTime = getWeekTime() 
      user = parseUserAlmo(userId);
      console.log(`https://codwz.000webhostapp.com/gamicsBack/UserData.php?platform=${platform}&user=${user}&periods[]=${dataTime[0]}&periods[]=${dataTime[1]}&periods[]=${dataTime[2]}&periods[]=${dataTime[3]}&periods[]=${dataTime[4]}&periods[]=${dataTime[5]}&periods[]=${dataTime[6]}`);
      fetch(`https://codwz.000webhostapp.com/gamicsBack/UserData.php?platform=${platform}&user=${user}&periods[]=${dataTime[0]}&periods[]=${dataTime[1]}&periods[]=${dataTime[2]}&periods[]=${dataTime[3]}&periods[]=${dataTime[4]}&periods[]=${dataTime[5]}&periods[]=${dataTime[6]}`,{ method: 'GET' }).then((res) => res.json()).then((data) => { setfunctionState(data) })
    }

    const getMatchDetails = ( match, userId,setfunctionState) => {
      console.log(`https://codwz.000webhostapp.com/gamicsBack/Match.php?MatchId=${match}&userId=${parseUserAlmo(userId)}`)
      fetch(`https://codwz.000webhostapp.com/gamicsBack/Match.php?MatchId=${match}&userId=${parseUserAlmo(userId)}`, { method: 'GET' }).then((res) => res.json()).then((data) => { setfunctionState(data) })
    };




    const parseUserAlmo = (user) => {// parsea el usuario y cambia el # por %23
      if (user.includes('#')) {
        let name = user.replace('#', '%23');
        return name
      }
      return user;
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
        playerStats,
        getPartidasUser,
        getMatchDetails
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
