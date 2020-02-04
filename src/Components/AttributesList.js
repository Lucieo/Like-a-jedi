import React from 'react';
import {ListItem, ListItemText, List} from '@material-ui/core';


export default function AttributeList({item, attributes}){
  return(
    <List>
    {
      attributes.map((attribute,key)=>{
        if(attribute in item && item[attribute]!==undefined){
          return(
            <ListItem key={key}>
              <ListItemText primary={`${attribute} : ${item[attribute]}`} />
            </ListItem>
          )
        }
      })
    }
    </List>
  )}
