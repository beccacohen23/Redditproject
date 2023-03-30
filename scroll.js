$(function() {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '#section2',
    triggerHook: 0.5,
    duration: '100%'
  });

  scene.setTween(TweenMax.from('#section2', 1, { opacity: 0 }));

  controller.addScene(scene);
});
