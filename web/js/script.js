// demo code to submit to a express backend
//using form using the fetch api in javascript
//20200301
//by wisemonkey
window.onload = function() {

    const API_URL = "/api/signup";

    document.getElementById("signupform")
    .addEventListener("click", evt => {
      evt.preventDefault(); //stops page reload by browser
      console.log("clicked")
      const form = evt.target.form;
    
      const body = JSON.stringify({
        // retrevies that value from the id="signupform" 's username
        //input text box
        username: form.elements.username.value
      });
    
      //set header type to be json
      const header = { "Content-Type": "application/json" };
      const container = document.getElementById("signupformcontainer");
    
      fetch(API_URL, { method: "post", body, header })
        .then(resp => {
          if (resp.status < 200 || resp.status >= 300) {
            throw new Error(`Request failed with status ${resp.status}`);
          }
          return resp.json();
        })
        .then(json => {
            container.innerHTML = "<b> Account created successfully</b>"
        })
        .catch(error => {
            container.innerHTML = `<b> A problem occured with signin you up, please try again</b>`
        })
    });
    
}