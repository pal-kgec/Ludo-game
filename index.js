var dice=document.querySelector('.dice')
var diceresult=document.querySelector('.dicepara1')
var diceresult2=document.querySelector('.dicepara2')
var diceresult3=document.querySelector('.dicepara2')
var id;
var turn=0;
var sixCount=0;
var previousValue
var home;
var redInitialCell="cell1"
var cell=redInitialCell.slice(0,4)
var redcellValue=redInitialCell.slice(4)
var red1currentvalue=redcellValue
var red2currentvalue=redcellValue
var red3currentvalue=redcellValue
var red4currentvalue=redcellValue
var redhome=document.querySelector('#cell1')
var redcounter=1;

//green
var greenInitialCell="cell14"
var cell=greenInitialCell.slice(0,4)
var greencellValue=greenInitialCell.slice(4)
var green1currentvalue=greencellValue
var green2currentvalue=greencellValue
var green3currentvalue=greencellValue
var green4currentvalue=greencellValue
var greenhome=document.querySelector('#cell14')
var greencounter=1;

//yellow
var yellowInitialCell="cell27"
var cell=yellowInitialCell.slice(0,4)
var yellowcellValue=yellowInitialCell.slice(4)
var yellow1currentvalue=yellowcellValue
var yellow2currentvalue=yellowcellValue
var yellow3currentvalue=yellowcellValue
var yellow4currentvalue=yellowcellValue
var yellowhome=document.querySelector('#cell27')
var yellowcounter=1;

//blue
  var blueInitialCell="cell40"
  var cell=blueInitialCell.slice(0,4)
  var bluecellValue=blueInitialCell.slice(4)
  var blue1currentvalue=bluecellValue
  var blue2currentvalue=bluecellValue
  var blue3currentvalue=bluecellValue
  var blue4currentvalue=bluecellValue
  var bluehome=document.querySelector('#cell40')
  var bluecounter=1;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var g1cross=0;
var g2cross=0;
var g3cross=0;
var g4cross=0;
var y1cross=0;
var y2cross=0;
var y3cross=0;
var y4cross=0;
var b1cross=0;
var b2cross=0;
var b3cross=0;
var b4cross=0;

var targetobj;
// var random;
// var isClicked;
var targetcellValue;
var targetCell;
var targetpawn;
var pawn;
var pawnTar;
var cross;
//////////////////////////////////////////////////////////////////////////

