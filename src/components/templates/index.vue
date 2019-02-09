<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../header.vue'
    import Footer from '../footer.vue'
    export default {
        name: "index.vue",
        components: {
            Header,
            Footer
        }

    }
</script>
