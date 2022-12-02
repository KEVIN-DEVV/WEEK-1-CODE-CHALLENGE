function get_speed(){
    let speed = parseInt(prompt('Speed input'));
    let demerits=Math.floor((speed-70)/5)
    if(speed<70){
        console.log("OK")
    } 
    else if(speed>70){
        console.log(demerits)
       console.log("License suspended")   
    }

}
get_speed()

function get_grade(){
    let grade = parseInt(prompt('Enter your grade')); 
    if(grade>79){
        alert('Your grade is :A');
    }
    else if(grade>60 && grade<=79){
        alert("your grade is :B")
    } 
    else if(grade>49 && grade<=60){
        alert("your grade is :D")
    }
    else if(grade>40 && grade<=49){
        alert("your grade is :C")
    }
    else if(grade<=40){
        alert("your grade is :E")
    }
}
get_grade()

function paye(number){
    if(number<=24000){
       return number*0.1
    }
    else if(number>24000 && number<32333){
        return number*0.25
    }
    else if(number>32333){
        return number*0.30
    }
}
paye()

function nhif(number){
        if (number<6000){
            return number-150
        }
        else if(number>6000 && number<8000){
            return (number-300)
        }
        else if(number>8000 && number<12000){
            return (number-400)
        }
        else if(number>12000 && number<15000){
            return (number-500)
        }
        else if(number>15000 && number<20000){
            return (number-600)
        }
        else if(number>20000 && number<25000){
            return (number-750)
        }
        else if(number>25000 && number<30000){
            return (number-850)
        }
        else if(number>30000 && number<35000){
            return (number-900)
         }
         else if(number>35000 && number<40000){
            return (number-950)
         }
         else if(number>40000 && number<45000){
            return (number-1000)
         }
         else if(number>45000 && number<50000){
            return (number-1100)
         }
         else if(number>50000 && number<55000){
            return (number-1200)
         }
                              
         
}