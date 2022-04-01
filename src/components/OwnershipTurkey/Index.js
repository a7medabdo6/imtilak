import React from 'react'
// MUI Components
import Box from '@material-ui/core/Box';
// Local Components
import Header from './Header'
import BigBtn from './BigBtn'
import ListOfNews from './ListOfNews'
import FeaturedProjects from './FeaturedProjects'
// Common Components
import LinkDivider from '../common/LinkDivider'
// Style

function index() {
 return (
  <div>

   <Header />
   <BigBtn />
   <ListOfNews />
   <LinkDivider />
   <FeaturedProjects />

  </div>
 )
}

export default index