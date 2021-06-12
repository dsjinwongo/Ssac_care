var bookmark1_num=0;
var bookmark2_num=0;

function myMap() {
  var map1Canvas = document.getElementById("map1");
  var myCenter1 = new google.maps.LatLng(35.129585756411004, 127.91230650115332);
  var map1_station1 = new google.maps.LatLng(35.11524253254054, 129.0422322688192);
  var map1_station2 = new google.maps.LatLng(35.12239512861068, 128.7794592365405);
  var map1_station3 = new google.maps.LatLng(34.99565202484415, 128.299658935064);
  var map1_station4 = new google.maps.LatLng(34.92668873608108, 128.06939379819653);
  var map1_station5 = new google.maps.LatLng(34.96346929450887, 127.60059604262534);
  var map1_station6 = new google.maps.LatLng(34.866216996503375, 127.28993175939083);
  var map1_station7 = new google.maps.LatLng(34.60444768610772, 127.2748626220822);
  var map1_station8 = new google.maps.LatLng(34.4857605154027, 126.93645393032803);
  var map1_station9 = new google.maps.LatLng(34.29824035130264, 126.52681088844993);

  var map1Options = {
  	center: myCenter1,
    zoom: 8
  };
  var map1 = new google.maps.Map(map1Canvas, map1Options);

  var myPath1 = new google.maps.Polyline({
    path: [map1_station1, map1_station2, map1_station3, map1_station4, map1_station5, map1_station6, map1_station7, map1_station8, map1_station9],
    strokeColor: "#04B4AE",
    strokeOpacity: 0.8,
    strokeWeight: 4
  });
  myPath1.setMap(map1);

  var pinColor1 = "0275d8";
  var pinImage1 = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor1,
      new google.maps.Size(21, 34),
      new google.maps.Point(0,0),
      new google.maps.Point(10, 34));
  var pinShadow1 = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
      new google.maps.Size(40, 37),
      new google.maps.Point(0, 0),
      new google.maps.Point(12, 35));

  var map1_marker1 = new google.maps.Marker({
	position:map1_station1,
  icon: pinImage1,
  shadow: pinShadow1
  });
  map1_marker1.setMap(map1);

  google.maps.event.addListener(map1_marker1,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>부산 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #0275d8; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>1</td>'
    +'<td>19.2km</td>'
    +'<td>6시간</td>'
    +'<td>오륙도해맞이공원 - 신선대 - UN기념공원 - 우암동도시숲 - 증산공원 - 수정산체육공원 - 부산역</td>'
    +'</tr>'
    +'<tr>'
    +'<td>2</td>'
    +'<td>14.5km</td>'
    +'<td>5시간</td>'
    +'<td>부산역 - 봉래산 편백림 - 중리초등학교 – KT동삼빌딩 - 중리바닷가 – 흰여울문화마을 - 깡깡이 예술마을 - 영도대교 입구</td>'
    +'</tr>'
    +'<tr>'
    +'<td>3</td>'
    +'<td>14.9km</td>'
    +'<td>5시간</td>'
    +'<td>영도대교 입구 - 용두산공원 - 부산 수산물거리 - 송도해수욕장 - 송도해상케이블카(암남공원) - 감천항 - 감천삼거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>4</td>'
    +'<td>21.7km</td>'
    +'<td>6.5시간</td>'
    +'<td>감천삼거리 - 구평동마을회관 - 다대공판장 - 몰운대유원지 - 다대포해수욕장 - 아미산전망대 - 신평동교차로</td>'
    +'</tr>'
    +'<tr>'
    +'<td>5</td>'
    +'<td>21.9km</td>'
    +'<td>6.5시간</td>'
    +'<td>신평동교차로 - 을숙도 - 명호사거리 - 신호대교 - 녹산지구국가산업단지 - 송정공원</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map1,map1_marker1);
  });

  var map1_marker2 = new google.maps.Marker({
	position:map1_station2,
  icon: pinImage1,
  shadow: pinShadow1
  });
  map1_marker2.setMap(map1);

  google.maps.event.addListener(map1_marker2,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>창원 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #0275d8; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>6</td>'
    +'<td>14.8km</td>'
    +'<td>5시간</td>'
    +'<td>송정공원 - 무궁화공원 - 진주교 - 흰돌메공원 - 주기철목사기념관 - 제덕사거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>7</td>'
    +'<td>11.0km</td>'
    +'<td>4시간</td>'
    +'<td>제덕사거리 - 중앙오션진해공장 - 진해국가산업단지 - 장천부두 - 장천초등학교 - 상리마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>8</td>'
    +'<td>15.7km</td>'
    +'<td>5시간</td>'
    +'<td>상리마을 - 천자봉 - 진해드림파크 - 진해드림로드 입구</td>'
    +'</tr>'
    +'<tr>'
    +'<td>9</td>'
    +'<td>16.6km</td>'
    +'<td>6.5시간</td>'
    +'<td>진해드림로드 입구 - 웅남동 주민센터 - 봉암교 - 마산용마고등학교 - 성호초등학교 - 마산항 입구</td>'
    +'</tr>'
    +'<tr>'
    +'<td>10</td>'
    +'<td>15.6km</td>'
    +'<td>5시간</td>'
    +'<td>마산항 입구 - 마산55호공원 - 마산해양신도시 - 해운중학교 - 천마산 - 창원요양병원 - 구서분교 앞 사거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>11</td>'
    +'<td>16.0km</td>'
    +'<td>5시간</td>'
    +'<td>구서분교 앞 사거리 - 제말장군묘 - 광암해수욕장 및 광암항 - 진동삼거리 - 창원해양경찰서 고현출장소 - 암아교차로</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map1,map1_marker2);
  });

  var map1_marker3 = new google.maps.Marker({
	position:map1_station3,
  icon: pinImage1,
  shadow: pinShadow1
  });
  map1_marker3.setMap(map1);

  google.maps.event.addListener(map1_marker3,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>고성-통영-거제 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #0275d8; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>12</td>'
    +'<td>18.2km</td>'
    +'<td>6시간</td>'
    +'<td>암아교차로 - 모시꽃예술체험학교 - 금봉리마을회관 - 당항포관광지 - 배둔시외버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>13</td>'
    +'<td>20.7km</td>'
    +'<td>6.5시간</td>'
    +'<td>배둔시외버스터미널 - 마동호 - 정북리노인회관 - 거류면사무소 - 거류체육공원 - 화당마을회관 - 황리사거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>14</td>'
    +'<td>13.8km</td>'
    +'<td>4시간</td>'
    +'<td>황리사거리 - 덕포일반산업단지 - 창포마을회관 - 덕포교 - 내죽도 수변공원 - 충무도서관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>15</td>'
    +'<td>16.9km</td>'
    +'<td>6시간</td>'
    +'<td>충무도서관 - 삼봉산 등산로 - 신거제대교 - 사등초등학교 - 사등면사무소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>16</td>'
    +'<td>13.0km</td>'
    +'<td>4.5시간</td>'
    +'<td>사등면사무소 - 거제레져월드 - 거제 중앙교회 - 고현항 - 거제 고현버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>17</td>'
    +'<td>19.1km</td>'
    +'<td>6시간</td>'
    +'<td>고현버스터미널 - 신현3교 - 석름봉 - 대성사 - 동류소류지 - 하청야구장 - 사환마을 - 실전마을회관 - 장목파출소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>18</td>'
    +'<td>16.4km</td>'
    +'<td>6시간</td>'
    +'<td>장목파출소 - 관포삼거리 - 두모마을 - 복항리새마을회관 - 대금산 - 외포중학교 - 김영삼대통령 생가&기록전시관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>19</td>'
    +'<td>15.9km</td>'
    +'<td>5.5시간</td>'
    +'<td>김영삼대통령 생가&기록전시관 - 덕포해수욕장 - 옥포항 - 옥포국가산업단지 - 장승포 시외버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>20</td>'
    +'<td>18.7km</td>'
    +'<td>6시간</td>'
    +'<td>장승포 시외버스터미널 - 능포항 - 장승포항 - 대명리조트 거제마리나 - 거제어촌민속전시관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>21</td>'
    +'<td>14.7km</td>'
    +'<td>5시간</td>'
    +'<td>거제어촌민속전시관 - 지세포항 - 예구선착장 - 와현모래숲해수욕장 - 구조라유람선터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>22</td>'
    +'<td>14.4km</td>'
    +'<td>5.5시간</td>'
    +'<td>구조라유람선터미널 - 구조라항 - 구조라해수욕장 - 망치몽돌해수욕장 - 북병산 - 학동고개</td>'
    +'</tr>'
    +'<tr>'
    +'<td>23</td>'
    +'<td>9.5km</td>'
    +'<td>4시간</td>'
    +'<td>학동고개 - 가라산 - 저구사거리 - 저구항</td>'
    +'</tr>'
    +'<tr>'
    +'<td>24</td>'
    +'<td>10.6km</td>'
    +'<td>3시간</td>'
    +'<td>저구항 - 매물도 여객터미널 - 쌍근어촌체험마을 - 탑포마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>25</td>'
    +'<td>14.6km</td>'
    +'<td>4시간</td>'
    +'<td>탑포마을 - 맑은숲농원캠핑장 - 오망천삼거리 - 오수마을회관 - 거제파출소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>26</td>'
    +'<td>13.2km</td>'
    +'<td>4시간</td>'
    +'<td>거제파출소 - 거제스포츠파크 - 거제농업개발원 - 대봉산 - 산방산 - 청마기념관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>27</td>'
    +'<td>10.3km</td>'
    +'<td>3시간</td>'
    +'<td>청마기념관 - 둔덕기성 - 시래산 - 거제대교 - 신촌마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>28</td>'
    +'<td>13.8km</td>'
    +'<td>4시간</td>'
    +'<td>신촌마을 - 통영오토캠핑장 - 통영생활체육공원 - 동암항 - 이순신공원 - 남망산조각공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>29</td>'
    +'<td>17.6km</td>'
    +'<td>6시간</td>'
    +'<td>남망산조각공원 - 동피랑마을 - 삼도수군통제영 - 해저터널 - 해양소년단거북선캠프 - 평림생활체육공원 - 무전동 해변공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>30</td>'
    +'<td>16.3km</td>'
    +'<td>5.5시간</td>'
    +'<td>무전동 해변공원 - 향교봉 - 발암산 - 백우정사 - 원산리 바다휴게소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>31</td>'
    +'<td>16.6km</td>'
    +'<td>5시간</td>'
    +'<td>원산리 바다휴게소 - 해지개 다리 - 남산공원 - 대독누리길 - 황불암 - 고성 부포사거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>32</td>'
    +'<td>14.2km</td>'
    +'<td>5.5시간</td>'
    +'<td>고성 부포사거리 - 무선저수지 - 수태산 - 학동저수지 - 학동마을 돌담 - 하일면사무소 - 임포항</td>'
    +'</tr>'
    +'<tr>'
    +'<td>33</td>'
    +'<td>18.0km</td>'
    +'<td>5.5시간</td>'
    +'<td>임포항 - 솔섬 - 송천2구마을회관 - 용암포항 - 상족암 군립공원 - 하이면사무소</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map1,map1_marker3);
  });

  var map1_marker4 = new google.maps.Marker({
	position:map1_station4,
  icon: pinImage1,
  shadow: pinShadow1
  });
  map1_marker4.setMap(map1);

  google.maps.event.addListener(map1_marker4,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>사천-남해-하동 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #0275d8; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>34</td>'
    +'<td>10.2km</td>'
    +'<td>3.5시간</td>'
    +'<td>고성 하이면사무소 - 남일대 해수욕장 - 삼천포 신항 - 노산공원 - 삼천포 용궁시장 - 삼천포대교 사거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>35</td>'
    +'<td>12.7km</td>'
    +'<td>4.5시간</td>'
    +'<td>삼천포대교 사거리 - 각산산성 - 모충공원 - 실안방파제 - 대방교차로(삼천포대교 북단)</td>'
    +'</tr>'
    +'<tr>'
    +'<td>36</td>'
    +'<td>17.5km</td>'
    +'<td>6.5시간</td>'
    +'<td>대방교차로 - 삼천포대교 - 창선대교 - 단항 왕후박나무 - 연태산임도 - 속금산 임도 - 운대암 입구 - 창선면행정복지센터</td>'
    +'</tr>'
    +'<tr>'
    +'<td>37</td>'
    +'<td>15.4km</td>'
    +'<td>6시간</td>'
    +'<td>창선면행정복지센터 - 동대만휴게소 - 연곡마을 - 여봉산 정상 - 가인리 고사리밭길 - 공룡발자국화석지 - 세심사 - 가인마을 - 진동리 고사리밭길 - 적량마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>38</td>'
    +'<td>12.0km</td>'
    +'<td>4.5시간</td>'
    +'<td>적량마을 - 장포 - 남방봉 임도 - 보현사 - 남방봉 임도 – 추섬공원 - 삼동지족 - 지족교 - 삼동하나로마트</td>'
    +'</tr>'
    +'<tr>'
    +'<td>39</td>'
    +'<td>9.9km</td>'
    +'<td>4시간</td>'
    +'<td>삼동면소재지 - 지족해협길 - 전도마을 - 남해청소년수련원 - 동천마을 - 물건방조어부림 - 물건마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>40</td>'
    +'<td>16.2km</td>'
    +'<td>6.5시간</td>'
    +'<td>물건마을 - 독일마을 - 바람흔적미술관 - 나비생태공원 - 국립남해편백자연휴양림 - 편백나무길 - 천하마을삼거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>41</td>'
    +'<td>15.3km</td>'
    +'<td>6시간</td>'
    +'<td>천하마을 - 천하몽돌해변 - 금포마을 - 상주해변 - 대량마을 - 소량마을 - 두모마을 - 벽련마을 - 원천항</td>'
    +'</tr>'
    +'<tr>'
    +'<td>42</td>'
    +'<td>17.7km</td>'
    +'<td>7시간</td>'
    +'<td>원천마을 - 앵강다숲(남해바래길탐방안내센터) - 화계마을(길현미술관) - 용문산 임도 - 미국마을 - 두곡&월포해변 - 홍현해라우지마을 - 가천다랭이마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>43</td>'
    +'<td>14.0km</td>'
    +'<td>5.5시간</td>'
    +'<td>가천다랭이마을 - 빛담촌 - 선구몽돌해변 - 선구보건소 - 사촌해변 - 유구마을 - 바래길작은미술관(평산항)</td>'
    +'</tr>'
    +'<tr>'
    +'<td>44</td>'
    +'<td>13.9km</td>'
    +'<td>5.5시간</td>'
    +'<td>남해바래길작은미술관(평산항) - 오리마을 - 임진성 - 남구마을 - 천황산 임도 - 남해스포츠파크</td>'
    +'</tr>'
    +'<tr>'
    +'<td>45</td>'
    +'<td>12.6km</td>'
    +'<td>5시간</td>'
    +'<td>남해스포츠파크(서상) - 예계 - 상남 - 작장 - 남상 - 염해 - 유포체험마을 - 노구 - 중현하나로마트</td>'
    +'</tr>'
    +'<tr>'
    +'<td>46</td>'
    +'<td>17.6km</td>'
    +'<td>6시간</td>'
    +'<td>중현하나로마트 - 우물 - 백년고개 - 고현면 - 이순신순국공원 - 월곡 - 감암 - 노량선착장 - 남해대교 - 남해대교교차로</td>'
    +'</tr>'
    +'<tr>'
    +'<td>47</td>'
    +'<td>27.6km</td>'
    +'<td>7.5시간</td>'
    +'<td>남해대교 - 노량항 – 진정마을 – 조개섬캠핑장 – 하동포구공원 – 하동송림공원 – 섬진교</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map1,map1_marker4);
  });

  var map1_marker5 = new google.maps.Marker({
	position:map1_station5,
  icon: pinImage1,
  shadow: pinShadow1
  });
  map1_marker5.setMap(map1);

  google.maps.event.addListener(map1_marker5,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>광양-여수-순천 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #0275d8; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>48</td>'
    +'<td>13.7km</td>'
    +'<td>4시간</td>'
    +'<td>섬진교 - 섬진강 - 섬진강휴게소 - 진월초등학교</td>'
    +'</tr>'
    +'<tr>'
    +'<td>49</td>'
    +'<td>15.5km</td>'
    +'<td>4.5시간</td>'
    +'<td>광양 진월초등학교 - 윤동주유고보존가옥 - 망덕포구 - 광양제철소 - 백운그린랜드 - 중마금호해상보도 - 중동근린공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>50</td>'
    +'<td>17.6km</td>'
    +'<td>5.5시간</td>'
    +'<td>중동근린공원 - 구봉산 등산로 - 사라실예술촌 - 광양공영버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>51</td>'
    +'<td>15.0km</td>'
    +'<td>4.5시간</td>'
    +'<td>광양공영버스터미널 - 도원보건진료소 - 충무사 - 순천왜성 - 여수 율촌파출소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>52</td>'
    +'<td>14.8km</td>'
    +'<td>4.5시간</td>'
    +'<td>여수 율촌파출소 - 득실교회 - 여수공항 - 덕양시외버스정류장 - 소라초등학교</td>'
    +'</tr>'
    +'<tr>'
    +'<td>53</td>'
    +'<td>11.3km</td>'
    +'<td>3시간</td>'
    +'<td>소라초등학교 - 여천역 - 전남대 여수탬퍼스 - 여수종합버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>54</td>'
    +'<td>7.3km</td>'
    +'<td>2.5시간</td>'
    +'<td>여수종합버스터미널 - 여수엑스포 - 여수해양공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>55</td>'
    +'<td>15.6km</td>'
    +'<td>4.5시간</td>'
    +'<td>여수해양공원 - 극동항 - 히든베이호텔입구 - 선소유적 - 소호동동다리 - 여수소호요트장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>56</td>'
    +'<td>14.7km</td>'
    +'<td>4시간</td>'
    +'<td>소호요토장 - 디오션리조트 - 용주리 - 화양면사무소 - 소장리 - 원포</td>'
    +'</tr>'
    +'<tr>'
    +'<td>57</td>'
    +'<td>17.8km</td>'
    +'<td>4.5시간</td>'
    +'<td>원포버스정류장 - 고봉산등산로 - 고봉산임도 - 이목리 - 서촌마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>58</td>'
    +'<td>15.5km</td>'
    +'<td>4.5시간</td>'
    +'<td>서촌마을 - 석교 - 감도 - 소옥1제 - 여수펜션단지 - 관기방조제(가시리생태공원)</td>'
    +'</tr>'
    +'<tr>'
    +'<td>59</td>'
    +'<td>8.4km</td>'
    +'<td>2.5시간</td>'
    +'<td>소라면가사 정류장 - 복산2구마을회관 - 복산보건진료소 - 여수 궁항정류장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>60</td>'
    +'<td>15.1km</td>'
    +'<td>5시간</td>'
    +'<td>궁항마을 - 장척마을 - 봉전마을 - 가림산 해안산책로 - 와온해변</td>'
    +'</tr>'
    +'<tr>'
    +'<td>61</td>'
    +'<td>17.1km</td>'
    +'<td>6시간</td>'
    +'<td>와온해변 - 용산전망대 - 순천만 - 장산마을 - 별량화포 - 순천만 소리체험관 - 순천만 습지공원 - 순천만 제방</td>'
    +'</tr>'
    +'<tr>'
    +'<td>62</td>'
    +'<td>24.9km</td>'
    +'<td>8시간</td>'
    +'<td>별량화포 - 창산복지회관 - 거차뻘배체험장 - 구룡사 - 별량농협 구룡지소 - 벌교장양어촌체험마을 - 벌교갯벌습지보호지역 - 벌교생태공원 - 중도방죽 - 부용교</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map1,map1_marker5);
  });

  var map1_marker6 = new google.maps.Marker({
	position:map1_station6,
  icon: pinImage1,
  shadow: pinShadow1
  });
  map1_marker6.setMap(map1);

  google.maps.event.addListener(map1_marker6,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>보성-고흥 구간1</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #0275d8; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>63</td>'
    +'<td>21.7km</td>'
    +'<td>8시간</td>'
    +'<td>부용교 - 소화다리 - 채동선생가 - 벌교읍사무소 - 보성여관 - 벌교역 - 벌교숲공원 - 수차마을 - 제두마을 - 대포마을 - 죽동마을 - 옹암마을 - 망동마을 팔영농협 망주지소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>64</td>'
    +'<td>14.3km</td>'
    +'<td>4.5시간</td>'
    +'<td>팔영농협 망주지소 - 남양중학교 - 거군지 - 슬항회관 - 독대마을회관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>65</td>'
    +'<td>24.7km</td>'
    +'<td>7.5시간</td>'
    +'<td>독대마을회관 - 화덕회관 - 여호항 - 우천리 간천버스정류장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>66</td>'
    +'<td>11.2km</td>'
    +'<td>4.5시간</td>'
    +'<td>우천리 간천버스정류장 - 우주발사전망대 - 남열해돋이해수욕장 - 남열마을 입구</td>'
    +'</tr>'
    +'<tr>'
    +'<td>67</td>'
    +'<td>16.4km</td>'
    +'<td>5시간</td>'
    +'<td>남열마을 입구 - 지붕없는 미술관 - 양화경로당 - 영남 만리성 - 금사보건진료소 - 해창만캠핑장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>68</td>'
    +'<td>20.5km</td>'
    +'<td>7.5시간</td>'
    +'<td>해창만캠핑장 - 별나로마을 - 우산마을회관 - 익금마을회관 - 도화재래시장 - 도화베이스볼파크 - 도화버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>69</td>'
    +'<td>15.7km</td>'
    +'<td>5.5시간</td>'
    +'<td>도화버스터미널 -도화고등학교 -천등산 - 천등회관 - 매곡리 백석버스정류장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>70</td>'
    +'<td>13.3km</td>'
    +'<td>3.5시간</td>'
    +'<td>매곡리 백석버스정류장 - 오마간척 한센인 추모공원 - 매동마을회관 - 동두산공원 - 녹동전통시장 - 녹동버스공용정류장</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map1,map1_marker6);
  });

  var map1_marker7 = new google.maps.Marker({
	position:map1_station7,
  icon: pinImage1,
  shadow: pinShadow1
  });
  map1_marker7.setMap(map1);

  google.maps.event.addListener(map1_marker7,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>보성-고흥 구간2</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #0275d8; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>71</td>'
    +'<td>21.8km</td>'
    +'<td>7시간</td>'
    +'<td>녹동버스공용정류장 - 녹동현대병원 - 당남해변 - 용동해수욕장 - 고흥만방조제공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>72</td>'
    +'<td>14.9km</td>'
    +'<td>5시간</td>'
    +'<td>고흥만방조제공원 - 풍류해수욕장&풍류어촌체험마을 - 신흥마을회관 - 내당회관 - 대전해수욕장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>73</td>'
    +'<td>17.9km</td>'
    +'<td>6시간</td>'
    +'<td>대전해수욕장 - 용등산 - 언안들 - 금성마을 - 내로마을회관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>74</td>'
    +'<td>9.2km</td>'
    +'<td>3시간</td>'
    +'<td>내로마을회관 - 도야부녀복지회관 - 메타세콰이어길 - 남양리 남양버스정류장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>75</td>'
    +'<td>21.0km</td>'
    +'<td>7시간</td>'
    +'<td>남양리 남양버스정류장 - 중산마을 - 신촌회관 - 고흥신기거북이마을 - 신기수문동 버스정류장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>76</td>'
    +'<td>16.7km</td>'
    +'<td>5.5시간</td>'
    +'<td>신기수문동 버스정류장 - 수문동 나루터 - 장선해변 - 득량만 풍광휴식센터 - 득량만 갈대군락지 생태공원 - 비봉공룡공원 - 보성비봉마리나 - 선소어촌체험장 - 득량만 바다낚시공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>77</td>'
    +'<td>12.9km</td>'
    +'<td>4시간</td>'
    +'<td>득량만 바다낚시공원 - 비봉공룡알화석지 - 객산어민회관 - 금광마을 - 율포해수욕장(율포오토캠핑장) - 율포솔밭</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map1,map1_marker7);
  });

  var map1_marker8 = new google.maps.Marker({
	position:map1_station8,
  icon: pinImage1,
  shadow: pinShadow1
  });
  map1_marker8.setMap(map1);

  google.maps.event.addListener(map1_marker8,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>장흥-강진 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #0275d8; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>78</td>'
    +'<td>18.9km</td>'
    +'<td>6시간</td>'
    +'<td>율포솔밭 - 율포해수녹차센터 - 회천수산물직판장 - 명교해수욕장 - 수문해변 - 장흥키조개마을 - 한승원 문학 산책로 - 장흥 원등마을회관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>79</td>'
    +'<td>26.2km</td>'
    +'<td>8.5시간</td>'
    +'<td>원등마을회관 - 상발마을 - 고마방조제 - 삼산방조제 - 정남진 - 회진시외버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>80</td>'
    +'<td>20.0km</td>'
    +'<td>6.5시간</td>'
    +'<td>회진시외버스터미널 - 대던천 - 신리 - 상흥천 - 신마항 - 마량항</td>'
    +'</tr>'
    +'<tr>'
    +'<td>81</td>'
    +'<td>16.0km</td>'
    +'<td>4.5시간</td>'
    +'<td>마량항 - 백사어촌체험마을 - 고바우전망대 - 하저어촌체험마을 - 가우도 입구</td>'
    +'</tr>'
    +'<tr>'
    +'<td>82</td>'
    +'<td>16.3km</td>'
    +'<td>5.5시간</td>'
    +'<td>가우도 입구 - 봉황마을 - 보련마을 - 사부마을 - 구로마을 - 구목리교 서쪽</td>'
    +'</tr>'
    +'<tr>'
    +'<td>83</td>'
    +'<td>18.0km</td>'
    +'<td>5.5시간</td>'
    +'<td>구목리교 서쪽 - 강진만 생태공원 - 강진만 철새도래지 - 백련사 - 동백림 - 다산초당 - 석문공원 - 도암농협</td>'
    +'</tr>'
    +'<tr>'
    +'<td>84</td>'
    +'<td>13.7km</td>'
    +'<td>4.5시간</td>'
    +'<td>도암농협 - 신기마을 - 도암배수갑문 - 사내방조제</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map1,map1_marker8);
  });

  var map1_marker9 = new google.maps.Marker({
	position:map1_station9,
  icon: pinImage1,
  shadow: pinShadow1
  });
  map1_marker9.setMap(map1);

  google.maps.event.addListener(map1_marker9,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>완도-해남 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #0275d8; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>85</td>'
    +'<td>18.2km</td>'
    +'<td>6시간</td>'
    +'<td>사내방조제 북쪽 교차로 - 내동리밭섬고분군 - 북평초등학교 - 해남 남창정류소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>86</td>'
    +'<td>24.6km</td>'
    +'<td>7.5시간</td>'
    +'<td>해남 남창정류소 - 달도 - 완도대교(하행) - 대창리 - 완도항 해조류센터</td>'
    +'</tr>'
    +'<tr>'
    +'<td>87</td>'
    +'<td>18.0km</td>'
    +'<td>6시간</td>'
    +'<td>완도항 해조류센터 - 완도타워 - 부꾸지 - 구계동 - 화홍초등학교(화홍리)</td>'
    +'</tr>'
    +'<tr>'
    +'<td>88</td>'
    +'<td>15.8km</td>'
    +'<td>5시간</td>'
    +'<td>화홍초등학교 - 임도 - 등산로 - 상황봉 - 완도수목원 - 군외면사무소 - 원동대교</td>'
    +'</tr>'
    +'<tr>'
    +'<td>89</td>'
    +'<td>13.8km</td>'
    +'<td>4시간</td>'
    +'<td>원동버스터미널 - 완도대교 - 달도테마공원 - 남창시장 - 남창 해월루지 - 미황사 천왕문</td>'
    +'</tr>'
    +'<tr>'
    +'<td>90</td>'
    +'<td>13.9km</td>'
    +'<td>4.5시간</td>'
    +'<td>미황사 천왕문-미황사 숲길-도솔암-땅끝전망대-땅끝탑</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map1,map1_marker9);
  });

  var map2Canvas = document.getElementById("map2");
  var myCenter2 = new google.maps.LatLng(36.9600499343193, 128.0023281846864);
  var map2_station1 = new google.maps.LatLng(38.586113777587805, 128.37434150367534);
  var map2_station2 = new google.maps.LatLng(38.18319370533799, 128.6121170397505);
  var map2_station3 = new google.maps.LatLng(37.80602288752474, 128.9087541586712);
  var map2_station4 = new google.maps.LatLng(37.554338605911504, 129.11608141692042);
  var map2_station5 = new google.maps.LatLng(36.96780146302545, 129.41194707131308);
  var map2_station6 = new google.maps.LatLng(36.42457369530443, 129.4337204164707);
  var map2_station7 = new google.maps.LatLng(36.056670769792206, 129.37673587406582);
  var map2_station8 = new google.maps.LatLng(35.75245761308884, 129.47258304633942);
  var map2_station9 = new google.maps.LatLng(35.49267548846585, 129.4352613652091);
  var map2_station10 = new google.maps.LatLng(35.11455796350412, 129.0394528227076);

  var map2Options = {
  	center: myCenter2,
    zoom: 7.1
  };
  var map2 = new google.maps.Map(map2Canvas, map2Options);

  var myPath2 = new google.maps.Polyline({
    path: [map2_station1, map2_station2, map2_station3, map2_station4, map2_station5, map2_station6, map2_station7, map2_station8, map2_station9, map2_station10],
    strokeColor: "#04B4AE",
    strokeOpacity: 0.8,
    strokeWeight: 4
  });
  myPath2.setMap(map2);

  var pinColor2 = "d9534f";
  var pinImage2 = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor2,
      new google.maps.Size(21, 34),
      new google.maps.Point(0,0),
      new google.maps.Point(10, 34));
  var pinShadow2 = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
      new google.maps.Size(40, 37),
      new google.maps.Point(0, 0),
      new google.maps.Point(12, 35));

  var map2_marker1 = new google.maps.Marker({
	position:map2_station1,
  icon: pinImage2,
  shadow: pinShadow2
  });
  map2_marker1.setMap(map2);

  google.maps.event.addListener(map2_marker1,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>부산 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #d9534f; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>1</td>'
    +'<td>19.2km</td>'
    +'<td>6시간</td>'
    +'<td>오륙도해맞이공원 - 신선대 - UN기념공원 - 우암동도시숲 - 증산공원 - 수정산체육공원 - 부산역</td>'
    +'</tr>'
    +'<tr>'
    +'<td>2</td>'
    +'<td>14.5km</td>'
    +'<td>5시간</td>'
    +'<td>부산역 - 봉래산 편백림 - 중리초등학교 – KT동삼빌딩 - 중리바닷가 – 흰여울문화마을 - 깡깡이 예술마을 - 영도대교 입구</td>'
    +'</tr>'
    +'<tr>'
    +'<td>3</td>'
    +'<td>14.9km</td>'
    +'<td>5시간</td>'
    +'<td>영도대교 입구 - 용두산공원 - 부산 수산물거리 - 송도해수욕장 - 송도해상케이블카(암남공원) - 감천항 - 감천삼거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>4</td>'
    +'<td>21.7km</td>'
    +'<td>6.5시간</td>'
    +'<td>감천삼거리 - 구평동마을회관 - 다대공판장 - 몰운대유원지 - 다대포해수욕장 - 아미산전망대 - 신평동교차로</td>'
    +'</tr>'
    +'<tr>'
    +'<td>5</td>'
    +'<td>21.9km</td>'
    +'<td>6.5시간</td>'
    +'<td>신평동교차로 - 을숙도 - 명호사거리 - 신호대교 - 녹산지구국가산업단지 - 송정공원</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map2,map2_marker1);
  });

  var map2_marker2 = new google.maps.Marker({
	position:map2_station2,
  icon: pinImage2,
  shadow: pinShadow2
  });
  map2_marker2.setMap(map2);

  google.maps.event.addListener(map2_marker2,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>창원 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #d9534f; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>6</td>'
    +'<td>14.8km</td>'
    +'<td>5시간</td>'
    +'<td>송정공원 - 무궁화공원 - 진주교 - 흰돌메공원 - 주기철목사기념관 - 제덕사거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>7</td>'
    +'<td>11.0km</td>'
    +'<td>4시간</td>'
    +'<td>제덕사거리 - 중앙오션진해공장 - 진해국가산업단지 - 장천부두 - 장천초등학교 - 상리마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>8</td>'
    +'<td>15.7km</td>'
    +'<td>5시간</td>'
    +'<td>상리마을 - 천자봉 - 진해드림파크 - 진해드림로드 입구</td>'
    +'</tr>'
    +'<tr>'
    +'<td>9</td>'
    +'<td>16.6km</td>'
    +'<td>6.5시간</td>'
    +'<td>진해드림로드 입구 - 웅남동 주민센터 - 봉암교 - 마산용마고등학교 - 성호초등학교 - 마산항 입구</td>'
    +'</tr>'
    +'<tr>'
    +'<td>10</td>'
    +'<td>15.6km</td>'
    +'<td>5시간</td>'
    +'<td>마산항 입구 - 마산55호공원 - 마산해양신도시 - 해운중학교 - 천마산 - 창원요양병원 - 구서분교 앞 사거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>11</td>'
    +'<td>16.0km</td>'
    +'<td>5시간</td>'
    +'<td>구서분교 앞 사거리 - 제말장군묘 - 광암해수욕장 및 광암항 - 진동삼거리 - 창원해양경찰서 고현출장소 - 암아교차로</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map2,map2_marker2);
  });

  var map2_marker3 = new google.maps.Marker({
	position:map2_station3,
  icon: pinImage2,
  shadow: pinShadow2
  });
  map2_marker3.setMap(map2);

  google.maps.event.addListener(map2_marker3,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>고성-통영-거제 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #d9534f; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>12</td>'
    +'<td>18.2km</td>'
    +'<td>6시간</td>'
    +'<td>암아교차로 - 모시꽃예술체험학교 - 금봉리마을회관 - 당항포관광지 - 배둔시외버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>13</td>'
    +'<td>20.7km</td>'
    +'<td>6.5시간</td>'
    +'<td>배둔시외버스터미널 - 마동호 - 정북리노인회관 - 거류면사무소 - 거류체육공원 - 화당마을회관 - 황리사거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>14</td>'
    +'<td>13.8km</td>'
    +'<td>4시간</td>'
    +'<td>황리사거리 - 덕포일반산업단지 - 창포마을회관 - 덕포교 - 내죽도 수변공원 - 충무도서관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>15</td>'
    +'<td>16.9km</td>'
    +'<td>6시간</td>'
    +'<td>충무도서관 - 삼봉산 등산로 - 신거제대교 - 사등초등학교 - 사등면사무소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>16</td>'
    +'<td>13.0km</td>'
    +'<td>4.5시간</td>'
    +'<td>사등면사무소 - 거제레져월드 - 거제 중앙교회 - 고현항 - 거제 고현버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>17</td>'
    +'<td>19.1km</td>'
    +'<td>6시간</td>'
    +'<td>고현버스터미널 - 신현3교 - 석름봉 - 대성사 - 동류소류지 - 하청야구장 - 사환마을 - 실전마을회관 - 장목파출소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>18</td>'
    +'<td>16.4km</td>'
    +'<td>6시간</td>'
    +'<td>장목파출소 - 관포삼거리 - 두모마을 - 복항리새마을회관 - 대금산 - 외포중학교 - 김영삼대통령 생가&기록전시관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>19</td>'
    +'<td>15.9km</td>'
    +'<td>5.5시간</td>'
    +'<td>김영삼대통령 생가&기록전시관 - 덕포해수욕장 - 옥포항 - 옥포국가산업단지 - 장승포 시외버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>20</td>'
    +'<td>18.7km</td>'
    +'<td>6시간</td>'
    +'<td>장승포 시외버스터미널 - 능포항 - 장승포항 - 대명리조트 거제마리나 - 거제어촌민속전시관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>21</td>'
    +'<td>14.7km</td>'
    +'<td>5시간</td>'
    +'<td>거제어촌민속전시관 - 지세포항 - 예구선착장 - 와현모래숲해수욕장 - 구조라유람선터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>22</td>'
    +'<td>14.4km</td>'
    +'<td>5.5시간</td>'
    +'<td>구조라유람선터미널 - 구조라항 - 구조라해수욕장 - 망치몽돌해수욕장 - 북병산 - 학동고개</td>'
    +'</tr>'
    +'<tr>'
    +'<td>23</td>'
    +'<td>9.5km</td>'
    +'<td>4시간</td>'
    +'<td>학동고개 - 가라산 - 저구사거리 - 저구항</td>'
    +'</tr>'
    +'<tr>'
    +'<td>24</td>'
    +'<td>10.6km</td>'
    +'<td>3시간</td>'
    +'<td>저구항 - 매물도 여객터미널 - 쌍근어촌체험마을 - 탑포마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>25</td>'
    +'<td>14.6km</td>'
    +'<td>4시간</td>'
    +'<td>탑포마을 - 맑은숲농원캠핑장 - 오망천삼거리 - 오수마을회관 - 거제파출소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>26</td>'
    +'<td>13.2km</td>'
    +'<td>4시간</td>'
    +'<td>거제파출소 - 거제스포츠파크 - 거제농업개발원 - 대봉산 - 산방산 - 청마기념관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>27</td>'
    +'<td>10.3km</td>'
    +'<td>3시간</td>'
    +'<td>청마기념관 - 둔덕기성 - 시래산 - 거제대교 - 신촌마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>28</td>'
    +'<td>13.8km</td>'
    +'<td>4시간</td>'
    +'<td>신촌마을 - 통영오토캠핑장 - 통영생활체육공원 - 동암항 - 이순신공원 - 남망산조각공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>29</td>'
    +'<td>17.6km</td>'
    +'<td>6시간</td>'
    +'<td>남망산조각공원 - 동피랑마을 - 삼도수군통제영 - 해저터널 - 해양소년단거북선캠프 - 평림생활체육공원 - 무전동 해변공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>30</td>'
    +'<td>16.3km</td>'
    +'<td>5.5시간</td>'
    +'<td>무전동 해변공원 - 향교봉 - 발암산 - 백우정사 - 원산리 바다휴게소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>31</td>'
    +'<td>16.6km</td>'
    +'<td>5시간</td>'
    +'<td>원산리 바다휴게소 - 해지개 다리 - 남산공원 - 대독누리길 - 황불암 - 고성 부포사거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>32</td>'
    +'<td>14.2km</td>'
    +'<td>5.5시간</td>'
    +'<td>고성 부포사거리 - 무선저수지 - 수태산 - 학동저수지 - 학동마을 돌담 - 하일면사무소 - 임포항</td>'
    +'</tr>'
    +'<tr>'
    +'<td>33</td>'
    +'<td>18.0km</td>'
    +'<td>5.5시간</td>'
    +'<td>임포항 - 솔섬 - 송천2구마을회관 - 용암포항 - 상족암 군립공원 - 하이면사무소</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map2,map2_marker3);
  });

  var map2_marker4 = new google.maps.Marker({
	position:map2_station4,
  icon: pinImage2,
  shadow: pinShadow2
  });
  map2_marker4.setMap(map2);

  google.maps.event.addListener(map2_marker4,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>사천-남해-하동 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #d9534f; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>34</td>'
    +'<td>10.2km</td>'
    +'<td>3.5시간</td>'
    +'<td>고성 하이면사무소 - 남일대 해수욕장 - 삼천포 신항 - 노산공원 - 삼천포 용궁시장 - 삼천포대교 사거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>35</td>'
    +'<td>12.7km</td>'
    +'<td>4.5시간</td>'
    +'<td>삼천포대교 사거리 - 각산산성 - 모충공원 - 실안방파제 - 대방교차로(삼천포대교 북단)</td>'
    +'</tr>'
    +'<tr>'
    +'<td>36</td>'
    +'<td>17.5km</td>'
    +'<td>6.5시간</td>'
    +'<td>대방교차로 - 삼천포대교 - 창선대교 - 단항 왕후박나무 - 연태산임도 - 속금산 임도 - 운대암 입구 - 창선면행정복지센터</td>'
    +'</tr>'
    +'<tr>'
    +'<td>37</td>'
    +'<td>15.4km</td>'
    +'<td>6시간</td>'
    +'<td>창선면행정복지센터 - 동대만휴게소 - 연곡마을 - 여봉산 정상 - 가인리 고사리밭길 - 공룡발자국화석지 - 세심사 - 가인마을 - 진동리 고사리밭길 - 적량마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>38</td>'
    +'<td>12.0km</td>'
    +'<td>4.5시간</td>'
    +'<td>적량마을 - 장포 - 남방봉 임도 - 보현사 - 남방봉 임도 – 추섬공원 - 삼동지족 - 지족교 - 삼동하나로마트</td>'
    +'</tr>'
    +'<tr>'
    +'<td>39</td>'
    +'<td>9.9km</td>'
    +'<td>4시간</td>'
    +'<td>삼동면소재지 - 지족해협길 - 전도마을 - 남해청소년수련원 - 동천마을 - 물건방조어부림 - 물건마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>40</td>'
    +'<td>16.2km</td>'
    +'<td>6.5시간</td>'
    +'<td>물건마을 - 독일마을 - 바람흔적미술관 - 나비생태공원 - 국립남해편백자연휴양림 - 편백나무길 - 천하마을삼거리</td>'
    +'</tr>'
    +'<tr>'
    +'<td>41</td>'
    +'<td>15.3km</td>'
    +'<td>6시간</td>'
    +'<td>천하마을 - 천하몽돌해변 - 금포마을 - 상주해변 - 대량마을 - 소량마을 - 두모마을 - 벽련마을 - 원천항</td>'
    +'</tr>'
    +'<tr>'
    +'<td>42</td>'
    +'<td>17.7km</td>'
    +'<td>7시간</td>'
    +'<td>원천마을 - 앵강다숲(남해바래길탐방안내센터) - 화계마을(길현미술관) - 용문산 임도 - 미국마을 - 두곡&월포해변 - 홍현해라우지마을 - 가천다랭이마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>43</td>'
    +'<td>14.0km</td>'
    +'<td>5.5시간</td>'
    +'<td>가천다랭이마을 - 빛담촌 - 선구몽돌해변 - 선구보건소 - 사촌해변 - 유구마을 - 바래길작은미술관(평산항)</td>'
    +'</tr>'
    +'<tr>'
    +'<td>44</td>'
    +'<td>13.9km</td>'
    +'<td>5.5시간</td>'
    +'<td>남해바래길작은미술관(평산항) - 오리마을 - 임진성 - 남구마을 - 천황산 임도 - 남해스포츠파크</td>'
    +'</tr>'
    +'<tr>'
    +'<td>45</td>'
    +'<td>12.6km</td>'
    +'<td>5시간</td>'
    +'<td>남해스포츠파크(서상) - 예계 - 상남 - 작장 - 남상 - 염해 - 유포체험마을 - 노구 - 중현하나로마트</td>'
    +'</tr>'
    +'<tr>'
    +'<td>46</td>'
    +'<td>17.6km</td>'
    +'<td>6시간</td>'
    +'<td>중현하나로마트 - 우물 - 백년고개 - 고현면 - 이순신순국공원 - 월곡 - 감암 - 노량선착장 - 남해대교 - 남해대교교차로</td>'
    +'</tr>'
    +'<tr>'
    +'<td>47</td>'
    +'<td>27.6km</td>'
    +'<td>7.5시간</td>'
    +'<td>남해대교 - 노량항 – 진정마을 – 조개섬캠핑장 – 하동포구공원 – 하동송림공원 – 섬진교</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map2,map2_marker4);
  });

  var map2_marker5 = new google.maps.Marker({
	position:map2_station5,
  icon: pinImage2,
  shadow: pinShadow2
  });
  map2_marker5.setMap(map2);

  google.maps.event.addListener(map2_marker5,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>광양-여수-순천 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #d9534f; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>48</td>'
    +'<td>13.7km</td>'
    +'<td>4시간</td>'
    +'<td>섬진교 - 섬진강 - 섬진강휴게소 - 진월초등학교</td>'
    +'</tr>'
    +'<tr>'
    +'<td>49</td>'
    +'<td>15.5km</td>'
    +'<td>4.5시간</td>'
    +'<td>광양 진월초등학교 - 윤동주유고보존가옥 - 망덕포구 - 광양제철소 - 백운그린랜드 - 중마금호해상보도 - 중동근린공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>50</td>'
    +'<td>17.6km</td>'
    +'<td>5.5시간</td>'
    +'<td>중동근린공원 - 구봉산 등산로 - 사라실예술촌 - 광양공영버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>51</td>'
    +'<td>15.0km</td>'
    +'<td>4.5시간</td>'
    +'<td>광양공영버스터미널 - 도원보건진료소 - 충무사 - 순천왜성 - 여수 율촌파출소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>52</td>'
    +'<td>14.8km</td>'
    +'<td>4.5시간</td>'
    +'<td>여수 율촌파출소 - 득실교회 - 여수공항 - 덕양시외버스정류장 - 소라초등학교</td>'
    +'</tr>'
    +'<tr>'
    +'<td>53</td>'
    +'<td>11.3km</td>'
    +'<td>3시간</td>'
    +'<td>소라초등학교 - 여천역 - 전남대 여수탬퍼스 - 여수종합버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>54</td>'
    +'<td>7.3km</td>'
    +'<td>2.5시간</td>'
    +'<td>여수종합버스터미널 - 여수엑스포 - 여수해양공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>55</td>'
    +'<td>15.6km</td>'
    +'<td>4.5시간</td>'
    +'<td>여수해양공원 - 극동항 - 히든베이호텔입구 - 선소유적 - 소호동동다리 - 여수소호요트장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>56</td>'
    +'<td>14.7km</td>'
    +'<td>4시간</td>'
    +'<td>소호요토장 - 디오션리조트 - 용주리 - 화양면사무소 - 소장리 - 원포</td>'
    +'</tr>'
    +'<tr>'
    +'<td>57</td>'
    +'<td>17.8km</td>'
    +'<td>4.5시간</td>'
    +'<td>원포버스정류장 - 고봉산등산로 - 고봉산임도 - 이목리 - 서촌마을</td>'
    +'</tr>'
    +'<tr>'
    +'<td>58</td>'
    +'<td>15.5km</td>'
    +'<td>4.5시간</td>'
    +'<td>서촌마을 - 석교 - 감도 - 소옥1제 - 여수펜션단지 - 관기방조제(가시리생태공원)</td>'
    +'</tr>'
    +'<tr>'
    +'<td>59</td>'
    +'<td>8.4km</td>'
    +'<td>2.5시간</td>'
    +'<td>소라면가사 정류장 - 복산2구마을회관 - 복산보건진료소 - 여수 궁항정류장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>60</td>'
    +'<td>15.1km</td>'
    +'<td>5시간</td>'
    +'<td>궁항마을 - 장척마을 - 봉전마을 - 가림산 해안산책로 - 와온해변</td>'
    +'</tr>'
    +'<tr>'
    +'<td>61</td>'
    +'<td>17.1km</td>'
    +'<td>6시간</td>'
    +'<td>와온해변 - 용산전망대 - 순천만 - 장산마을 - 별량화포 - 순천만 소리체험관 - 순천만 습지공원 - 순천만 제방</td>'
    +'</tr>'
    +'<tr>'
    +'<td>62</td>'
    +'<td>24.9km</td>'
    +'<td>8시간</td>'
    +'<td>별량화포 - 창산복지회관 - 거차뻘배체험장 - 구룡사 - 별량농협 구룡지소 - 벌교장양어촌체험마을 - 벌교갯벌습지보호지역 - 벌교생태공원 - 중도방죽 - 부용교</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map2,map2_marker5);
  });

  var map2_marker6 = new google.maps.Marker({
	position:map2_station6,
  icon: pinImage2,
  shadow: pinShadow2
  });
  map2_marker6.setMap(map2);

  google.maps.event.addListener(map2_marker6,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>보성-고흥 구간1</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #d9534f; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>63</td>'
    +'<td>21.7km</td>'
    +'<td>8시간</td>'
    +'<td>부용교 - 소화다리 - 채동선생가 - 벌교읍사무소 - 보성여관 - 벌교역 - 벌교숲공원 - 수차마을 - 제두마을 - 대포마을 - 죽동마을 - 옹암마을 - 망동마을 팔영농협 망주지소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>64</td>'
    +'<td>14.3km</td>'
    +'<td>4.5시간</td>'
    +'<td>팔영농협 망주지소 - 남양중학교 - 거군지 - 슬항회관 - 독대마을회관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>65</td>'
    +'<td>24.7km</td>'
    +'<td>7.5시간</td>'
    +'<td>독대마을회관 - 화덕회관 - 여호항 - 우천리 간천버스정류장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>66</td>'
    +'<td>11.2km</td>'
    +'<td>4.5시간</td>'
    +'<td>우천리 간천버스정류장 - 우주발사전망대 - 남열해돋이해수욕장 - 남열마을 입구</td>'
    +'</tr>'
    +'<tr>'
    +'<td>67</td>'
    +'<td>16.4km</td>'
    +'<td>5시간</td>'
    +'<td>남열마을 입구 - 지붕없는 미술관 - 양화경로당 - 영남 만리성 - 금사보건진료소 - 해창만캠핑장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>68</td>'
    +'<td>20.5km</td>'
    +'<td>7.5시간</td>'
    +'<td>해창만캠핑장 - 별나로마을 - 우산마을회관 - 익금마을회관 - 도화재래시장 - 도화베이스볼파크 - 도화버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>69</td>'
    +'<td>15.7km</td>'
    +'<td>5.5시간</td>'
    +'<td>도화버스터미널 -도화고등학교 -천등산 - 천등회관 - 매곡리 백석버스정류장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>70</td>'
    +'<td>13.3km</td>'
    +'<td>3.5시간</td>'
    +'<td>매곡리 백석버스정류장 - 오마간척 한센인 추모공원 - 매동마을회관 - 동두산공원 - 녹동전통시장 - 녹동버스공용정류장</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map2,map2_marker6);
  });

  var map2_marker7 = new google.maps.Marker({
	position:map2_station7,
  icon: pinImage2,
  shadow: pinShadow2
  });
  map2_marker7.setMap(map2);

  google.maps.event.addListener(map2_marker7,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>보성-고흥 구간2</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #d9534f; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>71</td>'
    +'<td>21.8km</td>'
    +'<td>7시간</td>'
    +'<td>녹동버스공용정류장 - 녹동현대병원 - 당남해변 - 용동해수욕장 - 고흥만방조제공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>72</td>'
    +'<td>14.9km</td>'
    +'<td>5시간</td>'
    +'<td>고흥만방조제공원 - 풍류해수욕장&풍류어촌체험마을 - 신흥마을회관 - 내당회관 - 대전해수욕장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>73</td>'
    +'<td>17.9km</td>'
    +'<td>6시간</td>'
    +'<td>대전해수욕장 - 용등산 - 언안들 - 금성마을 - 내로마을회관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>74</td>'
    +'<td>9.2km</td>'
    +'<td>3시간</td>'
    +'<td>내로마을회관 - 도야부녀복지회관 - 메타세콰이어길 - 남양리 남양버스정류장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>75</td>'
    +'<td>21.0km</td>'
    +'<td>7시간</td>'
    +'<td>남양리 남양버스정류장 - 중산마을 - 신촌회관 - 고흥신기거북이마을 - 신기수문동 버스정류장</td>'
    +'</tr>'
    +'<tr>'
    +'<td>76</td>'
    +'<td>16.7km</td>'
    +'<td>5.5시간</td>'
    +'<td>신기수문동 버스정류장 - 수문동 나루터 - 장선해변 - 득량만 풍광휴식센터 - 득량만 갈대군락지 생태공원 - 비봉공룡공원 - 보성비봉마리나 - 선소어촌체험장 - 득량만 바다낚시공원</td>'
    +'</tr>'
    +'<tr>'
    +'<td>77</td>'
    +'<td>12.9km</td>'
    +'<td>4시간</td>'
    +'<td>득량만 바다낚시공원 - 비봉공룡알화석지 - 객산어민회관 - 금광마을 - 율포해수욕장(율포오토캠핑장) - 율포솔밭</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map2,map2_marker7);
  });

  var map2_marker8 = new google.maps.Marker({
	position:map2_station8,
  icon: pinImage2,
  shadow: pinShadow2
  });
  map2_marker8.setMap(map2);

  google.maps.event.addListener(map2_marker8,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>장흥-강진 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #d9534f; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>78</td>'
    +'<td>18.9km</td>'
    +'<td>6시간</td>'
    +'<td>율포솔밭 - 율포해수녹차센터 - 회천수산물직판장 - 명교해수욕장 - 수문해변 - 장흥키조개마을 - 한승원 문학 산책로 - 장흥 원등마을회관</td>'
    +'</tr>'
    +'<tr>'
    +'<td>79</td>'
    +'<td>26.2km</td>'
    +'<td>8.5시간</td>'
    +'<td>원등마을회관 - 상발마을 - 고마방조제 - 삼산방조제 - 정남진 - 회진시외버스터미널</td>'
    +'</tr>'
    +'<tr>'
    +'<td>80</td>'
    +'<td>20.0km</td>'
    +'<td>6.5시간</td>'
    +'<td>회진시외버스터미널 - 대던천 - 신리 - 상흥천 - 신마항 - 마량항</td>'
    +'</tr>'
    +'<tr>'
    +'<td>81</td>'
    +'<td>16.0km</td>'
    +'<td>4.5시간</td>'
    +'<td>마량항 - 백사어촌체험마을 - 고바우전망대 - 하저어촌체험마을 - 가우도 입구</td>'
    +'</tr>'
    +'<tr>'
    +'<td>82</td>'
    +'<td>16.3km</td>'
    +'<td>5.5시간</td>'
    +'<td>가우도 입구 - 봉황마을 - 보련마을 - 사부마을 - 구로마을 - 구목리교 서쪽</td>'
    +'</tr>'
    +'<tr>'
    +'<td>83</td>'
    +'<td>18.0km</td>'
    +'<td>5.5시간</td>'
    +'<td>구목리교 서쪽 - 강진만 생태공원 - 강진만 철새도래지 - 백련사 - 동백림 - 다산초당 - 석문공원 - 도암농협</td>'
    +'</tr>'
    +'<tr>'
    +'<td>84</td>'
    +'<td>13.7km</td>'
    +'<td>4.5시간</td>'
    +'<td>도암농협 - 신기마을 - 도암배수갑문 - 사내방조제</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map2,map2_marker8);
  });

  var map2_marker9 = new google.maps.Marker({
	position:map2_station9,
  icon: pinImage2,
  shadow: pinShadow2
  });
  map2_marker9.setMap(map2);

  google.maps.event.addListener(map2_marker9,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>완도-해남 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #d9534f; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>85</td>'
    +'<td>18.2km</td>'
    +'<td>6시간</td>'
    +'<td>사내방조제 북쪽 교차로 - 내동리밭섬고분군 - 북평초등학교 - 해남 남창정류소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>86</td>'
    +'<td>24.6km</td>'
    +'<td>7.5시간</td>'
    +'<td>해남 남창정류소 - 달도 - 완도대교(하행) - 대창리 - 완도항 해조류센터</td>'
    +'</tr>'
    +'<tr>'
    +'<td>87</td>'
    +'<td>18.0km</td>'
    +'<td>6시간</td>'
    +'<td>완도항 해조류센터 - 완도타워 - 부꾸지 - 구계동 - 화홍초등학교(화홍리)</td>'
    +'</tr>'
    +'<tr>'
    +'<td>88</td>'
    +'<td>15.8km</td>'
    +'<td>5시간</td>'
    +'<td>화홍초등학교 - 임도 - 등산로 - 상황봉 - 완도수목원 - 군외면사무소 - 원동대교</td>'
    +'</tr>'
    +'<tr>'
    +'<td>89</td>'
    +'<td>13.8km</td>'
    +'<td>4시간</td>'
    +'<td>원동버스터미널 - 완도대교 - 달도테마공원 - 남창시장 - 남창 해월루지 - 미황사 천왕문</td>'
    +'</tr>'
    +'<tr>'
    +'<td>90</td>'
    +'<td>13.9km</td>'
    +'<td>4.5시간</td>'
    +'<td>미황사 천왕문-미황사 숲길-도솔암-땅끝전망대-땅끝탑</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map2,map2_marker9);
  });

  var map2_marker10 = new google.maps.Marker({
	position:map2_station10,
  icon: pinImage2,
  shadow: pinShadow2
  });
  map2_marker10.setMap(map2);

  google.maps.event.addListener(map2_marker10,'click',function() {
    var contentstring='<div style="text-align:center;">'+'<h3>완도-해남 구간</h3>'+'<table style="border:1px solid; border-collapse: collapse;">'
    +'<tr style="background-color: #d9534f; color: white; border:1px solid;">'
    +'<th>일차</th>'
    +'<th>거리</th>'
    +'<th>예상 소요시간</th>'
    +'<th>경로</th>'
    +'</tr>'
    +'<tr>'
    +'<td>85</td>'
    +'<td>18.2km</td>'
    +'<td>6시간</td>'
    +'<td>사내방조제 북쪽 교차로 - 내동리밭섬고분군 - 북평초등학교 - 해남 남창정류소</td>'
    +'</tr>'
    +'<tr>'
    +'<td>86</td>'
    +'<td>24.6km</td>'
    +'<td>7.5시간</td>'
    +'<td>해남 남창정류소 - 달도 - 완도대교(하행) - 대창리 - 완도항 해조류센터</td>'
    +'</tr>'
    +'<tr>'
    +'<td>87</td>'
    +'<td>18.0km</td>'
    +'<td>6시간</td>'
    +'<td>완도항 해조류센터 - 완도타워 - 부꾸지 - 구계동 - 화홍초등학교(화홍리)</td>'
    +'</tr>'
    +'<tr>'
    +'<td>88</td>'
    +'<td>15.8km</td>'
    +'<td>5시간</td>'
    +'<td>화홍초등학교 - 임도 - 등산로 - 상황봉 - 완도수목원 - 군외면사무소 - 원동대교</td>'
    +'</tr>'
    +'<tr>'
    +'<td>89</td>'
    +'<td>13.8km</td>'
    +'<td>4시간</td>'
    +'<td>원동버스터미널 - 완도대교 - 달도테마공원 - 남창시장 - 남창 해월루지 - 미황사 천왕문</td>'
    +'</tr>'
    +'<tr>'
    +'<td>90</td>'
    +'<td>13.9km</td>'
    +'<td>4.5시간</td>'
    +'<td>미황사 천왕문-미황사 숲길-도솔암-땅끝전망대-땅끝탑</td>'
    +'</tr>'
    +'</table>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
    content: contentstring,
    });
    infowindow.open(map2,map2_marker10);
  });
}
