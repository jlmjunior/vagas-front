import React from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'

import Link from "next/link";

import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';

const Listas = () => {
  return (
    <div>
      <List component='nav'>
        <Link href="/">
          <ListItem button >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>

        <Link href="/vagas">
          <ListItem button >
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary='Vagas' />
          </ListItem>
        </Link>

        <Link href="/sobre">
          <ListItem button >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='Sobre' />
          </ListItem>
        </Link>

        <Divider />

      </List>
    </div>
  )
}

export default Listas
