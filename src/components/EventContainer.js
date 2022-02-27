import React from 'react';
import { getPopularEvents } from '../services/get-events';
import EventList from './EventList/EventList';

class EventContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			events: [],
			loading: true,
		}
	}

	componentDidMount() {
		getPopularEvents().then(res => {
			console.log(res);
			this.setState({
				events: res.data.popular_event_ids,
				loading: false,
			})
		}).catch(err =>
			this.setState({err, loading: true})
		)
	}

	render() {
		return((!this.state.loading) && <EventList popularEvents = {this.state.events}/>);
	}
}

export default EventContainer