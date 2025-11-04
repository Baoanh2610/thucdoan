// Xử lý nút đăng ký
document.getElementById('registerBtn').addEventListener('click', function () {
    // Giả lập form đăng ký đơn giản (có thể mở modal hoặc gửi email)
    const name = prompt('Nhập tên của bạn:');
    if (name) {
        document.getElementById('message').textContent = `Cảm ơn ${name}! Bạn đã đăng ký tham gia lễ tốt nghiệp.`;
    } else {
        document.getElementById('message').textContent = 'Vui lòng nhập tên để đăng ký.';
    }
});

// Xử lý preview ảnh
document.getElementById('photoInput').addEventListener('change', function (event) {
    const files = event.target.files;
    const preview = document.getElementById('photoPreview');
    preview.innerHTML = ''; // Xóa preview cũ
    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});