// Smooth scroll for internal navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        if(this.hash !== ""){
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if(target) target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
<script>
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}
</script>