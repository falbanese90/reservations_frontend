import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', number: '', email: '', guests: '', date: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    alert(`Name: ${this.state.name}\nNumber: ${this.state.number}\nEmail:${this.state.email}\nGuests:${this.state.guests}\nDate:${this.state.date}`); 
  }
  render() {
    return (
      <div class='App'>
        <img src={'https://www.fredbollacienterprises.com/wp-content/uploads/2014/08/bar-frites.jpg'} alt={'Bar Frites Logo'} />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name: First and Last" onChange={(e) => this.setState({ name: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="ex: (123)-123-4567" onChange={(e) => this.setState({ number: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId='email' onChange={(e) => this.setState({ email: e.target.value })}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Guests</Form.Label>
            <Form.Control type="guests" placeholder="Expected # of guests" onChange={(e) => this.setState({ guests: e.target.value })}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reservation Date</Form.Label>
            <Form.Control type="date" placeholder="ex: 01/01/2022" onChange={(e) => this.setState({ date: e.target.value })}/>
          </Form.Group>
          <Button variant="info" type="submit">
          Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
