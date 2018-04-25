import React,{ Component } from 'react';
import '../css/splitExp.css';




export default class SpiltExp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="mdl-grid mdl-card expense-grid">
        <div className="mdl-cell mdl-cell--12-col">
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
                  <tr>
                    <td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
                    <td>25</td>
                    <td>$2.90</td>
                    <td><i className="material-icons">credit_card</i></td>
                  </tr>
                  <tr>
                    <td className="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
                    <td>50</td>
                    <td>$1.25</td>
                    <td><i className="material-icons">credit_card</i></td>
                  </tr>
                  <tr>
                    <td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                    <td>10</td>
                    <td>$2.35</td>
                    <td><i className="material-icons">credit_card</i></td>
                  </tr>
                </tbody>
              </table>
            </div>
            </main>


Add CommentCo
        </div>
      </div>
    )
  }
}
