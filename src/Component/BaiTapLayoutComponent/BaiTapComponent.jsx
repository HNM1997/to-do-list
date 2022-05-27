import React, { Component } from 'react'
import Body from './Body.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import NavBar from './NavBar.jsx'

export default class BaiTapComponent extends Component {
  arr = [
    {title:'Fresh new layout',content:"With Bootstrap 5, we've created a fresh new layout for this template!",i:'bi bi-collection'},
    {title:'Free to download',content:"As always, Start Bootstrap has a powerful collectin of free templates.",i:'bi bi-collection'},
    {title:'Jumbotron hero header',content:"The heroic part of this template is the jumbotron hero header!",i:'bi bi-collection'},
    {title:'Feature boxes',content:"We've created some custom feature boxes using Bootstrap icons!",i:'bi bi-collection'},
    {title:'Simple clean code',content:"We keep our dependencies up to date and squash bugs as they come!",i:'bi bi-collection'},
    {title:'A name you trust',content:"Start Bootstrap has been the leader in free Bootstrap templates since 2013!",i:'bi bi-collection'},
  ]
  render() {
    return (
      <div>
          <NavBar/>
          <Body mangContent = {this.arr}/>
          <Footer/>
      </div>
    )
  }
}
