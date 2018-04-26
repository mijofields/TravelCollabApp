import React,{ Component } from 'react';
import '../css/wanderItem.css';

export default class WanderItem extends Component {
  render() {
    return (
      <div className="city mdl-cell mdl-cell--6-col mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title">
          <h5>{this.props.city}</h5>
        </div>
        <div className="mdl-card__media">
          <img src={this.props.cityImg} alt="city_image" />
        </div>
        <div className="mdl-card__supporting-text">
          <p>{this.props.detail}</p>
        </div>
        <div className="mdl-card__actions">
          <div className="mdl-list">
            <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
              <i className="material-icons">link</i>
                <a href={`${this.props.wiki}`}>{this.props.city} wiki.</a>
              </span>
            </li>
          </div>
        </div>
      </div>
    )
  }
}