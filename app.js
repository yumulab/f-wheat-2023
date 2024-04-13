// 画像の日付のリストを作成します。実際にはサーバーから取得するか、動的に生成することも考えられます。
const dates = [
    "0518","0524","0531",
    "0608","0614","0620","0623","0629",
    "0702","0704","0707","0708","0710","0714","0717","0719"
];

const gallery = document.getElementById('gallery');
const imageDisplay = document.getElementById('imageDisplay');
const fullImage = document.getElementById('fullImage');
const graphImage = document.getElementById('graphImage');
const backButton = document.getElementById('backButton');

// ギャラリーを構築する関数
function buildGallery() {
    dates.forEach(date => {
        // const imgPath = `drone/${date}.png`;
        const imgPath = `assets/drone/Mihara_${date}_RGB_NDVI.png`;
        const container = document.createElement('div');
        container.className = 'thumbnail-container';
        const dateLabel = document.createElement('div');
        dateLabel.className = 'date-label';
        dateLabel.textContent = formatDate(date);
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.innerHTML = `<img src="${imgPath}" alt="Thumbnail">`;
        thumbnail.addEventListener('click', () => {
            displayImages(date);
        });
        container.appendChild(dateLabel);
        container.appendChild(thumbnail);
        gallery.appendChild(container);
    });

}

// 画像を表示する関数
function displayImages(date) {
    graphImage.src = `assets/data/2023${date}.png`;
    fullImage.src = `assets/drone/Mihara_${date}_RGB_NDVI.png`;
    gallery.style.display = 'none';
    imageDisplay.style.display = 'block';
    fullImage.style.display = 'block';
    graphImage.style.display = 'block';
    backButton.style.display = 'block';
}

backButton.onclick = () => {
    gallery.style.display = 'flex';
    imageDisplay.style.display = 'none';
    fullImage.style.display = 'none';
    graphImage.style.display = 'none';
    backButton.style.display = 'none';
};

function formatDate(dateString) {
    return `2023-${dateString.substring(0, 2)}-${dateString.substring(2, 4)}`;
}

// ギャラリーの初期化
buildGallery();