dice.addEventListener("click",()=>{
// turn++
  random=Math.ceil(Math.random()*6)

  diceresult.innerHTML=random;
  console.log(diceresult.innerHTML);

  isClicked= false;
  if(random===6 && turn!=0){
    sixCount++
  }
  if(random===6 && turn!=0 && previousValue!=6){
    turn++
    sixCount++
  }
if(random===6 && turn===0){
  turn++
  sixCount++
}

if(random !=6 && previousValue!=6){
  turn++;
sixCount=0
}

previousValue=random;
if(sixCount===3){
  turn++;
  sixCount=0;
  previousValue=0
  diceresult3.innerHTML="Wasted turn"
  return true;

}
  // if(random===6 && turn!=0){
  //   noTurnChange++;
  // }
  // if(random===6 && turn===0){
  //   noTurnChange++;
  //   turn++;
  // }
  // if(random !=6 || noTurnChange ===3){
  //   turn++;
  //   noTurnChange=0;
  // }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // getout
  if(turn%4===1){
    console.log("Red's turn" );
    diceresult2.innerHTML="Red's turn" 
    document.querySelectorAll(".redpin").forEach(obj=>{
      obj.addEventListener("click",(event)=>{
        if(turn%4===1){
        if(random===6){
        if(isClicked===false){
          id = (event.path[0])['id'];
          redhome.appendChild(document.getElementById(id));
          isClicked=true;
          document.getElementById(id).classList.add("out")
          if(!document.getElementById(id).classList.contains("killed")){
          document.getElementById(id).id="redpout"+redcounter;
          redcounter++
          }

          // console.log(document.getElementById(id));
          obj.className="pawn red redpempty"
        }
      }
    }
      })
    });

// document.querySelectorAll()

//   getoutcomplete
isClicked= false;
  // movered
  if(random){
    document.querySelectorAll("#redpout1").forEach(obj=>{


      // obj.removeEventListener("click", getout);
      obj.addEventListener("click", (event)=>{
        if(obj.classList.contains("out")){
        if(turn%4===1){
        if(isClicked===false){
          id = (event.path[0])['id'];
          // console.log(redInitialCell);

          targetcellValue=parseInt(red1currentvalue)+parseInt(random)
          console.log("initial "+targetcellValue);
          // if(targetcellValue>52){
          //   targetcellValue=targetcellValue-52
          // }
          if(targetcellValue>51){
            targetcellValue=targetcellValue-51+60
          }
          red1currentvalue=targetcellValue
          targetCell="cell"+(targetcellValue)
           console.log(targetCell);
          targetobj=document.querySelector("#"+targetCell)
          targetobj.appendChild(document.getElementById(id));
          isClicked=true;

          console.log(targetobj.getElementsByTagName("img")[0].className);

          if(targetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
            home=targetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
            targetpawn=targetobj.getElementsByTagName("img")[0]

            document.querySelector("."+home).appendChild(targetobj.getElementsByTagName("img")[0])
            pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
             pawnv=pawn
            pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
            document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
            eval(pawn + "="+ pawnTar)
            console.log("pawn "+pawn);

            cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval(cross + "="+ "0" )
            targetpawn.classList.replace("out","killed")
          }


          // console.log(targetobj.getElementsByTagName("img")[1].className);
          // if(targetobj.getElementsByTagName("img")[0].className != document.getElementById(id).ClassName)
          // console.log(document.getElementById(id));
        }
      }
    }
      })

    })
    document.querySelectorAll("#redpout2").forEach(obj=>{
      // obj.removeEventListener("click", getout);

      obj.addEventListener("click", (event)=>{
        if(obj.classList.contains("out")){
        if(turn%4===1){
        if(isClicked===false){
          id = (event.path[0])['id'];
          // console.log(redInitialCell);
          targetcellValue=parseInt(red2currentvalue)+parseInt(random)
          console.log("initial "+targetcellValue);
          // if(targetcellValue>52){
          //   targetcellValue=targetcellValue-52
          // }
          if(targetcellValue>51){
            targetcellValue=targetcellValue-51+60
          }
          red2currentvalue=targetcellValue
          targetCell="cell"+(targetcellValue)
          console.log(targetCell);
          targetobj=document.querySelector("#"+targetCell)
          targetobj.appendChild(document.getElementById(id));
          isClicked=true;
          console.log(targetobj.getElementsByTagName("img")[0].className);
          // console.log(targetobj.getElementsByTagName("img")[1].className);
          if(targetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
            home=targetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
            targetpawn=targetobj.getElementsByTagName("img")[0]

            document.querySelector("."+home).appendChild(targetobj.getElementsByTagName("img")[0])
            pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
            pawnv=pawn
            pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
            document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
            eval( pawn + "="+ pawnTar)

            console.log("pawn "+pawn);

            cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
            targetpawn.classList.replace("out","killed")
          }
        }
      }
    }
      })

    })
    document.querySelectorAll("#redpout3").forEach(obj=>{
      // obj.removeEventListener("click", getout);

      obj.addEventListener("click", (event)=>{
        if(obj.classList.contains("out")){
        if(turn%4===1){
        if(isClicked===false){
          id = (event.path[0])['id'];
          // console.log(redInitialCell);
          targetcellValue=parseInt(red3currentvalue)+parseInt(random)
          console.log("initial "+targetcellValue);
          // if(targetcellValue>52){
          //   targetcellValue=targetcellValue-52
          // }
          if(targetcellValue>51){
            targetcellValue=targetcellValue-51+60
          }
          red3currentvalue=targetcellValue
          targetCell="cell"+(targetcellValue)
           console.log(targetCell);
          targetobj=document.querySelector("#"+targetCell)
          targetobj.appendChild(document.getElementById(id));
          isClicked=true;
          console.log(targetobj.getElementsByTagName("img")[0].className);
          if(targetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
            home=targetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
            targetpawn=targetobj.getElementsByTagName("img")[0]

            document.querySelector("."+home).appendChild(targetobj.getElementsByTagName("img")[0])
            pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
            pawnv=pawn
            pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
            document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
            eval( pawn + "="+ pawnTar)
            console.log("pawn "+pawn);

            cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
            targetpawn.classList.replace("out","killed")
          }          // console.log(document.getElementById(id));
        }
      }
    }
      })

    })
    document.querySelectorAll("#redpout4").forEach(obj=>{
      // obj.removeEventListener("click", getout);

      obj.addEventListener("click", (event)=>{
        if(obj.classList.contains("out")){
        if(turn%4===1){
        if(isClicked===false){
          id = (event.path[0])['id'];
          // console.log(redInitialCell);
          targetcellValue=parseInt(red4currentvalue)+parseInt(random)
          console.log("initial "+targetcellValue);

          // if(targetcellValue>52){
          //   targetcellValue=targetcellValue-52
          // }
          if(targetcellValue>51){
            targetcellValue=targetcellValue-51+60
          }
          red4currentvalue=targetcellValue
          targetCell="cell"+(targetcellValue)
           console.log(targetCell);
          targetobj=document.querySelector("#"+targetCell)
          targetobj.appendChild(document.getElementById(id));
          isClicked=true;
          console.log(targetobj.getElementsByTagName("img")[0].className);
          if(targetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
            home=targetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
             targetpawn=targetobj.getElementsByTagName("img")[0]

            document.querySelector("."+home).appendChild(targetobj.getElementsByTagName("img")[0])
             pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
             pawnv=pawn
             pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
            document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
            eval( pawn + "="+ pawnTar)
            console.log("pawn "+pawn);

             cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
            targetpawn.classList.replace("out","killed")
          }
          // console.log(document.getElementById(id));
        }
      }
    }
      })

    })

  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(turn%4===2){
   isClicked= false;
  console.log("Green's turn" );
diceresult2.innerHTML="Green's turn" 
  document.querySelectorAll(".greenpin").forEach(obj=>{
    obj.addEventListener("click",(event)=>{
      if(turn%4===2){
      if(random===6){
      if(isClicked===false){
        id = (event.path[0])['id'];
        greenhome.appendChild(document.getElementById(id));
        isClicked=true;
        document.getElementById(id).classList.add("out")
        if(!(document.getElementById(id).classList.contains("killed"))){
        document.getElementById(id).id="greenpout"+greencounter;
        greencounter++;
      }
        // console.log(document.getElementById(id));
        obj.className="pawn green greenpempty"
      }
    }
  }
    })
  });

// document.querySelectorAll()

//   getoutcomplete
 isClicked= false;
// movered
if(random){
  document.querySelectorAll("#greenpout1").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===2){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(event);

        greentargetcellValue=parseInt(green1currentvalue)+parseInt(random)
        console.log("initial "+greentargetcellValue);
        console.log("cross "+ g1cross);
        if(greentargetcellValue>52 && g1cross===0){

          greentargetcellValue=greentargetcellValue-52
          g1cross++
        }
        if(greentargetcellValue>12 && g1cross===1){
          greentargetcellValue=greentargetcellValue-12+70
        }
        green1currentvalue=greentargetcellValue
        greentargetCell="cell"+(greentargetcellValue)
        console.log(greentargetCell);
         greentargetobj=document.querySelector("#"+greentargetCell)
        // console.log(greentargetobj.getElementsByTagName("img")[0].className);
        greentargetobj.appendChild(document.getElementById(id));
        isClicked=true;
        // // console.log(document.getElementById(id));
        console.log(greentargetobj.getElementsByTagName("img")[0].className);
        if(greentargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=greentargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=greentargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(greentargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")
        }
      }
    }
  }
    })

  })
  document.querySelectorAll("#greenpout2").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===2){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(greenInitialCell);

        greentargetcellValue=parseInt(green2currentvalue)+parseInt(random)
        console.log("initial "+greentargetcellValue);
        console.log("cross "+ g2cross);
        if(greentargetcellValue>52 && g2cross===0){
          greentargetcellValue=greentargetcellValue-52
          g2cross++
        }
        if(greentargetcellValue>12 && g2cross===1){
          greentargetcellValue=greentargetcellValue-12+70
        }
        green2currentvalue=greentargetcellValue
        greentargetCell="cell"+(greentargetcellValue)
        console.log(greentargetCell);
         greentargetobj=document.querySelector("#"+greentargetCell)
        greentargetobj.appendChild(document.getElementById(id));

        isClicked=true;
        console.log(greentargetobj.getElementsByTagName("img")[0].className);
        if(greentargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=greentargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=greentargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(greentargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")
        }
      }
    }
  }
    })

  })
  document.querySelectorAll("#greenpout3").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===2){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(greenInitialCell);

        greentargetcellValue=parseInt(green3currentvalue)+parseInt(random)
        console.log("initial "+greentargetcellValue);
        console.log("cross "+ g3cross);
        if(greentargetcellValue>52 && g3cross===0){
          greentargetcellValue=greentargetcellValue-52
          g3cross++
        }
        if(greentargetcellValue>12 && g3cross===1){
          greentargetcellValue=greentargetcellValue-12+70
        }
        green3currentvalue=greentargetcellValue
        greentargetCell="cell"+(greentargetcellValue)
        console.log(greentargetCell);
         greentargetobj=document.querySelector("#"+greentargetCell)
        console.log(greentargetobj);
        greentargetobj.appendChild(document.getElementById(id));
        isClicked=true;
        console.log(greentargetobj.getElementsByTagName("img")[0].className);
        if(greentargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=greentargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=greentargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(greentargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")
        }
      }
    }
  }
    })

  })
  document.querySelectorAll("#greenpout4").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===2){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(greenInitialCell);

        greentargetcellValue=parseInt(green4currentvalue)+parseInt(random)
        console.log("initial "+greentargetcellValue);
        console.log("cross "+ g4cross);
        if(greentargetcellValue>52 && g4cross===0){
          greentargetcellValue=greentargetcellValue-52
          g4cross++
        }
        if(greentargetcellValue>12 && g4cross===1){
          greentargetcellValue=greentargetcellValue-12+70
        }
        green4currentvalue=greentargetcellValue
        greentargetCell="cell"+(greentargetcellValue)
        console.log(greentargetCell);
         greentargetobj=document.querySelector("#"+greentargetCell)
        console.log(greentargetobj);
        greentargetobj.appendChild(document.getElementById(id));
        isClicked=true;
        console.log(greentargetobj.getElementsByTagName("img")[0].className);
        if(greentargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=greentargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=greentargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(greentargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
          console.log("cross"+cross);
          eval( cross + "="+ "0" )

          targetpawn.classList.replace("out","killed")
        }
      }
    }
  }
    })

  })

}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

