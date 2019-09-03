function form () {
    if (document.getElementById('name'). value =="") {
        alert('Name cannot be blank');
        return false;
    }

    if (document.getElementById('name'). value.length <4) {
        alert('Name must be at least 4 characters');
        return false;
    }

    if (document.getElementById('Email'). value =="") {
        alert('Enter an email address');
        return false;
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.getElementById('Email'). value.match(mailformat)) {
        alert('Enter a valid email address');
        return false;
    }
    if (document.getElementById('message'). value.length <20) {
        alert('Enter a message of 20 characters or more');
        return false;
    }
}
