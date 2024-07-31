
//Added By Nishant capture live trasaction what the user is doing on the payment page 

app.post('/paypal-webhook', (req, res) => {
    const event = req.body;
  
    switch (event.event_type) {
      case 'CHECKOUT.ORDER.APPROVED':
        // Handle order approval
        break;
      case 'PAYMENT.CAPTURE.COMPLETED':
        // Handle payment capture
        break;
      // Handle other events
    }
  
    res.sendStatus(200);
  });
  
