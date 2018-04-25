export function imageImport(req) {
  let images = {}
  req.keys().map(item => images[item.replace('./', '')] = req(item) )
  return images
}
