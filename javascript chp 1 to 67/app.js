//========================================================================================================
//                                         CHAPTER # 01
//========================================================================================================

// task # 01 
alert(" hey users ! Welcome to my website TechZone");

//task # 02
alert("Error! Please enter a valid password");

//task # 03
alert("Welcome to JS land.... \n Happy Coding!");

//task # 04
alert("Welcome to Js land");
alert("happy coding!");

//task # 05
alert("hello... I can rus JS through my web browser's console");

//TASL 07
function hello(){
    alert("hello world")
}
//<input type="button" onclick="hello()" value="click here" class="btn btn-primary">
document.write("welcome to my web page")

//========================================================================================================
//                                         CHAPTER # 02
//========================================================================================================

//task 1
var username;
//task 2
var myName = "Saira Awan";
//task 3
var message = "Hello World";
alert(message);
//task 4
var name= " Saira";
var age= " 21";
var certification = " Wordpress developer";
alert(name);
alert(age);
alert(certification);
//task 5
var meme ="PIZZA";
alert(meme);
alert(meme.slice(0,meme.length-1));
alert(meme.slice(0,meme.length-2));
alert(meme.slice(0,meme.length-3));
alert(meme.slice(0,meme.length-4));
//task 6
var email ="sairaawan2396@yahoo.com";
alert("my email is "+email);
//task 7
var book="A Smarter way to learn javascript";
alert("I am trying to learn from the book "+book);

//task 8
<script type="text/javascript">
document.write(" YAH! I can write HTML content through javascript");
</script>

// task 9
var sym= "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(sym);


//========================================================================================================
//                                         CHAPTER # 03
//========================================================================================================

// task 1
var age= 21;
alert("I am "+age+" years old");
// task 2
var count;
count=1;
alert("you have visited the site "+count+" times");
//task # 03
<script type="text/javascript">
var birthYear="1998";
document.write("My birth year is "+birthYear+"\n Data type of my declared variable is number");
</script>
//task # 04
<script type="text/javascript">
    var visitorName= prompt("enter your name");
var productTitle=prompt("enter the name of product");
var quantity=+prompt("enter the quantity of product");
document.write(visitorName+" ordered "+quantity+" "+productTitle);</script>

//========================================================================================================
//                                         CHAPTER # 04
//========================================================================================================
// task 1
var name,age,height;
//task 2
               //legal
var age, fullName, _height ,school1 ,$gender;
        // illegal

var 2age;
var full name;
var alert;
var "name";
var gender();

//========================================================================================================
//                                         CHAPTER # 05
//========================================================================================================

//task 1
<script type="text/javascript">
 var a=3;
 var b= 5;
 var c= a+b;
 document.write("sum of "+a+" and "+b+" is "+c);</script>

 //task 2
 //<script type="text/javascript">
    var a=10;
    var b= 5;
    var c= a-b;
    var d=a/b;
    var e=a*b;
    var f=a%b;
    document.write("subtraction of "+a+" and "+b+" is "+c+"<br>");
    document.write("division of "+a+" and "+b+" is "+d+"<br>");
    document.write("multiplication of "+a+" and "+b+" is "+e+"<br>");
    //document.write("modulus of "+a+" and "+b+" is "+f+"<br>");</script>

//task 3

//<script type="text/javascript">
var beta;
document.write(" value  after declaration "+beta+"<br>");
beta=20;
document.write("after initialization value becomes "+beta+"<br>");
beta++;
document.write("after inrrement it becomes "+beta+"<br>");
beta=beta+7;
document.write("after addition it becomes "+beta+"<br>");
beta--;
document.write("after decrement it becomes "+beta+"<br>");
beta=beta%3;
document.write("after modulus operation it becomes "+beta+"<br>");
//</script>

//task 4

<script type="text/javascript"> 

var cost=600;
var tickets=+prompt("enter number of tickets you want to purchase");
var totalCost= cost*tickets;
document.write(" total cost to buy "+tickets+" is "+totalCost+" Rs");
</script>

