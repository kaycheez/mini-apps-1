class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      components: [
        <CheckoutButt />,
        <AccountInfo />,
        <AddressInfo />,
        <BillingInfo />,
        <Confirmation />
      ],
      currComp: 0,
    }
  };

  nextComp() {
    if (this.state.currComp === this.state.components.length - 1) {
      this.setState({
        currComp: 0
      })
    } else {
      this.setState({
        currComp: this.state.currComp += 1
      })
    }
  }

  render() {
    let components = this.state.components;
    let component = components[this.state.currComp];

    return (
      <div>
        {React.cloneElement(component, {
          nextComp: this.nextComp.bind(this),
        })}
      </div>
    );
  }
}

var CheckoutButt = (props) => (
  <div>
    <button onClick={() => props.nextComp()}>CHECKMEOUT</button>
  </div>
)

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  
  
  render() {
    
    return (
      <div id="account-info">
        <form action="submit">
          <input onChange={(e) => this.onChange(e)} type="text" id="name" placeholder="Name"/><br/>
          <input onChange={(e) => this.onChange(e)} type="email" id="email" placeholder="Email"/><br/>
          <input onChange={(e) => this.onChange(e)} type="password" id="password" placeholder="Password"/><br/>
        </form>
        <button onClick={() => this.props.nextComp()}>Next</button>
      </div>
    );
  } 
}


class AddressInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  
  render() {
    return (
      <div id="address-info">
        <form action="submit">
          <input onChange={(e) => this.onChange(e)} type="text" id="address1" placeholder="Address line 1"/><br/>
          <input onChange={(e) => this.onChange(e)} type="text" id="address2" placeholder="Address line 2"/><br/>
          <input onChange={(e) => this.onChange(e)} type="text" id="city" placeholder="City"/>
          <input onChange={(e) => this.onChange(e)} type="text" id="state" placeholder="State"/>
          <input onChange={(e) => this.onChange(e)} type="text" id="zip" placeholder="ZIP code"/><br/>
          <input onChange={(e) => this.onChange(e)} type="number" id="phone" placeholder="Phone"/><br/>
        </form>
        <button onClick={() => this.props.nextComp()}>Next</button>
      </div>
    );

  } 
}


class BillingInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credit: '',
      expiration: '',
      cvv: '',
      billing: '',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  
  render() {
    return (
      <div id="billing-info">
        <form action="submit">
          <input onChange={(e) => this.onChange(e)} type="number" id="credit" placeholder="Credit card number"/><br/>
          <input onChange={(e) => this.onChange(e)} type="month" id="expiration" placeholder="Exp"/><br/>
          <input onChange={(e) => this.onChange(e)} type="number" id="cvv" placeholder="CVV"/><br/>
          <input onChange={(e) => this.onChange(e)} type="number" id="billing" placeholder="Billing ZIP"/><br/>
        </form>
        <button onClick={() => this.props.nextComp()}>Next</button>
      </div>
    );

  }
}


var Confirmation = (props) => (
  <div>
    <button onClick={() => props.nextComp()}>DONE</button>
  </div>
);



ReactDOM.render(<App />, document.getElementById('app'));