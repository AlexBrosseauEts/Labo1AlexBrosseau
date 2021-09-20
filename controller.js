const url = require('url');
exports.addition = function(req, res,x,y) {
  const reqUrl = url.parse(req.url, true);
  let count=Object.keys(reqUrl.query).length;
  let response=[];
  let value= +x + +y;
  response = {
    "op": '+',
    "x": x,
    "y": y,
    "value": value
  }
  if(count>3)
  {
    const arrayOfNames = Object.keys(reqUrl.query);
    for(let i=4;i<= count;i++)
    {
      let name= arrayOfNames[i-1];
      let valueByName= reqUrl.query[name];
      response[name]= valueByName;
    }
  }
  if(x == null)
  {
    response.x="Error: Parameter 'x' is missing";
    delete response["value"];
  }
  else if(isNaN(parseInt(x)))
  {
    response.x="Error: Parameter 'x' is invalid";
    delete response["value"];
  }
  if(y==null)
  {
    response.y="Error: Parameter 'y' is missing";
    delete response["value"];
  }
  else if(isNaN(parseInt(y)))
  {
    response.y="Error: Parameter 'y' is invalid";
    delete response["value"];
  }
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.substraction = function(req, res,x,y) {
  const reqUrl = url.parse(req.url, true);
  let count=Object.keys(reqUrl.query).length;
  let response=[];
  let value= +x - +y;
  response = {
    "op": '-',
    "x": x,
    "y": y,
    "value": value
  }
  if(count>3)
  {
    const arrayOfNames = Object.keys(reqUrl.query);
    for(let i=4;i<= count;i++)
    {
      let name= arrayOfNames[i-1];
      let valueByName= reqUrl.query[name];
      response[name]= valueByName;
    }
  }
  if(x == null)
  {
    response.x="Error: Parameter 'x' is missing";
    delete response["value"];
  }
  else if(isNaN(parseInt(x)))
  {
    response.x="Error: Parameter 'x' is invalid";
    delete response["value"];
  }
  if(y==null)
  {
    response.y="Error: Parameter 'y' is missing";
    delete response["value"];
  }
  else if(isNaN(parseInt(y)))
  {
    response.y="Error: Parameter 'y' is invalid";
    delete response["value"];
  }
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}
exports.division = function(req, res,x,y) {
  const reqUrl = url.parse(req.url, true);
  let count=Object.keys(reqUrl.query).length;
  let response=[];
  let value= +x / +y;
  response = {
    "op": '/',
    "x": x,
    "y": y,
    "value": value
  }
  if(+y==0)
  {
    response.value="Infinity";
    if(+x==0)
    {
      response.value="NaN";
    }
  }
  if(count>3)
  {
    const arrayOfNames = Object.keys(reqUrl.query);
    for(let i=4;i<= count;i++)
    {
      let name= arrayOfNames[i-1];
      let valueByName= reqUrl.query[name];
      response[name]= valueByName;
    }
  }
  if(x == null)
  {
    response.x="Error: Parameter 'x' is missing";
    delete response["value"];
  }
  else if(isNaN(parseInt(x)))
  {
    response.x="Error: Parameter 'x' is invalid";
    delete response["value"];
  }
  if(y==null)
  {
    response.y="Error: Parameter 'y' is missing";
    delete response["value"];
  }
  else if(isNaN(parseInt(y)))
  {
    response.y="Error: Parameter 'y' is invalid";
    delete response["value"];
  }
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.modulo = function(req, res,x,y) {
  const reqUrl = url.parse(req.url, true);
  let count=Object.keys(reqUrl.query).length;
  let response=[];
  let value= +x % +y;
  response = {
    "op": '%',
    "x": x,
    "y": y,
    "value": value
  }
  if(+y==0)
  {
    response.value="NaN";
  }
  if(count>3)
  {
    const arrayOfNames = Object.keys(reqUrl.query);
    for(let i=4;i<= count;i++)
    {
      let name= arrayOfNames[i-1];
      let valueByName= reqUrl.query[name];
      response[name]= valueByName;
    }
  }
  if(x == null)
  {
    response.x="Error: Parameter 'x' is missing";
    delete response["value"];
  }
  else if(isNaN(parseInt(x)))
  {
    response.x="Error: Parameter 'x' is invalid";
    delete response["value"];
  }
  if(y==null)
  {
    response.y="Error: Parameter 'y' is missing";
    delete response["value"];
  }
  else if(isNaN(parseInt(y)))
  {
    response.y="Error: Parameter 'y' is invalid";
    delete response["value"];
  }
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.multiply = function(req, res,x,y) {
  const reqUrl = url.parse(req.url, true);
  let count=Object.keys(reqUrl.query).length;
  let response=[];
  let value= +x * +y;
  response = {
    "op": '*',
    "x": x,
    "y": y,
    "value": value
  }
  if(count>3)
  {
    const arrayOfNames = Object.keys(reqUrl.query);
    for(let i=4;i<= count;i++)
    {
      let name= arrayOfNames[i-1];
      let valueByName= reqUrl.query[name];
      response[name]= valueByName;
    }
  }
  if(x == null)
  {
    response.x="Error: Parameter 'x' is missing";
    delete response["value"];
  }
  else if(isNaN(parseInt(x)))
  {
    response.x="Error: Parameter 'x' is invalid";
    delete response["value"];
  }
  if(y==null)
  {
    response.y="Error: Parameter 'y' is missing";
    delete response["value"];
  }
  else if(isNaN(parseInt(y)))
  {
    response.y="Error: Parameter 'y' is invalid";
    delete response["value"];
  }
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}
exports.prime = function(req, res,n) {
  const reqUrl = url.parse(req.url, true)
  var value=IsPrime(n);
  var response = [
    "value: " +value
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}
function IsPrime(n)
{
  var value=true;
  for(var i =2;i<n;i++)
  {
    if(n % i ==0)
    value=false;
  }
  return value;
}
function FindNthPrime(n)
{
  var count=0;
  for(var j =2;j<10000;j++)
  {
    if(IsPrime(j) ===true)
    {
      console.log(j);
      count=count+1;
    }
    if(+count ===+n)
    {
      return j;
      break
    }
  }
}
exports.nthPrime = function(req, res,n) {
  const reqUrl = url.parse(req.url, true);
  var value= FindNthPrime(n);
  console.log('ass');
  var response = [
    "value: " +value
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}
exports.factorial = function(req, res,n) {
  const reqUrl = url.parse(req.url, true)
  var value=1;
  for(var i =n;i>=1;i--)
  {
    value= value*i;
  }
  var response = [
    "value: " +value
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.invalidUrl = function(req, res) {
  const reqUrl = url.parse(req.url, true);
  if(reqUrl.query.op==null)
  {
    response = {
      "op": "Error: op parameter is missing"
    }
  }
  else
  {
    response = {
      "op": "Error: op parameter is invalid"
    }
  }
   res.statusCode = 404;
   res.setHeader('content-Type', 'Application/json');
   res.end(JSON.stringify(response))
}