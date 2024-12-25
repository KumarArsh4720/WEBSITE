document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const commentTextarea = document.getElementById('commentTextarea');
    const postCommentButton = document.getElementById('postCommentButton');

    if (commentTextarea && postCommentButton) {
        console.log('Elements found');
        commentTextarea.addEventListener('input', function() {
            console.log('Textarea input event triggered');
            if (commentTextarea.value.trim() !== '') {
                postCommentButton.style.display = 'block';
            } else {
                postCommentButton.style.display = 'none';
            }
        });
    } else {
        console.log('Elements not found');
    }
});