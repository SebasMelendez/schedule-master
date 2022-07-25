
let containerEL = $(".container")
let index

function translator(index){
    switch(index){
    case 0:
        time = "9:00am";
    break;

    case 1:
        time = "10:00am";
    break;

    case 2:
        time = "11:00am";
    break;

    case 3:
        time = "12:00pm";
    break;

    case 4:
        time = "1:00pm";
    break;

    case 5:
        time = "2:00pm";
    break;

    case 6:
        time = "3:00pm";
    break;

    case 7:
        time = "4:00pm";
    break;

    case 8:
        time = "5:00pm";
    break;

    case 9:
        time = "6:00pm";
    break;
    case 10:
        time = "7:00pm";
    break;

    case 11:
        time = "8:00pm";
    break;

    case 12:
        time = "9:00pm";
    break;

    default:
        time ="whoops"
      
    break;


    }

    return time;

}

function createGrid(){
    let index = 0;
    
    while(index<13){
        // debugger;
        let time = translator(index)
        let timeSheetEl = $("<div>").addClass("row time-block")
        let timeRow = $("<div>").addClass("col-2 hour").text(time)
        let contentRow = $("<textarea>").addClass("col-8 description border border-top-0 border-bottom-0 border-secondary ") // border border-right-0 border-left-0 border-secondary 
        let saveRow = $("<button>").addClass("col-2 btn saveBtn ") //border-right-0 border-secondary
        let saveIcon =$("<i>").addClass("fas fa-save")
        saveRow.append(saveIcon)

        timeSheetEl.append(timeRow,contentRow,saveRow)

        $(containerEL).append(timeSheetEl)
        index++
    }

}



createGrid()