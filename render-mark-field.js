paypal.Marks({
    fundingSource: paypal.FUNDING.IDEAL
}).render('#ideal-mark');

paypal.PaymentFields({
    fundingSource: paypal.FUNDING.IDEAL,
    style: {
      variables: {},
      rules: {},
    },
    fields: {
      name: {
        value: "Firstname Lastname",
      },
    }
  }).render("#ideal-container");
  
