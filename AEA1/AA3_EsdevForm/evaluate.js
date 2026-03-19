window.addEventListener('load', function () {


    const pattern1 = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

    document.getElementById('inputEx1').addEventListener('input', function () {
        if (pattern1.test(this.value)) {
            document.getElementById('checkEx1').style.display = 'inline';
        } else {
            document.getElementById('checkEx1').style.display = 'none';
        }
    });


    const pattern2a = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    const pattern2b = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    document.getElementById('inputEx2').addEventListener('input', function () {
        if (pattern2a.test(this.value) || pattern2b.test(this.value)) {
            document.getElementById('checkEx2').style.display = 'inline';
        } else {
            document.getElementById('checkEx2').style.display = 'none';
        }
    });


    const pattern3a = /^\d{9}$/;
    const pattern3b = /^\d{3} \d{3} \d{3}$/;
    const pattern3c = /^\d{2} \d{3} \d{2} \d{2}$/;

    document.getElementById('inputEx3').addEventListener('input', function () {
        if (pattern3a.test(this.value) || pattern3b.test(this.value) || pattern3c.test(this.value)) {
            document.getElementById('checkEx3').style.display = 'inline';
        } else {
            document.getElementById('checkEx3').style.display = 'none';
        }
    });


    const pattern4a = /^(\+034 ?)?\d{9}$/;
    const pattern4b = /^(\+034 ?)?\d{3} \d{3} \d{3}$/;
    const pattern4c = /^(\+034 ?)?\d{2} \d{3} \d{2} \d{2}$/;

    document.getElementById('inputEx4').addEventListener('input', function () {
        if (pattern4a.test(this.value) || pattern4b.test(this.value) || pattern4c.test(this.value)) {
            document.getElementById('checkEx4').style.display = 'inline';
        } else {
            document.getElementById('checkEx4').style.display = 'none';
        }
    });


    const pattern5a = /^[A-Za-zÀ-ÿ0-9]{9,}$/;
    const pattern5b = /[A-Za-zÀ-ÿ]/;
    const pattern5c = /[0-9]/;

    document.getElementById('inputEx5').addEventListener('input', function () {
        if (pattern5a.test(this.value) && pattern5b.test(this.value) && pattern5c.test(this.value)) {
            document.getElementById('checkEx5').style.display = 'inline';
        } else {
            document.getElementById('checkEx5').style.display = 'none';
        }
    });

});
