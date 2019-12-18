import { mapState } from "vuex";
export default {
  data() {
    return {
      activeName: "first",
      searchVal: "",
      // 当前页条数
      nowSize: 10,
      // 总条数
      totalElements: 0,
      operationLogList: [],
      isShow: false
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}