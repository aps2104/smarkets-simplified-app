import React from "react";
import { Card, Breadcrumb } from "antd";
import EventListCard from "./EventListCard";
import { getEventInfo } from "../../services/get-events";

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      loading: true,
    };
  }

  componentWillMount() {
    getEventInfo(this.props.popularEvents).then((res) => {
      this.setState({ details: res.data.events, loading: false });
      console.log(this.state.details);
    });
  }

  renderList = () => {
    const { loading, details } = this.state;
    return (
      !loading &&
      details !== null && (
        <Card className="events-list">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/"> Home</Breadcrumb.Item>
            <Breadcrumb.Item>Soccer</Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div className="header-content">
            <h3 className="title">
              Soccer odds <span className="fa fa-star checked"></span>
            </h3>
            <p className="description">
              Trade and bet on a variety of football betting markets, including
              those on the Premier League, Champions League, La Liga, Bundesliga
              and MLS.
            </p>
          </div>
          <div className="event-list-container">
            <p className="event-list-type"> Popular </p>

            {details.map((event) => (
              <EventListCard
                key={event.slug}
                name={event.name}
                description={event.description}
                special_rules={event.special_rules}
                id={event.id}
                state={event.state}
                start_time={event.start_datetime}
                league={event.slug}
                type={event.type}
                full_slug={event.full_slug}
              />
            ))}
          </div>
        </Card>
      )
    );
  };

  render() {
    return !this.state.loading && this.renderList();
  }
}

export default EventList;
