import {tamagotchi} from './../src/tamagotchi.js'

describe ('tamagotchi', function() {
let testTamagotchi;

  beforeEach(function(){
    jasmine.clock().install();
    testTamagotchi = new tamagotchi("Tam A. Gotchi");
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should assign a passed name to the Tamagotchi object', function(){
    expect(testTamagotchi.name).toEqual("Tam A. Gotchi");
  })

  it('should have food, play, and sleep levels of 100 at instantiation', function(){
    expect(testTamagotchi.foodLevel).toEqual(100);
    expect(testTamagotchi.playLevel).toEqual(100);
    expect(testTamagotchi.sleepLevel).toEqual(100);
  })

  it('should starve if food level reaches zero', function(){
    testTamagotchi.timePasses();
    jasmine.clock().tick(100001);
    expect(testTamagotchi.didTamagotchiStarve()).toEqual(true);
  })

  it('should die of boredom if play level reaches zero', function(){
    testTamagotchi.timePasses();
    jasmine.clock().tick(100001);
    expect(testTamagotchi.didTamagotchiDieOfBoredom()).toEqual(true);
  })

  it('should die of sleep deprivation if sleep level reaches zero', function(){
    testTamagotchi.timePasses();
    jasmine.clock().tick(100001);
    expect(testTamagotchi.didTamagotchiDieOfSleepDeprivation()).toEqual(true);
  })

  it('should increase foodLevel by 20, up to a max of 100, when fed', function(){
    testTamagotchi.timePasses();
    jasmine.clock().tick(30001);
    testTamagotchi.feed();
    expect(testTamagotchi.foodLevel).toEqual(90);
    testTamagotchi.feed();
    expect(testTamagotchi.foodLevel).toEqual(100);
  })

  it('should increase playLevel by 20, up to a max of 100, when played with', function(){
    testTamagotchi.timePasses();
    jasmine.clock().tick(30001);
    testTamagotchi.play();
    expect(testTamagotchi.playLevel).toEqual(90);
    testTamagotchi.play();
    expect(testTamagotchi.playLevel).toEqual(100);
  })

  it('should increase sleepLevel by 20, up to a max of 100, when told to sleep', function(){
    testTamagotchi.timePasses();
    jasmine.clock().tick(30001);
    testTamagotchi.sleep();
    expect(testTamagotchi.sleepLevel).toEqual(90);
    testTamagotchi.sleep();
    expect(testTamagotchi.sleepLevel).toEqual(100);
  })

});
