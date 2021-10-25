//backend
const Stripe = require('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_KEY);

export default async(req, res) => {
const {items, email} = req.body;
  // when createCheckoutSession is clicked ... console.log(items)
  // console.log(email) for stripe u need a specific variable
  const transformedItems = items.map((item) => // implicit return
    ({
    description: item.description,
    quantity: 1,
    price_data: {
    currency: 'EUR',
      unit_amount: item.price *100,
    product_data: {
        name: item.title,
        images: [item.image]
    }
    }
}))

const session = await stripe
    .checkout
    .sessions
    .create({
    payment_method_types: ['card', 'ideal','sepa_debit',],
    shipping_rates: ['shr_1JoZGqCBabOa4F6rpeTPi0mA'],
    // shipping_method_types: {
    //     allowed_countries: ['GB', 'FR', 'BE', 'NE']
    // },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
        email,
        images: JSON.stringify(items.map((item) => item.image))
    }
    })
    res.status(200).json({id: session.id})
}