import * as React from 'react';
interface IProps {
    node: any,
    column: any,
    value: any
}
export default class CheckBoxEditor extends React.Component<IProps> {
  constructor(props : any) {
    super(props);
    this.checkedHandler = this.checkedHandler.bind(this);
  }
  checkedHandler(event : any) {
    let checked = event.target.checked;
    let colId = this.props.column.colId;
    this.props.node.setDataValue(colId, checked);
  }
  render() {
    return (
      <input 
        type="checkbox"
        onClick={this.checkedHandler}
        checked={this.props.value}
      />
    )
  }
}
export class OnlyOneCheckBoxEditor extends React.Component<IProps> {
  constructor(props : any) {
    super(props);
    this.checkedHandler = this.checkedHandler.bind(this);
  }
  checkedHandler(event : any) {
    let checked = event.target.checked;
    let colId = this.props.column.colId;
    this.props.node.setDataValue(colId, checked);
  }
  render() {
    return (
      <input 
        type="checkbox"
        name="onlyOne"
        id="onlyOne"
        onClick={this.checkedHandler}
        checked={this.props.value}
      />
    )
  }
}