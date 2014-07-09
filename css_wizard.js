// JavaScript source code
cssWizard = {
    classLookUp: "__",
    move: false,
    mouse: { x: 0, y: 0 },
    oldSearch: "__",
    log: "CSS Wizard Operation Log",

    node: function (n) {
        return document.createElement(n);
    },
    createInput: function (id, defaultValue, type) {
        var newInput = document.createElement("input");
        newInput.id = id;
        $(newInput).attr("type", type);
        $(newInput).css("display", "block");
        $(newInput).attr("def-value", defaultValue);
        if (type == "textbox") {
            return false;
        }
        $(newInput).val(defaultValue);
        $(newInput).focusin(function () {
            if ($(newInput).val() == $(newInput).attr("def-value")) {
                $(newInput).val("");
            }
        });
        $(newInput).focusout(function () {
            if ($(newInput).val() == "") {
                $(newInput).val(defaultValue);
            }
        });
        return newInput;
    },
    getInfoAboutElement: function(element){
        info = "[----ELEMENT----]\n";
        if (element.attr("id")) {
            info += "Element ID: " + element.attr("id") + "\n";
        }
        if (element.attr("class")) {
            info += "Element Class: " + element.attr("class") + "\n";
        }
        if (element.html()) {
            info += "Element HTML: " + element.html() + "\n";
        }
        if (element.val()) {
            info += "Element Value: " + element.val() + "\n";
        }
        return info;
    },
    setUpClassLookUp: function () {

        if ($("#__node_or_class__").html() == "class") {
            newLogEntry = "\n{\n";
            $("." + cssWizard.classLookUp).click(function () {
                var marginL = parseInt($("#__margin_left__").val());
                var marginR = parseInt($("#__margin_left__").val());
                var marginT = parseInt($("#__margin_top__").val());
                var marginB = parseInt($("#__margin_bottom__").val());
                var backgroundColor = $("#__background_color__").val();

                var paddingBottom = parseInt($("#__padding_bottom__").val());
                var paddingTop = parseInt($("#__padding_top__").val());
                var paddingLeft = parseInt($("#__padding_left__").val());
                var paddingRight = parseInt($("#__padding_right__").val());

                if (marginL || marginL == 0) {
                    $(this).css("margin-left", marginL);
                    newLogEntry += "Changed Margin Left: " + marginL + "\n";
                }
                if (marginR || marginR == 0) {
                    $(this).css("margin-right", marginR);
                    newLogEntry += "Changed Margin Right: " + marginR + "\n";
                }
                if (marginT || marginT == 0) {
                    $(this).css("margin-top", marginT);
                    newLogEntry += "Changed Margin Top: " + marginT + "\n";
                }
                if (marginB || marginB == 0) {
                    $(this).css("margin-bottom", marginB);
                    newLogEntry += "Changed Margin Bottom: " + marginB + "\n";
                }
                if (backgroundColor && $('#__use_background_color__').html() == "use") {
                    $(this).css("background-color", backgroundColor);
                    newLogEntry += "Changed BackgroundColor: " + backgroundColor + "\n";
                }

                if (paddingBottom || paddingBottom == 0) {
                    $(this).css("padding-bottom", paddingBottom);
                    newLogEntry += "Changed Padding Bottom: " + paddingBottom + "\n";
                }
                if (paddingTop || paddingTop == 0) {
                    $(this).css("padding-top", paddingTop);
                    newLogEntry += "Changed Padding Top: " + paddingTop + "\n";
                }
                if (paddingLeft || paddingLeft == 0) {
                    $(this).css("padding-left", paddingLeft);
                    newLogEntry += "Changed Padding Left: " + paddingLeft + "\n";
                }
                if (paddingRight || paddingRight == 0) {
                    $(this).css("padding-right", paddingRight);
                    newLogEntry += "Changed Padding Right: " + paddingRight + "\n";
                }
                newLogEntry += cssWizard.getInfoAboutElement($(this));
                newLogEntry += "\n}\n"
                cssWizard.log += newLogEntry;

            });
            $("." + cssWizard.classLookUp).hover(function () {
                var PosX = $(this).offset().left;
                var PosY = $(this).offset().top;
                var Pos = "(" + PosX + "," + PosY + ")";
                $("#__position__").val(Pos);
            });
        }
        else {
            cssWizard.oldSearch = cssWizard.classLookUp;
            $(cssWizard.classLookUp).click(function () {
                var marginL = parseInt($("#__margin_left__").val());
                var marginR = parseInt($("#__margin_left__").val());
                var marginT = parseInt($("#__margin_top__").val());
                var marginB = parseInt($("#__margin_bottom__").val());
                var backgroundColor = $("#__background_color__").val();

                var paddingBottom = parseInt($("#__padding_bottom__").val());
                var paddingTop = parseInt($("#__padding_top__").val());
                var paddingLeft = parseInt($("#__padding_left__").val());
                var paddingRight = parseInt($("#__padding_right__").val());

                if (marginL || marginL == 0) {
                    $(this).css("margin-left", marginL);
                    newLogEntry += "Changed Margin Left: " + marginL + "\n";
                }
                if (marginR || marginR == 0) {
                    $(this).css("margin-right", marginR);
                    newLogEntry += "Changed Margin Right: " + marginR + "\n";
                }
                if (marginT || marginT == 0) {
                    $(this).css("margin-top", marginT);
                    newLogEntry += "Changed Margin Top: " + marginT + "\n";
                }
                if (marginB || marginB == 0) {
                    $(this).css("margin-bottom", marginB);
                    newLogEntry += "Changed Margin Bottom: " + marginB + "\n";
                }
                if (backgroundColor && $('#__use_background_color__').html() == "use") {
                    $(this).css("background-color", backgroundColor);
                    newLogEntry += "Changed BackgroundColor: " + backgroundColor + "\n";
                }

                if (paddingBottom || paddingBottom == 0) {
                    $(this).css("padding-bottom", paddingBottom);
                    newLogEntry += "Changed Padding Bottom: " + paddingBottom + "\n";
                }
                if (paddingTop || paddingTop == 0) {
                    $(this).css("padding-top", paddingTop);
                    newLogEntry += "Changed Padding Top: " + paddingTop + "\n";
                }
                if (paddingLeft || paddingLeft == 0) {
                    $(this).css("padding-left", paddingLeft);
                    newLogEntry += "Changed Padding Left: " + paddingLeft + "\n";
                }
                if (paddingRight || paddingRight == 0) {
                    $(this).css("padding-right", paddingRight);
                    newLogEntry += "Changed Padding Right: " + paddingRight + "\n";
                }
                newLogEntry += cssWizard.getInfoAboutElement($(this));
                newLogEntry += "\n}\n"
                cssWizard.log += newLogEntry;
            });
            $(cssWizard.classLookUp).hover(function () {
                var PosX = $(this).offset().left;
                var PosY = $(this).offset().top;
                var Pos = "(" + PosX + "," + PosY + ")";
                $("#__position__").val(Pos);
            });
        }
    },
    applyAllStyles: function (element) {


    },

    init: function () {
        document.onkeydown = function () {
            cssWizard.classLookUp = $("#__class_look_up__").val();
            console.log($("#__class_look_up__").val());
            cssWizard.setUpClassLookUp();
        }
        var mainContainer = document.createElement("div");
        var moveDiv = document.createElement("div");
        var paddingDiv = document.createElement("div");
        var marginDiv = document.createElement("div");

        $(paddingDiv).attr("id", "__padding_div__");
        $(marginDiv).attr("id", "__margin_div__");

        moveDiv.style.width = 100;
        moveDiv.style.height = 10;
        moveDiv.style.backgroundColor = "blue";

        var shouldUseBackgroundColor = document.createElement("p");
        shouldUseBackgroundColor.id = "__use_background_color__";
        $(shouldUseBackgroundColor).css("text-decoration", "underline");
        shouldUseBackgroundColor.innerHTML = " don't use";
        $(shouldUseBackgroundColor).click(function () {
            if ($(this).html() == "use") {
                $(this).html("don't use");
            } else {
                $(this).html("use");
            }
        });
        var nodeOrClass = document.createElement("p");
        nodeOrClass.id = "__node_or_class__";
        $(nodeOrClass).css("text-decoration", "underline");
        nodeOrClass.innerHTML = "class";
        $(nodeOrClass).click(function () {
            if ($(this).html() == "node") {
                $(this).html("class");
            } else {
                $(this).html("node");
            }
        });
        $(shouldUseBackgroundColor).css("cursor", "pointer");
        $(nodeOrClass).css("cursor", "pointer");

        $(mainContainer).css("position", "absolute");
        $(mainContainer).css("padding", 10);
        $(mainContainer).css("box-shadow", "2px 2px 5px #888888");
        $(mainContainer).css("left", 100);
        $(mainContainer).css("top", 100);
        $(mainContainer).css("background-color", "#004C1A");
        $(mainContainer).attr("id", "__main_container__")

        var title = document.createElement("p");
        $(title).html("CSS Wizard");
        mainContainer.appendChild(moveDiv);
        mainContainer.appendChild(title);

        var setClassButton = document.createElement("button");
        $(setClassButton).html("Set search");
        $(setClassButton).click(function () {
            cssWizard.classLookUp = $("#__class_look_up__").val();
            console.log($("#__class_look_up__").val());
            cssWizard.setUpClassLookUp();
        });
        var getLogButton = document.createElement("button");
        $(getLogButton).html("Get Log");
        $(getLogButton).click(function () {
            alert(cssWizard.log);
        });


        mainContainer.appendChild(setClassButton);
        mainContainer.appendChild(getLogButton);
        mainContainer.appendChild(nodeOrClass);

        var classLookUpInput = cssWizard.createInput("__class_look_up__", "search (class or node)", "text");

        var marginRightInput = cssWizard.createInput("__margin_right__", "Margin Right", "text");
        var marginLeftInput = cssWizard.createInput("__margin_left__", "Margin Left", "text");
        var marginTopInput = cssWizard.createInput("__margin_top__", "Margin Top", "text");
        var marginBottomInput = cssWizard.createInput("__margin_bottom__", "Margin Bottom", "text");
        var backgroundColorInput = cssWizard.createInput("__background_color__", "#000000", "color");


        var paddingTopInput = cssWizard.createInput("__padding_top__", "Padding Top", "text");
        var paddingBottomInput = cssWizard.createInput("__padding_bottom__", "Padding Bottom", "text");
        var paddingRightInput = cssWizard.createInput("__padding_right__", "Padding Right", "text");
        var paddingLeftInput = cssWizard.createInput("__padding_left__", "Padding Left", "text");

        var marginHide = document.createElement("p");
        $(marginHide).css("cursor", "pointer");
        $(marginHide).attr("status", "active")
        $(marginHide).html("Margins");
        $(marginHide).css("text-decoration", "underline");
        $(marginHide).click(function () {
            if ($(this).attr("status") == "inactive") {
                h = $("#__margin_div__").css("height");
                $("#__margin_div__").animate({
                    height: "0px"
                }, 600, function () { $("#__margin_div__").hide(); $(marginHide).attr("status", "active"); $(marginHide).attr("h", h) });
            }
            else {
                $("#__margin_div__").show();
                height = $(marginHide).attr("h");
                $("#__margin_div__").animate({
                    height: height
                }, 600, function () { $(marginHide).attr("status", "inactive"); });
            }
        });

        var paddingHide = document.createElement("p");
        $(paddingHide).css("cursor", "pointer");
        $(paddingHide).attr("status", "active")
        $(paddingHide).html("Padding");
        $(paddingHide).css("text-decoration", "underline");
        $(paddingHide).click(function () {
            if ($(this).attr("status") == "inactive") {
                h = $("#__padding_div__").css("height");
                $("#__padding_div__").animate({
                    height: "0px"
                }, 600, function () { $("#__padding_div__").hide(); $(paddingHide).attr("status", "active"); $(paddingHide).attr("h", h) });
            }
            else {
                $("#__padding_div__").show();
                height = $(paddingHide).attr("h");
                $("#__padding_div__").animate({
                    height: height
                }, 600, function () { $(paddingHide).attr("status", "inactive"); });
            }
        });
        paddingDiv.appendChild(paddingRightInput);
        paddingDiv.appendChild(cssWizard.node("br"));
        paddingDiv.appendChild(paddingLeftInput);
        paddingDiv.appendChild(cssWizard.node("br"));
        paddingDiv.appendChild(paddingTopInput);
        paddingDiv.appendChild(cssWizard.node("br"));
        paddingDiv.appendChild(paddingBottomInput);

        marginDiv.appendChild(marginRightInput);
        marginDiv.appendChild(cssWizard.node("br"));
        marginDiv.appendChild(marginLeftInput);
        marginDiv.appendChild(cssWizard.node("br"));
        marginDiv.appendChild(marginTopInput);
        marginDiv.appendChild(cssWizard.node("br"));
        marginDiv.appendChild(marginBottomInput);


        $('#__use_background_color__').click(function () {
            $(this).toggle(this.checked);
        });

        var positionOutput = cssWizard.createInput("__position__", "element position", "text");

        mainContainer.appendChild(classLookUpInput);

        mainContainer.appendChild(marginHide);
        mainContainer.appendChild(marginDiv);

        mainContainer.appendChild(paddingHide);
        mainContainer.appendChild(paddingDiv);

        mainContainer.appendChild(cssWizard.node("br"));
        mainContainer.appendChild(backgroundColorInput);
        mainContainer.appendChild(shouldUseBackgroundColor);
        mainContainer.appendChild(cssWizard.node("br"));
        
        mainContainer.appendChild(positionOutput);

        $(document).mousemove(function (event) {
            cssWizard.mouse.x = event.pageX;
            cssWizard.mouse.y = event.pageY;
            if (cssWizard.move) {
                $("#__main_container__").css("left", cssWizard.mouse.x);
                $("#__main_container__").css("top", cssWizard.mouse.y);
            }
        });

        $(moveDiv).mousedown(function () {
            cssWizard.move = true;
        });
        $(moveDiv).mouseup(function () {
            cssWizard.move = false;
        });
        $(mainContainer).css("color", "white");
        $(paddingDiv).hide();
        $(marginDiv).hide();


        document.body.appendChild(mainContainer);
        var timeoutId;
        $(document).scroll(function () {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            timeoutId = setTimeout(function () {
                newPos = $(document).scrollTop();
                $("#__main_container__").animate({
                    top: newPos + 50
                }, 600);
            }, 100);

        });
    }
}
cssWizard.init();