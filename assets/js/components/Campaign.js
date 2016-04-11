import React from 'react'

export default React.createClass({
  componentDidMount: function() {
    console.log(this.props.params.campaignId);
  },
  render() {
    return (
      <div>
        <h1>Campaign <small>{this.props.params.campaignId}</small></h1>
      </div>
    )
  }
})
