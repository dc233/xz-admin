export default {
	methods: {
		// 分页处理
		initialPage(totalElements) {
		  this.totalElements = totalElements;
		},
		// 初始化资讯分类列表
		initialHotWordsList(list) {
		  this.articleTypeList.splice(0);
		  list.forEach(value => {
		    this.articleTypeList.push(value);
		  });
		},
		// 获取资讯分类列表
		getHotWordsList(page, size) {
		  // this.$http_normal({
		  //   url: `/api/job/page?page=${page - 1}&size=${
		  //     size
		  //     }&sort=sort,asc${this.searchVal ? `&name=${this.searchVal}` : ""}${
		  //     this.selectType.length > 0 ? `&enabled=${this.selectType}` : ""
		  //     }`,
		  //   method: "get"
		  // }).then(result => {
		  //   const data = result.data;
		  //   this.initialPage(data.totalElements);
		  //   this.initialHotWordsList(data.content);
		  // });
		},
		// 批量删除资讯分类
		deleteAllHotWords() {
			if (this.selectList.length == 0) {
			  this.$warnMsg("请勾选资讯分类进行批量删除")
			  return
			}
			this.$showMsgBox({
			  msg: `<p>是否删除选中资讯分类?</p>`,
			  isHTML: true
			}).then(() => {
			  this.$http_json({
			    url: `/api/user/del`,
			    method: "post",
			    data: this.selectList.map(val => val.id)
			  }).then(() => {
			    this.$successMsg("删除成功");
			    this.$refs.table.clearSelection()
			    this.getUserList();
			  });
			});
		},
		// 删除资讯分类
		deleteHotWords(item) {
			this.$showMsgBox({
			  msg: `<p>是否删除选中资讯分类?</p>`,
			  isHTML: true
			}).then(() => {
			  this.$http_json({
			    url: `/api/user/del`,
			    method: "post",
			    data: [ item.id ]
			  }).then(() => {
			    this.$successMsg("删除成功");
			    this.$refs.table.clearSelection()
			    this.getUserList();
			  });
			});
		},
		getRowKey(row) {
		  return row.id;
		},
		// 选中资讯
		handleSelectionChange(val) {
		  this.selectList = val;
		},
		// 添加资讯分类
		showAddBox() {
			this.$refs.addForm.dialog = true
		},
		// 编辑资讯分类
		showEditBox(item) {
			const editForm = this.$refs.editForm
			editForm.dialog = true
			editForm.form.id = item.id
			editForm.form.name = item.name
		},
		// 重置
		refresh() {
		  this.searchVal = ""
		  this.$refs.pagination.toFirstPage()
		},
		// 点击搜索
		search() {
		  this.getArticleList();
		},
		searchEnter() {
			e.keyCode === 13 && this.getArticleList();
		}
	}
}