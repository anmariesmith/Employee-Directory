//This is when the page is opened what will show is the entire employee list as current:
const render = function () {
    $('.content').empty();

    for (let i = 0; i < employeeList.length; i++) {
        $('.content').append(`<div class="employee-card">${employeeList[i].name}<br/><br/>${employeeList[i].officeNum}<br/><br/>${employeeList[i].phoneNum} </div>`);
    }
}
//When the view button is clicked,it will render the full list: 
$('#view').on('click', render);

// An Add option that allows users to input name, office number, and phone number and then renders the updated employee list.

// This will show the "add bar when clicked on add."
const showAdd = function () {
    $('#addContact').removeClass('hide');
    $('.content').removeClass('hide');
    $('#verifyBox').addClass('hide');
}
$('#add').on('click', showAdd);

// This will take the input from the "add bar" and add to the list , and render the new list
// const getInputVal= function(){
//     const nameVal= $('#addName').val();
//     const officeVal= $('#addOfficeNum').val();
//     const phoneVal= $('#addPhoneNum').val();
//     employeeList.push(nameVal));
//     employeeList.push(officeVal));
//     employeeList.push(phoneVal));

//     $('#addName').val('');
//     $('#addOfficNum').val('');
//     $('#addPhoneNum').val('');

//     render();
// }
// $('#magnifyButton').on('click',getInputVal);

//Adding Verfiy Box- making sure list and add bar do not show when verify is clicked
const showVerify = function () {
    $('#verifyBox').removeClass('hide');
    $('#addContact').addClass('hide');
    $('.content').addClass('hide');
}
$('#verify').on('click', showVerify);
// Adding function to verify button if input matches then display yes or no

const verifyInclude = function(){
    const verifyName = $('#verifyInput').val();
    if(employeeList.includes(verifyName)){
        $('verifyWord').removeClass('hide');
}
$('#verifyInput').val('');
}

$('#magnifyButtonVerify').on('click', verifyInclude);
