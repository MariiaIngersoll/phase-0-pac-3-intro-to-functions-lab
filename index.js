function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}

function logShout (string) {
    console.log(string.toUpperCase( ));
  }
  function logWhisper (string) {
    console.log(string.toLowerCase( ));
  }

  function sayHiToHeadphonedRoommate(string) {
    const yes = "I can't hear you!";
    const no = "YES INDEED!";
    const maybe = "I would love to!";
    if (string.toLowerCase() === string) {
      return yes;
    }
    else if (string.toUpperCase() === string) {
      return no;
    }
    else if ("Let\'s have dinner together!" === string) {
      return maybe;
    }
  }