SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

// initiate auth popup
SC.connect().then(function() {
  return SC.get('/me');
}).then(function(me) {
  alert('Hello, ' + me.username);
});
