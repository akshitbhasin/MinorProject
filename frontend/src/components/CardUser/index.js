import React, {useState} from 'react';
import { Container } from './styles';
import {Tooltip} from 'react-tippy';
export default function CardUser({ user , color} ) { 
  const [repos, setRepos] = useState([]);
  const [open, setOpen] = useState(false);
  async function getPinnedRepos(user){
    const response = await fetch(`https://api.github.com/users/${user.username}/repos`);
    const result = await response.json();
    let arr = [];
    for(const key in result){
      arr.push(result[key]);
    } 
    setRepos(arr);
  }
  function reposTooltip(user, repos){
    let str = "Projects By " + user.name +": ";
    let initStr = `Click ${user.name}'s card to view their projects`
    for(let i = 0; i<repos.length; i++){
      if(repos[i].name===undefined){
        str =  `No Projects Found For ${user.name}`; 
        break;
      }else{
          str+=(repos[i].name);
          str+=", \n";
        }
    }
    
    if(repos.length>0)
      return str;
    return initStr;
  }
  
  return (
    <>
    <Tooltip title = {reposTooltip(user, repos)}  position='left' size ="big" hideOnClick={true}>
    <Container  src={user.avatar_url} color={color} onMouseDown={async () =>{await getPinnedRepos(user)}}>
      <header></header>
      <footer>
         <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </footer>
    </Container>
    </Tooltip>
    </>
  );
}
