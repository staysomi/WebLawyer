<template>
    <div>
        <div @click="openWhatsApp">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhatsAppLink',
    methods: {
        openWhatsApp() {
            const phoneNumber = '6285649262224';  // Replace with the actual phone number
            const message = 'Yudhistira Lawfirm Jajal Arep tekon titik';
            const urlEncodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${urlEncodedMessage}`;
            window.open(whatsappUrl, '_blank');
        }
    }
}
</script>