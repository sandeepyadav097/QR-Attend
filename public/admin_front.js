$(function () {
    let className = $('#classInput')  

    function addClassTable () {
        $.post('/createClass', {}, 
         function (data) {
            console.log("success"+data)
        })
    }
    
    
    $('#createTableButton').click(function () {
        addClassTable();       

    })

})