//task 5
<script type="text/javascript">

for (i=1;i<=10;i++){

    document.write("3 x "+i+" = "+3*i+"<br>");

}
</script>

//task 6
//<script type="text/javascript">
var p1=650;
var p2=100;
var qty1=3;
var qty2=7;

document.write(" price of item 1 is "+p1+"<br>");
document.write("quantity of item 1 is "+qty1+"<br>");
document.write(" price of item 2 is "+p2+"<br>"); 
document.write("quantity of item 2 is "+qty2+"<br>");
var price1=p1*qty1;
var price2=p2*qty2;
var totalShipping=price1+price2;
document.write(" total shipping price "+totalShipping);
//</script>

//task 8

<script type="text/javascript">
    var obt= 723;
    var totalMarks=850;
    document.write(" percentage is "+(obt/totalMarks)*100);
</script>

//task 9
<script type="text/javascript">
var init=5;
document.write(((init+5)*10)/2);
</script>

//========================================================================================================
//                                         CHAPTER # 06 to chapter # 08
//========================================================================================================

//task 1
<script type="text/javascript">
var aa=2;
var bb=1;
var result= --a - --b + ++b + b--; 
document.write("result of  --a - --b + ++b + b--;  is "+result);
</script>
//task 2
//<script type="text/javascript"> 

var sub1=prompt("enter first subject");         
var sub2=prompt("enter second subject");         
var sub3=prompt("enter third subject");  
var marks1=+prompt(" enter "+sub1+" marks");  
var marks2=+prompt(" enter "+sub2+" marks");  
var marks3=+prompt(" enter "+sub3+" marks");      
var ttl=marks1+marks2+marks3;
var prc=(ttl/300)*100;

document.write("subjects || total marks  ||  obt marks || percentage"+"<br>");
document.write(sub1+" ||   100  ||  "+marks1+"  ||  "+(marks1/100)*100+" % "+"<br>");
document.write(sub2+" ||   100  ||  "+marks2+"  ||  "+(marks2/100)*100+" % "+"<br>");
document.write(sub2+" ||   100  ||  "+marks3+"  ||  "+(marks3/100)*100+" % "+"<br>");
document.write(" total marks : 300           obtained marks: "+ttl+"  percentage: "+ prc+" %"+"<br>")
//</script>

//========================================================================================================
//                                         CHAPTER # 09 to Chapter 11
//========================================================================================================

//task 1
//<script type="text/javascript">
var city=prompt("enter your city");
if( city==="karachi"){
    alert("welcome to city of lights");
}
//</script>

//task 2
<script type="text/javascript">
var gender=prompt("enter your gender");
if( gender==="male"){
    alert("good morning sir");
}
else if(gender==="female"){
    alert("good morning madam");

}
</script>

//task 3
<script type="text/javascript">
var fuel=+prompt("enter remaining fuel in your car");
if( fuel>=0.25){
    alert("Please refill the fuel in your car");
}
</script>

//task4
//<script type="text/javascript">
var aaa = 4; 
if (++aaa === 5)
{ alert("given condition for variable a is true"); 
} 
var bbb = 82;
 if (bbb++ === 83)
 { alert("given condition for variable b is true"); } 
 var ccc = 12;
  if (ccc++ === 13){ alert("condition 1 is true"); } 
  else if (ccc === 13){ alert("condition 2 is true"); }
  else  if (++ccc < 14){ alert("condition 3 is true"); }
   else if(ccc === 14){ alert("condition 4 is true"); }  
//</script>

//========================================================================================================
//                                         CHAPTER # 12 to chapter # 19
//========================================================================================================

//task 1

var x = prompt("Where does the Pope live?"); 
 if (x === "Vatican") { 
     alert("Correct!");
       }
         if (x !== "Vatican") {
                alert("Wrong answer"); 
                }

