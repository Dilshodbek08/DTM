var ElInput = document.querySelector("#Input");
var ElInputName = document.querySelector("#Input-name");
var ElSelect = document.querySelector(".Universities");
var ElButton = document.querySelector(".button");
var ElOutput = document.querySelector(".output");
var ElOutput1 = document.querySelector(".output1");
var ElOutput2 = document.querySelector(".output2");
var ElOutput3 = document.querySelector(".output3");

ElOutput.style.display = "none";  
ElOutput1.style.display = "none";  
ElOutput2.style.display = "none";  
ElOutput3.style.display = "none";

//************** BUTTON Check on CLICK **************//

ElButton.addEventListener("click", function(e){
  e.preventDefault();
  var x = Number(x);
  var select = ElSelect.value;
  var name = ElInputName.value;
  var letters = /^[a-zA-Z\s.@]+$/;
  var x = ElInput.value;

  if (name == ""){
    return
  } else {
    
  }

  if (isNaN(!ElInput)) {
    return
  }

  if(name.match(letters)) {
    ElOutput.style.display = "block";
    ElOutput.textContent = `Your name : ${name}`;
    console.log(name);
    } else {
      alert("Please enter a valid name!");
      return false;
    }

  if (x == "") {
    return
  } else {
    ElOutput1.style.display = "block";
    ElOutput1.textContent = `Your score : ${x}`;
    console.log(x.value);
  }

  if (select == ""){
    return
  } else {
    ElOutput2.style.display = "block";
    ElOutput2.textContent = `Selected University : ${select}`;
  }

  // Toshkent axborot texnologiyalari universiteti
  var SupKont1 = 100;
  var Kont1 = 120;
  var Budjet1 = 150;

  // O'zbekiston milliy universiteti
  var SupKont2 = 90;
  var Kont2 = 140;
  var Budjet2 = 180;

  // Toshkent davlat iqtisodiyot universiteti //// Toshkent Moliya instituti
  var SupKont3 = 118;
  var Kont3 = 136;
  var Budjet3 = 165;

  // Toshkent davlat texnika universiteti
  var SupKont4 = 95;
  var Kont4 = 140;
  var Budjet4 = 180;

  // Jaxon iqtisodiyoti va diplomatiya universiteti
  var Kont5 = 170;
  var Budjet5 = 189;

  // Toshkent davlat yuridik universiteti //// O'zbekiston davlat jahon tillari universiteti
  var SupKont6 = 140;
  var Kont6 = 157;
  var Budjet6 = 173;
  
  switch (select) {
    case "Toshkent axborot texnologiyalari universiteti":       //1
      if (x <= SupKont1 && x >= 90) {
        ElOutput3.style.display = "block";
        ElOutput3.style.backgroundColor = "#b87a66";
        ElOutput3.textContent = "You have been accepted on the basis of a Super Contract🥲";
      } else if (x <= Kont1 && x >= 101) {
        ElOutput3.style.display = "block";
        ElOutput3.textContent = "You have been accepted on a Contract basis🙂";
        ElOutput3.style.backgroundColor = "#8bad51";
      } else if (x <= Budjet1 && x >= 121) {
        ElOutput3.style.display = "block";
        ElOutput3.textContent = "You have been admitted to study on the basis of Grand‌‌🙂🎉";
        ElOutput3.style.backgroundColor = "#539451";
        console.log(x);
      } else if (x <= 89){
          alert("You are failed, try again next year😑");
          ElOutput.style.display = "none";
          ElOutput1.style.display = "none";
          ElOutput2.style.display = "none";
          console.log(x);
      }

      if (x >= 151) {
        alert("Invalid Value!");
        ElOutput.style.display = "none";
        ElOutput1.style.display = "none";
        ElOutput2.style.display = "none";
        console.log(x);
      } else {
        return
      }
      break

    case "O'zbekiston milliy universiteti":         //2
      if (x <= SupKont2 && x >= 75) {
        ElOutput3.style.display = "block";
        ElOutput3.style.backgroundColor = "#b87a66";
        ElOutput3.textContent = "You have been accepted on the basis of a Super Contract🥲";
      } else if (x <= Kont2 && x >= 91) {
        ElOutput3.style.display = "block";
        ElOutput3.textContent = "You have been accepted on a Contract basis🙂";
        ElOutput3.style.backgroundColor = "#8bad51";
      } else if (x <= Budjet2 && x >= 141) {
        ElOutput3.style.display = "block";
        ElOutput3.textContent = "You have been admitted to study on the basis of Grand‌‌🙂🎉";
        ElOutput3.style.backgroundColor = "#539451";
        console.log(x);
      } else if (x <= 74){
          alert("You are failed, try again next year😑");
          ElOutput.style.display = "none";
          ElOutput1.style.display = "none";
          ElOutput2.style.display = "none";
          console.log(x);
      }
      
      if (x >= 181) {
        alert("Invalid Value!");
        ElOutput.style.display = "none";
        ElOutput1.style.display = "none";
        ElOutput2.style.display = "none";
        console.log(x);
      } else {
        return
      }
      break
      
    case "Toshkent davlat iqtisodiyot universiteti":         //3
    if (x <= SupKont3 && x >= 110) {
      ElOutput3.style.display = "block";
      ElOutput3.style.backgroundColor = "#b87a66";
      ElOutput3.textContent = "You have been accepted on the basis of a Super Contract🥲";
    } else if (x <= Kont3 && x >= 119) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been accepted on a Contract basis🙂";
      ElOutput3.style.backgroundColor = "#8bad51";
    } else if (x <= Budjet3 && x >= 137) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been admitted to study on the basis of Grand‌‌🙂🎉";
      ElOutput3.style.backgroundColor = "#539451";
      console.log(x);
    } else if (x <= 109){
        alert("You are failed, try again next year😑");
        ElOutput.style.display = "none";
        ElOutput1.style.display = "none";
        ElOutput2.style.display = "none";
        console.log(x);
    }
    
    if (x >= 166) {
      alert("Invalid Value!");
      ElOutput.style.display = "none";
      ElOutput1.style.display = "none";
      ElOutput2.style.display = "none";
      console.log(x);
    } else {
      return
    }
    break

    case "Toshkent Moliya instituti":         //4
    if (x <= SupKont3 && x >= 110) {
      ElOutput3.style.display = "block";
      ElOutput3.style.backgroundColor = "#b87a66";
      ElOutput3.textContent = "You have been accepted on the basis of a Super Contract🥲";
    } else if (x <= Kont3 && x >= 119) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been accepted on a Contract basis🙂";
      ElOutput3.style.backgroundColor = "#8bad51";
    } else if (x <= Budjet3 && x >= 137) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been admitted to study on the basis of Grand‌‌🙂🎉";
      ElOutput3.style.backgroundColor = "#539451";
      console.log(x);
    } else if (x <= 109){
        alert("You are failed, try again next year😑");
        ElOutput.style.display = "none";
        ElOutput1.style.display = "none";
        ElOutput2.style.display = "none";
        console.log(x);
    }
    
    if (x >= 166) {
      alert("Invalid Value!");
      ElOutput.style.display = "none";
      ElOutput1.style.display = "none";
      ElOutput2.style.display = "none";
      console.log(x);
    } else {
      return
    }
    break

    case "Toshkent davlat texnika universiteti":           //5
    if (x <= SupKont4 && x >= 87) {
      ElOutput3.style.display = "block";
      ElOutput3.style.backgroundColor = "#b87a66";
      ElOutput3.textContent = "You have been accepted on the basis of a Super Contract🥲";
    } else if (x <= Kont4 && x >= 96) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been accepted on a Contract basis🙂";
      ElOutput3.style.backgroundColor = "#8bad51";
    } else if (x <= Budjet4 && x >= 141) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been admitted to study on the basis of Grand‌‌🙂🎉";
      ElOutput3.style.backgroundColor = "#539451";
      console.log(x);
    } else if (x <= 86){
        alert("You are failed, try again next year😑");
        ElOutput.style.display = "none";
        ElOutput1.style.display = "none";
        ElOutput2.style.display = "none";
        console.log(x);
    }
    
    if (x >= 181) {
      alert("Invalid Value!");
      ElOutput.style.display = "none";
      ElOutput1.style.display = "none";
      ElOutput2.style.display = "none";
      console.log(x);
    } else {
      return
    }
    break

    case "Jaxon iqtisodiyoti va diplomatiya universiteti":         //6
    if (x >= Kont5 && x <= 179) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been accepted on a Contract basis🙂";
      ElOutput3.style.backgroundColor = "#8bad51";
    } else if (x <= Budjet5 && x >= 180) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been admitted to study on the basis of Grand‌‌🙂🎉";
      ElOutput3.style.backgroundColor = "#539451";
      console.log(x);
    } else if (x >= 190){
      alert("Invalid Value!");
      ElOutput.style.display = "none";
      ElOutput1.style.display = "none";
      ElOutput2.style.display = "none";
      console.log(x);
    } else {
      alert("You are failed, try again next year😑");
      ElOutput.style.display = "none";
      ElOutput1.style.display = "none";
      ElOutput2.style.display = "none";
      console.log(x);
    }
    break

    case "Toshkent davlat yuridik universiteti":         //7
    if (x <= SupKont6 && x >= 129) {
      ElOutput3.style.display = "block";
      ElOutput3.style.backgroundColor = "#b87a66";
      ElOutput3.textContent = "You have been accepted on the basis of a Super Contract🥲";
    } else if (x <= Kont6 && x >= 141) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been accepted on a Contract basis🙂";
      ElOutput3.style.backgroundColor = "#8bad51";
    } else if (x <= Budjet6 && x >= 158) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been admitted to study on the basis of Grand‌‌🙂🎉";
      ElOutput3.style.backgroundColor = "#539451";
      console.log(x);
    } else if (x <= 128){
        alert("You are failed, try again next year😑");
        ElOutput.style.display = "none";
        ElOutput1.style.display = "none";
        ElOutput2.style.display = "none";
        console.log(x);
    }
    
    if (x >= 174) {
      alert("Invalid Value!");
      ElOutput.style.display = "none";
      ElOutput1.style.display = "none";
      ElOutput2.style.display = "none";
      console.log(x);
    } else {
      return
    }
    break

    case "O'zbekiston davlat jahon tillari universiteti":         //8
    if (x <= SupKont6 && x >= 129) {
      ElOutput3.style.display = "block";
      ElOutput3.style.backgroundColor = "#b87a66";
      ElOutput3.textContent = "You have been accepted on the basis of a Super Contract🥲";
    } else if (x <= Kont6 && x >= 141) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been accepted on a Contract basis🙂";
      ElOutput3.style.backgroundColor = "#8bad51";
    } else if (x <= Budjet6 && x >= 158) {
      ElOutput3.style.display = "block";
      ElOutput3.textContent = "You have been admitted to study on the basis of Grand‌‌🙂🎉";
      ElOutput3.style.backgroundColor = "#539451";
      console.log(x);
    } else if (x <= 128){
        alert("You are failed, try again next year😑");
        ElOutput.style.display = "none";
        ElOutput1.style.display = "none";
        ElOutput2.style.display = "none";
        console.log(x);
    }
    
    if (x >= 174) {
      alert("Invalid Value!");
      ElOutput.style.display = "none";
      ElOutput1.style.display = "none";
      ElOutput2.style.display = "none";
      console.log(x);
    } else {
      return
    }
    break
  }
})
