const express = require('express');
const path = require('path');

const app = express();

// ใช้ express.static เพื่อให้บริการไฟล์ static ในโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'Frontend', 'public'))); // เปลี่ยนให้ตรงกับโครงสร้าง

// เส้นทางสำหรับหน้าแรก
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'public', 'login.html')); // เปลี่ยนเส้นทางให้ถูกต้อง
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