//task 2
if (weight > 300 && time < 6 && age > 17 && gender === "male") {
     alert("Come to our tryout!"); 
     } 
     else { 
        alert("Come to our cookout!"); 
         }

//task 3
if (SAT > avg || GPA > 2.5 || sport === "football") { 
     alert("Welcome to Bubba State!"); 
    } 
     else {
         alert("Have you looked into appliance repair?"); 
          }

//task 4
var pets = [];
pets[0] = "dog"; 
 pets[1] = "cat"; 
 pets[2] = "bird";
 pets[3] = "lizard";
 pets[6] = "snake";
 pets[3] = "lizard"; 
 pets[4] = "fish"; 
 pets[5] = "gerbil"; 
 pets[6] = "snake";
 pets.pop();
 pets.push("fish", "ferret");
 pets.shift();
 pets.unshift("fish", "ferret");
 pets.splice(2, 2, "pig", "duck", "emu");
 pets.splice(2, 0, "pig", "duck", "emu");
 var noPets = pets.slice(2, 4);
 
 //task 5
 var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
 for (var i = 0; i <= 4; i++) { 
     if (cityToCheck === cleanestCities[i]) { 
          alert("It's one of the cleanest cities");
         } 
          }

//task 6
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "]; 
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"]; 
var fullNames = []; 
for (var i = 0; i < firstNames.length; i++) 
{ 
    for (var j = 0; j < lastNames.length; j++) { 
     fullNames.push(firstNames[i] + lastNames[j]);
    } 
}


//========================================================================================================
//                                         CHAPTER # 21 to chapter # 25
//========================================================================================================

// task 1
var firstName = prompt("enter your first name");
var lastName = prompt("enter your last name");
var fullName = firstName+" "+lastName;
alert("hello welcome "+fullName);

// task 2
var mobDetails = prompt("enter details about yuor phone");
var len = mobDetails.length;
alert(mobDetails+"\n"+" length of your string is "+len);

//task 3
var st = "pakistan";
var find = st.indexOf("n");
alert(" index of n is "+find);

//task 4
var st = "Hello world";
var find = st.lastIndexOf("l");
alert(" last index of l is "+find);

//task 5

var st = "pakistan";
var find = st.charAt(3);
alert(" character at 3  is "+find);

//task 6
var firstName = prompt("enter your first name");
var lastName = prompt("enter your last name");
var fullName = firstName.concat(lastName);
alert("hello welcome "+fullName);

//task 7
var city = " karachi";
var replace = city.replace("karachi","islamabad");
document.write("after replacement string is "+replace);

//task 8
var city = "Ali and Sami are best friends. They play cricket and football together";
var replace = city.split("and").join("&");
document.write("after replacement :   "+replace);

//task 9
var a = "472";
document.write(parseInt("472"));

//task 10
var string1 = prompt("enter string");
var string2 = string1.toLowerCase();
document.write(string2);

//task 11
var string1 = prompt("enter string");
var string2 = string1.toUpperCase();
document.write(string2);

//task 12
var num1 = 35.36;
var num2= num1.toString();
document.write(num2);

//task 13
var nam = prompt("enter your name ");
for(var i = 0; i<nam.length;i++){
    b=nam.charCodeAt(nam[i]);
    if (b === 33 || b === 44 || b===46 || b===64){
        alert("enter correct name without characters");
    }
    else{
        alert("name is correct");
    }

}

//task 14
var fruit = ["apple","mango","orange","grapes"];
var search = prompt("enter the fruit name");
var search2= search.toLowerCase();
for(var i=0;i<fruit.length;i++){
    if (search2===fruit[i]){
        alert("found");
        break;
    }
    
    else{
        alert("not found");
    }
}



//========================================================================================================
//                                         CHAPTER # 26 to chapter # 30
//========================================================================================================

