import React from 'react'

export default React.createClass({
  fetchData: function() {
    fetch('https://www.dosomething.org/api/v1/campaigns?count=50')
      .then((res) => {
          return res.json();
      }).then((json) => {
        this.setState({
          data: json.data,
        });
      })
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.fetchData();
  },
  render: function() {
    return (
      <CampaignsTable data={this.state.data} />
    );
  }
})

var CampaignsTable = React.createClass({
  render: function() {
    var campaigns = this.props.data.map(function(campaign) {
      var campaign_url = '/campaign/' + campaign.id;
      return (
        <CampaignsTableRow 
          campaign={campaign}
          key={campaign.id}
        />
      );
    });
    return (
      <table className="table table-hover">
        <tbody>
        <tr>
          <th>All Campaigns</th>
          <th></th>
          <th></th>
        </tr>
        {campaigns}
        </tbody>
      </table>
    );
  }
});

var CampaignsTableRow = React.createClass({
  render: function() {
    var inboxUrl = '/campaign/' + this.props.campaign.id;
    var galleryUrl = '/gallery/' + this.props.campaign.id
    return (
      <tr>
        <td>
          {this.props.campaign.title}
        </td>
        <td>
          <small>{this.props.campaign.tagline}</small>
        </td>
        <td>
          <small>{this.props.campaign.status.toUpperCase()}</small>
        </td>
      </tr>
    );
  }
});
