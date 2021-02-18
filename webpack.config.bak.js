module.exports = (env = {}, arg) => {
  console.log(env)
  console.log(arg)
  if (env.dev) {
    console.log('1111')
  } else if(env.prod) {
    console.log('1111')
  } else {
    console.log('1111')
  }
}
