const commentForm = document.getElementById("comment-form");
const nameInput = document.querySelector("main .comments .comment-form #name-input");
const subjectInput = document.querySelector("main .comments .comment-form #subject-input");
const emailInput = document.querySelector("main .comments .comment-form #email-input");
const contentInput = document.querySelector("main .comments .comment-form #content-input");

const errorParagraph = document.querySelector("main .comments #errorMessage");

function checkValidEmail(email) {

    // Regex for valid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is a valid one (test it using the regex)
    if (!emailRegex.test(email)) {
        return false;
    }
    return true;

}

commentForm.addEventListener('submit', (e) => {

    // Prevent form submission before values are entered
    e.preventDefault();

    // TODO: Reset errorParagraph each submission

    // Trim input values to avoid trailing whitespace
    let name = nameInput.value.trim();
    let subject = subjectInput.value.trim();
    let email = emailInput.value.trim();
    let content = contentInput.value.trim();

    let errorMessage = "";

    // TODO: Validate each input one by one

})

