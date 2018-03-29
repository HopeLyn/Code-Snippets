// Get value from nested object
// e.g. const prop = get(props, ['nodes', 'chilren', 2, 'name'])
function get(source, paths) {
  return paths.reduce((source, path) => ((source && source[path]) != undefined) ? source[path] : null, source)
}
