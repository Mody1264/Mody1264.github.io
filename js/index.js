function hello() {
    var name = $("#name").val()
    var age = $("#age").val()
    var rumor = "";
    if ($("#peaceislie").prop("checked")) {
        rumor += "" + $("#peaceislie").val();
        if ($("#peaceislie1").prop("checked")) {
            rumor += "" + $("#peaceislie1").val();
            alert("Hello," + age + "歲的" + name + "你好 " + rumor)
            $("#name").val()
            $("#age").val()
        }
    }
}
$("#buttonid").on("click", hello)
