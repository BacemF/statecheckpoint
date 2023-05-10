import React, { Component } from 'react'

export default class Name extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="text" placeholder='fullname' value={this.props.newname} />
            <button>Refresh</button>
        </form>
      </div>
    )
  }
}
