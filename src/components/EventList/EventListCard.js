import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import {upcomingStartTime} from '../../utils/dateTime';

import './EventListCard.css';
// Instances of cards

const EventListCard = props => {
	let teams = props.name && props.name.split(' vs ');
	let startTime = upcomingStartTime(props.start_time);
	let textColorClass = startTime === 'LIVE NOW' ? 'live' : 'upcoming';
	return (
	
	<Link to={`/events/${props.id}${props.full_slug}`}>
		<Card> 
		<div className='event-info'>
			<div className='event-name'>
			{teams.map((team, idx) => {
                    return (
                        <div key={idx}>
                            {team}
                        </div>
                    );
                })}
			</div>
			<div className='event-info-footer'>
			<span className={`event-time ${textColorClass}`}>{upcomingStartTime(props.start_time)}</span>
			<span className='event-info-badge'> TRADED: 148,465 </span>
			</div>
		</div>
		</Card>
	</Link>
);
			}

export default EventListCard