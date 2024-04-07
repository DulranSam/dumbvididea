document.addEventListener("DOMContentLoaded",()=>{
    const firstNum = parseFloat(document.querySelector(".firstNum").innerHTML);
    const secondNum = parseFloat(document.querySelector(".secondNum").innerHTML);

    document.querySelector(".finalize").addEventListener("click",()=>{
        const total = firstNum+secondNum;
        document.querySelector(".response").innerHTML = "Wait...";

        // Delay for 1200 milliseconds before updating the total
        setTimeout(() => {
            document.querySelector(".total").innerHTML = `The total is ${parseFloat(total)}`;
            // Clear response field after displaying the total
            document.querySelector(".response").innerHTML = "";
        }, 1200);

    })

})