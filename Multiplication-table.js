let a = "<table width='500' border='1'>";
for (let i = 1; i < 10; i++) {
    a += "<tr>";
    for (let j = 2; j < 10; j++) {
        //Có thể dùng câu lệnh thế này:
        // a += "<td>";
        // a += j + "x" + i + "=" + i * j;
        // a += "</td>";
        a += "<td>" + j + "x" + i + "=" + i * j + "</td>";
    }
    a += "</tr>";
}
a += "</table>";
document.write(a);