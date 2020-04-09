export default {

  name: 'suspension',

  data: () => {
    return {
      title: 'suspension-component'
    }
  },

  beforeCreate() {
    console.log('### Suspension beforeCreate ###')
  }
}
