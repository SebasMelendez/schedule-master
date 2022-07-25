const data = {
     9:"",
    10:"",
    11:"",
    12:"",
    13:"",
    14:"",
    15:"",
    16:"",
    17:"",
    18:"",
    19:"",
    20:"",
    21:""
}

let containerEL = $(".container")
let index

function translator(index){
    switch(index){
    case 9:
        time = "9:00am";
    break;

    case 10:
        time = "10:00am";
    break;

    case 11:
        time = "11:00am";
    break;

    case 12:
        time = "12:00pm";
    break;

    case 13:
        time = "1:00pm";
    break;

    case 14:
        time = "2:00pm";
    break;

    case 15:
        time = "3:00pm";
    break;

    case 16:
        time = "4:00pm";
    break;

    case 17:
        time = "5:00pm";
    break;

    case 18:
        time = "6:00pm";
    break;
    case 19:
        time = "7:00pm";
    break;

    case 20:
        time = "8:00pm";
    break;

    case 21:
        time = "9:00pm";
    break;

    default:
        time ="whoops"
      
    break;


    }

    return time;

}

function createGrid(){
    let index = 9;
    
    while(index<22){
        // debu:"",er;
        let rowId = "#" + index
        let textId= "#text-" + index
        let time = translator(index)
        let timeSheetEl = $("<div>").addClass("row time-block").attr("id",rowId)
        let timeRow = $("<div>").addClass("col-2 hour").text(time)
        let contentRow = $("<textarea>").addClass("col-8 description border border-top-0 border-bottom-0 border-secondary ").attr("id",textId) // border border-right-0 border-left-0 border-secondary 
        let saveRow = $("<button>").addClass("col-2 btn saveBtn ") //border-right-0 border-secondary
        let saveIcon =$("<i>").addClass("fas fa-save")
        saveRow.append(saveIcon)

        timeSheetEl.append(timeRow,contentRow,saveRow)

        $(containerEL).append(timeSheetEl)
        index++
    }

}

function saveContents(){

}

function audit(){
    indexHour =  moment().hour()

    $(".time-block").each(function(){
        let sheetHour = parseInt($(this).attr("id").replace('#',''))
        console.log(sheetHour,indexHour)
        
        if(sheetHour < indexHour){
            $(this).addClass("past")
        }
        else if(sheetHour > indexHour){
            $(this).addClass("future")
        }
        else{
            $(this).addClass("present")
        }
        
    })


    


}


createGrid()
audit()