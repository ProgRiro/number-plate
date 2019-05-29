$(function () {
    $button = $("button");
    $mainNum = $(".mainNumber");
    $subNum = $(".subNumber");
    $prefecture = $(".prefecture");
    $hira = $(".hira");
    const $arrayHira = ["あ", "い", "う", "え", "か", "き", "く", "け", "こ", "さ", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を"];
    const $arrayPrefecture = ["札幌", "青森", "秋田", "盛岡", "仙台", "山形", "福島", "水戸", "宇都宮", "千葉", "前橋", "さいたま", "新宿", "横浜", "新潟", "長野", "甲府", "富山", "金沢", "岐阜", "静岡", "名古屋", "福井", "大津", "津", "京都", "奈良", "神戸", "大阪", "和歌山", "鳥取", "岡山", "松江", "広島", "山口", "高松", "徳島", "松山", "高知", "福岡", "大分", "宮崎", "佐賀", "長崎", "熊本", "鹿児島", "那覇"];
    var $number = [];
    $button.on("click", function () {
        for ($i = 0; $i < 4; $i++) {
            $number[$i] = Math.floor(Math.random() * 11);
            if ($number[$i] == 10) $number[$i] = '•';
        }
        $mainNum.html("" + $number[0] + $number[1] + "<span>-<span>" + $number[2] + $number[3]);
        $prefecture.text($arrayPrefecture[Math.floor(Math.random() * 47)]);
        $subNum.text(Math.floor(Math.random() * 100));
        $hira.text($arrayHira[Math.floor(Math.random() * 39)]);
    })

    $button.dblclick(function () {
        return false;
    });
});