<template>
    <div class="relative w-full">
        <div @click="toggleDropdown" class="py-2 justify-between flex font-bold">
            {{ title }}
            <span v-if="!isOpen">+</span>
            <span v-if="isOpen">-</span>
        </div>
        <transition name="slide-fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div v-if="isOpen" class="w-full">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        status: {
            type: String
        }
    },
    data() {
        return {
            isOpen: status ? true : false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        beforeEnter(el) {
            el.style.maxHeight = '0';
            el.style.opacity = '0';
            el.style.transform = 'scaleY(0)';
        },
        enter(el, done) {
            el.style.maxHeight = `${el.scrollHeight}px`;
            el.style.opacity = '1';
            el.style.transform = 'scaleY(1)';
            el.style.transition = 'max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease';
            done();
        },
        leave(el, done) {
            el.style.maxHeight = '0';
            el.style.opacity = '0';
            el.style.transform = 'scaleY(0)';
            el.style.transition = 'max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease';
            // Ensure the element is removed after the transition
            el.addEventListener('transitionend', done, { once: true });
        },
    },
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
    overflow: hidden;
}

.slide-fade-enter,
.slide-fade-leave-to {
    max-height: 0;
    opacity: 0;
    transform: scaleY(0);
}
</style>