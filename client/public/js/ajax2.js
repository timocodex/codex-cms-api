
function register(){
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/users',
    data: {username:$("#username").val(),password:$("#password").val()},
    success: function(resp) {
      alert("success to register")
      $("#username").val('')
      $("#password").val('')
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function login(){
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/users/login',
    data: {username:$("#usernamelogin").val(),password:$("#passlogin").val()},
    success: function(resp) {
      if(resp.token){
        localStorage.setItem("token",resp.token)
        localStorage.setItem("user",$("#usernamelogin").val())
        window.location.href='http://127.0.0.1:8080/index.html'
      }
      else{
        alert("username/password wrong")
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function logout(){
  localStorage.clear()
  window.location.href='http://127.0.0.1:8080/index.html'
}
