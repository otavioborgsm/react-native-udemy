class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      contador: 0 };


  }

  onClickHandler() {
    this.setState({
      contador: this.state.contador + 1 });

  }

  render() {

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Contador, { valor: this.state.contador }), /*#__PURE__*/
      React.createElement(Button, {
        label: "Add",
        onClick: () => this.onClickHandler() }), /*#__PURE__*/

      React.createElement(Button, {
        label: "Escreve no console",
        onClick: () => console.log("Olá") })));




  }}


//Functional Component
const Contador = (props) => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("h1", null, props.valor));



const Button = (props) => /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("button", { onClick: () => props.onClick() }, " ", props.label, " "));



/*class Contador extends React.Component{
  render(){
    return(
      <div>
        <h1>{ this.props.valor }</h1>
      </div>
    );
  }
}*/

ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('app'));