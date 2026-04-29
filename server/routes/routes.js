const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello from the API!');
});

// user routes 
router.get('/users', (req, res) => { // get all users
    // כאן תוכל להחזיר את רשימת המשתמשים מהמסד נתונים או מקור אחר
    res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }]);
});

router.get('/users/:id', (req, res) => { // get user by id
    const userId = req.params.id;
    // כאן תוכל להחזיר את פרטי המשתמש לפי ה-ID מהמסד נתונים או מקור אחר 
    res.json({ id: userId, name: `User ${userId}` });
});

router.post('/users', (req, res) => { // create new user
    // כאן תוכל לקבל נתונים מהבקשה וליצור משתמש חדש במסד נתונים או מקור אחר
    res.json({ message: 'User created successfully!' });
});

router.put('/users/:id', (req, res) => { // update user

    const userId = req.params.id;
    // כאן תוכל לעדכן את פרטי המשתמש לפי ה-ID במסד נתונים או מקור אחר   
    res.json({ message: `User ${userId} updated successfully!` });
});

router.delete('/users/:id', (req, res) => { // delete user
    const userId = req.params.id;
    // כאן תוכל למחוק את המשתמש לפי ה-ID מהמסד נתונים או מקור אחר
    res.json({ message: `User ${userId} deleted successfully!` });
});

module.exports = router;