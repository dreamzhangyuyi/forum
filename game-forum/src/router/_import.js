module.exports = (file, path) => {
  if (!path) path = 'view'
  return require(`../${path}/${file}.vue`)
}
