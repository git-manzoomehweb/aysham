//<!----------------------------START JS GET TODAY DATE ------------------------------>
var currentTime = new Date()
var gregorian_month = currentTime.getMonth() + 1
var gregorian_day = currentTime.getDate()
var gregorian_year = currentTime.getFullYear()
var persian_today = persiandate(parseInt(gregorian_year), parseInt(gregorian_month), parseInt(gregorian_day))
$(".persian_today").val(persian_today)
function persiandate(year, month, day) {
g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

if (year > 1600) {
    persian_year = 979;
    year -= 1600;
} else {
    persian_year = 0;
    year -= 621;
}

new_year = (month > 2) ? (year + 1) : year;


days = (365 * year) + (parseInt((new_year + 3) / 4)) - (parseInt((new_year + 99) / 100)) + (parseInt((new_year + 399) / 400)) - 80 + day + g_d_m[month - 1];

persian_year += 33 * (parseInt(days / 12053));
days %= 12053;

persian_year += 4 * (parseInt(days / 1461));
days %= 1461;

if (days > 365) {
    persian_year += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
}

persian_month = (days < 186) ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
persian_day = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));

if (persian_month < 10)
    persian_month = "0" + persian_month

if (persian_day < 10)
    persian_day = "0" + persian_day

return persian_year + "-" + persian_month + "-" + persian_day
}
//<!----------------------------END JS GET TODAY DATE ------------------------------>
//<!----------------------------START JS SEARCHBOX ------------------------------>
$(".plus-minus").on("click", function () {
var button = $(this);
var oldVal = parseInt(button.closest(".item-CountPassenger").find('input').val());
var newVal = (button.text() == "+") ? oldVal + 1 : (oldVal > 0) ? oldVal - 1 : 0;
if (newVal >= 10) return;
if (newVal < 1) return;
button.closest(".item-CountPassenger").find('input').val(newVal);
button.closest("form").find('.count-adult .count').text(newVal)
});
$(".plus-minus-ch").on("click", function () {
var button = $(this);
var oldVal = parseInt(button.closest(".item-CountPassenger").find('input').val());
var newVal = (button.text() == "+") ? oldVal + 1 : (oldVal > 0) ? oldVal - 1 : 0;
if (newVal >= 5) return;
button.closest(".item-CountPassenger").find('input').val(newVal);
button.closest(".item-CountPassenger").find('.child').val(newVal);
button.closest("form").find('.count-child .count').text(newVal)
if (oldVal < newVal) {
    button.closest(".item-CountPassenger").find('.section-select-age').append(createChildDropdown(newVal));
} else if (oldVal > newVal) {
    destroyChildDropdown(button.closest(".item-CountPassenger").find('.section-select-age'), newVal);
}
});
var createChildDropdown = function (i) {
var $childDropdown = $('<div />', {
    'class': 'createChildDropdown select-arrow p-relative float-right'
});
$childDropdown.append($('<label />', {
    'for': 'childDropdown-' + i
}).text('سن کودک ' + i));
$childDropdown.append($('<select />'));
var options = ['تا 1 سال', '1 تا 2  ', '2 تا 3 ', '3 تا 4  ', '4 تا 5 ',
    '5 تا 6 ', '6 تا 7 ', '7 تا 8 ', '8 تا 9 ', '9 تا 10 ',
    '10 تا 11 ', '11 تا 12 '
];
options.forEach(function (option, index) {
    $childDropdown.find('select').append($('<option />').text(option).attr(
        'value', index + 1));
});
return $childDropdown;
};
var destroyChildDropdown = function ($el, i) {
$el.find('div.createChildDropdown').get(i).remove();
};
$(".submit-form-tour").click(function () {
var childcountandage = $(this).closest("form").find(".childcountandage").val();
if (childcountandage == "0,") {
    $(this).closest("form").find(".childcountandage").val(0)
}
$(this).closest("form").find(".contentRoom").each(function () {
    var childCount = $(this).find(".child").val();
    var childAge = "";
    $(this).find(".createChildDropdown select").each(function () {
        childAge = childAge + ',' + $(this).val();
    });
    $(this).find(".childcountandage").val(childCount + childAge);
});
});
function add_room(element) {
$(element).closest("form").find('.count-child .count').text('0')
var sumAdult = 0;
var ad = 0;
var oldVal = $(element).closest("form").find('.count-room .count').text();
var newVal = parseInt(oldVal) + 1
if (newVal >= 5) return;
$(element).closest("form").find('.count-room .count').text(newVal)
$(element).closest("form").find(".ShowRow").empty()
for (i = 1; i <= newVal; i++) {
    if (i == newVal) {
        $(element).closest("form").find(".ShowRow").append(
            '<div class="contentRoom"><div class="RoomRow color_1">اتاق ' + i +
            ' <span class="delete-room float-left cursor-pointer" onclick="delete_room(this,' + i + ')">حذف</span></div><div class="item-CountPassenger"><div class="first-part-CountPassenger width_40 float-right">بزرگسال (+12)</div><div class="second-part-CountPassenger width_60 float-left"><div class="passenger-button float-right plus-minus  text-left"><span class="plus-btn width_50 font_14 text-center">+</span></div><div class="passenger-button float-right text-center"><input type="text"  name="_root.rooms__' + i + '.adultcount" class="adult width_90 text-center font_13" maxlength="4000" readonly="" value="1"></div><div class="passenger-button float-right plus-minus text-right"><span class="minus-btn width_50 font_14 text-center">-</span></div></div><div class="clr"></div></div><div class="item-CountPassenger"><div class="first-part-CountPassenger width_40 float-right">کودک (-12)</div><div class="second-part-CountPassenger width_60 float-left"><div class="passenger-button float-right plus-minus-ch text-left" data-type="1"><span class="plus-btn width_50 font_14 text-center">+</span></div><div class="passenger-button float-right text-center"><input type="text"  class="child width_90 text-center font_13" maxlength="4000" readonly="" value="0"></div><div class="passenger-button float-right plus-minus-ch text-right" data-type="1"><span class="minus-btn width_50 font_14 text-center">-</span></div></div><input type="hidden" value="0" class="childcountandage" name="_root.rooms__' + i + '.childcountandage"><div class="clr"></div><div class="section-select-age"></div><div class="clr"></div></div></div>')
    } else {
        $(element).closest("form").find(".ShowRow").append(
            '<div class="contentRoom"><div class="RoomRow color_1">اتاق ' + i +
            ' </div><div class="item-CountPassenger"><div class="first-part-CountPassenger width_40 float-right">بزرگسال (+12)</div><div class="second-part-CountPassenger width_60 float-left"><div class="passenger-button float-right plus-minus  text-left"><span class="plus-btn width_50 font_14 text-center">+</span></div><div class="passenger-button float-right text-center"><input type="text"  name="_root.rooms__' + i + '.adultcount" class="adult width_90 text-center font_13" maxlength="4000" readonly="" value="1"></div><div class="passenger-button float-right plus-minus text-right"><span class="minus-btn width_50 font_14 text-center">-</span></div></div><div class="clr"></div></div><div class="item-CountPassenger"><div class="first-part-CountPassenger width_40 float-right">کودک (-12)</div><div class="second-part-CountPassenger width_60 float-left"><div class="passenger-button float-right plus-minus-ch text-left" data-type="1"><span class="plus-btn width_50 font_14 text-center">+</span></div><div class="passenger-button float-right text-center"><input type="text"  class="child width_90 text-center font_13" maxlength="4000" readonly="" value="0"></div><div class="passenger-button float-right plus-minus-ch text-right" data-type="1"><span class="minus-btn width_50 font_14 text-center">-</span></div></div><input type="hidden" value="0" class="childcountandage" name="_root.rooms__' + i + '.childcountandage"><div class="clr"></div><div class="section-select-age"></div><div class="clr"></div></div></div>')
    }

}
$(element).closest("form").find(".contentRoom").each(function () {
    var adult = parseInt($(this).find(".adult").val())
    ad += adult;
    $(this).find(".plus-minus").on("click", function () {
        var button = $(this);
        var oldVal = parseInt(button.closest(".item-CountPassenger").find('input').val());
        var newVal = (button.text() == "+") ? oldVal + 1 : (oldVal > 0) ? oldVal - 1 : 0;
        if (newVal >= 10) return;
        if (newVal < 1) return;
        button.closest(".item-CountPassenger").find('input').val(newVal);
        var adNew = 0;
        var sumAdultNew = 0;
        button.closest(".CountPassenger").find(".contentRoom").each(function () {
            var adultNew = parseInt($(this).find(".adult").val())
            adNew += adultNew;
        })
        sumAdultNew = parseInt(adNew)
        button.closest("form").find(".count-adult .count").text(sumAdultNew)
    });
    $(this).find(".plus-minus-ch").on("click", function () {
        var button = $(this);
        var oldVal = parseInt(button.closest(".item-CountPassenger").find('input').val());
        var newVal = (button.text() == "+") ? oldVal + 1 : (oldVal > 0) ? oldVal - 1 : 0;
        if (newVal >= 5) return;
        button.closest(".item-CountPassenger").find('input').val(newVal);
        var sumChild = 0
        var ch = 0;
        button.closest(".CountPassenger").find(".contentRoom").each(function () {
            var child = parseInt($(this).find(".child").val())
            ch += child;
        })
        sumChild = parseInt(ch)
        button.closest("form").find('.count-child .count').text(sumChild)
        if (oldVal < newVal) {
            button.closest(".item-CountPassenger").find('.section-select-age').append(createChildDropdown(newVal));

        } else if (oldVal > newVal) {
            destroyChildDropdown(button.closest(".item-CountPassenger").find('.section-select-age'), newVal);
        }
    });
})
sumAdult = parseInt(ad)
$(element).closest("form").find('.count-adult .count').text(sumAdult)
}
function delete_room(element, i) {
var j = i - 1;
var x = i - 1;
if (j == 0) {
    $(element).closest("form").find('.count-room .count').text('1')
} else {
    $(element).closest("form").find('.count-room .count').text(j)
}
if (x == 1) {} else {
    $(element).closest(".contentRoom").prev(".contentRoom").find('.RoomRow').append('<span class="delete-room float-left cursor-pointer" onclick="delete_room(this,' + j + ')">حذف</span>')
}
if (i !== 1) {
    var NewvalAdult = parseInt($(element).closest("form").find('.count-adult .count').text()) - parseInt($(element).closest(".contentRoom").find(".adult").val())
    $(element).closest("form").find('.count-adult .count').text(NewvalAdult)
    var NewvalChild = parseInt($(element).closest("form").find('.count-child .count').text()) - parseInt($(element).closest(".contentRoom").find(".child").val())
    $(element).closest("form").find('.count-child .count').text(NewvalChild)
    $(element).closest(".contentRoom").remove()
}
}
//<!----------------------------END JS SEARCHBOX ------------------------------>