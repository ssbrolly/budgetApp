// BUDGET CONTROLLER
let budgetController = (function() {
    
    let Expense = function(id , description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id , description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
    };
    
})();

// UI CONTROLLER
let uiController = (function() {

    let DomStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DomStrings.inputType).value,
                description: document.querySelector(DomStrings.inputDescription).value,
                value: document.querySelector(DomStrings.inputValue).value,
            };       
        },
        getDomStrings: function() {
            return DomStrings;
        },
    };
})();

// GLOBAL CONTROLLER
let controller= (function(budgetCtrl, uiCtrl) {

    let setupEventListeners = function() {
        let dom = uiCtrl.getDomStrings();
        document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                ctrlAddItem();
            };
        });    
    };
    
    let ctrlAddItem = function() {
        let input = uiCtrl.getInput();
    };

    return {
        init: function() {
            setupEventListeners();
        },
    };
   
})(budgetController, uiController);

controller.init();




