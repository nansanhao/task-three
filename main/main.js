module.exports = function main(str) {
  // Write your cade here
  var sum=0;
  if(typeof(str)=="string")
  {
   for (var i=0; i<str.length;i++)
   {
	   sum+=parseInt(str[i]);
   }
  }
  return sum;
};
