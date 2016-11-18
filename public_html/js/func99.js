function fuc99(){
      var valA = prompt("AXB乘法表，請輸入A:");
      var valB = prompt("AXB乘法表，請輸入B:");
      document.getElementById("table99").innerHTML = "";
      var result = "";
      result += '<table width="100%" height="100%" border="1">';
      if(valA != null && valB != null){
        result += '<tr><td bgcolor="#00FFFF"> </td>';
        for(i=1 ; i <= valB ; i++){
          result += '<td bgcolor="#00FFFF">'+i+'</td>'
        }
        result += '</tr>';
      }
      for(i=1 ; i <= valA ; i++){
        result += '<tr><td bgcolor="#00FFFF">'+i+'</td>';
        for(j=1 ; j<=valB ; j++){
          result += '<td>'+(j*i)+'</td>';
        }
        result += '</tr>'
      }
      result += '</table>'
      document.getElementById("table99").innerHTML = result;
      document.getElementById("tittle").innerHTML = valA+"X"+valB+"乘法表";
}