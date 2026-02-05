document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle Logic
    const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // 2. Section Switching Logic
    const navLinks = document.querySelectorAll('.nav-link-custom');
    const sections = document.querySelectorAll('.dashboard-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                e.preventDefault();

                // Update nav state
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                // Update section visibility
                sections.forEach(s => s.classList.remove('active'));
                const targetSec = document.getElementById(targetId);
                if (targetSec) {
                    targetSec.classList.add('active');
                }

                // Close sidebar on mobile
                if (window.innerWidth <= 992) {
                    sidebar.classList.remove('active');
                }
            }
        });
    });

    // 3. Quiz Performance Chart (Line Chart)
    const quizCtx = document.getElementById('quizChart');
    if (quizCtx) {
        new Chart(quizCtx, {
            type: 'line',
            data: {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                datasets: [{
                    label: 'Score',
                    data: [60, 80, 75, 90, 85, 95, 88],
                    borderColor: '#2D3FE7',
                    backgroundColor: 'rgba(45, 63, 231, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: false },
                    x: { grid: { display: false }, ticks: { font: { size: 10 } } }
                }
            }
        });
    }

    // 4. Overall Attendance Chart (Radial/Doughnut)
    const attendanceCtx = document.getElementById('attendanceRadial');
    if (attendanceCtx) {
        new Chart(attendanceCtx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [94, 6],
                    backgroundColor: ['#2D3FE7', '#FFD700'],
                    borderWidth: 0,
                    circumference: 360,
                    rotation: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
                plugins: { legend: { display: false } }
            }
        });
    }

    // 5. Populate 18 Courses
    const coursesGrid = document.getElementById('coursesGrid');
    if (coursesGrid) {
        const courses = [
            { name: "Web Development", teacher: "Prof. Zahid", icon: "fa-code", color: "danger", progress: 75 },
            { name: "Network Admin", teacher: "Sir Asad", icon: "fa-network-wired", color: "primary", progress: 40 },
            { name: "Graphic Design", teacher: "Ms. Sana", icon: "fa-palette", color: "warning", progress: 60 },
            { name: "Cyber Security", teacher: "Prof. Bilal", icon: "fa-shield-alt", color: "info", progress: 20 },
            { name: "Python Coding", teacher: "Dr. Irfan", icon: "fa-terminal", color: "success", progress: 90 },
            { name: "Auto Mechanic", teacher: "Sir Tariq", icon: "fa-car", color: "danger", progress: 30 },
            { name: "CNC Operator", teacher: "Sir Kamran", icon: "fa-microchip", color: "info", progress: 80 },
            { name: "HVAC Tech", teacher: "Sir Junaid", icon: "fa-fan", color: "success", progress: 45 },
            { name: "EFI Specialist", teacher: "Sir Naveed", icon: "fa-charging-station", color: "secondary", progress: 10 },
            { name: "Auto Electrician", teacher: "Sir Shakeel", icon: "fa-bolt", color: "danger", progress: 25 },
            { name: "Tractor Mechanic", teacher: "Sir Qasim", icon: "fa-tractor", color: "primary", progress: 5 },
            { name: "Ind. Electrician", teacher: "Prof. Sajid", icon: "fa-industry", color: "warning", progress: 70 },
            { name: "Solar Technician", teacher: "Sir Majid", icon: "fa-solar-panel", color: "info", progress: 35 },
            { name: "AutoCAD Expert", teacher: "Sir Umair", icon: "fa-pencil-ruler", color: "success", progress: 85 },
            { name: "Welding & Fab", teacher: "Sir Bashir", icon: "fa-fire", color: "secondary", progress: 55 },
            { name: "E-Commerce", teacher: "Ms. Hina", icon: "fa-shopping-cart", color: "danger", progress: 15 },
            { name: "UI/UX Design", teacher: "Sir Fahad", icon: "fa-vector-square", color: "primary", progress: 50 },
            { name: "Cloud Computing", teacher: "Sir Ali", icon: "fa-cloud", color: "info", progress: 65 }
        ];

        courses.forEach(course => {
            const card = `
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-sm p-4 h-100">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <div class="course-icon bg-${course.color} bg-opacity-10 text-${course.color} p-3 rounded-3">
                                <i class="fas ${course.icon} fa-lg"></i>
                            </div>
                            <span class="badge ${course.progress > 50 ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'} rounded-pill px-3">
                                ${course.progress > 50 ? 'Good' : 'Medium'}
                            </span>
                        </div>
                        <h5 class="fw-bold mb-1">${course.name}</h5>
                        <p class="text-muted small mb-3">${course.teacher}</p>
                        <div class="progress mb-2" style="height: 6px;">
                            <div class="progress-bar bg-${course.color}" style="width: ${course.progress}%"></div>
                        </div>
                        <div class="d-flex justify-content-between xsmall fw-bold">
                            <span>Progress</span>
                            <span>${course.progress}%</span>
                        </div>
                    </div>
                </div>
            `;
            coursesGrid.innerHTML += card;
        });
    }
});
