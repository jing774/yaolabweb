document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;
    let timer = null;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        current = idx;
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((current - 1 + slides.length) % slides.length);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    function startTimer() {
        timer = setInterval(nextSlide, 4000);
    }
    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }
    startTimer();
});

// tab切换
function showTab(tab) {
    const tabs = ['home', 'mentors', 'fields', 'achievements', 'equipments', 'news', 'dynamics', 'recruit'];
    tabs.forEach(t => {
        const el = document.getElementById(t + '-tab');
        if (el) el.style.display = (t === tab) ? '' : 'none';
    });
}

// 导师详细介绍内容
const mentorDetails = [
    {
        name: '姚瑞枫 教授',
        content: `<p><b>姚瑞枫</b>，湖南大学生物学院教授，课题组负责人。长期从事生物材料与分子工程领域研究，主持多项国家自然科学基金项目，发表高水平论文数十篇，获省部级奖励。研究方向包括高分子生物材料、智能分子设计等。</p>`
    },
    {
        name: '李明 副教授',
        content: `<p><b>李明</b>，副教授，专注于生物信息学与蛋白质工程。承担多项国家级课题，指导多名研究生，研究成果丰富，致力于蛋白质结构预测与功能分析。</p>`
    },
    {
        name: '王芳 博士',
        content: `<p><b>王芳</b>，博士，研究方向为细胞生物学与分子诊断。发表多篇高水平论文，参与多项科研项目，擅长细胞信号通路与分子检测技术。</p>`
    }
];

function showMentorDetail(idx) {
    const modal = document.getElementById('mentor-detail-modal');
    const content = document.getElementById('mentor-detail-content');
    content.innerHTML = `<h2>${mentorDetails[idx].name}</h2>${mentorDetails[idx].content}`;
    modal.style.display = 'flex';
}
function closeMentorDetail() {
    document.getElementById('mentor-detail-modal').style.display = 'none';
}
// 默认显示首页tab
showTab('home'); 