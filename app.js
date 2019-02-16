// BUDGET CONTROLLER
let budgetController = (function() {
    
    
})();

// UI CONTROLLER
let uiController = (function() {

})();

// GLOBAL CONTROLLER
let controller= (function(budgetCtrl, uiCtrl) {

    document.querySelector('.add__btn').addEventListener('click', () => {
        let inputValue = document.querySelector('.add__value').value;
        
    });
    
    document.addEventListener('keypress', (e) => {
        let keyCode = e.keyCode;
        let inputValue = document.querySelector('.add__value').value;
        if (keyCode === 13) {
            console.log(inputValue);
        }
    })

})(budgetController, uiController);




