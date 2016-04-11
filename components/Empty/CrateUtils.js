import React from 'react';
import mojs from 'mo-js';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';


/*
DEPRECATED!
Crate Utilities. Don't pass state to these components. Presentational Components only!

DefaultCrate = Crate style when it loads.
PressedCrate = Crate style when pressed.
popAnimation = Animation function.
*/

if (canUseDOM) {
  function pop1(el, color) {
    // var el = this.refs.thisCrate,
      // mo.js timeline obj
      const evalColor = eval(color);
      var timeline = new mojs.Timeline(),

      // tweens for the animation:

      // burst animation
      tween1 = new mojs.Burst({
        parent: el,
        duration: 1500,
        shape : 'circle',
        fill : evalColor.lightColor,
        x: '50%',
        y: '50%',
        opacity: 0.6,
        childOptions: { radius: {20:0} },
        radius: {40:120},
        count: 6,
        isSwirl: true,
        isRunLess: true,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }),
      // ring animation
      tween2 = new mojs.Transit({
        parent: el,
        duration: 750,
        type: 'circle',
        radius: {0: 50},
        fill: 'transparent',
        stroke: evalColor.lightColor,
        strokeWidth: {15:0},
        opacity: 0.6,
        x: '50%',
        y: '50%',
        isRunLess: true,
        easing: mojs.easing.bezier(0, 1, 0.5, 1)
      }),
      // icon scale animation
      tween3 = new mojs.Tween({
        duration : 700,
        onUpdate: function(progress) {
        }
      });

    timeline.add(tween1, tween2, tween3);

    return timeline.start()
  }

  function pop2(crateRefs, color, preview) {
    /* Icon 7 */
        const evalColor = eval(color);
        const bounceItem = preview;
        var timeline = new mojs.Timeline(),

        // burst animation
        tween1 = new mojs.Burst({
          parent: crateRefs,
          duration: 900,
          delay: 200,
          shape : 'circle',
          fill: color.darkColor,
          x: '50%',
          y: '50%',
          opacity: 0.6,
          childOptions: { radius: {'rand(20,5)':0} },
          radius: {90:150},
          count: 18,
          isSwirl: true,
          swirlSize: 15,
          isRunLess: true,
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }),
        // ring animation
        tween2 = new mojs.Transit({
          parent: crateRefs,
          duration: 1100,
          type: 'circle',
          radius: {30: 100},
          fill: 'transparent',
          stroke: color.darkColor,
          strokeWidth: {30:0},
          opacity: 0.6,
          x: '50%',
          y: '50%',
          isRunLess: true,
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }),
        tween3 = new mojs.Transit({
          parent: crateRefs,
          duration: 1200,
          delay: 320,
          type: 'circle',
          radius: {30: 80},
          fill: 'transparent',
          stroke: color.darkColor,
          strokeWidth: {20:0},
          opacity: 0.3,
          x: '50%',
          y: '50%',
          isRunLess: true,
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }),
        // icon scale animation
        tween4 = new mojs.Tween({
          duration : 400,
          onUpdate: function(progress) {
            if(progress > 0.3) {
              var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
              bounceItem.style.WebkitTransform = bounceItem.style.transform = 'scale3d(' + '1,' + elasticOutProgress + ',1)';
            }
            else {
              bounceItem.style.WebkitTransform = bounceItem.style.transform = 'scale3d(0,0,1)';
            }
          }
        })

        timeline.add(tween1, tween2, tween3, tween4);

        return timeline.start()
    /* Icon 7 */
  }

}


// Crate Color Properties Objects

export const green = {
  lightColor: '#49FFCC',
  darkColor: '#1ADEDB',
}

export const yellow = {
  lightColor: '#FCE973',
  darkColor: '#FFC868',
}

export const orange = {
  lightColor: '#FD9C44',
  darkColor: '#F67A1B',
}

export const blue = {
  lightColor: '#57E3FD',
  darkColor: '#2BBFD9',
}

export const pink = {
  lightColor: '#FB70AF',
  darkColor: '#EE3B76',
}

export const purple = {
  lightColor: '#FF5DFA',
  darkColor: '#C746E9',
}

export const empty = {
  lightColor: '#E9FAFD',
  darkColor: '#CBEBF0'
}

export const emptyAlt = {
  lightColor: '#CBEBF0'
}

export const productHunt = {
  lightColor: '#DA552F',
  darkColor: '#CC4124'
}

export {pop1, pop2}

//TODO:10 props use in Crate.js
// var comment = this.props.msg.text
// var author = this.props.msg.authorDisplayName
// var image = this.props.msg.image
// var profile = this.props.msg.authorProfileImageURL

//#Beta:10 for use this for the preview msg
// <img className="preview-img" src={profile} alt=""/>
// <p>{author}</p>
// <p>{comment}</p>
// <img src={image} alt=""/>
