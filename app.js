// // BUDGET CONTROLLER
// let budgetController = (function() {
    
//     let Expense = function(id , description, value) {
//         this.id = id;
//         this.description = description;
//         this.value = value;
//     };

//     let Income = function(id , description, value) {
//         this.id = id;
//         this.description = description;
//         this.value = value;
//     };
    
//     function calculateTotal(type) {
//         let sum = 0;
//          data.allItems[type].forEach(cur => {
//             sum += cur.value;
//         });
//         data.totals[type] = sum;
//     };

//     let data = {
//         allItems: {
//             expense: [],
//             income: [],
//         },
//         totals: {
//             expense: 0,
//             income: 0,
//         },
//         budget: 0,
//         percentage: -1,
//     };

//     return {
//         addItem: function(type, des, val) {
//             let newItem, Id, idLength;
//             idLength = data.allItems[type].length;
//             if (idLength > 0) {
//                 // Create new Id
//                 Id = data.allItems[type][idLength - 1].id + 1;
//             } else {
//                 Id = 0;
//             };
//             // Create new Item based on 'expense' or 'Income'
//             if (type === 'expense') {
//                 newItem = new Expense(Id, des, val);
//             } else if (type === 'income') {
//                 newItem = new Income(Id, des, val);
//             };
//             // Push it in to our data structure;
//             data.allItems[type].push(newItem);
//             return newItem;
//         },

//         calcBudget: function() {

//             // calculate total income and expenses
//             calculateTotal('expense');
//             calculateTotal('income');

//             // calculate the budget: income - expenses
//             data.budget = data.totals.income - data.totals.expense

//             // calculate the percentage of income spent
//             if (data.totals.income > 0) {
//                 data.percentage = Math.round((data.totals.expense / data.totals.income) * 100);
//             } else {
//                 data.percentage = -1;
//             }
//         },

//         getBudget: function() {
//             return {
//                 budget: data.budget,
//                 totalIncome: data.totals.income,
//                 totalExpense: data.totals.expense,
//                 percentage: data.percentage,
//             };
//         },

//         testing: function() {
//             return data;
//         },
//     };
    
// })();

// // UI CONTROLLER
// let uiController = (function() {

//     let DomStrings = {
//         inputType: '.add__type',
//         inputDescription: '.add__description',
//         inputValue: '.add__value',
//         inputBtn: '.add__btn',
//         incomeContainer: '.income__list',
//         expensesContainer: '.expenses__list', 
//     };

//     return {
//         getInput: function() {
//             return {
//                 type: document.querySelector(DomStrings.inputType).value,
//                 description: document.querySelector(DomStrings.inputDescription).value,
//                 value: parseFloat(document.querySelector(DomStrings.inputValue).value),
//             };       
//         },

//         addListItem: function(obj, type) {
//             let html, newHtml, element;

//             if (type === 'income') {
//                 element = DomStrings.incomeContainer;
//                 html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value% </div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//             } else if (type === 'expense') {
//                 element = DomStrings.expensesContainer;
//                 html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//             };

//             newHtml = html.replace('%id%', obj.id);
//             newHtml = newHtml.replace('%description%', obj.description);
//             newHtml = newHtml.replace('%value%', obj.value);

//             document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//         },

//         clearFields: function() {
//             let fields = document.querySelectorAll(DomStrings.inputDescription + ', ' + DomStrings.inputValue);
//             // let fieldsArr = Array.prototype.slice.call(fields);
//             let fieldsArr = Array.from(fields);
//             fieldsArr.forEach(cur => {
//                 cur.value = '';
//             });
//             fieldsArr[0].focus();
//         },

//         getDomStrings: function() {
//             return DomStrings;
//         },
//     };
// })();

// // GLOBAL CONTROLLER
// let controller= (function(budgetCtrl, uiCtrl) {

//     let setupEventListeners = function() {
//         let dom = uiCtrl.getDomStrings();
//         document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);
    
//         document.addEventListener('keypress', (e) => {
//             if (e.keyCode === 13) {
//                 ctrlAddItem();
//             };
//         });    
//     };

//     let updateBudget = function() {

//         // Calculate the budget
//         budgetCtrl.calcBudget();
//         // Return the budget
//         let budget = budgetCtrl.getBudget();
//         // Display the budget on the Ui
//         console.log(budget);
//     };
    
//     let ctrlAddItem = function() {
//         // Get the field input data
//         let input = uiCtrl.getInput();

//         if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
//             // Add the item to the budget controller
//             let newItem = budgetCtrl.addItem(input.type, input.description, input.value);

//             // Add the Item to the Ui
//             uiCtrl.addListItem(newItem, input.type);

//             // Clear the fields
//             uiCtrl.clearFields();

//             // Calculate and update budget
//             updateBudget();
//         }; 
//     };

//     return {
//         init: function() {
//             setupEventListeners();
//         },
//     };
   
// })(budgetController, uiController);

// controller.init();


let budgetController = (function() {

    let Expense = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value
    };
    let Income = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value
    };

        

})();

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

        clearFields: function() {
            let fields = document.querySelectorAll(DomStrings.inputDescription + ', ' + DomStrings.inputValue);
            let fieldsArr = Array.from(fields);
            fieldsArr.forEach(cur => {
                cur.vlaue = '';
            });
            fieldsArr[0].focus();
        },

        getDomStrings: function() {
            return DomStrings;
        },
    };

})();

let controller = (function(budgetCtrl, uiCtrl) {

    let eventListener = function() {
        let dom = uiCtrl.getDomStrings();
        
        document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItems);
        
        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                ctrlAddItems()
            };
        });
    };
    
    function ctrlAddItems() {
        let input = uiCtrl.getInput();
        console.log(input);
        uiCtrl.clearFields();
    };

    return {
        init: function() {
            eventListener();
        },
    };

})(budgetController, uiController);

controller.init();