if(turn%4===3){
   isClicked= false;
  console.log("Yellow's turn" );
diceresult2.innerHTML="Yellow's turn"
  document.querySelectorAll(".yellowpin").forEach(obj=>{
    obj.addEventListener("click",(event)=>{
      if(turn%4===3){
      if(random===6){
      if(isClicked===false){
        id = (event.path[0])['id'];
        yellowhome.appendChild(document.getElementById(id));
        isClicked=true;
        document.getElementById(id).classList.add("out")
        if(!document.getElementById(id).classList.contains("killed")){
        document.getElementById(id).id="yellowpout"+yellowcounter;
        yellowcounter++;
      }
        // console.log(document.getElementById(id));
        obj.className="pawn yellow yellowpempty"
      }
    }
  }
    })
  });

// document.querySelectorAll()

//   getoutcomplete
 isClicked= false;
// movered
if(random){
  document.querySelectorAll("#yellowpout1").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===3){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(yellowInitialCell);

        yellowtargetcellValue=parseInt(yellow1currentvalue)+parseInt(random)
        console.log("initial "+yellowtargetcellValue);
        console.log("cross "+ y1cross);
        if(yellowtargetcellValue>52 && y1cross===0){
          yellowtargetcellValue=yellowtargetcellValue-52
          y1cross++
        }
        if(yellowtargetcellValue>25 && y1cross===1){
          yellowtargetcellValue=yellowtargetcellValue-25+80
        }

        yellow1currentvalue=yellowtargetcellValue
        yellowtargetCell="cell"+(yellowtargetcellValue)
        console.log(yellowtargetCell);
         yellowtargetobj=document.querySelector("#"+yellowtargetCell)
        yellowtargetobj.appendChild(document.getElementById(id));
        isClicked=true;
        console.log(yellowtargetobj.getElementsByTagName("img")[0].className);
        if(yellowtargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=yellowtargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=yellowtargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(yellowtargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)

          console.log("pawn "+pawn);


           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")

        }
      }
    }
  }
    })

  })
  document.querySelectorAll("#yellowpout2").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===3){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(yellowInitialCell);

        yellowtargetcellValue=parseInt(yellow2currentvalue)+parseInt(random)
        console.log("initial "+yellowtargetcellValue);
        console.log("cross "+ y2cross);
        if(yellowtargetcellValue>52 && y2cross===0){
          yellowtargetcellValue=yellowtargetcellValue-52
          y2cross++
        }
        if(yellowtargetcellValue>25 && y2cross===1){
          yellowtargetcellValue=yellowtargetcellValue-25+80
        }
        yellow2currentvalue=yellowtargetcellValue
        yellowtargetCell="cell"+(yellowtargetcellValue)
        console.log("final"+yellowtargetCell);
         yellowtargetobj=document.querySelector("#"+yellowtargetCell)

        // console.log(yellowtargetobj.getElementsByTagName("img")[0]);
        yellowtargetobj.appendChild(document.getElementById(id));
        isClicked=true;
        // console.log(yellowtargetobj.getElementsByTagName("img")[0].className);
        if(yellowtargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=yellowtargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=yellowtargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(yellowtargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")
        }
      }
    }
  }
    })

  })
  document.querySelectorAll("#yellowpout3").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===3){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(yellowInitialCell);

        yellowtargetcellValue=parseInt(yellow3currentvalue)+parseInt(random)
        console.log("initial "+yellowtargetcellValue);
        console.log("cross "+ y3cross);
        if(yellowtargetcellValue>52 && y3cross===0){
          yellowtargetcellValue=yellowtargetcellValue-52
          y3cross++
        }
        if(yellowtargetcellValue>25 && y3cross===1){
          yellowtargetcellValue=yellowtargetcellValue-25+80
        }
        yellow3currentvalue=yellowtargetcellValue
        yellowtargetCell="cell"+(yellowtargetcellValue)
        console.log(yellowtargetCell);
         yellowtargetobj=document.querySelector("#"+yellowtargetCell)
        console.log(yellowtargetobj);
        yellowtargetobj.appendChild(document.getElementById(id));
        isClicked=true;
        console.log(yellowtargetobj.getElementsByTagName("img")[0].className);
        if(yellowtargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=yellowtargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=yellowtargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(yellowtargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")
        }
      }
    }
  }
    })

  })
  document.querySelectorAll("#yellowpout4").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===3){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(yellowInitialCell);

        yellowtargetcellValue=parseInt(yellow4currentvalue)+parseInt(random)
        console.log("initial "+yellowtargetcellValue);
        console.log("cross "+ y4cross);
        if(yellowtargetcellValue>52 && y4cross===0){
          yellowtargetcellValue=yellowtargetcellValue-52
          y4cross++
        }
        if(yellowtargetcellValue>25 && y4cross===1){
          yellowtargetcellValue=yellowtargetcellValue-25+80
        }
        yellow4currentvalue=yellowtargetcellValue
        yellowtargetCell="cell"+(yellowtargetcellValue)
        console.log(greentargetCell);
         yellowtargetobj=document.querySelector("#"+yellowtargetCell)
        console.log(yellowtargetobj);
        yellowtargetobj.appendChild(document.getElementById(id));
        isClicked=true;
        console.log(yellowtargetobj.getElementsByTagName("img")[0].className);
        if(yellowtargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=yellowtargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"

           targetpawn=yellowtargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(yellowtargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")
        }
      }
    }
  }
    })

  })

}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(turn%4===0){
   isClicked= false;
  console.log("Blue's turn" );
diceresult2.innerHTML="Blue's turn"
  document.querySelectorAll(".bluepin").forEach(obj=>{
    obj.addEventListener("click",(event)=>{
      if(turn%4===0){
      if(random===6){
      if(isClicked===false){
        id = (event.path[0])['id'];
        bluehome.appendChild(document.getElementById(id));
        isClicked=true;
        document.getElementById(id).classList.add("out")
        if(!document.getElementById(id).classList.contains("killed")){
        document.getElementById(id).id="bluepout"+bluecounter;
        bluecounter++;
      }
        // console.log(document.getElementById(id));
        obj.className="pawn blue bluepempty"
      }
    }
  }
    })
  });

// document.querySelectorAll()

//   getoutcomplete
 isClicked= false;
// movered
if(random){
  document.querySelectorAll("#bluepout1").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===0){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(blueInitialCell);

        bluetargetcellValue=parseInt(blue1currentvalue)+parseInt(random)
        console.log("initial "+bluetargetcellValue);
        console.log("cross "+ b1cross);
        if(bluetargetcellValue>52 && b1cross===0){
          bluetargetcellValue=bluetargetcellValue-52
        b1cross++
        }
        if(bluetargetcellValue>38 && b1cross===1){
          bluetargetcellValue=bluetargetcellValue-38+90
        }
        blue1currentvalue=bluetargetcellValue
        bluetargetCell="cell"+(bluetargetcellValue)
        console.log(bluetargetCell);
         bluetargetobj=document.querySelector("#"+bluetargetCell)
        bluetargetobj.appendChild(document.getElementById(id));
        isClicked=true;
        console.log(bluetargetobj.getElementsByTagName("img")[0].className);
        if(bluetargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=bluetargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=bluetargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(bluetargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")
        }
      }
    }
  }
    })

  })
  document.querySelectorAll("#bluepout2").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===0){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(blueInitialCell);

        bluetargetcellValue=parseInt(blue2currentvalue)+parseInt(random)
        console.log("initial "+bluetargetcellValue);
        console.log("cross "+ b2cross);
        if(bluetargetcellValue>52 && b2cross===0){
          bluetargetcellValue=bluetargetcellValue-52
          b2cross++
          }
          if(bluetargetcellValue>38 && b2cross===1){
            bluetargetcellValue=bluetargetcellValue-38+90
          }
        blue2currentvalue=bluetargetcellValue
        bluetargetCell="cell"+(bluetargetcellValue)

         bluetargetobj=document.querySelector("#"+bluetargetCell)
        bluetargetobj.appendChild(document.getElementById(id));
        isClicked=true;

        if(bluetargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=bluetargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=bluetargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(bluetargetobj.getElementsByTagName("img")[0])

           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")

        }
      }
    }
  }
    })

  })
  document.querySelectorAll("#bluepout3").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===0){
      if(isClicked===false){
        id = (event.path[0])['id'];


        bluetargetcellValue=parseInt(blue3currentvalue)+parseInt(random)
        console.log("initial "+bluetargetcellValue);
        console.log("cross "+ b3cross);
        if(bluetargetcellValue>52 && b3cross===0){
          bluetargetcellValue=bluetargetcellValue-52
          b3cross++
          }
          if(bluetargetcellValue>38 && b3cross===1){
            bluetargetcellValue=bluetargetcellValue-38+90
          }
        blue3currentvalue=bluetargetcellValue
        bluetargetCell="cell"+(bluetargetcellValue)

         bluetargetobj=document.querySelector("#"+bluetargetCell)
        bluetargetobj.appendChild(document.getElementById(id));
        isClicked=true;
        console.log(bluetargetobj.getElementsByTagName("img")[0].className);
        if(bluetargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=bluetargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=bluetargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(bluetargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")

        }
      }
    }
  }
    })

  })
  document.querySelectorAll("#bluepout4").forEach(obj=>{
    // obj.removeEventListener("click", getout);

    obj.addEventListener("click", (event)=>{
      if(obj.classList.contains("out")){
      if(turn%4===0){
      if(isClicked===false){
        id = (event.path[0])['id'];
        console.log(blueInitialCell);

        bluetargetcellValue=parseInt(blue4currentvalue)+parseInt(random)
        console.log("initial "+bluetargetcellValue);
        console.log("cross "+ b4cross);
        if(bluetargetcellValue>52 && b4cross===0){
          bluetargetcellValue=bluetargetcellValue-52
          b4cross++
          }
          if(bluetargetcellValue>38 && b4cross===1){
            bluetargetcellValue=bluetargetcellValue-38+90
          }
        blue4currentvalue=bluetargetcellValue
        bluetargetCell="cell"+(bluetargetcellValue)
        console.log(bluetargetCell);
         bluetargetobj=document.querySelector("#"+bluetargetCell)
        bluetargetobj.appendChild(document.getElementById(id));
        isClicked=true;
        console.log(bluetargetobj.getElementsByTagName("img")[0].className);
        if(bluetargetobj.getElementsByTagName("img")[0].classList[0] != document.getElementById(id).classList[0]){
          home=bluetargetobj.getElementsByTagName("img")[0].classList[0].slice(0,-3)+"empty"
           targetpawn=bluetargetobj.getElementsByTagName("img")[0]

          document.querySelector("."+home).appendChild(bluetargetobj.getElementsByTagName("img")[0])
           pawn=targetpawn.id.slice(0,-5)+targetpawn.id.slice(-1)+"currentvalue"
           pawnv=pawn
           pawnTar=targetpawn.id.slice(0,-5)+"cellValue"
          document.querySelector("."+home).className="pawn"+" "+targetpawn.id.slice(0,-5)+" "+targetpawn.id.slice(0,-4)+"in"
          eval( pawn + "="+ pawnTar)
          console.log("pawn "+pawn);

           cross=targetpawn.id.slice(0,1)+targetpawn.id.slice(-1)+"cross"
console.log(cross);
eval( cross + "="+ "0" )
          targetpawn.classList.replace("out","killed")

        }
      }
    }
  }
    })

  })

}
}

  })




  // var redpawns=document.querySelectorAll('.redpawn');


