import {tamagotchi} from './tamagotchi.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function(){
  $('#create-form').submit(function(event){
    event.preventDefault();
    $('#create').hide();
    $('#display').show();

    let name = $('#enter-name').val();
    let myTamagotchi = new tamagotchi(name);

    $('#tamagotchi-name').text(myTamagotchi.name);

    myTamagotchi.timePasses();

    let countDown = setInterval(function(){
      $('#food-level').text(myTamagotchi.foodLevel);
      $('#play-level').text(myTamagotchi.playLevel);
      $('#sleep-level').text(myTamagotchi.sleepLevel);
      if(myTamagotchi.isDead()){
        clearInterval(countDown);
      }
    }, 1000);

    $('#food-button').click(function(){
      myTamagotchi.feed();
      $('#food-level').text(myTamagotchi.foodLevel);
    })

    $('#play-button').click(function(){
      myTamagotchi.play();
      $('#play-level').text(myTamagotchi.playLevel);
    })

    $('#sleep-button').click(function(){
      myTamagotchi.sleep();
      $('#sleep-level').text(myTamagotchi.sleepLevel);
    })

  })
});
