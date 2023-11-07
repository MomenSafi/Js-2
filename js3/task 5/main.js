function double(cat) {   //the arrgement is 'cat' but when use it call by x 
  return 2 * cat;
}

function double(cat = 7) {   //the arrgement must be variable but you can give a default value
  return 2 * cat;
}

function double(cat = '7') {   //the arrgement must be variable but you can give a default value
  return 2 * cat;
}
