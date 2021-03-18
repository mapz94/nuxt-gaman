import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const wc = new WooCommerceRestApi({
  url: 'http://example.com',
  consumerKey: 'ck_e6d7645a2c075098f840d1674e12ec91194fab15',
  consumerSecret: 'cs_695daa7f469d17e0406546f155997155053f9fbc',
})

export default wc
