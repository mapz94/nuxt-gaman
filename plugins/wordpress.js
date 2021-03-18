const WPAPI = require('wpapi')

const wp = new WPAPI({ endpoint: 'https://wp.senlie.cl/wp-json' })

export default wp
