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
            expense: [],
            income: [],
        },
        totals: {
            expense: 0,
            income: 0,
        },
    };

    return {
        addItem: function(type, des, val) {
            let newItem, ID;
            let dataLength = data.allItems[type].length - 1;
            if (dataLength + 1 > 0) {
                // Create new Id
                ID = data.allItems[type][dataLength].id + 1;
            } else {
                ID = 0;
            };
            // Create new Item based on 'expense' or 'Income'
            if (type === 'expense') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'income') {
                newItem = new Income(ID, des, val);
            };
            // Push it in to our data structure;
            data.allItems[type].push(newItem);
            return newItem;
        },
        returnData: function() {
            console.log(data);
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
        let newItem = budgetCtrl.addItem(input.type, input.description, input.value)

    };

    return {
        init: function() {
            setupEventListeners();
        },
    };
   
})(budgetController, uiController);

controller.init();




