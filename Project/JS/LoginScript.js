// Get the modal
var modal = document.getElementById('regis');
var modal2 = document.getElementById('log');

var x;
var arr = new Array();
arr[0] = "../MEDIA/notvalid.png";
arr[1] = "../MEDIA/notvalid.png";

// console.log(n)
function focs(eve) {
    eve.style.border = "solid 5px #b4caf0";
}
function remfo(eve) {
    eve.style.border = "";
}



function opens() {
    x = window.open("", "_blank", "width=300,height=300px");
    x.document.write("Terms q Lorem   Terms q Lorem   Ffficia ipsuing ein tenetur molestiae, nihil possimus earum nonlit.dn  quia debitis libero suscipit sunt iste dolor mollitia tenetur molestiae, nihil m non.olor mollitiaandd condet m doleturuia debitis libero suscipit sunt iste acilis doloribus impedit nobis,optio officiis oadipisicconsectitionor sit possimus earuam Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus impedit nobis,optio officiis officiFfficia ipsuing ein tenetur molestiae, nihil possimus earum nonlit.dn  quia debitis libero suscipit sunt iste dolor mollitia tenetur molestiae, nihil m non.olor mollitiaandd condet m doleturuia debitis libero suscipit sunt iste acilis doloribus impedit nobis,optio officiis oadipisicconsectitionor sit possimus earuam Lorem ipsum dolor sit amet consectetur adipisicing elit. FaciTerms q Lorem   Terms q Lorem   Ffficia ipsuing ein tenetur molestiae, nihil possimus earum nonlit.dn  quia debitis libero suscipit sunt iste dolor mollitia tenetur molestiae, nihil m non.olor mollitiaandd condet m doleturuia debitis libero suscipit sunt iste acilis doloribus impedit nobis,optio officiis oadipisicconsectitionor sit possimus earuam Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus impedit nobis,optio officiis officiFfficia ipsuing ein tenetur molestiae, nihil possimus earum nonlit.dn  quia debitis libero suscipit sunt iste dolor mollitia tenetur molestiae, nihil m non.olor mollitiaandd condet m doleturuia debitis libero suscipit sunt iste acilis doloribus impedit nobis,optio officiis oadipisicconsectitionor sit possimus earuam Lorem ipsum dolor sit amet consectetur adipisicing elit. FacTerms q Lorem   Terms q Lorem   Ffficia ipsuing ein tenetur molestiae, nihil possimus earum nonlit.dn  quia debitis libero suscipit sunt iste dolor mollitia tenetur molestiae, nihil m non.olor mollitiaandd condet m doleturuia debitis libero suscipit sunt iste acilis doloribus impedit nobis,optio officiis oadipisicconsectitionor sit possimus earuam Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus impedit nobis,optio officiis officiFfficia ipsuing ein tenetur molestiae, nihil possimus earum nonlit.dn  quia debitis libero suscipit sunt iste dolor mollitia tenetur molestiae, nihil m non.olor mollitiaandd condet m doleturuia debitis libero suscipit sunt iste acilis doloribus impedit nobis,optio officiis oadipisicconsectitionor sit possimus earuam Lorem ipsum dolor sit amet consectetur adipisicing elit. FacTerms q Lorem   Terms q Lorem   Ffficia ipsuing ein tenetur molestiae, nihil possimus earum nonlit.dn  quia debitis libero suscipit sunt iste dolor mollitia tenetur molestiae, nihil m non.olor mollitiaandd condet m doleturuia debitis libero suscipit sunt iste acilis doloribus impedit nobis,optio officiis oadipisicconsectitionor sit possimus earuam Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus impedit nobis,optio officiis officiFfficia ipsuing ein tenetur molestiae, nihil possimus earum nonlit.dn  quia debitis libero suscipit sunt iste dolor mollitia tenetur molestiae, nihil m non.olor mollitiaandd condet m doleturuia debitis libero suscipit sunt iste acilis doloribus impedit nobis,optio officiis oadipisicconsectitionor sit possimus earuam Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus impedit nobis,optio officiis officiilis doloribus impedit nobis,optio officiis officiilis doloribus impedit nobis,optio officiis officilis doloribus impedit nobis,optio officiis offici");
}


async function submiteUser(typeProcess) {
    let username = document.querySelector("[name='uname']")
    let paswword = document.querySelector("[name='pass1']")
    let confirmPassword = document.querySelector("[name='pass2']")

    let usernameVal = document.getElementById("username").value;
    let passwordVal = document.getElementById("password").value;
    let city = document.getElementById("city").value;
    let phone = document.getElementById("phone").value;
    let bdate = document.getElementById("bdate").value;
    let lname = document.getElementById("lname").value;
    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;

    var user = {
        "username": usernameVal,
        "paswword": passwordVal,
        "email": email,
        "name": lname + " " + fname,
        "phone": phone,
        "bdate": bdate,
        "city": city
    };

    let fulname = false;
    let passwo = false;

    // if (username !== "" && username.value.length > 3) {
    //     fulname = true;
    //     document.querySelector("[name='inval']").innerHTML = "";
    //     document.images[0].src = arr[0];
    //     username.style.backgroundColor = "white";
    // } else {
    //     document.querySelector("[name='inval']").innerHTML = "Invalid name";
    //     document.images[0].src = arr[1];
    //     username.style.backgroundColor = "#d8212157";
    //     console.log("ede")
    // }
    // if (paswword !== "" && paswword.value === confirmPassword.value) {
    //     passwo = true;
    //     document.querySelector("[name='notidi']").innerHTML = "";
    //     document.images[1].src = arr[0];
    //     confirmPassword.style.backgroundColor = "white";
    // } else {
    //     document.querySelector("[name='notidi']").innerHTML = "password and repeat password should be the same";
    //     document.images[1].src = arr[1];
    //     confirmPassword.style.backgroundColor = "#d8212157"
    //     console.log("ede")
    // }

    if (typeProcess.id == "register-user") {
        const response = fetch("http://localhost:3005/users")
            .then((response) => response.json())
            .then((data) => {
                var existuser = false;
                if (data.length > 0) {
                    for (let user of data.user) {
                        if (user.username == usernameVal) {
                            alert("This username is exist");
                            existuser = true;
                            return;
                        }
                    }
                    //Add data
                    if (!existuser) {
                        const response = fetch("http://localhost:3005/users", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            }, body: JSON.stringify(user)
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                localStorage.user = usernameVal;
                                window.open("index.html", "_self");
                            });
                    }

                }

            });


    }

    else {
        var usernameValLog = document.getElementById("usernameLog").value;
        var passwordValLog = document.getElementById("passwordLog").value;
        console.log(usernameValLog);
        console.log(passwordValLog);

        loginFun(usernameValLog, passwordValLog)
    }

}

function loginFun(usernameValLog, passwordValLog) {
    const response = fetch("http://localhost:3005/users")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            var userLog;
            var existuser = false;
            if (data.length === 0) {
                alert("This User not found");
            }
            else {
                for (const user of data.user) {
                    if (usernameValLog == user.username) {
                        userLog = user;
                        existuser = true;
                        break;
                    }
                }
                if (!existuser) alert("This User not found");
                else {
                    if (userLog.paswword == passwordValLog) {
                        localStorage.user = usernameValLog;
                        window.open("index.html", "_self");
                    }
                    else {
                        alert("The username or password is invalide please correct your data and try again");
                    }
                }

            }
        });
}

