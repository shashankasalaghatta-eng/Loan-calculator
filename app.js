document.getElementById('loan-form').addEventListener('submit',  results);
function results(e){

           const amount=document.getElementById("amount");
         const interest=document.getElementById("interest");
        const years=document.getElementById("years");
       const monthlypayment= document.getElementById("monthly-payment");
        const totalpayment=document.getElementById("total-payment");
         const totalintrest=document.getElementById("total-interest");
        const principal = parseFloat(amount.value);
        const interestvalue=parseFloat(interest.value)/100/12;
        const yearsvalue=parseFloat(years.value)*12;
        const x=Math.pow(1+interestvalue,yearsvalue);
        const monthly=(principal *x*interestvalue)/(x-1);
        if (isFinite(monthly)) {
            monthlypayment.value=monthly.toFixed(2);
            totalpayment.value=(monthly*yearsvalue).toFixed(2);
            
        totalintrest.value=(monthly*yearsvalue-principal).toFixed(2);
        
        document.getElementById("results").style.display="block";}
        else{
            
        showalert("Please Enter the values")
        function showalert(error){
            const Diverror=document.createElement("div");
            Diverror.className="alert alert-danger";
            Diverror.appendChild(document.createTextNode(error));
            const card=document.querySelector(".card");
            const heading=document.querySelector(".heading");
            card.insertBefore(Diverror,heading);

            setTimeout(function(){
            document.querySelector(".alert").remove();
        },1000);

        }
        
        }
        



    
    

    e.preventDefault();
}