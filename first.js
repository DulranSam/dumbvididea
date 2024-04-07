document.addEventListener("DOMContentLoaded", () => {
    const firstNum = parseFloat(document.querySelector(".firstNum").innerHTML);
    const secondNum = parseFloat(document.querySelector(".secondNum").innerHTML);

    document.querySelector(".finalize").addEventListener("click", () => {
        try {
            let total = firstNum + secondNum;

            // Show "Wait..." in the response field
            document.querySelector(".response").innerHTML = "Wait...";

            // Delay for 1200 milliseconds before updating the total
            setTimeout(() => {
                document.querySelector(".total").innerHTML = `Undefined`;
                // Clear response field after displaying the total
                document.querySelector(".response").innerHTML = "";
            }, 1200);
        } catch (err) {
            console.error(err);
            // Handle error here if necessary
            document.querySelector(".response").innerHTML = "An error occurred.";
        }finally{
            document.querySelector(".total").innerHTML = ``;
        }
    });
});
