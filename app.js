// BUDGET CONTROLLER
let budgetController = (function() {
    
    
})();

// UI CONTROLLER
let uiController = (function() {

    return {
        getInput: function() {
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value,
            };       
        },
    };
})();

// GLOBAL CONTROLLER
let controller= (function(budgetCtrl, uiCtrl) {

    let ctrlAddItem = function() {
        let input = uiCtrl.getInput();
        console.log(input);
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            ctrlAddItem();
        };
    });

})(budgetController, uiController);




