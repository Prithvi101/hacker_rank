function timeConversion(s) {
   // Write your code here
   //Splitting into array
   const time = s.split(':')
//    case 1
   if(time[2].endsWith('PM')&&time[0]!='12'){
       time[0] = Number(time[0])+12
       time[2] = String(time[2]).replace(/[A-Z]/g,'')
   }
//   case 2
   else{
       if(time[0]=='12'&&time[2].endsWith('AM'))time[0]='00';
       time[2] = String(time[2]).replaceAll(/[A-Z]/gi,'')
   }
   return time.join(":")  
}
timeConversion("12:01:00PM")