//task 1
var a = +prompt("enter a positive integer");
var b= Math.round(a);
var c= Math.floor(a);
var d = Math.ceil(a);
document.write("number : "+a);
document.write(" round off :"+b);
document.write(" floor function "+c);
document.write(" ceil function "+d);

//task 2
var a = +prompt("enter a positive integer");
var b= Math.round(a);
var c= Math.floor(a);
var d = Math.ceil(a);
document.write("number : "+a);
document.write(" round off :"+b);
document.write(" floor function "+c);
document.write(" ceil function "+d);

//task 3
var aa = +prompt("enter any number");
var bb = Math.abs(aa);
document.write(bb);

//task 4
var a = Math.random();
document.write(a);
document.write(a);

//task 5
document.write("\n");
var a = Math.random();
var b = +prompt("enter number");
if(b===a){
    alert(" congrats !");
}
else{
    alert("failed");
}



//========================================================================================================
//                                         CHAPTER # 31 to chapter # 34
//========================================================================================================

//task 1
var date = new Date();
console.log(date);

//task 2
var date = new Date();
console.log(date);
var months = ["January", "February", "march", "april","may", "june","july","august","september","october","november","december"]
var month = date.getMonth();
console.log("month is :"+months[month]);

//task 3
var date = new Date();
console.log(date);
var con = date.toString();
var day = con.slice(0,3);
console.log(day);

//task 4
var date = new Date();
console.log(date);
var td = date.getDate();
if(td <= 15){
    console.log("firs fifteen days of month");
}
else{
    console.log(" last 15 days of month");
}

//task 5
var date = new Date();
console.log(date);
var tm = date.getTime();
var ts = (tm / 1000) / 60 ;
console.log(" time in minutes"+ts);


//========================================================================================================
//                                         CHAPTER # 35 to chapter # 38
//========================================================================================================

//task 1
function myDate(){
    var date = new Date();
    return date;
}
console.log(date);

//task 2
function greet(fname,lname){
    return "hello "+fname+" "+lname;
}
console.log(greet("saira","awan"));

//task 3
function add(){
   var a =+prompt("enter first number");
   var b =+prompt("enteer second number");
   var c=a+b;
   return c
}
console.log(add());

//task 4
function calculator(n1,operator,n2){
   if(operator==="+"){return n1+n2}
   else if(operator==="-"){return n1-n2}
   else if(operator === "*"){return n1*n2}
   else if(operator ==="/"){return n1/n2}
   else if(operator ==="%"){return n1%n2}
   else{alert("enter correect operartor")}
}
console.log(calculator(4,"%",2));

//task 5
function square(a){
    return a*a;
}
var b=+prompt("enter number to find square ");
console.log(square(b));

//task 6
var b=1;
function factorial(a){
    
    for(var i = 1;i<=a;i++){
        
        b= b*i;
        
    }
    return b;
}
var d=+prompt("enter number to find factorial ");
console.log(factorial(d));

//task 7
function counting(start,end){
    for(var i=start;i<=end;i++){
        console.log(i);
    }
}
console.log(counting(1,5));

//task 8
function calcCircumference(r){
    return 2*3.14*r;
}
console.log("circumference of circle is :"+calcCircumference(4));

function calcArea(r){
    return 3.14*(r*r);
}
console.log("area of circle is :"+calcArea(4));

//========================================================================================================
//                                         CHAPTER # 39 to chapter # 42
//========================================================================================================

//task 1
function power(a,b){

    var c = a**b;
    console.log( " power is : "+c);
}
power(2,3)

//task 2
switch(dayOfWk) { 
    case "Sat" : 
    alert("Whoopee"); 
    break; 
    case "Sun" : 
    alert("Whoopee"); 
    break; 
    case "Fri" : 
    alert("TGIF!"); 
   break; 
    default : 
    alert("Shoot me now!"); 
    default : 
      alert("Shoot me now!"); 
    }


//========================================================================================================
//                                         CHAPTER # 43 to chapter # 48
//========================================================================================================

