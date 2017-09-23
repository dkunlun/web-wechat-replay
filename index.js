setInterval(e => {
    var dom = $('.js_message_plain').last().parents('.js_message_bubble')
    if(dom.hasClass('left')) {
        var val = $('.js_message_plain').last().text()
        if(typeof val === 'number') {
            $('.edit_area').html(Number(val) + 1)
        } else if (typeof val === 'string') {
            $('.edit_area').html(val)
        }
        $(".edit_area").trigger($.Event("keydown", { keyCode: 13,ctrlKey: true}))
        $('.btn_send').click()
    }
}, 500)
