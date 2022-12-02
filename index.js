
//  If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
function get_speed(){
    let speed = parseInt(prompt('Speed input'));
    let demerits=Math.floor((speed-70)/5)
    if(speed<70){
        console.log("OK")
    } 

    else if (demerits>12){
        console.log("License suspended")
    }

}
get_speed()


// function put your garde then print outs the grade
// if your grade is more than 100 the it will print out invalid number
function get_grade(){
    let grade = parseInt(prompt('Enter your grade')); 
    if(grade>79 && grade<=100){
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
    else if (grade>100){
        alert("invalid number")
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


//this is a function that returns the value of the nhif
// when 

function nhif(number){
        if (number<6000){
            return (150)
        }
        else if(number>6000 && number<8000){
            return (300)
        }
        else if(number>8000 && number<12000){
            return (400)
        }
        else if(number>12000 && number<15000){
            return (500)
        }
        else if(number>15000 && number<20000){
            return (600)
        }
        else if(number>20000 && number<25000){
            return (750)
        }
        else if(number>25000 && number<30000){
            return (850)
        }
        else if(number>30000 && number<35000){
            return (900)
         }
         else if(number>35000 && number<40000){
            return (950)
         }
         else if(number>40000 && number<45000){
            return (1000)
         }
         else if(number>45000 && number<50000){
            return (1100)
         }
         else if(number>50000 && number<60000){
            return (1200)
         }
         else if(number>60000 && number<70000){
            return (1300)
         }
         else if(number>70000 && number<80000){
            return (1400)
         }
         else if(number>80000 && number<90000){
            return (1500)
         }
         else if(number>90000 && number<100000){
            return (1600)
         }
         else if(number>100000){
            return (1700)
         }
                              
         
}

nhif()