
function displayowner(){
    document.getElementById("owner").style.display = 'block';
    document.getElementById("Insurance").style.display = 'none';
    document.getElementById("Other").style.display = 'none';
    document.getElementById("vdetails").style.display = 'none';
}
function displayvdetail(){
    document.getElementById("vdetails").style.display = 'block';
    document.getElementById("Insurance").style.display = 'none';
    document.getElementById("Other").style.display = 'none';
    document.getElementById("owner").style.display = 'none';
}

function displayInsurance(){
    document.getElementById("owner").style.display = 'none';
    document.getElementById("Insurance").style.display = 'block';
    document.getElementById("Other").style.display = 'none';
    document.getElementById("vdetails").style.display = 'none';
}

function displayOther(){
    document.getElementById("owner").style.display = 'none';
    document.getElementById("Other").style.display = 'flex';
    document.getElementById("vdetails").style.display = 'none';
    document.getElementById("Insurance").style.display = 'none';
}

function ShowDiv(){
    document.getElementById("div2").style.display = "block";
}

