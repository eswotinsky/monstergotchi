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
    $('#food-bar-title').text(myTamagotchi.foodLevel);
    $('#play-bar-title').text(myTamagotchi.playLevel);
    $('#sleep-bar-title').text(myTamagotchi.sleepLevel);

    $('#food-bar').css('width', myTamagotchi.foodLevel + '%');
    $('#play-bar').css('width', myTamagotchi.playLevel + '%');
    $('#sleep-bar').css('width', myTamagotchi.sleepLevel + '%');

    myTamagotchi.timePasses();

    let countDown = setInterval(function(){
      $('#food-bar-title').text(myTamagotchi.foodLevel);
      $('#play-bar-title').text(myTamagotchi.playLevel);
      $('#sleep-bar-title').text(myTamagotchi.sleepLevel);

      $('#food-bar').css('width', myTamagotchi.foodLevel + '%');
      $('#play-bar').css('width', myTamagotchi.playLevel + '%');
      $('#sleep-bar').css('width', myTamagotchi.sleepLevel + '%');

      if(myTamagotchi.isDead()){
        $('#display').hide();
        $('#death').show();
        $('#death-name').text(name);
        clearInterval(countDown);
      }
    }, 1000);

    $('#food-button').click(function(){
      myTamagotchi.feed();
      $('#food-bar-title').text(myTamagotchi.foodLevel);
      $('#food-bar').css('width', myTamagotchi.foodLevel + '%');
    })

    $('#play-button').click(function(){
      myTamagotchi.play();
      $('#play-bar-title').text(myTamagotchi.playLevel);
      $('#play-bar').css('width', myTamagotchi.playLevel + '%');
    })

    $('#sleep-button').click(function(){
      myTamagotchi.sleep();
      $('#sleep-bar-title').text(myTamagotchi.sleepLevel);
      $('#sleep-bar').css('width', myTamagotchi.sleepLevel + '%');
    })

    $('#reset-button').click(function(){
      $('#death').hide();
      $('#create').show();
    })

  })
});
