$(function(){
    const msg_text_max = '20文字以内で入力してください。';
    const msg_empty = '入力必須です。';
    const msg_email_type = 'emailの形式ではありません。';
    const msg_textarea_max = '100文字以内で入力してください。';

    $(".valid-text").keyup(function(){
        var form_group = $(this).closest('.form-group');

        if($(this).val().length > 20)
        {
            form_group.removeClass('has-success').addClass('has-error');
            form_group.find('.help-block').text(msg_text_max);
        }
        else
        {
            form_group.removeClass('has-error').addClass('has-success');
            form_group.find('.has-block').text('');
        }
    });

    $(".valid-email").keyup(function(){
        var form_group = $(this).closest('.form-group');
        
        if( $(this).val().length === 0)
        {
            form_group.removeClass('has-success').addClass('has-error');
            form_group.find('.help-block').text(msg_empty);
        }
        else if($(this).val().length > 50 || !$(this.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-]+)*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)))
        {
            form_group.removeClass('has-success').addClass('has-error');
            form_group.find('.help-block').text(msg_email_type);
        }
        else
        {
            form_group.removeClass('has-error').addClass('has-success');
            form_group.find('.has-block').text('');
        }
    });

    $(".valid-textarea").keyup(function(){
      var form_group = $(this).closest('.form-group');
      
      if( $(this).val().length === 0)
      {
          form_group.removeClass('has-success').addClass('has-error');
          form_group.find('.help-block').text(msg_empty);
      }
      else if($(this).val().length > 100)
      {
          form_group.removeClass('has-success').addClass('has-error');
          form_group.find('.help-block').text(msg_textarea_max);
      }
      else
      {
          form_group.removeClass('has-error').addClass('has-success');
          form_group.find('.has-block').text('');
      }
    });
});