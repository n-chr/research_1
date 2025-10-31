//グラフ設定
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawAllCharts); 

function drawAllCharts() {
    drawChart1();
    drawChart2();
    drawChart3();
}

// --- グラフ1の描画関数 ---
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['年代', '人数'],
        ['20代 (85.00%)', 34],
        ['10代 (10.00%)', 4],
        ['30代 (5.00%)', 2]
    ]);
    
    var options = {
        colors: ['#ea4335', '#4285f4', '#fbbc05'], 
        legend: { position: 'labeled', textStyle: { color: '#ffffff' } },
        pieSliceText: 'value', 
        backgroundColor: 'transparent',
        chartArea: { left: 0, top: 0, width: '100%', height: '100%' }
    };
    
    var chart = new google.visualization.PieChart(document.getElementById('piechart1')); 
    chart.draw(data, options);
}

// --- グラフ2の描画関数 ---
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['性別', '人数'],
        ['女性 (78.57%)', 33],
        ['男性 (21.43%)', 9],
        ['その他 (0.00%)', 0]
    ]);

    var options = {
        colors: ['#ea4335', '#4285f4', '#fbbc05'], 
        legend: { position: 'labeled', textStyle: { color: '#ffffff' } },
        pieSliceText: 'value', 
        backgroundColor: 'transparent',
        chartArea: { left: 0, top: 0, width: '100%', height: '100%' }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart2')); 
    chart.draw(data, options);
}

// --- グラフ3の描画関数 ---
function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['職業', '人数'],
        ['学生 (90.48%)', 38],
        ['社会人 (9.52%)', 4]
    ]);
    
    var options = {
        colors: ['#ea4335', '#4285f4'], 
        
        legend: { 
            position: 'labeled', 
            textStyle: { color: '#ffffff' } 
        },
        
        pieSliceText: 'value', 
        backgroundColor: 'transparent',
        chartArea: { left: 0, top: 0, width: '100%', height: '100%' }
    };
    
    var chart = new google.visualization.PieChart(document.getElementById('piechart3')); 
    chart.draw(data, options);
}

// 全ての描画関数をマップするオブジェクト（グラフリロード用）
const chartDrawers = {
    'piechart1': drawChart1,
    'piechart2': drawChart2,
    'piechart3': drawChart3,
};

    // アコーディオンの開閉処理
$(function() {
    const chartDrawnFlags = {};

    $('.accordion_header').on('click', function() {
        var $accordionOne = $(this).parent('.accordion_one');
        var $accordionInner = $accordionOne.find('.accordion_inner');
        var chartId = $accordionOne.data('chart-id');

        $accordionOne.toggleClass('open');

        if ($accordionOne.hasClass('open')) {
            // ★開く処理★
            var scrollHeight = $accordionInner.get(0).scrollHeight;
            $accordionInner.css({
                'height': scrollHeight + 40 + 'px',
                'padding': '100px 20px'
            });

            if (chartDrawers[chartId]) {
                chartDrawers[chartId]();
            }
            
        } else {
            // ★閉じる処理★
            $accordionInner.css({
                'height': '0',
                'padding': '0 20px'
            });
        }
    });

    google.charts.setOnLoadCallback(function() {
        drawAllCharts();
        $('.accordion_one').removeClass('open');
        $('.accordion_one .accordion_inner').css({
            'height': '0',
            'padding': '0 20px'
        });
    });

});

$(function() {
    var modal = $('#imageModal');
    var modalImg = $('#modalImage');
    var closeBtn = $('.close-btn');

    // チャットバブル内の画像をクリックしたときの処理
    $('.bubble img').on('click', function() {
        // クリックされた画像のsrcを取得
        var imgSrc = $(this).attr('src');
        
        // モーダルを表示
        modal.css('display', 'block');
        
        // モーダル内のimg要素にsrcを設定
        modalImg.attr('src', imgSrc);
    });

    // 閉じるボタンをクリックしたときの処理
    closeBtn.on('click', function() {
        modal.css('display', 'none');
    });

    // モーダル背景（コンテナ自体）をクリックしたときの処理
    modal.on('click', function(e) {
        // クリックされた要素がモーダル自体であるか確認
        // (画像や閉じるボタンがクリックされた場合は閉じないようにするため)
        if (e.target.id === 'imageModal') {
            modal.css('display', 'none');
        }
    });

    // ESCキーを押したときの処理
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') { // ESCキーの判定
            if (modal.css('display') === 'block') {
                modal.css('display', 'none');
            }
        }
    });

    // ... 既存のコード ...
});