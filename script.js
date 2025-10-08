// --- YENİ SORU VERİSİ: 60 Görsel Dosya Adı ve Cevap Anahtarı ---
// Not: Bu liste, 'görseller' klasöründeki 60 adet soru.png dosyasını ve sizin sağladığınız cevap anahtarını temsil etmektedir.
const GORSEL_SORU_HAVUZU = [
    // Genel Kültür (1-60) Cevap Anahtarı
    { dosyaAd: "soru1.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru2.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru3.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru4.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru5.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru6.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru7.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru8.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru9.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru10.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru11.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru12.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru13.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru14.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru15.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru16.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru17.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru18.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru19.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru20.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru21.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru22.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru23.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru24.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru25.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru26.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru27.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru28.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru29.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru30.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru31.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru32.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru33.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru34.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru35.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru36.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru37.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru38.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru39.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru40.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru41.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru42.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru43.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru44.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru45.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru46.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru47.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru48.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru49.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru50.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru51.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru52.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru53.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru54.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru55.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru56.png", dogruCevap: "c", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru57.png", dogruCevap: "a", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru58.png", dogruCevap: "e", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru59.png", dogruCevap: "b", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
    { dosyaAd: "soru60.png", dogruCevap: "d", secenekler: { a: "Seçenek A", b: "Seçenek B", c: "Seçenek C", d: "Seçenek D", e: "Seçenek E" } },
];


// --- SABİT AYARLAR ---
const QUIZ_SORU_SAYISI = 20; // Sınavda gösterilecek soru sayısı

// --- AKTİF SORU LİSTESİ VE DURUM DEĞİŞKENLERİ ---
// sorular: Sadece rastgele seçilen 20 soruyu tutar
let sorular = []; 
let mevcutSoruIndex = 0; 
let kullaniciCevaplari = new Array(QUIZ_SORU_SAYISI).fill(null); 
let kalanSureSaniye = 30 * 60; // 30 dakika
let intervalId;
let sinavDevamEdiyor = true;


// --- DOM ELEMENTLERİ ---
const aktifSoruContainer = document.getElementById('aktif-soru-container');
const ileriButonu = document.getElementById('ileri-butonu');
const bitirButonu = document.getElementById('bitir-butonu');
const sonucAlani = document.querySelector('.sonuc-alani');
const soruAlani = document.querySelector('.soru-alani');
const zamanlayiciElement = document.getElementById('zamanlayici');

// --- YARDIMCI FONKSİYON: SORULARI KARMA (Fisher-Yates) ---
function sorulariKaristir(dizi) {
    for (let i = dizi.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Elemanları yer değiştir
        [dizi[i], dizi[j]] = [dizi[j], dizi[i]]; 
    }
    return dizi;
}

// --- 1. SORUYU YÜKLEME FONKSİYONU ---
function soruyuGoster(index) {
    if (!sinavDevamEdiyor) return; 

    if (index >= 0 && index < sorular.length) {
        mevcutSoruIndex = index;
        const soruBilgisi = sorular[index];
        const soruNumarasi = index + 1;
        
        // Soru sayacını güncelle (Örn: 1. Soru / 20)
        const baslikElementi = document.querySelector('.soru-alani h2');
        baslikElementi.innerHTML = `<span id="soru-sayac">${soruNumarasi}</span>. Soru / ${QUIZ_SORU_SAYISI}`;

        let secenekHTML = '';
        
        // Görselin yolu (görseller klasöründen)
        const görselYolu = `./görseller/${soruBilgisi.dosyaAd}`;
        
        // A, B, C, D, E butonlarını oluştur
        for (const secenekHarfi in soruBilgisi.secenekler) {
            const isChecked = kullaniciCevaplari[index] === secenekHarfi ? 'checked' : '';
            
            // Seçenek metni olarak sadece harfi gösteriyoruz
            secenekHTML += `
                <input type="radio" id="secenek-${secenekHarfi}" name="aktifSoruCevap" value="${secenekHarfi}" ${isChecked}>
                <label for="secenek-${secenekHarfi}" class="secenek-label">
                    ${secenekHarfi.toUpperCase()}
                </label>
            `;
        }
        
        // Soruyu görsel olarak yükle ve seçenek butonlarını ekle
        aktifSoruContainer.innerHTML = `
            <p><strong>${soruNumarasi}. Soru:</strong></p>
            <img src="${görselYolu}" alt="${soruBilgisi.dosyaAd}" style="max-width: 100%; height: auto; margin-bottom: 20px; border: 1px solid #ccc;">
            <form id="soruFormu">${secenekHTML}</form>
        `;
        
        // Buton görünürlüğünü ayarla
        if (mevcutSoruIndex === sorular.length - 1) {
            ileriButonu.style.display = 'none';
            bitirButonu.style.display = 'block';
        } else {
            ileriButonu.style.display = 'block';
            bitirButonu.style.display = 'none';
        }
    }
}


// --- 2. CEVABI KAYDET VE SONRAKİ SORUYA GEÇ ---
function sonrakiSoru() {
    const seciliCevapElementi = document.querySelector('input[name="aktifSoruCevap"]:checked');
    kullaniciCevaplari[mevcutSoruIndex] = seciliCevapElementi ? seciliCevapElementi.value : null;

    if (mevcutSoruIndex < sorular.length - 1) {
        soruyuGoster(mevcutSoruIndex + 1);
    } 
}


// --- 3. PUANLAMA VE BİTİRME FONKSİYONU ---
function testiBitir(süreBitti = false) {
    if (!sinavDevamEdiyor) return; 

    sinavDevamEdiyor = false; 

    if (!süreBitti && mevcutSoruIndex === sorular.length - 1) {
        const sonSeciliCevapElementi = document.querySelector('input[name="aktifSoruCevap"]:checked');
        kullaniciCevaplari[sorular.length - 1] = sonSeciliCevapElementi ? sonSeciliCevapElementi.value : null;
    }

    clearInterval(intervalId); 

    let dogruSayisi = 0;
    let yanlisSayisi = 0;
    let bosSayisi = 0;
    const yanlisGötürmeKatsayısı = 0.25; 

    kullaniciCevaplari.forEach((cevap, index) => {
        const dogruCevapAnahtari = sorular[index].dogruCevap; 

        if (cevap === null) {
            bosSayisi++;
        } else if (cevap === dogruCevapAnahtari) {
            dogruSayisi++;
        } else {
            yanlisSayisi++;
        }
    });

    const netDogru = dogruSayisi - (yanlisSayisi * yanlisGötürmeKatsayısı);
    const hamPuan = Math.max(0, (netDogru / QUIZ_SORU_SAYISI) * 100).toFixed(2); 

    document.getElementById('dogruSayisi').textContent = dogruSayisi;
    document.getElementById('yanlisSayisi').textContent = yanlisSayisi;
    document.getElementById('bosSayisi').textContent = bosSayisi;
    document.getElementById('hamPuan').textContent = hamPuan;

    sonucAlani.style.display = 'block';
    soruAlani.style.display = 'none';

    zamanlayiciElement.textContent = süreBitti ? "SÜRE DOLDU - TEST BİTTİ" : "TEST BİTİRİLDİ";

    alert(`Sınavınız tamamlandı! Ham Puanınız: ${hamPuan}`);
}

// --- 4. ZAMANLAYICI KODU ---
function sureyiGuncelle() {
    if (!sinavDevamEdiyor) return;

    const dakika = Math.floor(kalanSureSaniye / 60);
    const saniye = kalanSureSaniye % 60;

    const formatliDakika = String(dakika).padStart(2, '0');
    const formatliSaniye = String(saniye).padStart(2, '0');

    zamanlayiciElement.textContent = `Kalan Süre: ${formatliDakika}:${formatliSaniye}`;

    kalanSureSaniye--;

    if (kalanSureSaniye < 0) {
        testiBitir(true); 
    }
}

// --- 5. YENİDEN BAŞLATMA FONKSİYONU ---
function testiTekrarBaslat() {
    // 1. Görsel havuzunu karıştır
    const karistirilmisHavuz = sorulariKaristir([...GORSEL_SORU_HAVUZU]);
    
    // 2. Havuzdan rastgele QUIZ_SORU_SAYISI (20) kadar soru seç
    // Bu, her seferinde 60 sorudan rastgele 20 tanesini seçer.
    sorular = karistirilmisHavuz.slice(0, QUIZ_SORU_SAYISI);

    // 3. Değişkenleri sıfırla
    mevcutSoruIndex = 0;
    kullaniciCevaplari = new Array(QUIZ_SORU_SAYISI).fill(null);
    kalanSureSaniye = 30 * 60;
    sinavDevamEdiyor = true;

    // 4. Ekranları değiştir
    soruAlani.style.display = 'block';
    sonucAlani.style.display = 'none';
    
    // 5. İlk soruyu yükle
    soruyuGoster(0);

    // 6. Zamanlayıcıyı yeniden başlat
    // Önceki zamanlayıcıyı durdurup yenisini başlatmak için kullanılır.
    clearInterval(intervalId); 
    intervalId = setInterval(sureyiGuncelle, 1000); 
    sureyiGuncelle();
}

// --- BAŞLATICI KISIM ---
document.addEventListener('DOMContentLoaded', () => {
    // Sayfa yüklendiğinde soruları seç, karıştır ve sınavı başlat
    testiTekrarBaslat();
});
