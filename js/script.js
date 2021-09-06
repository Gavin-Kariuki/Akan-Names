const formSubmit = (event) => {
    event.preventDefault()
    const frm = document.querySelector('#frm')
    const formData = new FormData(frm)
    const date = new Date(formData.get('bday'))
    const Year = date.getFullYear().toString()
    const CC = parseInt(Year.slice(0,2)) // parseInt returns an integer //
    const YY = parseInt(Year.slice(2,4));
    const MM = date.getMonth()
    const DD = date.getDay()
    const mNames = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"]
    const fNames = ["Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", "Akosua"]

    const dayOfWeek = Math.ceil( (((CC/4) - 2 * CC - 1) + ((5*YY/4)) + ((26 * (MM + 1) /10)) + DD) %7)

    if (formData.get('gender') == 'male') {
        document.querySelector('#jina').innerHTML = "Your Akan name is " + mNames[dayOfWeek-1]
    }else if(formData.get("gender") == 'female'){
        document.querySelector('#jina').innerHTML = "Your Akan name is " + fNames[dayOfWeek-1]
    }
}

document.querySelector('#frm').addEventListener('submit', formSubmit)