import React from 'react';
import '../css/splitExp.css';
import Expense from './expense';




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

    return (
      
          
            <main className="demo-main mdl-layout__content centercontent">
              <div className="demo-container mdl-grid">
                <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
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
