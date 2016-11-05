<script type="text/javascript">
$(document).ready(function() {
$("body").css("display", "none"); 
$("body").fadeIn(500); 
$("a.fade").click(function(event){ 
event.preventDefault();
linkLocation = this.href;
$("body").fadeOut(500, redirectPage); 
});
function redirectPage() {
window.location = linkLocation;
}
});
</script>