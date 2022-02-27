import axios from 'axios';
import {BASE_URL, POPULAR_EVENTS, EVENTS} from '../constant/api';

axios.defaults.baseURL = BASE_URL;

export async function getPopularEvents() {
	try {
		return axios.get(POPULAR_EVENTS);
	} catch (err) {
		throw new Error('Failed to contact API: ', err)
	}
}

export async function getEventInfo(eventIds) {
	try {
		return axios.get(`${EVENTS}${eventIds.join(',')}/`);
	} catch (err) {
		throw new Error('Failed to contact API: ', err)
	}
}