//   dice.addEventListener("click",()=>{
//     var random=Math.ceil(Math.random()*6)
//     diceresult.innerHTML=random;
//     console.log(diceresult.innerHTML);
//     var isClicked= false;
//
//
//     // getout
//     if(random===6){
//       document.querySelectorAll(".redpin").forEach(obj=>{
//         obj.addEventListener("click",(event)=>{
//           if(isClicked===false){
//             id = (event.path[0])['id'];
//             redhome.appendChild(document.getElementById(id));
//             isClicked=true;
//             document.getElementById(id).id="redpout"+counter;
//             counter++;
//             // console.log(document.getElementById(id));
//           }
//         })
//       });
//     }
//   // document.querySelectorAll()
//
//   //   getoutcomplete
//   var isClicked= false;
//     // movered
//     if(random){
//       document.querySelectorAll("#redpout1").forEach(obj=>{
//         // obj.removeEventListener("click", getout);
//         obj.addEventListener("click", (event)=>{
//           if(isClicked===false){
//             id = (event.path[0])['id'];
//             // console.log(redInitialCell);
//
//             targetcellValue=parseInt(red1currentvalue)+parseInt(random)
//             red1currentvalue=targetcellValue
//             targetCell="cell"+(targetcellValue)
//             // console.log(targetCell);
//             var targetobj=document.querySelector("#"+targetCell)
//             targetobj.appendChild(document.getElementById(id));
//             isClicked=true;
//             // console.log(document.getElementById(id));
//           }
//         })
//       })
//       document.querySelectorAll("#redpout2").forEach(obj=>{
//         // obj.removeEventListener("click", getout);
//         obj.addEventListener("click", (event)=>{
//           if(isClicked===false){
//             id = (event.path[0])['id'];
//             // console.log(redInitialCell);
//             targetcellValue=parseInt(red2currentvalue)+parseInt(random)
//             red2currentvalue=targetcellValue
//             targetCell="cell"+(targetcellValue)
//             // console.log(targetCell);
//             var targetobj=document.querySelector("#"+targetCell)
//             targetobj.appendChild(document.getElementById(id));
//             isClicked=true;
//             // console.log(document.getElementById(id));
//           }
//         })
//       })
//       document.querySelectorAll("#redpout3").forEach(obj=>{
//         // obj.removeEventListener("click", getout);
//         obj.addEventListener("click", (event)=>{
//           if(isClicked===false){
//             id = (event.path[0])['id'];
//             // console.log(redInitialCell);
//             targetcellValue=parseInt(red3currentvalue)+parseInt(random)
//             red3currentvalue=targetcellValue
//             targetCell="cell"+(targetcellValue)
//             // console.log(targetCell);
//             var targetobj=document.querySelector("#"+targetCell)
//             targetobj.appendChild(document.getElementById(id));
//             isClicked=true;
//             // console.log(document.getElementById(id));
//           }
//         })
//       })
//       document.querySelectorAll("#redpout4").forEach(obj=>{
//         // obj.removeEventListener("click", getout);
//         obj.addEventListener("click", (event)=>{
//           if(isClicked===false){
//             id = (event.path[0])['id'];
//             // console.log(redInitialCell);
//             targetcellValue=parseInt(red4currentvalue)+parseInt(random)
//             red4currentvalue=targetcellValue
//             targetCell="cell"+(targetcellValue)
//             // console.log(targetCell);
//             var targetobj=document.querySelector("#"+targetCell)
//             targetobj.appendChild(document.getElementById(id));
//             isClicked=true;
//             // console.log(document.getElementById(id));
//           }
//         })
//       })
//
//     }
//
//     })
//   // var redp1=document.querySelector('#redpawn1')
//   // redp1.style.position="absolute"
//   // var redp2=document.querySelector('#redpawn2')
//   // redp2.style.position="absolute"
//   // var redp3=document.querySelector('#redpawn3')
//   // redp3.style.position="absolute"
//   //
//   // var redp4=document.querySelector('#redpawn4')
//   // redp4.style.position="absolute"
// // var leftstyle=40;
//
//   // redhome.id
//
// // redp1.addEventListener("click", ()=>{
// //
// //   redhome.appendChild(redp1);
// //
// // })
// // redp2.addEventListener("click", ()=>{
// //
// //   redhome.appendChild(redp2);
// //
// // })
// // redp3.addEventListener("click", ()=>{
// //
// //   redhome.appendChild(redp3);
// //
// // })
// // redp4.addEventListener("click", ()=>{
// //
// //   redhome.appendChild(redp4);
// //
// // })
//
// // var k=1
// // var redInitialCell="cell1"+k
// // console.log(redInitialCell);
// // console.log(redInitialCell.slice(0,4));
//
//
//
// // for(var i=-1;i<2;i++){
// //   var topstyle=0;
// //   for(var j=7;j>1;j--){
// //     if((i==0 && j!=7) || (i==1 && j==6)){
// //     var div=document.createElement("div");
// //     div.className="cell yellow";
// //     div.id="cell"+i+j;
// //     div.style.top=topstyle+"%";
// //     div.style.left=leftstyle+"%";
// //     topstyle+=6.66;
// //     document.querySelector(".game").appendChild(div);
// //   }
// //   else{
// //     var div=document.createElement("div");
// //     div.className="cell";
// //     div.id="cell"+i+j;
// //     div.style.top=topstyle+"%";
// //     div.style.left=leftstyle+"%";
// //     topstyle+=6.66;
// //     document.querySelector(".game").appendChild(div);
// //   }
// //   }
// //   leftstyle+=6.66;
// // }
// // var leftstyle=40;
// // for(var i=-1;i<2;i++){
// //   var bottomstyle=0;
// //   for(var j=-7;j<-1;j++){
// //     if((i==0 && j!=-7)||(i==-1 && j==-6)){
// //       var div=document.createElement("div");
// //       div.className="cell red";
// //       div.id="cell"+i+j;
// //       div.style.bottom=bottomstyle+"%";
// //       div.style.left=leftstyle+"%";
// //       bottomstyle+=6.66;
// //       document.querySelector(".game").appendChild(div);
// //     }
// //     else{
// //     var div=document.createElement("div");
// //     div.className="cell";
// //     div.id="cell"+i+j;
// //     div.style.bottom=bottomstyle+"%";
// //     div.style.left=leftstyle+"%";
// //     bottomstyle+=6.66;
// //     document.querySelector(".game").appendChild(div);
// //   }
// //   }
// //   leftstyle+=6.66;
// // }
// // var topstyle=40;
// // for(var j=1;j>-2;j--){
// //   var leftstyle=0;
// //   for(var i=-7;i<-1;i++){
// //     if((j==0 && i!=-7)||(j==1 && i==-6)){
// //       var div=document.createElement("div");
// //       div.className="cell green";
// //       div.id="cell"+i+j;
// //       div.style.top=topstyle+"%";
// //       div.style.left=leftstyle+"%";
// //       leftstyle+=6.66;
// //       document.querySelector(".game").appendChild(div);
// //     }
// //     else{
// //     var div=document.createElement("div");
// //     div.className="cell";
// //     div.id="cell"+i+j;
// //     div.style.top=topstyle+"%";
// //     div.style.left=leftstyle+"%";
// //     leftstyle+=6.66;
// //     document.querySelector(".game").appendChild(div);
// //   }
// //   }
// //   topstyle+=6.66;
// // }
// // topstyle=40;
// // for(var j=1;j>-2;j--){
// //   var rightstyle=0;
// //   for(var i=7;i>1;i--){
// //     if((j==0 && i!=7)||(j==-1 &&i==6)){
// //       var div=document.createElement("div");
// //       div.className="cell blue";
// //       div.id="cell"+i+j;
// //       div.style.top=topstyle+"%";
// //       div.style.right=rightstyle+"%";
// //       rightstyle+=6.66;
// //       document.querySelector(".game").appendChild(div);
// //     }
// //     else{
// //     var div=document.createElement("div");
// //     div.className="cell";
// //     div.id="cell"+i+j;
// //     div.style.top=topstyle+"%";
// //     div.style.right=rightstyle+"%";
// //     rightstyle+=6.66;
// //     document.querySelector(".game").appendChild(div);
// //   }
// //   }
// //   topstyle+=6.66;
// // }
