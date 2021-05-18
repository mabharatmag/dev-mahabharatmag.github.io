
    function changeLanguage(language) {
      var element = document.getElementById("url");
      element.value = language;
      element.innerHTML = language;
    }

    function showDropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

  
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }


    function myFunction3() {
      var dots3 = document.getElementById("dots3");
      var moreText3 = document.getElementById("more3");
      var btnText3 = document.getElementById("myBtn3");

      if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "এরপর পড়ুন ";
        moreText3.style.display = "none";
      } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "সংকুচিত করুন";
        moreText3.style.display = "inline";
      }
    }
  
    function myFunction1() {
      var dots1 = document.getElementById("dots1");
      var moreText1 = document.getElementById("more1");
      var btnText1 = document.getElementById("myBtn1");

      if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        btnText1.innerHTML = "এরপর পড়ুন ";
        moreText1.style.display = "none";
      } else {
        dots1.style.display = "none";
        btnText1.innerHTML = "সংকুচিত করুন";
        moreText1.style.display = "inline";
      }
    }
  
    function myFunction2() {
      var dots2 = document.getElementById("dots2");
      var moreText2 = document.getElementById("more2");
      var btnText2 = document.getElementById("myBtn2");

      if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "এরপর পড়ুন ";
        moreText2.style.display = "none";
      } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "সংকুচিত করুন";
        moreText2.style.display = "inline";
      }
    }
 
    function myFunction4() {
      var dots4 = document.getElementById("dots4");
      var moreText4 = document.getElementById("more4");
      var btnText4 = document.getElementById("myBtn4");

      if (dots4.style.display === "none") {
        dots4.style.display = "inline";
        btnText4.innerHTML = "এরপর পড়ুন ";
        moreText4.style.display = "none";
      } else {
        dots4.style.display = "none";
        btnText4.innerHTML = "সংকুচিত করুন";
        moreText4.style.display = "inline";
      }
    }
  
    function myFunction5() {
      var dots5 = document.getElementById("dots5");
      var moreText5 = document.getElementById("more5");
      var btnText5 = document.getElementById("myBtn5");

      if (dots5.style.display === "none") {
        dots5.style.display = "inline";
        btnText5.innerHTML = "এরপর পড়ুন ";
        moreText5.style.display = "none";
      } else {
        dots5.style.display = "none";
        btnText5.innerHTML = "সংকুচিত করুন";
        moreText5.style.display = "inline";
      }
    }

  function myFunction6() {
    var dots6 = document.getElementById("dots6");
    var moreText6 = document.getElementById("more6");
    var btnText6 = document.getElementById("myBtn6");

    if (dots6.style.display === "none") {
      dots6.style.display = "inline";
      btnText6.innerHTML = "এরপর পড়ুন ";
      moreText6.style.display = "none";
    } else {
      dots6.style.display = "none";
      btnText6.innerHTML = "সংকুচিত করুন";
      moreText6.style.display = "inline";
    }
  }

  function myFunction7() {
    var dots7 = document.getElementById("dots7");
    var moreText7 = document.getElementById("more7");
    var btnText7 = document.getElementById("myBtn7");

    if (dots7.style.display === "none") {
      dots7.style.display = "inline";
      btnText7.innerHTML = "এরপর পড়ুন ";
      moreText7.style.display = "none";
    } else {
      dots7.style.display = "none";
      btnText7.innerHTML = "সংকুচিত করুন";
      moreText7.style.display = "inline";
    }
  }



  function myFunction8() {
    var dots8 = document.getElementById("dots8");
    var moreText8 = document.getElementById("more8");
    var btnText8 = document.getElementById("myBtn8");

    if (dots8.style.display === "none") {
      dots8.style.display = "inline";
      btnText8.innerHTML = "এরপর পড়ুন ";
      moreText8.style.display = "none";
    } else {
      dots8.style.display = "none";
      btnText8.innerHTML = "সংকুচিত করুন";
      moreText8.style.display = "inline";
    }
  }

