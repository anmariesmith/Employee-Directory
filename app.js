//This is when the page is opened what will show is the entire employee list as current:
const render = function () {
    $('.content').empty();
    for (let i = 0; i < employeeList.length; i++) {
        $('.content').append(`<div class="employee-card">${employeeList[i].name}<br/><br/>${employeeList[i].officeNum}<br/><br/>${employeeList[i].phoneNum} </div>`);
    }
}
render();
//When the view button is clicked,it will render the full list: 
const showView = function () {
    $('#addContact').addClass('hide');
    $('.content').removeClass('hide');
    $('#verifyBox').addClass('hide');
    $('#verifyWord').addClass('hide');
    $('#verifyWord2').addClass('hide');
    $('#updateContact').addClass('hide');
    $('#deleteContact').addClass('hide');
}
$('#view').on('click', showView);

// An Add option that allows users to input name, office number, and phone number and then renders the updated employee list.

// This will show the "add bar when clicked on add."
const showAdd = function () {
    $('#addContact').removeClass('hide');
    $('.content').removeClass('hide');
    $('#verifyBox').addClass('hide');
    $('#verifyWord').addClass('hide');
    $('#verifyWord2').addClass('hide');
    $('#updateContact').addClass('hide');
    $('#deleteContact').addClass('hide');
}
$('#add').on('click', showAdd);

// This will take the input from the "add bar" and add to the list , and render the new list
const getInputVal = function () {
    const nameVal = $('#addName').val();
    const officeVal = $('#addOfficeNum').val();
    const phoneVal = $('#addPhoneNum').val();
    employeeList.push({
        name: nameVal,
        officeNum: officeVal,
        phoneNum: phoneVal
    });

    $('#addName').val('');
    $('#addOfficeNum').val('');
    $('#addPhoneNum').val('');

    render();
}
$('#magnifyButton').on('click', getInputVal);

//Adding Verfiy Box- making sure list and add bar do not show when verify is clicked
const showVerify = function () {
    $('#verifyBox').removeClass('hide');
    $('#addContact').addClass('hide');
    $('.content').addClass('hide');
    $('#verifyWord').addClass('hide');
    $('#verifyWord2').addClass('hide');
    $('#updateContact').addClass('hide');
    $('#deleteContact').addClass('hide');
}
$('#verify').on('click', showVerify);
// Adding function to verify button if input matches then display yes or no

const verifyInclude = function () {
    const verifyName = $('#verifyInput').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === verifyName) {
            $('#verifyWord').removeClass('hide');
            $('#verifyWord2').addClass('hide');
            return;
        } else {
            $('#verifyWord2').removeClass('hide');
            $('#verifyWord').addClass('hide');
        }
    };
    $('#verifyInput').val('');
}

$('#magnifyButtonVerify').on('click', verifyInclude);

// An Update option that allows the user to input name, office number, and phone number and updates the office number and phone number of the employee that matches the input name, and then renders the updated employee list.
const showUpdate = function () {
    $('#addContact').addClass('hide');
    $('.content').removeClass('hide');
    $('#verifyBox').addClass('hide');
    $('#verifyWord').addClass('hide');
    $('#verifyWord2').addClass('hide');
    $('#deleteContact').addClass('hide');
    $('#updateContact').removeClass('hide');
}
$('#update').on('click', showUpdate);

const updateThis = function(){
    const nameMatch = $('#updateName').val();
    const officeNumUpdate = $('#updateOfficeNum').val();
    const phoneNumUpdate = $('#updatePhoneNum').val();
    for (let i= 0; i< employeeList.length; i++){
        if (employeeList[i].name === nameMatch) {
            employeeList[i].officeNum = officeNumUpdate;
            employeeList[i].phoneNum= phoneNumUpdate;
            $('#updateName').val('');
            $('#updateOfficeNum').val('');
            $('#updatePhoneNum').val('');
        } else {
        $('#updateName').val('');
        $('#updateOfficeNum').val('');
        $('#updatePhoneNum').val('');
        }
    };
    render();
}
$('#magnifyButtonUpdate').on('click', updateThis);

// This will show the "Delete bar when clicked on Delete"
const showDel = function () {
    $('#addContact').addClass('hide');
    $('.content').removeClass('hide');
    $('#verifyBox').addClass('hide');
    $('#verifyWord').addClass('hide');
    $('#verifyWord2').addClass('hide');
    $('#updateContact').addClass('hide');
    $('#deleteContact').removeClass('hide');
}
$('#delete').on('click', showDel);


// Delete Option that deletes the employee with the matching name and then renders the updated employee list
const deleteThis = function () {
    const nameDel = $('#delName').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameDel) {
            employeeList.splice(i,1);
            $('#delName').val('');
        } else
            $('#delName').val('');
    }
    render();
};
$('#magnifyButtonDelete').on('click', deleteThis);
