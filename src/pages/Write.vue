<template>
  <div id="app">
      <div class="title">
          <el-input type="text" placeholder="请输入标题" />
      </div>
    <editor
      :value="editorText"
      :options="editorOptions"
      :html="editorHtml"
      :visible="editorVisible"
      previewStyle="vertical"
      height="500px"
      mode="wysiwyg"
    />
  </div>
</template>

<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import { Editor } from '@toast-ui/vue-editor'

export default {
  name: 'write',
  data() {
     return {
            editorText: '',
            editorOptions: {
                hideModeSwitch: true,
                 language: 'zh_CN',
            },
            editorHtml: '',
            editorVisible: true
        };
  },
  mounted() {
      
  },
  components: {
    Editor
  }
}
</script>

<style>
.title {
    margin-bottom: 30px;
    margin-top: 30px;
}
</style>
