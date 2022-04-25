import throttle from "lodash.throttle";

//=====================================//



const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(() => {
    containItems();
    localStorage.setItem("feedback-form-state", JSON.stringify(items))
}, 500));


form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(items)
    form.reset()
    localStorage.removeItem("feedback-form-state")
});

const items = {
    email: "",
    textArea: ""
};

const containItems = function () {
    items.email = form.elements.email.value
    items.textArea = form.elements.message.value
};


const data = JSON.parse(localStorage.getItem("feedback-form-state"));

if (data) {   
    form[0].value = data.email
    form[1].value = data.textArea
}


containItems();



