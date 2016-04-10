/**
 * Created by weijianwang on 4/10/16.
 */
var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('scr');
    if(mySrc === 'images/hero.jpg') {
        myImage.setAttribute('src', 'images/dota.jpg');

    } else {
        myImage.setAttribute('src', 'imgaes/hero.jpg');
    }
}