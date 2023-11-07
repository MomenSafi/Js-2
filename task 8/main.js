document.getElementById('showAlert').addEventListener('click', function () {
    Swal.fire({
        title: 'Hello, SweetAlert!',
        text: 'This is a custom SweetAlert dialog.',
        icon: 'success', // You can use 'success', 'error', 'info', 'warning', etc.
        confirmButtonText: 'OK'
    });
});
