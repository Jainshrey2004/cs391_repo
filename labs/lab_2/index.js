const BIN_URL="https://api.jsonbin.io/v3/b/68cda33ed0ea881f408365c2";
const API_KEY="$2a$10$hPWsji4bYIsVeIu48Laipeh42fFo1rI9mJjmOfD5JRJlpMz7jmwky";
const output=document.getElementById("output");

async function getData(){
    const response=await fetch(BIN_URL,{
        headers:{
            "X-Master-Key":API_KEY
        }
    });
    const data=await response.json();
    console.log(data);
    const singleAffiliate=data.record.affiliates.map(
      (a) => 
      `<li>
        ${a.fName} ${a.lName} (${a.isStudent ? "student" : "not a student"})
        </li>`
    );
    output.innerHTML += singleAffiliate;
  }