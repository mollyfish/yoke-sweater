'use strict';
// command to watch js components for changes in order to compile:
// npx babel --watch js-tocompile --out-dir compiled --presets react-app/prod

class GaugeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Sts per inch: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <nav>
      <form onSubmit={this.handleSubmit}>
        <label>
          Stitch Gauge (per inch):
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      </nav>
    );
  }
}

let domContainer = document.querySelector('header');
ReactDOM.render(<GaugeForm />, domContainer);