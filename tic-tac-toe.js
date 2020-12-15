$(document).ready(function(){

    var flag=false;
    var state=[0,0,0,0,0,0,0,0];
    var won=false;
    var steps=0;
    
    
   

    $('.block').click(function(event){
        steps+=1;
        

        if(flag===false){
            $(this).find(".block-content").text("X");
            flag=true;
        }
        else{
            $(this).find(".block-content").text("O");
            flag=false;
        }

        $(this).css({"pointer-events":"none"});

    }

    

    );

    $('.block').click(function(event){
            var elmtID= $(this).attr('id');
            if(elmtID==="1"){
                if(flag===true){
                    state[0]+=4;
                    state[3]+=4;
                    state[6]+=4;}
                else{
                    state[0]+=1;
                    state[3]+=1;
                    state[6]+=1;
                }
            }

            if(elmtID==="3"){
                if(flag===true){
                    state[0]+=4;
                    state[5]+=4;
                    state[7]+=4;}
                else{
                    state[0]+=1;
                    state[5]+=1;
                    state[7]+=1;
                }
            }

            if(elmtID==="7"){
                if(flag===true){
                    state[2]+=4;
                    state[3]+=4;
                    state[7]+=4;}
                else{
                    state[2]+=1;
                    state[3]+=1;
                    state[7]+=1;
                }
            }

            if(elmtID==="9"){
                if(flag===true){
                    state[2]+=4;
                    state[5]+=4;
                    state[6]+=4;}
                else{
                    state[2]+=1;
                    state[5]+=1;
                    state[6]+=1;
                }
            }

            if(elmtID==="2"){
                if(flag===true){
                    state[0]+=4;
                    state[4]+=4;}
                else{
                    state[0]+=1;
                    state[4]+=1;
                }
            }
            
            if(elmtID==="4"){
                if(flag===true){
                    state[1]+=4;
                    state[3]+=4;}
                else{
                    state[1]+=1;
                    state[3]+=1;
                }
            }

            if(elmtID==="6"){
                if(flag===true){
                    state[1]+=4;
                    state[5]+=4;}
                else{
                    state[1]+=1;
                    state[5]+=1;
                }
            }

            if(elmtID==="8"){
                if(flag===true){
                    state[2]+=4;
                    state[4]+=4;}
                else{
                    state[2]+=1;
                    state[4]+=1;
                }
            }

            if(elmtID==="5"){
                if(flag===true){
                    state[1]+=4;
                    state[4]+=4;
                    state[6]+=4;
                    state[7]+=4;}
                else{
                    state[1]+=1;
                    state[4]+=1;
                    state[6]+=1;
                    state[7]+=1;
                }
            }
            
            
            
    
        }



    ); 
    
    $('.block').click(function(event){
       

        for(var i=0;i<state.length;i++){
            if(state[i]===3 || state[i]===12){
                won=true;
                break;
            }
        }


        if(won===true){
            if(flag===true){
                $('h1').text("X Won!");}
            else{
                $('h1').text("O Won!");
            }

             $('.block').css({"pointer-events":"none"});
            
        }


    });


    $('.block').click(function(event){

        if(steps===9 || won===true){

            $('.reset').css({'display':'block'});



        }



    });

    $('.reset').click(function(event){

        for(var i=0;i<state.length;++i){
            state[i]=0;
        }

        steps=0;
        won=false;
        flag=false;

        $('.reset').css({"display":"none"});
        $('.block').find('.block-content').text('-');
        $('h1').text('TIC TAC TOE!');
        $('.block').css({"pointer-events":"auto"});



    
        
});
    


});