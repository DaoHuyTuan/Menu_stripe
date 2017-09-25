//event hover li-product
$(".li-product").hover(function(){
    $(".dropDownMenu").show();
    $(".arrow").show();
    $(".dropDownMenu").attr("class","dropDownMenu");//reset all class equal to dropDownMenu
    $(".dropDownMenu").addClass("product");
},function(){
    $(".dropDownMenu").hide();
});
//event hover li-developer
$(".li-developer").hover(function(){
    $(".dropDownMenu").show();
    $(".arrow").show();
    $(".dropDownMenu").attr("class","dropDownMenu");//reset all class equal to dropDownMenu
    $(".dropDownMenu").addClass("developer");
},function(){
    $(".dropDownMenu").hide();
});
//event hove li-company
$(".li-company").hover(function(){
    $(".dropDownMenu").show();
    $(".arrow").show();
    $(".dropDownMenu").attr("class","dropDownMenu");//reset all class equal to dropDownMenu
    $(".dropDownMenu").addClass("company");
},function(){
    $(".dropDownMenu").hide();
});
