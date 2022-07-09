export default {
  log: function(title, content, ...args) {
    if(args.length < 1) {
      return console.log(`[${title}] ${content}`)
    } else {
      return console.log(`[${title}] ${content}: ${args}`);
    }
  },
}
