function UpButton() {
    function smoothScrollToTop (e) {
        let scrollTop = window.pageYOffset;
        let speed = 10,
            step = 30;

            let move = setInterval(function() {
            if (scrollTop <= 0) {
                clearInterval(move);
            } else {
                scrollTop -= step
                window.scrollTo(0, scrollTop)
            }
        }, speed);
    }

    document.addEventListener('scroll', () => {
        try {
            if (window.pageYOffset < 300 && document.querySelector('.upBtn') !== null) {
                document.querySelector('.upBtn').style.display = 'none';
            } else {
                document.querySelector('.upBtn').style.display = 'block';
            }
        } catch (e) {}
    })


    return (
        <div className="upBtn">
            <i className="medium material-icons" onClick={smoothScrollToTop} >arrow_upward</i>
        </div>
    )
}

export { UpButton }
