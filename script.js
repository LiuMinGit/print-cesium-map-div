$(function()
{
    var viewer = document.getElementById("cesiumContainer");
    function print_voucher()
    {   
        var win = window.open();
        win.document.write("<br><img src='"+viewer.toDataURL()+"'/>");
        win.print();
        win.location.reload();
    }
    $("#printVoucher").click(function(){ print_voucher(); });
});

