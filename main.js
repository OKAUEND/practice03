$(function(){
    const MSG_TEXT_MAX = '20文字以内で入力してください。';
    const MSG_EMPTY = '入力必須です。';
    const MSG_EMAIL_TYPE = 'emailの形式ではありません。';
    const MSG_TEXTAREA_MAX = '100文字以内で入力してください。';
    const MSG_NONE = "";

    $(".valid-text").keyup(function(){
        var form_group = $(this).closest('.form-group');
        
        if($(this).val().length > 20)
        {
            form_group.removeClass('has-success').addClass('has-error');
            form_group.find('.help-block').text(MSG_TEXT_MAX);
        }
        else
        {
            form_group.removeClass('has-error').addClass('has-success');
            form_group.find('.help-block').text(MSG_NONE);
        }
    });

    $(".valid-email").keyup(function(){
        var form_group = $(this).closest('.form-group');
        
        if( $(this).val().length === 0)
        {
            form_group.removeClass('has-success').addClass('has-error');
            form_group.find('.help-block').text(MSG_EMPTY);
        }
        else if($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/))
        {
            form_group.removeClass('has-success').addClass('has-error');
            form_group.find('.help-block').text(MSG_EMAIL_TYPE);
        }
        else
        {
            form_group.removeClass('has-error').addClass('has-success');
            form_group.find('.help-block').text(MSG_NONE);
        }
    });

    $(".valid-textarea").keyup(function(){
      var form_group = $(this).closest('.form-group');
      
      if( $(this).val().length === 0)
      {
          form_group.removeClass('has-success').addClass('has-error');
          form_group.find('.help-block').text(MSG_EMPTY);
      }
      else if($(this).val().length > 100)
      {
          form_group.removeClass('has-success').addClass('has-error');
          form_group.find('.help-block').text(MSG_TEXTAREA_MAX);
      }
      else
      {
          form_group.removeClass('has-error').addClass('has-success');
          form_group.find('.help-block').text(MSG_NONE);
      }
    });

    $(".format-number").change(function()
    {
        var format_before = $(this).val();

        format_before = format_before.replace("-","");

        var format_after = format_before.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s)
        {
            return string.fromCharCode(s.charCodeAt(0)-0xFEE0)
        });

        if(format_after.match(/^[A-Za-z]/))
        {
            alert("0~9の数字を入力してください.")
            return;
        }

        if(format_after.length === 11)
        {
            $(this).val(format_after.substr(0,3)+'-'+format_after.substr(3,4)+'-'+format_after.substr(7,4));
        }
        else
        {
            $(this).val(format_after);
        }
    });
});