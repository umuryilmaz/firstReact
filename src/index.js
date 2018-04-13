import React from 'react';
import ReactDom from 'react-dom';

/* createElement parameters:
  1- tag type: like h2
  2- attributes: null
  3- children: text inside
*/
ReactDom.render(
  <h2>Hello React with JSX </h2>, 
  document.getElementById('root')
);
