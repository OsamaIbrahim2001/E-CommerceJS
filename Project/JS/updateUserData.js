async function updateUserData() {
    document.getElementById('profile').style.display = 'block', document.getElementById('security').style.display = 'none', document.getElementById('billing').style.display = 'none';

    let fullname = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let bdate = document.getElementById("bdate").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;

    var username = localStorage.getItem("user");

    var users = [];

    var url = "http://localhost:3005/users";
    const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            for (const i in data.user) {
                if (data.user[i].username == username) {
                    data.user[i].name = fullname;
                    data.user[i].email = email;
                    data.user[i].bdate = bdate;
                    data.user[i].phone = phone;
                    data.user[i].city = city;
                }
            }


            const response = fetch("http://localhost:3005/users", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => {
                    alert("Edit Successfully")
                });

        }
        )
        ;

}


async function fillUserData() {
    var user = localStorage.getItem("user");
    let fullname = document.getElementById("fullName");
    let email = document.getElementById("email");
    let bdate = document.getElementById("bdate");
    let phone = document.getElementById("phone");
    let city = document.getElementById("city");

    var url = "http://localhost:3005/users";
    const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (const i in data.user) {
                if (data.user[i].username == user) {

                    fullname.value = data.user[i].name;
                    email.value = data.user[i].email
                    bdate.value = data.user[i].bdate;
                    phone.value = data.user[i].phone;
                    city.value = data.user[i].city;
                    return;
                }
            }
        })
}

fillUserData();

async function updatePassword() {
    document.getElementById('profile').style.display = 'block', document.getElementById('security').style.display = 'none', document.getElementById('billing').style.display = 'none';

    let oldpass = document.getElementById("oldpass").value;
    let newpass = document.getElementById("newpass").value;
    let cnewpass = document.getElementById("cnewpass").value;

    var username = localStorage.getItem("user");

    var url = "http://localhost:3005/users";
    const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            for (const i in data.user) {
                if (data.user[i].username == username) {
                    if (data.user[i].paswword == oldpass) {
                        if (newpass == cnewpass) {
                            data.user[i].paswword = newpass;

                            const response = fetch("http://localhost:3005/users", {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json",
                                }, body: JSON.stringify(data)
                            })
                                .then((response) => response.json())
                                .then((data) => {
                                    
                                    oldpass = "";
                                    newpass = "";
                                    cnewpass = "";
                                    alert("Edit Successfully");
                                });
                        }
                        else {
                           
                            oldpass = "";
                            newpass = "";
                            cnewpass = "";
                             alert("The new password and  Confirm password must be identical");
                        }

                    }
                    else {
                        oldpass = "";
                        newpass = "";
                        cnewpass = "";
                        alert("The old password is in correct");
                    }
                }
            }
        }
        );
}