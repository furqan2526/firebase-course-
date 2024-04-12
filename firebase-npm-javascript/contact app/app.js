const addbtn = document.querySelector(".add-btn");
const modaloverlay = document.getElementById("modal-overlay");
const closebtn = document.querySelector(".colse-btn");
const error = {};
const addbuttonpressde = () => {
    modaloverlay.style.display = "flex";
}

const closebuttonpressed = () => {
    modaloverlay.style.display = "none";
}

const hidemodal = (e) => {
    if (e.target === e.currentTarget) {
        modaloverlay.style.display = "none";
    }
}

addbtn.addEventListener("click", addbuttonpressde);
closebtn.addEventListener("click", closebuttonpressed);
modaloverlay.addEventListener("click", hidemodal);

// form

const savebtn = document.querySelector(".save-btn");

const firstname = document.getElementById("firstname")
lastname = document.getElementById("lastname"),
    age = document.getElementById("age"),
    phone = document.getElementById("phone"),
    email = document.getElementById("email");

const savebuttonpressed = () => {
    checkrequired([firstname, lastname, age, phone, email]);
    checkEmail(email);
    showErrorMessages();
}

const checkrequired = (inputArray) => {
    inputArray.forEach(input => {
        if (input.value.trim() === "") {
           setErrormessage( input, input.id + " is empty");
        } else {
            delete error[input.id];
        }
    });

}

const setErrormessage = (input, message) => {
    error[input.id] = message;
}

const checkEmail = (input) => {
    if (input.value.trim() !== "") {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (re.test(input.value.trim())) {
            delete error[input.id];
        } else {
            setErrormessage(input, input.id + " is invalid");
        }
    }
}
const showErrorMessages = () => {
    const errorLable = document.getElementById("error-lable");
    errorLable.innerHTML = "";
    for (const key in error) {
        const li = document.createElement("li");
        li.innerText = error[key];
        li.style.color = "red";
        errorLable.appendChild(li);
    }
}

savebtn.addEventListener("click", savebuttonpressed);