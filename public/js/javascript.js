var isTableVisible = false;

document.getElementById("generateTableButton").addEventListener("click", function() {
    var multiplicationTable = document.getElementById("multiplicationTable");
    multiplicationTable.innerHTML = ""; // 清空内容

    var table = document.createElement("table");

    for (var i = 1; i <= 9; i++) {
        var row = document.createElement("tr");
        for (var j = 1; j <= 9; j++) {
            var cell = document.createElement("td");
            cell.textContent = i + " x " + j + " = " + (i * j);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    multiplicationTable.appendChild(table);

    // 顯示乘法表並隱藏生成按鈕，顯示隱藏按鈕
    multiplicationTable.style.display = "block";
    document.getElementById("generateTableButton").style.display = "none";
    document.getElementById("hideTableButton").style.display = "block";

    isTableVisible = true;
});

// 隱藏乘法表的點擊事件
document.getElementById("hideTableButton").addEventListener("click", function() {
    var multiplicationTable = document.getElementById("multiplicationTable");

    if (isTableVisible) {
        multiplicationTable.style.display = "none";
        document.getElementById("generateTableButton").style.display = "block";
        document.getElementById("hideTableButton").style.display = "none";
        isTableVisible = false;
    }
});