import React, { Component } from 'react';
import Client from "./Contentful";

const HikeContext = React.createContext();

export default class HikeProvider extends Component {
  state = {
    hikes: [],
    sortedHikes: [],
    featuredHikes: [],
    loading: true
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "contentfulData",
        // order: "sys.createdAt"
        order: 'fields.price'
      });
      let hikes = this.formatData(response.items);

      let featuredHikes = hikes.filter(hike => hike.featured === true);

      this.setState({
        hikes,
        featuredHikes,
        sortedHikes: hikes,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let hike = { ...item.fields, images, id };
      return hike;
    });
    return tempItems;
  }
  getHike = slug => {
    let tempHikes = [...this.state.hikes];
    const hike = tempHikes.find(hike => hike.slug === slug);
    return hike;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterHikes
    );
  };
  filterHikes = () => {
    let {
      hikes
    } = this.state;

    let tempHikes = [...hikes];
    // transform values
    this.setState({
      sortedHikes: tempHikes
    });
  };
  render() {
    return (
      <HikeContext.Provider
        value={{
          ...this.state,
          getHike: this.getHike,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </HikeContext.Provider>
    );
  }
}
const HikeConsumer = HikeContext.Consumer;

export { HikeProvider, HikeConsumer, HikeContext };

export function withHikeConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <HikeConsumer>
        {value => <Component {...props} context={value} />}
      </HikeConsumer>
    );
  };
}
