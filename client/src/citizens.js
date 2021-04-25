import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import {inputConfig} from './get-hierarchy'
//MUi stuff
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import { getCities, getUsers } from './api';


const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));  

export let CitiData = () => {
  const classes = useStyles();
  const [citizens, setcitizens] = useState([])
  const [cities, setcities] = useState([])
  const [info, setinfo] = useState('')

  useEffect(() => {
    getUsers().then(res=> setcitizens(res.data))
    getCities().then(res=> setcities(res.data))
    
  }, [])


// for variable configuration hierarchy inputConfig takes arguments in order: 
// array of citizens, house, street, district, city, country
// to create a chain "city-street", pass "citizens, false, true, false, true, false"
  let inputconf = inputConfig(citizens, false, true, true, true, false)
  console.log(inputconf)
 

let tooltip = (c) => {
    const result = cities.find(({name})=> c.child.groups[0].name.includes(name))
    console.log(result.name, result.data)
    setinfo(`${result.name} ${result.data} жителей`)

 }

      console.log(inputconf)
      return (
        <div className={classes.root}>
          {inputconf.map((node) => (
            <div key={node._id}>
              <div className="city">{node.name}</div>
              <div>
                {Array.isArray(node.children) ? node.children.map((node) => (
                  <div key={node._id}>
                    <div className="district">{node.child.name}</div>
                    <div>
                      {Array.isArray(node.child.children) ? node.child.children.map((node) => (
                        <div key={node._id}>
                          <div className="street">{node.child.name} </div>
                          <div>
                            {Array.isArray(node.child.children) ? node.child.children.map((node) => (
                              <div key={node._id}>
                                <a className="citizen"  >
                                    <Tooltip onMouseEnter={()=>tooltip(node)} title={info} placement='right' >
                                   <Button> {node.child.name}</Button>
                                   </Tooltip>
                                    </a>
                              </div>
                            )):null}
                          </div>
                        </div>
                      )):null}
                    </div>
                  </div>
                )):null}
              </div>
            </div>
          ))}
        </div>
      );
  }
