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

//         deleteItem: function(type, id) {
//             let ids, index;
//             ids = data.allItems[type].map(cur => {
//                 return cur.id;
//             });
//             index = ids.indexOf(id);
//             if (index !== -1) {
//                 data.allItems[type].splice(index, 1);
//             };
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
//         budgetLabel: '.budget__value',
//         incomeLabel: '.budget__income--value',
//         expenseLabel: '.budget__expenses--value',
//         percentageLabel: '.budget__expenses--percentage',
//         container: '.container',
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

//         deleteListItem: function(selectorId) {
//             let element = document.getElementById(selectorId);
//             element.parentNode.removeChild(element);
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

//         displayBudget: function(obj) {            
//             document.querySelector(DomStrings.budgetLabel).textContent = obj.budget;
//             document.querySelector(DomStrings.incomeLabel).textContent = obj.totalIncome;
//             document.querySelector(DomStrings.expenseLabel).textContent = obj.totalExpense;
//             if (obj.percentage > 0) {
//                 document.querySelector(DomStrings.percentageLabel).textContent = obj.percentage + '%';
//             } else {
//                 document.querySelector(DomStrings.percentageLabel).textContent = '---';

//             };

        
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
//         document.querySelector(dom.container).addEventListener('click', ctrlDeleteItem);
//     };

//     let updateBudget = function() {

//         // Calculate the budget
//         budgetCtrl.calcBudget();
//         // Return the budget
//         let budget = budgetCtrl.getBudget();
//         // Display the budget on the Ui
//         uiCtrl.displayBudget(budget);
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

//     let ctrlDeleteItem = function(e) {        
//         let itemId, splitId, type, Id;
//         itemId = e.target.parentNode.parentNode.parentNode.parentNode.id;
//         if (itemId) {
//             splitId = itemId.split('-');
//             type = splitId[0];
//             Id = parseInt(splitId[1]);

//              //Delete the item from the data stucture
//             budgetCtrl.deleteItem(type, Id);

//             //Delete the item form the ui
//             uiCtrl.deleteListItem(itemId);

//             //Update the budget
//             updateBudget();
//         };
//     };

//     return {
//         init: function() {
//             setupEventListeners();
//             uiCtrl.displayBudget({
//                 budget: 0,
//                 totalIncome: 0,
//                 totalExpense: 0,
//                 percentage: 0,
//             });
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

    let data = {
        allItems: {
            expense: [],
            income: [],
        },
        totals: {
            expense: 0,
            income: 0
        },
        budget: 0,
        percentage: -1
    };

    function calculateTotals(type) {
        let sum = 0;
        data.allItems[type].forEach(cur => {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    return {
        addItems: function(type, des, val) {
            let newItem, Id, idLength;
            idLength = data.allItems[type].length;
            if (idLength > 0) {
                Id = data.allItems[type][idLength -1].id + 1;
            } else {
                Id = 0;
            }
            if (type === 'expense') {
                newItem = new Expense(Id, des, val);
            } else if (type === 'income') {
                newItem = new Income(Id, des, val);
            };
            data.allItems[type].push(newItem);
            return newItem;
        },

        calculateBudget: function() {
            calculateTotals('expense');
            calculateTotals('income');
            let income = data.totals.income;
            let expense = data.totals.expense;
            data.budget = income - expense;
            if (income > 0) {
                data.percentage = Math.round((expense / income) * 100); 
            } else {
                data.percentage = -1;
            };
        },

        deleteItem: function(type, id) {
            let ids = data.allItems[type].map(cur => {
                return cur.id;
            });
            index = ids.indexOf(id);
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            };
        },


        getbudget: function() {
            return {
                budget: data.budget,
                totalIncome: data.totals.income,
                totalExpense: data.totals.expense,
                percentage: data.percentage,
            };
        },

        testing: function() {
            return data;
        }
    };

})();

let uiController = (function() {

    let domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(domStrings.inputType).value,
                description: document.querySelector(domStrings.inputDescription).value,
                value: parseFloat(document.querySelector(domStrings.inputValue).value),
            };
        },

        addListItem: function(obj, type) {
            let html, element, newHtml;
            if (type === 'expense') {
                element = domStrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            
            } else if (type === 'income') { 
                element = domStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            };

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            let fields, fieldsArr;
            fields = document.querySelectorAll(domStrings.inputDescription + ',' + domStrings.inputValue);
            fieldsArr = Array.from(fields);
            fieldsArr.forEach(cur => {
                cur.value = '';
            });
            fieldsArr[0].focus()
        },

        displayBudget: function(obj) {
            document.querySelector(domStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(domStrings.incomeLabel).textContent = obj.totalIncome;
            document.querySelector(domStrings.expenseLabel).textContent = obj.totalExpense;
            if (obj.percentage > 0) {
                document.querySelector(domStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(domStrings.percentageLabel).textContent = '--%';
            }
        },

        getDomStrings: function() {
            return domStrings;
        },
    };

})();

let controller = (function(budgetCtrl, uiCtrl) {


    function getEventListeners() {
        let dom = uiCtrl.getDomStrings();
        document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                ctrlAddItem();
            };
        });
        document.querySelector(dom.container).addEventListener('click', ctrlDeleteItem);
    };

    let updateBudget = function() {
        budgetCtrl.calculateBudget();
        let budget = budgetCtrl.getbudget();
        uiCtrl.displayBudget(budget);
    
    }

    function ctrlAddItem() {
        let input = uiCtrl.getInput();
        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            let newItem = budgetCtrl.addItems(input.type, input.description, input.value);
            updateBudget();
            uiCtrl.addListItem(newItem, input.type);
            uiCtrl.clearFields();
        };
    };

    function ctrlDeleteItem(e) {
        let itemId, splitId, type, id;
        itemId = e.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemId) {
            splitId = itemId.split('-');
            type = splitId[0];
            id = parseInt(splitId[1]);
            budgetCtrl.deleteItem(type, id);
        };
    };

    return {
        init: function() {
            getEventListeners();
            uiCtrl.displayBudget({
                budget: 0,
                totalIncome: 0,
                totalExpense: 0,
                percentage: 0,
            });
        },
    };

})(budgetController, uiController);

controller.init();