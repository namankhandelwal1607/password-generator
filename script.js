function generate()
{
    let length = document.getElementById("e").value;

    if(length < 0)
    {
        alert("Enter valid password length");
    }

    else{
    let small = "abcdefghijklmnopqrstuvwxyz";
    let large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "1234567890";
    let special = "~!@#$%^&*()_+=";
    let password = "";

    let data = small + large + special + number;

    
    for(let i=0;i<length;i++)
    {
        let letter = Math.floor(Math.random() * data.length);
        password += data.charAt(letter);
    }

    //let pass = document.getElementById("b");
    //pass.innerHTML = password;
    document.getElementById("b").innerHTML = password;
    //document.getElementById("b").value = password;
}
}



generate();
