// login button functionality

document.getElementById("loginButton")
.addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 12345678910;
    const pinNumber = 1122;
    const mobileNumberValue = document.getElementById('mobile-number').value 

    const mobileNumberConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value;

    const pinNumberValueConverted = parseInt(pinNumberValue);

    if(mobileNumberConverted === mobileNumber && pinNumberValueConverted=== pinNumber){
        window.location.href='./home.html'
    }
    else{
        alert('Invalid credentials')
    }

    
})