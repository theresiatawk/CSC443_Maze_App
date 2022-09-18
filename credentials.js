const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
        score = 0;
  
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
  
    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );
  
    if(!exist){
        formData.push({ fname, lname, email, pwd, score });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
  }
  
  function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    console.log("Ana Barrra");
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        let userIndex = JSON.parse(localStorage.getItem('formData')).findIndex(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
        let users = JSON.parse(localStorage.getItem('formData'));
        let loginUser = users[userIndex];
        let score = loginUser.score;
        localStorage.setItem("score", score);
        location.href = "./game.html";
    }
    e.preventDefault();
  }