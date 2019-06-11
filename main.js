// date
let p = document.getElementById('date');
let today = new Date();

p.insertAdjacentHTML('beforeEnd', today);

//
let cancel = document.form.cancel;
cancel.onclick = () => {
    document.getElementById('form').reset();
}

//
let records = [];
let send = document.form.send;

send.onclick = (e) => {
    e.preventDefault();

    let password = () => {
        let pass = document.form.password;
        let arr = pass.split('');
        pass = arr.reverse().join('');

        return pass;
    }

    let randomNumber = (min, max) => {
        let number = Math.floor(Math.random()*((max-min+1) + min));
        return number;
    }

    // let writeComment = () => {
    //     let comment = prompt('Напишите свой комментарий').toLowerCase();
    //     return comment
    // }

    records.push({
        login: document.form.login.value,
        email: document.form.email.value,
        password: password,
        animal: document.form.animal.value,
        number: randomNumber(1, 10000),
        createdAt: new Date(),
        comment: '',
        delete: 'x'
    })

    document.form.reset();
}