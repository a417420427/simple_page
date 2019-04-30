<template>
	<div id="app">
		<div class="editor-wrap">
			<div class="title">
				<el-input v-model="title" type="text" placeholder="请输入标题"/>
			</div>

			<editor
				ref="tuiEditor"
				:value="editorText"
				:options="editorOptions"
				:html="editorHtml"
				:visible="editorVisible"
				previewStyle="vertical"
				@change="onEditorChange"
				height="500px"
				width="100%"
				mode="wysiwyg"
			/>
			<div class="editor-complete dp-f">
				<el-button style="margin-right: 20%">取消</el-button>
				<el-button @click="saveArticle" type="primary">确定</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import "tui-editor/dist/tui-editor.css";
import "tui-editor/dist/tui-editor-contents.css";
import "codemirror/lib/codemirror.css";
import { Editor } from "@toast-ui/vue-editor";
import { mapMutations, mapState } from "vuex";

export default {
	name: "write",
	data() {
		return {
			title: "",
			editorText: "sssssss",
			content: '',
			editorOptions: {
				hideModeSwitch: true,
				language: "zh_CN"
			},
			editorHtml: "",
			editorVisible: true
		};
	},
	mounted() {},
	components: {
		Editor
	},
	methods: {
		...mapMutations("editor", ["setContent"]),
		onEditorChange(v) {
			let html = this.$refs.tuiEditor.invoke("getHtml");
			this.content = html
		},
		saveArticle() {
			console.log(this.content, this.title)
			if (!this.title) {
				return;
			}
			if (!this.content) {
				return;
			}

			this.axios({
				url: "/article",
				method: "post",
				data: {
					title: this.title,
					content: this.content
				}
			}).then(res => {
				if(res.error) {
					this.$message({
                        type: 'warning',
                        message: res.data.message
                    })
				} else {
					this.$message({
                        type: 'success',
                        message: '文章保存成功'
					})
					this.$router.push('/')
				}
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.editor-wrap {
	width: 80%;
	min-width: 800px;
	margin: 0 auto;
}
.editor-complete {
	margin-top: 20px;
	justify-content: center;
}
.title {
	margin-bottom: 30px;
	margin-top: 30px;
}
</style>
