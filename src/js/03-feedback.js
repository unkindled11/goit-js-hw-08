import throttle from "lodash.throttle";

//=====================================//

const data = localStorage.getItem("feedback-form-state");

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(() => {
    containItems();
    localStorage.setItem("feedback-form-state", JSON.stringify(items))
}, 500));


form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(items)
    form.reset()
    localStorage.clear()
});

const items = {
    email: "",
    textArea: ""
};

const containItems = function () {
    items.email = form.elements.email.value
    items.textArea = form.elements.message.value
};


if (data) {   
    form[0].value = JSON.parse(data).email
    form[1].value = JSON.parse(data).textArea
}


containItems();



