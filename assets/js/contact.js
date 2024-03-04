function SendMail(){
    var params={
      from_name : document.getElementById("firstName").value,
      lastName:document.getElementById("lastName").value,
      companyName:document.getElementById("companyName").value,
      bussinessEmail:document.getElementById("businessEmail").value,
      jobTitle:document.getElementById("jobTitle").value,
      industry:document.getElementById("industry").value,
      country:document.getElementById("country").value,
      queries:document.getElementById("queries").value
    }
    emailjs.send("service_85j8xgp","template_gtaiev6",params).then(function(res){
      alert("Successfully message sent");
      location.reload();
    })

  }