//task 1
function popup(message) { 
    alert(message); 
    }
<a href="JavaScript:void(0)" onClick="popup('Hi');">Click</a>

//task 2
//<img src="button-greet.png" onClick="alert('Hello world!');">

//task 3
<h1 onMouseover="alert('Be sure to get your shopping done today.');">World Ends Tomorrow</h1>
 
 //task 4
 <a href="index.html" onMouseover="this.style.color='green';">Home Page</a>
 
 //task 5
 //Email:<br> <input type="text" size="30" onFocus="this.style.backgroundColor='yellow';" onBlur="this.style.backgroundColor='white';">

 //task 6
//function checkAddress(fieldId) { 
    //if (document.getElementById(fieldId).value === "") { 
      //  alert("Email address required."); 
        // } 
         //}
//<form onSubmit="checkAddress('email');"> 
// Email:  <input type="text" id="email">  <input type="submit" value="Submit"> </form>
 
 

//========================================================================================================
//                                         CHAPTER # 49 to chapter # 52
//========================================================================================================

//task 1
function fillCity() { 
    var cityName; 
    var zipEntered = document.getElementById("zip").value; 
    switch (zipEntered) { 
    case "60608" : 
     cityName = "Chicago"; 
    break; 
     case "68114" : 
    cityName = "Omaha"; 
     break; 
    case "53212" : 
     cityName = "Milwaukee"; 
      } 
    document.getElementById("city").value = cityName; 
    }

//task 2
<p id="slowLoris"> Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. <a href="javascript:void(0);" onClick="expandLoris();"><em>Click for more.</em></a> </p>
  function expandLoris() { 
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals."; 
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
    }

//task 3
//<img src="blobfish.jpg" id="ugly" onClick="makeInvisible();">
 function makeInvisible() { 
     document.getElementById("ugly").className = "hidden"; 
    }
 
 

//========================================================================================================
//                                         CHAPTER # 53 to chapter # 57
//========================================================================================================

//task 1
<img src="before-pic.jpg" id="before" onMouseover="swapPic();"></img>
function swapPic() { 
    document.getElementById("before").src = "after-pic.jpg"; 
 }
 
 //task 2
 <img src="before-pic.jpg" id="before" onMouseover="swapPic();"></img>
 function swapPic() { 
     var pic = document.getElementById("before"); 
     pic.src = "after-pic.jpg"; 
    }

//task 3
{/* <p>This bed is too small.</p>
 <p>This bed is too big.</p>
  <p>This bed is just right.</p> */}
 
var par = document.getElementsByTagName("p");
var textInMiddleParagraph = par[1].innerHTML;
par[1].innerHTML = "This SUV is too big.";
 

//========================================================================================================
//                                         CHAPTER # 58 to 67
//========================================================================================================

//task 1
{/* <div id="cal">     
<p>Southern Cal is sunny.</p>
<p>Northern Cal is rainy.</p>     
<p>Eastern Cal is desert.</p>  
</div>  <div id="ny">     
<p>Urban NY is crowded.</p>     
<p>Rural NY is sparse.</p>  
</div>  */}
var p = document.childNodes[0].childNodes[1].childNodes[1].childNodes[1]; 2 var contents = p.innerHTML;
var d = document.getElementById("ny");
var p = d.childNodes[1]; 
var contents = p.innerHTML;
 
//task 2
var liElements = getElementsByTagName("li");
var howManyLi = liElements.length;
for (var i = 0; i < howManyLi; i++) { 
     if (liElements[i].innerHTML === "") {
          liElements[i].innerHTML = "coming soon"; 
         } 
        }

//task 3

var nodeToAdd = document.createElement("p");
var imgNodeToAdd = document.createElement("img");
nodeToAdd.setAttribute("class", "regular");
imgNodeToAdd.setAttribute("border", "1");
var newTxt = document.createTextNode("Hello!");
nodeToAdd.appendChild(newTxt);
 
 
