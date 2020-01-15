import * as $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import WebpackLogo from '@/assets/webpack-logo.png'
import React from 'react'
import {render} from 'react-dom'
import './babel'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack Post Title', WebpackLogo)
$('pre').addClass('code').html(post.toString())


const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo" />
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>Less</h2>
    </div>

    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
)

render(<App/>, document.getElementById('app'))


// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)
