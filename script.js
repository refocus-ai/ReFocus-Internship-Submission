function checkClick()  //to display the form
{

	var clickShow = document.getElementsByClassName("Click");
	var visibleMain = document.getElementsByClassName("title");


	var mainDiv = document.getElementsByClassName("visibleRight");

	if (clickShow[0].checked == false){
    mainDiv[0].hidden = true; }
  	else {
    mainDiv[0].hidden = false;
         }

     if(window.getComputedStyle(visibleMain[0]).display === "block")
     {
     	visibleMain[0].style.display = "none";
     }
     
	
}

function slide(){		//for slider value

	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	output.innerHTML = this.value;
	output.innerHTML = slider.value;

}



function calculate()		//to store all the input values
{
	var tick = document.getElementsByClassName("box");
	var total_emp = parseInt(document.getElementsByClassName("staff")[0].value)
	var num_prod = parseInt(document.getElementsByClassName("producer")[0].value);
	var num_exec = parseInt(document.getElementsByClassName("executive")[0].value);
	var num_admin = parseInt(document.getElementsByClassName("admin")[0].value);
	var a = parseInt(num_exec + num_admin);
	var sum = parseInt(a + num_prod);
	var showresult = document.getElementById("finalresult");
	var carr = parseInt(document.getElementsByClassName('carriers')[0].value);
	
	if(isNaN(num_prod)||num_prod<0||isNaN(num_exec)||num_exec<0||isNaN(num_admin)||num_admin<0||carr<0||sum!=total_emp||isNaN(carr))
	
	{
		alert("Please fill all the information correctly");
		return;
	}

	if(tick[0].checked == true)
	{

		var all = withAMS(num_prod, a);	//calculates with the formula
		var x = all[0]; 
		var y = all[1];
		
		
	}	

	else
	{
		var all = withoutAMS(num_prod, a);	//calculates with the formula
		var x = all[0]; 
		var y = all[1];

		
	}

	

	if(window.getComputedStyle(showresult).display === "none")
 		{
		 showresult.style.display = "flex" ;
		 document.getElementById("finalOut").innerHTML="With ReFocus, an agency like yours saves an average of "+ x +" hours per day, helping you bring on an extra "+ y +" policies per week" ;	
		

		 }
	
	else{
		
		document.getElementById("finalresult").style.display ==="none";
		
		}
	
}


function closePannel()		//to close the results
{
	var showresult = document.getElementById("finalresult");
	if(window.getComputedStyle(showresult).display === "flex")
		{showresult.style.display = "none" ;
			}
	else
		{showresult.style.display = "flex" ;}

}

function withAMS(num_prod, a)
{
	
	var p = parseFloat((((num_prod*10) + (a*5))/5)*0.5);
	var q = Math.ceil(p/ 4.8);
	var arr = [p,q];
  	return arr;
} 

 function withoutAMS(num_prod, a)
{
	var p = parseFloat((((num_prod*10) + (a*5))/5));
	var q = Math.ceil(p/ 4.8);
  	var arr = [p,q];
  	return arr;
}


module.exports = { withAMS: withAMS, withoutAMS: withoutAMS };





