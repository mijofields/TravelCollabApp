import React,{ Component } from 'react';
import WanderItem from './wanderItem';


export default class WanderList extends Component {
  render() {
    const cities = this.props.cities.map((city, i) => (
      <WanderItem city={city.title}
                  cityImg={city.main_image}
                  detail={city.details.short_description}
                  wiki={city.details.wiki_page_link}
                  key={i}/>
    ))
    return (
      <div className="mdl-grid">
        {cities}
      </div>
    )
  }
}