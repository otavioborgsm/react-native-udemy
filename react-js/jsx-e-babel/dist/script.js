class OurHelloWithClass extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("h1", { className: "my-title" }, "Ol\xE1!"));

  }}


class OurList extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", { className: "item-01" }, "Item 01"), /*#__PURE__*/
      React.createElement("li", { className: "item-02" }, "Item 02"), /*#__PURE__*/
      React.createElement("li", { className: "item-03" }, "Item 03")));


  }}


class MyWrapper extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "my-wrapper" }, /*#__PURE__*/
      React.createElement(OurHelloWithClass, null), /*#__PURE__*/
      React.createElement(OurList, null)));


  }}



const container = document.getElementById('app');
ReactDOM.render( /*#__PURE__*/React.createElement(MyWrapper, null), container);