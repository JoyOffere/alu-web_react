import $ from 'jquery';
import './header.css';

console.log('Init header');

$(document).ready(() => {
  $('body').prepend('<div id="logo"></div><h1>Holberton Dashboard</h1>');
});