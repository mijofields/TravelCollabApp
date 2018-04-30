import React from 'react';
import '../css/splitExp.css';
import Expense from './expense';
import AddUserExpense from './AddUserExpense';
import '../css/splitExp.css';




export default class SpiltExp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sessionExpenseInfo: {
        user_id: 2,
        expenses: [
          {
            expense: "Acrylic (Transparent)",
            total: 25,
            myPortion: 2.90,
            id: 1
          },
          {
            expense: "Plywood (Birch)",
            total: 50,
            myPortion: 1.25,
            id: 3
          },
          {
            expense: "Laminate (Gold on Blue)",
            total: 10,
            myPortion: 2.35,
            id: 4
          },
        ]
      }
    }
  }

  render() {

    const expenses = this.state.sessionExpenseInfo.expenses.map((data, i) =>
      <Expense key={i}
        expense={data.expense}
        total={data.total}
        amount={data.myPortion}
        owedTo={data.id} />
    )

    const addUserExpense = this.state.sessionExpenseInfo.expenses.map((data, i) =>
      <AddUserExpense key={i}
        friend={data.id} />
    )       
            


    return (
          
            <main className="demo-main mdl-layout__content centercontent"  >
              <div className="demo-container mdl-grid">
              
                <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>

          <div class="card" >
            <div class="card-body">
              <h5 class="card-title">Add An Expense</h5>
          <form>
            <div class="form-group">
              <label for="exampleInputTripName" class="bmd-label-floating">What did you buy?</label>
              <input type="expenseName" class="form-control" id="exampleInputExpenseName" />
            </div>
            <div class="form-group">
              <label for="exampleInputLocation" class="bmd-label-floating">What was the total amount you spent?</label>
              <input type="total" class="form-control" id="exampleInputTotal" />
            </div>
            <h5 class="right">Who are you splitting it with?</h5>
            <div class="right">
              <ul class="demo-list-control mdl-list">
                {/* addUserExpense component */}
                {addUserExpense}
                
              </ul>
            </div>
            <button type="submit" class="center btn btn-danger btn-raised">Add</button>
          </form>
        </div>
                    </div>

                <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                  <thead>
                    <tr>
                      <th className="mdl-data-table__cell--non-numeric">Expense</th>
                      <th>Total</th>
                      <th>My Portion</th>
                      <th>Settle Up</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses}
                  </tbody>
                </table>
              </div>
              </main>
              
    )
  }
}