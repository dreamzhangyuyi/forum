let baseUrl = ''

if (process.env.NODE_ENV == 'development') {
  baseUrl = `http://localhost:8082`;
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = `http://132.120.2.130:9999`;
}

export {
  baseUrl
}
