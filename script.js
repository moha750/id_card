// عناصر HTML الخاصة بالنوافذ المنبثقة
const openPopup1 = document.getElementById('openPopup1');
const popup1 = document.getElementById('popup1');
const closePopup1 = document.getElementById('closePopup1');
const cancelButton1 = document.getElementById('cancelButton1');
const confirmButton1 = document.getElementById('confirmButton1');
const errorMessage1 = document.getElementById('errorMessage1');
const resultPopup1 = document.getElementById('resultPopup1');
const closeResultPopup1 = document.getElementById('closeResultPopup1');
const resultMessage1 = document.getElementById('resultMessage1');

const openPopup2 = document.getElementById('openPopup2');
const popup2 = document.getElementById('popup2');
const closePopup2 = document.getElementById('closePopup2');
const cancelButton2 = document.getElementById('cancelButton2');
const confirmButton2 = document.getElementById('confirmButton2');
const errorMessage2 = document.getElementById('errorMessage2');
const resultPopup2 = document.getElementById('resultPopup2');
const closeResultPopup2 = document.getElementById('closeResultPopup2');
const resultMessage2 = document.getElementById('resultMessage2');

// فتح وإغلاق النوافذ المنبثقة
openPopup1.addEventListener('click', () => {
    popup1.style.display = 'flex';
    errorMessage1.style.display = 'none';
});

closePopup1.addEventListener('click', () => {
    popup1.style.display = 'none';
    errorMessage1.style.display = 'none';
});

closeResultPopup1.addEventListener('click', () => {
    resultPopup1.style.display = 'none';
});

cancelButton1.addEventListener('click', () => {
    popup1.style.display = 'none';
    errorMessage1.style.display = 'none';
});

openPopup2.addEventListener('click', () => {
    popup2.style.display = 'flex';
    errorMessage2.style.display = 'none';
});

closePopup2.addEventListener('click', () => {
    popup2.style.display = 'none';
    errorMessage2.style.display = 'none';
});

closeResultPopup2.addEventListener('click', () => {
    resultPopup2.style.display = 'none';
});

cancelButton2.addEventListener('click', () => {
    popup2.style.display = 'none';
    errorMessage2.style.display = 'none';
});

// التأكيد على الخيار المحدد في popup1
confirmButton1.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="تبي ولا"]:checked');
    if (selectedOption) {
        let message;
        if (selectedOption.value === "لا") {
            message = "👨🏽‍💻ولا يهمك! بنكلمك المُصمم يشيل صورتك";
        } else if (selectedOption.value === "نعم") {
            message = "👨🏽‍💻ولا يهمك! بنكلمك المُصمم يحط صورتك";
        }
        resultMessage1.textContent = message;
        popup1.style.display = 'none';
        resultPopup1.style.display = 'flex';
    } else {
        errorMessage1.textContent = 'شلون يعني! شلون نصمم بطاقتك🦦؟';
        errorMessage1.style.display = 'block';
    }
});

// التأكيد على الخيار المحدد في popup2
confirmButton2.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="تبي ولا"]:checked');
    if (selectedOption) {
        let message;
        if (selectedOption.value === "لا، مو حاب أصور") {
            message = "👤ولا يهمك! ما بنحط لك صورة";
        } else if (selectedOption.value === "نعم، حاب أصور") {
            message = "📸ولا يهمك! نرتب لك الأستديو وأبشر";
        }
        resultMessage2.textContent = message;
        popup2.style.display = 'none';
        resultPopup2.style.display = 'flex';
    } else {
        errorMessage2.textContent = 'شلون يعني! شلون نصمم بطاقتك🦦؟';
        errorMessage2.style.display = 'block';
    }
});

// إغلاق النوافذ عند الضغط خارج المحتوى
window.addEventListener('click', (e) => {
    if (e.target == popup1) {
        popup1.style.display = 'none';
        errorMessage1.style.display = 'none';
    }
    if (e.target == resultPopup1) {
        resultPopup1.style.display = 'none';
    }
    if (e.target == popup2) {
        popup2.style.display = 'none';
        errorMessage2.style.display = 'none';
    }
    if (e.target == resultPopup2) {
        resultPopup2.style.display = 'none';
    }
});

// التقديم للأمام والتراجع للخلف في النموذج
var create_workspace = document.querySelector(".create-workspace");
var next_click = document.querySelectorAll(".next-click");
var back_click = document.querySelectorAll(".back-click");
var finish_click = document.querySelector(".finish-click");
var main_form = document.querySelectorAll(".main");
var list = document.querySelectorAll(".progress-bar li");
let formnumber = 0;

create_workspace.addEventListener('click', function () {
    if (!validateform()) {
        return false;
    }
    formnumber++;
    updateform();
    progress_forward();
});

next_click.forEach(function (next_page) {
    next_page.addEventListener('click', function () {
        if (!validateform()) {
            return false;
        }
        formnumber++;
        updateform();
        progress_forward();
    });
});

back_click.forEach(function (back_page) {
    back_page.addEventListener('click', function () {
        formnumber--;
        updateform();
    });
});

finish_click.addEventListener('click', function () {
    formnumber++;
    updateform();
    var remove_progress = document.querySelector(".progress-bar");
    remove_progress.classList.add('d-none');
});

function progress_forward() {
    list[formnumber].classList.add('active');
}

function updateform() {
    main_form.forEach(function (main_number) {
        main_number.classList.remove('active');
    });
    main_form[formnumber].classList.add('active');
}

// التحقق من صحة النموذج
function validateform() {
    validate = true;
    var validate_form = document.querySelectorAll(".main.active #input");
    validate_form.forEach(function (val) {
        val.classList.remove('warning');
        if (val.hasAttribute('require')) {
            if (val.value.length == 0) {
                validate = false;
                val.classList.add('warning');
            }
        }
    });
    return validate;
}
