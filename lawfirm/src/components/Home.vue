<template>
    <div class="home">
        <div class="grid grid-cols-2 items-center">
            <div v-show="isVisible" class="animate-slideInFromLeft">
                <div>Your Legal Advisor</div>
            </div>
            <div v-show="isVisible" class="animate-slideInFromRight">
                <div>
                    <img src="../assets/img/foto.JPG">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            isVisible: false
        }
    },
    mounted() {
        this.isVisible = true;
    }
}
</script>

<style scoped>
/* Add your styles here */
</style>