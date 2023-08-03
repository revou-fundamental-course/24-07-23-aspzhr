function validateForm() {
    let errorMsg = "There are error(s):\n"

    let fName = document.forms["contactForm"]["fname"].value
    let fEmail = document.forms["contactForm"]["femail"].value
    let fInterest = document.forms["contactForm"]["finterest"].value

    if(fInterest == "") {
        alert("Please select interest!")
        return false
    }

    alert(`Hello ${fName}, you are interested in ${fInterest}, we already sent email to ${fEmail}`)

}