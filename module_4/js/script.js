(function(){


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i<names.length; i++) {

  // console.log(names[i])
  var str = names[i].toLowerCase();
  var firstLetter = str.charAt(0)
  var cfirstL = str[0].toUpperCase() + str.substring(1);
  
  if (firstLetter== 'j') {
    
     byeSpeaker.speak(cfirstL);
   } else {
     // helloSpeaker.xxxx
     helloSpeaker.speak(cfirstL);
   }
}

})();