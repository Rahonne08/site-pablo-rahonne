function abrirWhatsApp() {
    const numero = "5599992282460"; 
    const mensagem = "Olá Pablo Rahonne! Gostaria de saber mais sobre os seus serviços."; 
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}