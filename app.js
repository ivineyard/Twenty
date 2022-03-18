let input = "y";
let play = 0;
let com = 0;


do {
    
   alert("Welcome to Twenty! In this game we will go against each other trying to get the closest to 20")
   var val = 0;

   alert("I'll go first")
   do {

       do {

           var ran = Math.floor(Math.random() * 11)

       } while(ran == 0)

       val = val + ran;

       if (val < 16){

           alert(`I have ${val}. I'm going to draw`)
       }
       
       else if(val == 20){
           break;
       }
       
       else if(val > 20){
           break;
       }
       
       else if(val >= 16){

           alert(`I have ${val}. I think I'll stop here.`)
           alert("Your turn")
       }
 
   } while(val < 16)
  
   var pval = 0;
   var option = 0;
 
 
   do {
       if(val > 20){
           break;
       }
       
       else {

           do {
               var ran = Math.floor(Math.random() * 10)
           }
           
           while(ran == 0)

           pval = pval + ran;

           if (pval > 20){

               alert(`You got ${pval} and lost.`)
               com++;
           }
           
           else if(pval == 20){
               break;
           }
           
           else {
           option = window.prompt(`You have ${pval}. I had ${val}. If you want to draw press 1 if you want to stop press 2.`)
           }
       }
   }
   
   while ((option != "2") && (pval < 20) && (input != "n"))
 
 
   if ((pval <= 20) && (val <= 20) && (pval > val) && (pval != 20) || (pval == 20)){

       alert(`You got ${pval} and Won.`)
       play++;
   }
   
   else if (val > 20){

       alert(`I got ${val} and lost.`)
       play++;
   }
   
   else if ((val > pval) && (val <= 20) && (pval <= 20)){

       alert(`I got ${val} and won.`)
       com++;
   }
   
   else if ((val == pval) && (pval >= 20)){

       alert(`We got ${pval} and tied.`)
   }
  

   input = window.prompt(`The score is ${com} for me and ${play} for you. Would you like to play again? If yes press 1 if no press 2`)
  
   if (input == "1"){
       val = 0;
       pval = 0;
   }
 
   console.log(val)
   console.log(pval)
 
} while (input != "2")