function SendMail(){
    var params={
      from_name : document.getElementById("custName").value,
      companyName:document.getElementById("companyName").value,
      businessEmail:document.getElementById("businessEmail").value,
      industry:document.getElementById("industry").value,
      custNumber:document.getElementById("custNumber").value,
      queries:document.getElementById("queries").value
    }
    emailjs.send("service_85j8xgp","template_gtaiev6",params).then(function(res){
      alert("Successfully message sent");
      location.reload();
    })

  }