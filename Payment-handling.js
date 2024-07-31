

paypal.Buttons({
    fundingSource: paypal.FUNDING.IDEAL,
    style: {
      label: "pay",
    },
    createOrder() {

        //Added by Nishant You can use axios if working on Nodejs
      return fetch("/my-server/create-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: [
            {
              sku: "YOUR_PRODUCT_SKU",
              quantity: "YOUR_PRODUCT_QUANTITY",
            },
          ],
        }),
      })
      .then((response) => response.json())
      .then((order) => order.id);
    },
    //Added by Nishant once the order is created make sure hit a query and store it response on DB
    onApprove(data) {
      return fetch("/my-server/capture-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID
        })
      })
      .then((response) => response.json())
      .then((orderData) => {
        console.log('Capture result:', orderData);
      });
    },
    onCancel(data) {
      console.log(`Order Canceled - ID: ${data.orderID}`);
    },
    onError(err) {
      console.error(err);
    }
  }).render('#ideal-btn');
  
