<template>
    <div class="page-home">
        <h3>文章列表</h3>
        <div class="article-list" >

        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'home',
    computed: {
        ...mapState('editor', ['articles'])
    },
    created() {
        this.getArticle()
    },
    methods: {
        ...mapActions('editor', ['getArticle'])
    }
}
</script>

