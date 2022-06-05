'use strict';

// 2. Variable

let globalName = 'global Name';
{
  let name = 'junsung';
  console.log(name);
  
  name = 'hello';
  console.log(name);
  console.log("[block Scope]", globalName);
}
console.log("test",name);
console.log("[global Scope]", globalName);
