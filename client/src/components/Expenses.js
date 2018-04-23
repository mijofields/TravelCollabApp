import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';



export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users : [
                {
                    user_id: 1,
                    expenses: [
                        {
                            amount: 19,
                            id: 2
                        },
                        {
                            amount: 14,
                            id: 3
                        },
                        {
                            amount: 32,
                            id: 4
                        },
                    ]
                },
                {
                    user_id: 2,
                    expenses: [
                        {
                            amount: 15,
                            id: 1
                        },
                        {
                            amount: 9,
                            id: 3
                        },
                        {
                            amount: 2,
                            id: 4
                        },
                    ]
                },
                {
                    user_id: 3,
                    expenses: [
                        {
                            amount: 8,
                            id: 1
                        },
                        {
                            amount: 17,
                            id: 2
                        },
                        {
                            amount: 13,
                            id: 4
                        },
                    ]
                },
                {
                    user_id: 4,
                    expenses: [
                        {
                            amount: 0,
                            id: 1
                        },
                        {
                            amount: 10,
                            id: 2
                        },
                        {
                            amount: 17,
                            id: 3
                        },
                    ]
                }
            ],
            userLoggedIn: 2,
            sessionExpenseInfo: {
                user_id: 2,
                expenses: [
                    {
                        amount: 15,
                        id: 1
                    },
                    {
                        amount: 9,
                        id: 3
                    },
                    {
                        amount: 2,
                        id: 4
                    },
                ]
            }
        }

    }

    componentWillMount() {
        //function to net expense data will go here
        //dummy data for testing

        var users = [
            {
                user_id: 1,
                expenses: [
                    {
                        amount: 19,
                        id: 2
                    },
                    {
                        amount: 14,
                        id: 3
                    },
                    {
                        amount: 32,
                        id: 4
                    },
                ]
            },
            {
                user_id: 2,
                expenses: [
                    {
                        amount: 15,
                        id: 1
                    },
                    {
                        amount: 9,
                        id: 3
                    },
                    {
                        amount: 2,
                        id: 4
                    },
                ]
            },
            {
                user_id: 3,
                expenses: [
                    {
                        amount: 8,
                        id: 1
                    },
                    {
                        amount: 17,
                        id: 2
                    },
                    {
                        amount: 13,
                        id: 4
                    },
                ]
            },
            {
                user_id: 4,
                expenses: [
                    {
                        amount: 0,
                        id: 1
                    },
                    {
                        amount: 10,
                        id: 2
                    },
                    {
                        amount: 17,
                        id: 3
                    },
                ]
            }
        ];

        var userLoggedIn = 2;
        var sessionExpenseInfo = users[userLoggedIn - 1].expenses;

        console.log("Starting netting function. Logged in as user: " + userLoggedIn);

        for (var i = 0; i < users.length; i++) {
            console.log("#############################################");
            console.log("#############################################");
            console.log("Scanning array of users... ");
            console.log("#############################################");
            console.log("Index of user array: " + i);
            console.log("#############################################");
            console.log("User data:")
            console.log(users[i]);
            console.log("#############################################");
            console.log("#############################################");


            console.log("\n");


            if (users[i].user_id === userLoggedIn) {
                console.log("Skipping our own user data... " + users[i].user_id);
                console.log("\n");
            } else {
                //grabs other users' expense data on each iteration of the array
                var tempExpenseStorage = users[i].expenses;

                //loops through the current group member's expense data to be checked 
                for (var j = 0; j < tempExpenseStorage.length; j++) {

                    console.log("#############################################");
                    console.log("Scanning user expense info for user with ID: " + users[i].user_id);
                    console.log("Index of expense array: " + j);
                    console.log("#############################################");

                    console.log("\n");

                    if (tempExpenseStorage[j].id === userLoggedIn) {
                        console.log("Expense found! They owe you $" + tempExpenseStorage[j].amount);
                        console.log("\n");
                        var theyOweYou = tempExpenseStorage[j].amount;

                        for (var k = 0; k < sessionExpenseInfo.length; k++) {
                            console.log("#############################################");
                            console.log("Checking to see if you owe them money as well...");
                            console.log("Index of sessionExpenseInfo array: " + k);
                            console.log("#############################################");
                            console.log("\n");
                            if (sessionExpenseInfo[k].id === users[i].user_id) {
                                console.log("You owe $" + sessionExpenseInfo[k].amount + " to user with ID " + sessionExpenseInfo[k].id);

                                var diff = tempExpenseStorage[j].amount - sessionExpenseInfo[k].amount;

                                //if they owe you more money...
                                if (diff > 0) {
                                    console.log("They owed you more money...");
                                    sessionExpenseInfo[k].amount = 0;
                                    tempExpenseStorage[j].amount = diff;
                                    console.log("Amount netted, they now owe you $" + tempExpenseStorage[j].amount);
                                    console.log("\n");
                                }

                                //if you owe them more money...
                                if (diff < 0) {
                                    console.log("You owed them more money...");
                                    tempExpenseStorage[j].amount = 0;
                                    sessionExpenseInfo[k].amount = Math.abs(diff);
                                    console.log("Amount netted, you now owe them $" + sessionExpenseInfo[k].amount);
                                }

                            }
                        }
                    }
                }

            }
        }
    }

    

    render() {

        

        const expenses = this.state.sessionExpenseInfo.expenses.map((data, i) =>
            <ExpenseItem key={i}
                amount={data.amount}
                owedTo={data.id} />
        )

        return (
            <div>
                <h1>This is the expenses component</h1>
                
                <div className="mdl-grid itinerary-list">
                    {expenses}
                </div>
                
            </div>
        )
    }
}