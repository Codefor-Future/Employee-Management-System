var employeeList=[["default","30000000","34/43/34","23000","day","status"]]
var selectedRow=0;
var table=document.getElementById("employee_table").getElementsByTagName('tbody')[0]
updateTable()
function addEmployee(){
var arr=[];

arr[0]=document.getElementById("employeeName").value
arr[1]=document.getElementById("employeeNo").value
arr[2]=document.getElementById("employeeSalary").value
arr[3]=document.getElementById("employeeAddress").value
arr[4]=document.getElementById("employeeStatus").checked?"Active":"Not Active"
arr[5]=document.getElementById("employeeDateOfJoin").value
arr[6]=document.getElementById("employeeShift").value
   
    

    employeeList.push(arr)
    updateTable();
    this.formClear();
}


function updateTable(){//function to update table from employeeList array
    table.innerHTML=""
    var i=0;
    while(i<employeeList.length){
        
    




    var row=table.insertRow(i);
    row.addEventListener("click", rowSelect.bind(null, i));
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    cell1.innerHTML=""
    cell2.innerHTML=employeeList[i][0]
    cell3.innerHTML=employeeList[i][1]
    cell4.innerHTML=employeeList[i][3]
    cell5.innerHTML=employeeList[i][5]
    cell6.innerHTML=employeeList[i][2]
    cell7.innerHTML=employeeList[i][6]
    cell8.innerHTML=employeeList[i][4]

    if(selectedRow===i){
        row.style.background = "rgb(65, 121, 243, 0.66)"
    }
        i++;

    }
    
}
function formClear(){//function to clear form

    document.getElementById("employeeName").value=""
    document.getElementById("employeeNo").value=""
    document.getElementById("employeeSalary").value=""
    document.getElementById("employeeDateOfJoin").value=""
    document.getElementById("employeeAddress").value=""
    document.getElementById("employeeShift").value=""
    document.getElementById("employeeShift").value=""
}
function rowSelect(x){ //function to change selected row as the index of employeeList array.
    selectedRow=x
    updateTable()
}
function resetTable(){ //reset employeeList array to default value
    
    employeeList=[["default","30000000","34/43/34","23000","day","status"]]
    
    updateTable()
    formClear();
}
function deleteRow(){//delete selected row
    employeeList.splice(selectedRow,1)
    updateTable();

}
function updateRow(){ //update values of selected row from values from form
    employeeList[selectedRow][0]=document.getElementById("employeeName").value==""?"add value":document.getElementById("employeeName").value
    employeeList[selectedRow][1]=document.getElementById("employeeNo").value==""?"add value":document.getElementById("employeeNo").value
    employeeList[selectedRow][2]=document.getElementById("employeeSalary").value==""?"add value":document.getElementById("employeeSalary").value
    employeeList[selectedRow][3]=document.getElementById("employeeAddress").value==""?"add value":document.getElementById("employeeAddress").value
    employeeList[selectedRow][4]=document.getElementById("employeeStatus").checked?"Active":"Not Active"
    employeeList[selectedRow][5]=document.getElementById("employeeDateOfJoin").value==""?"add value":document.getElementById("employeeDateOfJoin").value
    employeeList[selectedRow][6]=document.getElementById("employeeShift").value==""?"add value":document.getElementById("employeeShift").value
    updateTable()
    formClear()
}


