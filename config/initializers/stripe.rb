Rails.configuration.stripe = {
  :publishable_key => 'pk_test_4MRrPkCHNiJ6qE4UTAfPMIXq',
  :secret_key      => 'sk_test_4MRrH0rPpodimw1pn8lyvb5I'
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]