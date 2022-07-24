const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Luiz Silva',
        price: 5,
      }
    },
    payment: {
      total: 50,
    },
  };
  
//   const customerInfo = (order) => {
//     return `Olá ${order.order.delivery.deliveryPerson},entrega para:${order.name},Telefone:${order.phoneNumber},R.${order.address.street},N:${order.address.number},AP:${order.address.apartment}`
  
//   }
  
//   console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    return `Olá ${order.order.delivery.deliveryPerson},o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$${order.payment.total},00`
  
  }
  
  console.log(orderModifier(order))