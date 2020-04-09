export default {

  name: 'card',

  data: () => {
    return {
      title: 'card-component'
    }
  },

  beforeCreate() {
    console.log('### Card beforeCreate ###')
  }
}
