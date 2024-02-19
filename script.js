function displayowner() {
  document.getElementById("owner").style.display = "block";
  document.getElementById("Insurance").style.display = "none";
  document.getElementById("Other").style.display = "none";
  document.getElementById("vdetails").style.display = "none";
}
function displayvdetail() {
  document.getElementById("vdetails").style.display = "block";
  document.getElementById("Insurance").style.display = "none";
  document.getElementById("Other").style.display = "none";
  document.getElementById("owner").style.display = "none";
}

function displayInsurance() {
  document.getElementById("owner").style.display = "none";
  document.getElementById("Insurance").style.display = "block";
  document.getElementById("Other").style.display = "none";
  document.getElementById("vdetails").style.display = "none";
}

function displayOther() {
  document.getElementById("owner").style.display = "none";
  document.getElementById("Other").style.display = "flex";
  document.getElementById("vdetails").style.display = "none";
  document.getElementById("Insurance").style.display = "none";
}


function ShowData() {
  // let pattern = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
  let combinedPattern =
    /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$|^\d{2}[A-Z]{2}\d{4}[A-Z]{2}$/;
  let input = document.getElementById("vehicleinput").value.toUpperCase();

  if (
    input == "" ||
    input.length < 10 ||
    input.length > 10 ||
    !combinedPattern.test(input)
  ) {
    alert("Please Enter a Valid Vehicle Number");
  } else {
    document.getElementById("div2").style.display = "block";
    const endpointUrl =
      "https://api.invincibleocean.com/invincibleVehicleFastest"; // create your account here to get your client Id and secret Key
    const headers = {
      "Content-Type": "application/json",
      clientId: "Enter your own client id",
      secretKey: "Enter your own secretkey",
    };
    const requestBody = {
      vehicleNumber: input,
    };
    fetch(endpointUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data.result);

        // owner - ownername, guardian name, ownerhand , owneraddress

        //ownername

        if (data.result.owner == null) {
          document.getElementById("ownerN").innerText = "Not Available";
        } else {
          document.getElementById("ownerN").innerText = data.result.owner;
        }

        // guardian name

        if (data.result.owner_father_name == null) {
          document.getElementById("ownerG").innerText = "Not Available";
        } else {
          document.getElementById("ownerG").innerText =
            data.result.owner_father_name;
        }

        //owner hand

        if (data.result.owner_count == null) {
          document.getElementById("ownerH").innerText = "Not Available";
        } else {
          document.getElementById("ownerH").innerText = data.result.owner_count;
        }

        //Address

        if (data.result.permanent_address == null) {
          document.getElementById("ownerA").innerText = "Not Available";
        } else {
          document.getElementById("ownerA").innerText =
            data.result.permanent_address;
        }

        //Vehicle details - manufacturing company, model name, fuel type, manufacturing date, engine number, chassis number

        // manufacturing company

        if (data.result.maker_name == null) {
          document.getElementById("maker").innerText = "Not Available";
        } else {
          document.getElementById("maker").innerText = data.result.maker_name;
        }

        //model name

        if (data.result.model == null) {
          document.getElementById("model").innerText = "Not Available";
        } else {
          document.getElementById("model").innerText = data.result.model;
        }

        //fuel type

        if (data.result.fuel_type == null) {
          document.getElementById("fuel").innerText = "Not Available";
        } else {
          document.getElementById("fuel").innerText = data.result.fuel_type;
        }

        // manufacturing date

        if (data.result.manufacturing_date == null) {
          document.getElementById("Mdate").innerText = "Not Available";
        } else {
          document.getElementById("Mdate").innerText =
            data.result.manufacturing_date;
        }

        //engine number

        if (data.result.engine == null) {
          document.getElementById("engNum").innerText = "Not Available";
        } else {
          document.getElementById("engNum").innerText = data.result.engine;
        }

        //chassis Number

        if (data.result.full_chassis == null) {
          document.getElementById("cNo").innerText = "Not Available";
        } else {
          document.getElementById("cNo").innerText = data.result.full_chassis;
        }

        // Insurance Details - Insurance Policy Number , Insurance Date, Insurance Provider

        //Insurance Policy Number

        if (data.result.insurance_policy_no == null) {
          document.getElementById("pNo").innerText = "Not Available";
        } else {
          document.getElementById("pNo").innerText =
            data.result.insurance_policy_no;
        }

        //Insurance Date

        if (data.result.insurance_date == null) {
          document.getElementById("Idate").innerText = "Not Available";
        } else {
          document.getElementById("Idate").innerText =
            data.result.insurance_date;
        }

        //Insurance Provider

        if (data.result.insurer_name == null) {
          document.getElementById("Iprovider").innerText = "Not Available";
        } else {
          document.getElementById("Iprovider").innerText =
            data.result.insurer_name;
        }

        //Other - vehicle fitness date, vehicle fit upto, pucc no, puc expiry, vehicle is blacklisted

        //Vehicle Fitness Date

        if (data.result.fitness_dt == null) {
          document.getElementById("fDate").innerText = "Not Available";
        } else {
          document.getElementById("fDate").innerText = data.result.fitness_dt;
        }

        //Vehicle Fit upto

        if (data.result.fit_upto == null) {
          document.getElementById("fupto").innerText = "Not Available";
        } else {
          document.getElementById("fupto").innerText = data.result.fit_upto;
        }

        //Pucc Number

        if (data.result.pucc_no == null) {
          document.getElementById("puno").innerText = "Not Available";
        } else {
          document.getElementById("puno").innerText = data.result.pucc_no;
        }

        //PUCC Expiry

        if (data.result.puc_expiry == null) {
          document.getElementById("pexpiry").innerText = "Not Available";
        } else {
          document.getElementById("pexpiry").innerText = data.result.puc_expiry;
        }

        //Vehicle Blacklisted

        if (data.result.is_blacklisted == null) {
          document.getElementById("isblack").innerText = "Not Available";
        } else {
          if (data.result.is_blacklisted == true) {
            document.getElementById("isblack").innerText = "Yes";
          } else {
            document.getElementById("isblack").innerText = "No";
          }
        }
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }
}
