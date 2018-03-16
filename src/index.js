import React from 'react';
import ReactDom from 'react-dom';

/* createElement parameters:
  1- tag type: like h2
  2- attributes: null
  3- children: text inside
*/
ReactDom.render(
  React.createElement('h2', null, 'This is React Baby' ),
  document.getElementById('root')
);
