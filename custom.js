
    function theyfire1(){
        life=life-1;
        
             HIT6.load();
              HIT6.play();
        var get1 = document.querySelector("#they1");
         get1.src="images/hostaget.png";
     
        setTimeout(removd,150);
        
        
        
        if (life<=0){
            setTimeout(opps,100); 
        }
        
        else {};
        scores();
        
    }
    
     function theyfire2(){
        life=life-1;
        
             HIT6.load();
              HIT6.play();
        var get2 = document.querySelector("#they2");
         get2.src="images/hostaget.png";
     
        setTimeout(removd2,150);
        
        
        
        if (life<=0){
            setTimeout(opps,100); 
        }
        
        else {};
         scores();
        
    }
    
     function theyfire3(){
        life=life-1;
        
             HIT6.load();
              HIT6.play();
        var get3 = document.querySelector("#they3");
         get3.src="images/hostage1t.png";
     
        setTimeout(removd3,150);
        
        
        
        if (life<=0){
            setTimeout(opps,100); 
        }
        
        else {};
     scores();   
    }
    
     function theyfire4(){
        life=life-1;
        
             HIT6.load();
              HIT6.play();
        var get4 = document.querySelector("#they4");
         get4.src="images/hostage1t.png";
     
        setTimeout(removd4,150);
        
        
        
        if (life<=0){
           setTimeout(opps,100); 
        }
        
        else {};
        scores();
    }

function ourtes (){
    
    
    var node = document.createElement("DIV");  
var textNode = document.createTextNode("by mehrab731");
node.appendChild(textNode);

    

          node.style.position = "absolute";
            node.style.bottom = "1%";
           node.style.width = "5%%";
           node.style.right = "1%";
    node.style.color = "white";
    node.style.fontFamily = "cursive";
    

         document.body.appendChild(node);

           
    
}


