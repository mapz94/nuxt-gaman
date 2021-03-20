<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      page: 'home',
    }
  },
  computed: {
    ...mapState(['pages']),
  },
  render(h) {
    return this.Template()
  },
}
</script>
