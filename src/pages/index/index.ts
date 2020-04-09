import CardComponent from '../../components/card/card.vue'
import SuspensionComponent from '../../components/suspension/suspension.vue'

export default {

  name: 'index',

  data: () => {
    return {
      title: 'index-page'
    }
  },

  components: {
    'card-component': CardComponent,
    'suspension-component': SuspensionComponent
  },

  beforeCreate() {
    console.log('### Index beforeCreate ###')
  }
}
