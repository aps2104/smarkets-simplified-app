import React, { useState, useEffect}  from 'react';
import { Skeleton, Card } from 'antd';
import { useParams } from "react-router-dom";
import { getEventInfo } from '../services/get-events';
import EventListCard from './EventList/EventListCard';


const EventInfoContainer = () => {
	const [details, setDetails] = useState(null);
	const [loading, setLoading] = useState(true);
	
	const { eventId } = useParams();

	useEffect(()=> {
    	getEventInfo([eventId]).then(res => {
    		setDetails(res.data.events[0]);
    		setLoading(false);
		}
    	);
	}, [eventId]);

	return (
		(loading || details == null) ? <Skeleton active/> : 
		<Card className="Card">
			<EventListCard  key={details.slug}
              name={details.name}
              description={details.description}
              special_rules={details.special_rules}
              id={details.id}
              state={details.state}
              start_time={details.start_datetime}
              league={details.slug}
              type={details.type}
              full_slug={details.full_slug} />
		</Card>
	);
}

export default EventInfoContainer;