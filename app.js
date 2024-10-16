document.getElementById('addBtn').addEventListener('click', addStudent);

let students = [];

function addStudent() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;

    if (name === '' || mobile === '' || address === '') {
        alert('Please fill in all fields');
        return;
    }

    const student = {
        name,
        mobile,
        address
    };

    students.push(student);
    renderStudents();

    document.getElementById('name').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('address').value = '';
}



