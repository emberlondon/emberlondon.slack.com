import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':inner-editor', ':valign'],
  didInsertElement: function(){
    this._super();
    Ember.$(".element").typed({
      strings: ['glimmer', 'html bars', 'saving the world', 'ambitious web apps', 'project nights', 'helping old lady cross the street', 'great talks', 'sense of belonging'],
      // typing speed
      typeSpeed: 100,
      // time before typing starts
      startDelay: 2000,
      // backspacing speed
      backSpeed: 0,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: false,
      // show cursor
      showCursor: true,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html'
    });
  }
});
