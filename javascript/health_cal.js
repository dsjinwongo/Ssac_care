// 
//
//  var _bmi=0;
//
// function bmrcal() {
//   var _hei = document.getElementById("_hei").value;
//   var _wei = document.getElementById("_wei").value;
//   var _age = document.getElementById("_age").value;
//   var gender = document.getElementsByName("gender1");
//
//        var _bmr;
//
//   var text =document.getElementById("bmrresult");
//   var text1 =document.getElementById("bmrresult1");
//
//
//     if(gender[0].checked ==true){
//       _bmr = 66.47 + (13.75 * _wei) + (5 * _hei) - (6.76* _age);
//
//       text.innerText = "Your BMR : " + _bmr.toFixed(3) +'Kcal';
//       if(_age>=20 && _age <30){
//         if(_bmr<=1359.8){
//               text1.innerText = 'Your BMR is bad';
//         }
//         else if(_bmr <=2096.2){
//               text1.innerText = 'Your BMR is normal';
//         }
//         else{
//               text1.innerText = 'Your BMR is good';
//         }
//       }
//       if(_age>=30 && _age <50){
//           if(_bmr<=1367.4){
//               text1.innerText = 'Your BMR is bad';
//         }
//         else if(_bmr <=1971.9){
//               text1.innerText = 'Your BMR is normal';
//         }
//         else{
//               text1.innerText = 'Your BMR is good';
//         }
//       }
//       if(_age>=50){
//         if(_bmr<=1178.5){
//               text1.innerText = 'Your BMR is bad';
//         }
//         else if(_bmr <=1809.1){
//               text1.innerText = 'Your BMR is normal';
//         }
//         else{
//               text1.innerText = 'Your BMR is good';
//         }
//       }
//     }
//     else{
//       _bmr = 655.1 + (9.56 * _wei) + (1.85 * _hei) - (4.68* _age);
//       text.innerText = "Your BMR : " + _bmr.toFixed(3) +'Kcal';
//       if(_age>=20 && _age <30){
//         if(_bmr<=1078.8){
//               text1.innerText = 'Your BMR is bad';
//         }
//         else if(_bmr <=1544.5){
//               text1.innerText = 'Your BMR is normal';
//         }
//         else{
//               text1.innerText = 'Your BMR is good';
//         }
//       }
//       if(_age>=30 && _age <50){
//         if(_bmr<=1090.9){
//               text1.innerText = 'Your BMR is bad';
//         }
//         else if(_bmr <=1542.7){
//               text1.innerText = 'Your BMR is normal';
//         }
//         else{
//               text1.innerText = 'Your BMR is good';
//         }
//       }
//       if(_age>=50){
//         if(_bmr<=1023.9){
//               text1.innerText = 'Your BMR is bad';
//         }
//         else if(_bmr <=1481.1){
//               text1.innerText = 'Your BMR is normal';
//         }
//         else{
//               text1.innerText = 'Your BMR is good';
//         }
//       }
//     }
// }
//
// function bmical() {
//   var _height = document.getElementById("hei").value;
//   var _weight = document.getElementById("wei").value;
//   _height = _height * 0.01;
//
//   _bmi = _weight / (_height * _height);
//
//
//   var text =document.getElementById("bmiresult");
//   var text1 =document.getElementById("bmiresult1");
//
//
//         text.innerText = "Your BMI = " + _bmi.toFixed(3);
//   if(_bmi < 18.5) {
//       text1.innerText = 'Underweight';
//
//   }
//   else if(_bmi >= 18.5 && _bmi <=22.9) {
//       text1.innerText = 'Normal';
//   }
//   else if(_bmi >= 23 && _bmi <=24.9) {
//       text1.innerText = 'Overweight';
//   }
//   else if(_bmi >= 25 && _bmi <=29.9) {
//       text1.innerText = 'Mild Obesity';
//   }
//
//   else if(_bmi >= 30 && _bmi <34.9) {
//       text1.innerText = 'Moderate Obesity';
//   }
//
//   else if(_bmi >= 35) {
//       text1.innerText = 'High Obesity';
//   }
//
//   google.charts.setOnLoadCallback(drawChart1);
// }
//
//
// google.charts.load('current', {'packages':['corechart']});
//  google.charts.setOnLoadCallback(drawChart1);
//
//  function drawChart1() {
//    var data1 = google.visualization.arrayToDataTable([
//       ['범위','저체중', '정상', '과체중', '경도비만',
//        '중', '고', 'bmi'],
//       ['범위', 18.5,4.5, 1.9,5, 5, 5,_bmi]
//     ]);
//
//     var options1 = {
//       legend: { position: 'top', maxLines: 3 },
//       bar: { groupWidth: '75%',width : '100%' },
//       isStacked: true,
//       seriesType: 'bars',
//       series: {6: {type: 'scatter'}},
//     colors: ['#585858','#6E6E6E','#848484','#A4A4A4','#BDBDBD','#E6E6E6','#FFBF00'],
//     };
//     var chart1 = new google.visualization.BarChart(document.getElementById('chart_div1'));
//     chart1.draw(data1, options1);
//  }
//
//  google.charts.setOnLoadCallback(drawChart);
//
//   function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//       ['20 - 29', 1078.8, 1078.8, 1544.5, 1544.5],
//       ['30 -49', 1090.9, 1090.9, 1542.7,1542.7],
//       ['50 ~ ', 1023.9, 1023.9, 1481.1, 1481.1]
//       // Treat first row as data as well.
//     ], true);
//
//
//     var options = {
//       title: "Feale",
//       legend:'none',
//       bar: { groupWidth: '70%' },
//       candlestick: {
//         fallingColor: { strokeWidth: 0, fill: '#FACC2E' },
//         risingColor: { strokeWidth: 0, fill: '#CEF6CE' }
//       },
//       series: {3: {type: 'scatter'}}
//     };
//
//     var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
//
//     chart.draw(data, options);
//   }
//   google.charts.setOnLoadCallback(drawChart2);
//
//    function drawChart2() {
//      var data2 = google.visualization.arrayToDataTable([
//        ['20 - 29', 1359.8, 1359.8, 2096.2, 2096.2],
//        ['30 -49', 1367.4, 1367.4, 1971.9,1971.9],
//        ['50 ~ ', 1178.5, 1178.5, 1809.1, 1809.1]
//        // Treat first row as data as well.
//      ], true);
//
//
//      var options2 = {
//        title: "Male",
//        legend:'none',
//        bar: { groupWidth: '70%' },
//        candlestick: {
//          fallingColor: { strokeWidth: 0, fill: '#FACC2E' },
//          risingColor: { strokeWidth: 0, fill: '#088A08' }  //남자
//        },
//      };
//
//      var chart2 = new google.visualization.CandlestickChart(document.getElementById('chart_div2'));
//
//      chart2.draw(data2, options2);
//    }
