$(document).ready(function(){
  $("#pCalcula").click(function() {

    var pPrice1 = $('#pTeam1').val();
    var pPrice2 = $('#pTeam2').val();
    var pPrice3 = $('#pTeam3').val();
    var pPrice4 = $('#pTeam4').val();
    var pPrice5 = $('#pTeam5').val();
    var pPrice6 = $('#pTeam6').val();
    var pPrice7 = $('#pTeam7').val();
    var pPrice8 = $('#pTeam8').val();
    var pBet    = $('#pApuesta').val();

    if (pValida(pPrice1) && pValida(pPrice2) && pValida(pPrice3) && pValida(pPrice4) && pValida(pPrice5) && pValida(pPrice6) && pValida(pPrice7) && pValida(pPrice8))
    {
      var PF1 = pFactor(pPrice1);
      var PF2 = pFactor(pPrice2);
      var PF3 = pFactor(pPrice3);
      var PF4 = pFactor(pPrice4);
      var PF5 = pFactor(pPrice5);
      var PF6 = pFactor(pPrice6);
      var PF7 = pFactor(pPrice7);
      var PF8 = pFactor(pPrice8);
      var BetUnits = parseFloat(pBet);
      var pPayout = parseFloat(pBet);

      pPayout = ((PF1 * PF2 * PF3 * PF4 * PF5 * PF6 * PF7 * PF8) - 1) * BetUnits;
      var pPayoutTxt = numeral(pPayout).format('$ 0,0.00');
      $("#pGana").text(pPayoutTxt);
    }
    else
    {
      $("#pGana").text("$ 0.00");
    }
  }); 

  $("#pReset").click(function() {
    pLimpia();
  }); 

});

function pFactor(pTeam) {
      var TP = parseFloat(pTeam);
      if (TP < 0)
      { 
        PF = (-TP + 100) / -TP;
      }
      else
      {
        if (TP > 0) 
        {
          PF = (TP + 100) / 100;
        }
        else
        {
          PF = 1;
        }
      }
      return PF
}

function pLimpia() {
    $('input').val('0');
    $('#pApuesta').val('200');
    $( "#pGana" ).text("$ 0.00");
}

function pValida(momio)
{
  flag = 0;
  var str = momio;
  if(!str)
  {
    str = 0;
  }
  for (i = 0; i < str.length; i++)
  {
    var chr = str.substring(i, i+1);
    if (((chr < "0") || (chr > "9")) && (chr != ".") && (chr != "-") && (chr != "+"))
    flag = 1;
  }
  if ((flag == 1) || (str.length == 0))
  {
    alert("Ha escrito un caracter invalido.\nEscriba solo valores numericos.");
    return false;
  }
  else
  {
    return true;
  }
}