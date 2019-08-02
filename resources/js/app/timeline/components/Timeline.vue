<template>
    <div>
        <p>Timeline</p>
        <p>{{ index }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: null
        }
    },
    mounted() {
        console.log(window.axios.defaults.headers.common['Authorization'])
        axios.get('/api/timeline').then((response) =>  {
            this.index = response.data.data
        }).catch(() => {

        })
    },
}
</script>