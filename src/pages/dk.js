/** 체크박스 전체 선택 && 전체 삭제 */
$(document).ready(function () {
  $("#checkall").click(function () {
    if ($("#checkall").prop("checked")) {
      $("input[name=chk]").prop("checked", true);
    } else {
      $("input[name=chk]").prop("checked", false);
    }
  });
});

//검색
function fnSearch() {
  document.searchForm.submit();
}

function fnSearchPage(pageIndex) {
  document.searchForm.pageIndex.value = pageIndex;
  document.searchForm.submit();
}

//상세화면 이동
function fnDetail(mlsvId) {
  $.ajax({
    type: "POST",
    url: "/dggb/module/mlsv/selectMlsvDetailPopup.do",
    async: true,
    data: "mlsvId=" + mlsvId,
    success: function (data) {
      $("#divLayerMlsvPopup").html(data);
      $("#divLayerMlsvPopup").show();
      $(".layer_popup_innerbox").attr("tabindex", 0).show().focus();
    },
    error: function (request, status, error) {
      alert(
        "code : " + request.status + "\r\nmessage : " + request.reponseText
      );
    },
    dateType: "html",
  });

  /*
	var url = "/dggb/module/mlsv/selectMlsvDetailPopup.do";
	var data = "?mlsvId="+mlsvId;
	
	window.open(url+data, "급식관리", "width=580, height=600, toolbar=no, menubar=no, scrollbars=no, resizable=no" );
	*/
}

//리스트 화면
function fnTypeSearch(viewType) {
  document.searchForm.viewType.value = viewType;
  document.searchForm.submit();
}

function fnDateSearch(val) {
  var date = new Date($("#srhMlsvYear").val(), $("#srhMlsvMonth").val(), "05");

  if (val == "next") {
    date.setMonth(date.getMonth() + 1); // +1은 한달을 추가
  } else if (val == "pre") {
    date.setMonth(date.getMonth() - 1); // -1은 한달을 추가
  } else {
    alert("데이터에 문제가 있습니다.");
    return;
  }

  var year = date.getFullYear();
  var month = date.getMonth();

  if (month == 0) {
    year = year - 1;
    month = 12;
  }

  if (year < 2016) {
    alert("2016년 이전은 조회할수 없습니다.");
    return;
  }

  if (month < 10) month = "0" + month; // 월을 2자리로 수정
  if (date < 10) date = "0" + date; // 일을 2자리로 수정

  $("#srhMlsvYear").val(year);
  $("#srhMlsvMonth").val(month);

  fnSearch();
}

function fnLayerPopupClose() {
  $("#divLayerMlsvPopup").hide();
  $("#divLayerMlsvPopup").empty();
}

/** 2016.05.23 기능추가. 체크박스 삭제 && 전체삭제 */
function fnDeleteCheckMlsv(paramCheck) {
  var checkCnt = 0;
  var checkResult = new Array();

  if (paramCheck == "calendar") {
    checkResult.push("1409332");
    checkCnt++;

    checkResult.push("1409333");
    checkCnt++;

    checkResult.push("1409334");
    checkCnt++;

    checkResult.push("1409335");
    checkCnt++;

    checkResult.push("1409336");
    checkCnt++;

    checkResult.push("1409337");
    checkCnt++;

    checkResult.push("1409338");
    checkCnt++;

    checkResult.push("1409339");
    checkCnt++;

    checkResult.push("1409340");
    checkCnt++;

    checkResult.push("1409341");
    checkCnt++;

    checkResult.push("1409342");
    checkCnt++;

    checkResult.push("1409343");
    checkCnt++;

    checkResult.push("1409344");
    checkCnt++;

    checkResult.push("1409345");
    checkCnt++;

    checkResult.push("1409346");
    checkCnt++;

    checkResult.push("1409347");
    checkCnt++;

    checkResult.push("1409348");
    checkCnt++;

    checkResult.push("1409349");
    checkCnt++;

    checkResult.push("1409350");
    checkCnt++;

    checkResult.push("1409351");
    checkCnt++;

    checkResult.push("1409352");
    checkCnt++;

    checkResult.push("1409353");
    checkCnt++;
  } else {
    for (var i = 0; i < document.getElementsByName("chk").length; i++) {
      if (document.getElementsByName("chk")[i].checked == true) {
        checkResult.push(document.getElementsByName("chk")[i].value);
        checkCnt++;
      }
    }
  }

  if (checkCnt < 1) {
    alert("선택된 데이터가 없습니다.");
    return;
  }

  var result = confirm("선택한 데이터를 삭제하시겠습니까?");
  if (result == true) {
    $("#arrMlsvId").val(checkResult);

    $.ajax({
      type: "POST",
      url: "dggb/mngr/cntntsMngr/adiCntnts/mlsvMngr/deleteCheckMlsv.do",
      async: true,
      data: $("#searchForm").serialize(),
      success: function (result) {
        $(result)
          .find("value")
          .each(function () {
            if ($(this).text() > 0) {
              alert("삭제되었습니다");
              fnSearch();
            } else {
              alert("오류가 발생하였습니다. 잠시 후 다시시도해주세요.");
            }
          });
      },
      error: function (request, status, error) {
        alert(
          "code : " + request.status + "\r\nmessage : " + request.reponseText
        );
      },
      dateType: "xml",
    });
  } else {
    return;
  }
}
