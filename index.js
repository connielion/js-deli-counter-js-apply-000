
function takeANumber(line, name){
  // find index of name in line, add 1
  let position = line.indexOf(name) + 1;
  // return string with template literal
  return `Welcome, ${name}. You are number ${position} in line.`
}


function nowServing(line) {
  
  if(line.length>1){
    const res = line.shift();
    console.log(line);
    return res;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if(line.length===0) return "The line is currently empty.";
  
  let str = [];
  
  for(let i = 1; i < line.length; i++){
    const name = line[i];
    str.push(`${i}. ${name}`) 
  }
  return "The line is currently: " + str.join(', ');
}
