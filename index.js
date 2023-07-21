function age()
{
     let date = new Date();
     let id= document.getElementById("input").value;
     let age=0;
     let century = id.slice(0,1);
     let year = id.slice(1,3);
     let month = id.slice(3,5) ;
     century = parseInt(century);
     year = parseInt(year);
     let days = id.slice(5,7);
     if(century==2)
     {
          age=1900+year;
     }
     if(century==3)
     {
          age=2000+year;
     }
     age= date.getFullYear() -age;
      if(date.getMonth > month)
      {
        age--;
      }
      let monthtoput =date. getMonth()+1;
      if( days > date.getDay())
      {
           days = date.getDay() - days + 30;
           monthtoput =date. getMonth();
      }
     if (age > 100 || age <1 )
     {
        document.getElementById("result").innerHTML = "enter a valid number";
     }
     else{
        document.getElementById("result").innerHTML = "Your age is " + age +" years and "+ monthtoput +" Month " + days + " days and " + date.getHours() + " hours" ;
     }

}
