let Helpers = {
  formatTimestamp: function(timestamp) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date(timestamp*1000);
    return months[date.getUTCMonth()] + ' ' + date.getUTCDate() + ' ' + date.getUTCFullYear();
  }
}

export default Helpers;
