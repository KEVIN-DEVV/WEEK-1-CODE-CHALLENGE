function get_speed(){
    let speed = parseInt(prompt('Speed input'));
    let demerits=Math.floor((speed-70)/5)
    if(speed<70){
        console.log("OK")
    } 
    else if(speed>70){
      console.log(demerits)   
    }
    console

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