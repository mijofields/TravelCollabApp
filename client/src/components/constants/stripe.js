const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_oxsm0vltd9tZIxeWAI8RhQuh';

export default STRIPE_PUBLISHABLE;
